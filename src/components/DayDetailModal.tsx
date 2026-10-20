import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { DAYS_DATA } from '../data/daysData';
import {
  X,
  CheckCircle2,
  Clock,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  Lightbulb,
  FileEdit,
  Shield,
  ArrowRight,
  RotateCcw,
  Sparkles
} from 'lucide-react';

interface DayDetailModalProps {
  dayId: number;
  onClose: () => void;
}

export const DayDetailModal: React.FC<DayDetailModalProps> = ({ dayId, onClose }) => {
  const {
    profile,
    completedDays,
    checkedTasks,
    toggleTask,
    toggleDayCompleted,
    dayNotes,
    saveDayNote,
    openDay
  } = useApp();

  const isLight = profile.theme === 'light';
  const day = DAYS_DATA.find(d => d.id === dayId) || DAYS_DATA[0];

  // Notes state with auto-save
  const [noteText, setNoteText] = useState(dayNotes[day.id] || '');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saved'>('idle');

  // Alternative switch for conditional days (Days 10, 12)
  const isAskedNoContact = profile.contactSituation === 'asked_no_contact';
  const [showAlternative, setShowAlternative] = useState(isAskedNoContact && !!day.individualAlternative);

  // Sync when day changes
  useEffect(() => {
    setNoteText(dayNotes[day.id] || '');
    setShowAlternative(isAskedNoContact && !!day.individualAlternative);
  }, [day.id, dayNotes, isAskedNoContact]);

  // Handle note change
  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setNoteText(val);
    saveDayNote(day.id, val);
    setSaveStatus('saved');
    setTimeout(() => {
      setSaveStatus('idle');
    }, 2000);
  };

  const isCompleted = completedDays.includes(day.id);

  // Effective content (standard or alternative)
  const currentContent = showAlternative && day.individualAlternative
    ? {
        title: day.individualAlternative.title,
        objective: day.individualAlternative.objective,
        lesson: day.individualAlternative.lesson,
        challenge: day.individualAlternative.challenge,
        checklist: day.individualAlternative.checklist,
        reflection: day.individualAlternative.reflection,
        commonMistake: day.individualAlternative.commonMistake,
        isAlt: true
      }
    : {
        title: day.title,
        objective: day.objective,
        lesson: day.lesson,
        challenge: day.challenge,
        checklist: day.checklist,
        reflection: day.reflection,
        commonMistake: day.commonMistake,
        isAlt: false
      };

  // Check if all tasks in the current active checklist are completed
  const allTasksChecked = currentContent.checklist.every(t => checkedTasks[t.id]);
  const checkedTasksCount = currentContent.checklist.filter(t => checkedTasks[t.id]).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className={`relative w-full max-w-3xl my-4 sm:my-8 rounded-2xl border shadow-2xl overflow-hidden flex flex-col max-h-[92vh] ${
        isLight
          ? 'bg-white border-slate-200 text-slate-800'
          : 'bg-[#151D2A] border-slate-800 text-slate-100'
      }`}>
        {/* Top Header Bar */}
        <div className={`p-4 sm:p-5 border-b flex items-center justify-between gap-4 sticky top-0 z-10 backdrop-blur-md ${
          isLight ? 'bg-white/95 border-slate-100' : 'bg-[#151D2A]/95 border-slate-800'
        }`}>
          <div className="flex items-center gap-3 min-w-0">
            <span className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-sm shrink-0">
              {day.id}
            </span>
            <div className="truncate">
              <span className="text-xs font-semibold text-amber-500 block uppercase tracking-wider">
                Dia {day.id} de 14 · {day.estimatedTime}
              </span>
              <h2 className="text-base sm:text-lg font-bold truncate text-white [html.light-theme_&]:text-slate-900">
                {currentContent.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {isCompleted && (
              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Concluído
              </span>
            )}

            <button
              onClick={onClose}
              className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-colors cursor-pointer ${
                isLight ? 'border-slate-200 hover:bg-slate-100 text-slate-500' : 'border-slate-800 hover:bg-slate-800 text-slate-400'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-4 sm:p-7 overflow-y-auto space-y-7">
          {/* Conditional Switch Banner if Day has Alternative */}
          {day.individualAlternative && (
            <div className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
              isAskedNoContact
                ? 'bg-amber-500/10 border-amber-500/30 text-amber-200'
                : 'bg-slate-800/40 border-slate-700/60 text-slate-300'
            }`}>
              <div className="flex items-start gap-2.5">
                <Shield className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs space-y-0.5">
                  <div className="font-semibold text-amber-400">
                    {isAskedNoContact ? 'Adaptação aos Limites de Contato' : 'Opção de Trilha Individual'}
                  </div>
                  <p className="text-slate-300 [html.light-theme_&]:text-slate-600">
                    {showAlternative
                      ? 'Exibindo a versão individual focada em autocuidado e fechamento interno.'
                      : 'Exibindo a versão para cenários onde existe conversa aberta e recíproca.'}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowAlternative(!showAlternative)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-amber-500/40 text-amber-400 hover:bg-amber-500/10 transition-colors whitespace-nowrap self-start sm:self-auto cursor-pointer"
              >
                {showAlternative ? 'Ver versão com contato' : 'Ver alternativa individual'}
              </button>
            </div>
          )}

          {/* 1. Objetivo */}
          <div className={`p-4 rounded-xl border ${
            isLight ? 'bg-amber-50/50 border-amber-200 text-amber-950' : 'bg-[#0B111E]/70 border-slate-800 text-slate-300'
          }`}>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500 block mb-1">
              Objetivo do Dia
            </span>
            <p className="text-sm font-medium leading-relaxed">
              {currentContent.objective}
            </p>
          </div>

          {/* 2. Aula Escrita (200 a 350 palavras) */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-500 flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              Aula & Conceito Central
            </h3>

            <div className="text-sm sm:text-base leading-relaxed space-y-4 text-slate-200 [html.light-theme_&]:text-slate-700">
              {currentContent.lesson.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* 3. Desafio Prático (10 a 20 minutos) */}
          <div className={`p-5 rounded-2xl border space-y-3 ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0B111E] border-slate-800'
          }`}>
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white [html.light-theme_&]:text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Desafio Prático: {currentContent.challenge.title}
              </h3>
              <span className="text-xs font-mono text-amber-400 font-semibold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                {currentContent.challenge.duration}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 [html.light-theme_&]:text-slate-600 leading-relaxed">
              {currentContent.challenge.description}
            </p>

            <div className="space-y-2 pt-2">
              {currentContent.challenge.steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 [html.light-theme_&]:text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Checklist com Tarefas Marcáveis (3 a 5 itens) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-500 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Checklist do Dia
              </h3>
              <span className="text-xs text-slate-400 font-medium">
                {checkedTasksCount} de {currentContent.checklist.length} concluídas
              </span>
            </div>

            <div className="space-y-2.5">
              {currentContent.checklist.map(task => {
                const isChecked = !!checkedTasks[task.id];
                return (
                  <button
                    key={task.id}
                    type="button"
                    onClick={() => toggleTask(task.id)}
                    className={`w-full text-left p-3.5 rounded-xl border flex items-start gap-3 transition-all cursor-pointer ${
                      isChecked
                        ? isLight
                          ? 'bg-amber-50/60 border-amber-200 text-slate-800'
                          : 'bg-amber-500/10 border-amber-500/40 text-amber-100'
                        : isLight
                          ? 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                          : 'bg-[#0B111E]/70 border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                      isChecked
                        ? 'bg-amber-500 border-amber-500 text-slate-950 font-bold'
                        : isLight ? 'border-slate-300' : 'border-slate-600'
                    }`}>
                      {isChecked && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <span className={`text-xs sm:text-sm leading-relaxed ${isChecked ? 'line-through opacity-80' : ''}`}>
                      {task.text}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 5. Exercício de Reflexão */}
          <div className={`p-5 rounded-2xl border space-y-3 ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0B111E]/80 border-slate-800'
          }`}>
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider">
              Exercício de Reflexão
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 [html.light-theme_&]:text-slate-600 italic">
              "{currentContent.reflection.prompt}"
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 [html.light-theme_&]:text-slate-700 list-disc list-inside">
              {currentContent.reflection.questions.map((q, idx) => (
                <li key={idx} className="leading-relaxed">{q}</li>
              ))}
            </ul>
          </div>

          {/* 6. Campo "Minhas Anotações" (Auto-salvamento) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="day-notes" className="text-sm font-bold text-white [html.light-theme_&]:text-slate-900 flex items-center gap-2">
                <FileEdit className="w-4 h-4 text-amber-400" />
                Minhas Anotações Pessoais
              </label>
              {saveStatus === 'saved' && (
                <span className="text-xs text-emerald-400 font-medium animate-pulse">
                  Salvo automaticamente
                </span>
              )}
            </div>
            <textarea
              id="day-notes"
              rows={4}
              value={noteText}
              onChange={handleNoteChange}
              placeholder="Escreva aqui suas percepções, respostas do exercício ou sentimentos sobre este dia... Tudo fica salvo automaticamente apenas neste navegador."
              className="w-full p-3.5 rounded-xl bg-[#0B111E] border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
            />
          </div>

          {/* 7. Erro Comum a Evitar */}
          <div className="p-4 rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-200 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-300">
              <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>Erro Comum a Evitar</span>
            </div>
            <div className="text-sm font-bold text-rose-100">
              {currentContent.commonMistake.title}
            </div>
            <p className="text-xs text-rose-200/90 leading-relaxed">
              {currentContent.commonMistake.explanation}
            </p>
            <div className="pt-1 text-xs text-amber-300 font-medium">
              💡 Como agir: {currentContent.commonMistake.solution}
            </div>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className={`p-4 sm:p-5 border-t flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-0 z-10 backdrop-blur-md ${
          isLight ? 'bg-white/95 border-slate-100' : 'bg-[#151D2A]/95 border-slate-800'
        }`}>
          {/* Navigation Prev / Next */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
            <button
              disabled={day.id <= 1}
              onClick={() => openDay(day.id - 1)}
              className="h-10 px-3.5 rounded-xl border border-slate-700 hover:border-slate-600 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-semibold flex items-center gap-1.5 text-slate-300 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Dia Anterior</span>
            </button>

            <button
              disabled={day.id >= 14}
              onClick={() => openDay(day.id + 1)}
              className="h-10 px-3.5 rounded-xl border border-slate-700 hover:border-slate-600 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-semibold flex items-center gap-1.5 text-slate-300 cursor-pointer"
            >
              <span>Próximo Dia</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Concluir / Desfazer button */}
          <button
            onClick={() => toggleDayCompleted(day.id)}
            className={`w-full sm:w-auto h-11 px-6 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
              isCompleted
                ? 'bg-slate-700 hover:bg-slate-600 text-slate-200 border border-slate-600'
                : 'bg-amber-500 hover:bg-amber-400 active:scale-[0.98] text-slate-950 shadow-lg shadow-amber-500/20'
            }`}
          >
            {isCompleted ? (
              <>
                <RotateCcw className="w-4 h-4" />
                <span>Desfazer Conclusão do Dia {day.id}</span>
              </>
            ) : (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>Concluir Este Dia</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
