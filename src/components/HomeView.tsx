import React from 'react';
import { useApp } from '../context/AppContext';
import { DAYS_DATA } from '../data/daysData';
import { GUIDES_DATA } from '../data/guidesData';
import { MoodScore } from '../types';
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  BookOpen,
  Sparkles,
  Shield,
  Frown,
  Meh,
  Smile,
  Compass,
  AlertTriangle
} from 'lucide-react';

export const HomeView: React.FC = () => {
  const {
    profile,
    completedDays,
    checkedTasks,
    currentActiveDayId,
    openDay,
    openChapter,
    setCurrentNav,
    emotionalCheckIns,
    saveEmotionalCheckIn,
    getTodayDateString
  } = useApp();

  const isLight = profile.theme === 'light';
  const todayStr = getTodayDateString();
  const todayCheckIn = emotionalCheckIns[todayStr];

  const currentDayData = DAYS_DATA.find(d => d.id === currentActiveDayId) || DAYS_DATA[0];

  // Total checked tasks count across all days
  const totalTasksChecked = Object.values(checkedTasks).filter(Boolean).length;
  const progressPercent = Math.round((completedDays.length / 14) * 100);

  // Check-in mood options
  const moodOptions: { score: MoodScore; label: string; icon: React.ComponentType<{ className?: string }>; colorClass: string }[] = [
    { score: 1, label: 'Muito mal', icon: Frown, colorClass: 'text-rose-400 border-rose-500/40 bg-rose-500/10' },
    { score: 2, label: 'Mal', icon: Frown, colorClass: 'text-amber-500 border-amber-500/40 bg-amber-500/10' },
    { score: 3, label: 'Neutro', icon: Meh, colorClass: 'text-slate-400 border-slate-500/40 bg-slate-500/10' },
    { score: 4, label: 'Bem', icon: Smile, colorClass: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10' },
    { score: 5, label: 'Muito bem', icon: Smile, colorClass: 'text-teal-400 border-teal-500/40 bg-teal-500/10' }
  ];

  // Realistic encouraging quote based on today's mood or general state
  const getEncouragement = (score?: MoodScore) => {
    switch (score) {
      case 1:
        return 'Dias pesados exigem apenas o básico: respire, cumpra suas obrigações diárias e não tome nenhuma decisão definitiva sob tempestade emocional.';
      case 2:
        return 'O desconforto faz parte do processo de desintoxicação da dependência. Mantenha seus limites e não procure notícias dela hoje.';
      case 3:
        return 'A neutralidade emocional é um sinal excelente de estabilização. Use este momento de calma para colocar sua rotina e suas tarefas em ordem.';
      case 4:
        return 'Aproveite a boa energia para consolidar novos hábitos e investir no seu trabalho e saúde. A clareza está começando a se assentar.';
      case 5:
        return 'Mantenha a guarda alta com sobriedade. Estar bem é uma conquista diária; continue tratando a si mesmo e aos outros com respeito.';
      default:
        return 'Sentir a quebra de rotina é normal. O objetivo não é acelerar o tempo, mas garantir que suas escolhas de hoje honrem a sua dignidade de amanhã.';
    }
  };

  const isContactRestricted = profile.contactSituation === 'asked_no_contact';

  return (
    <div className="space-y-6 pb-12">
      {/* 1. Header greeting */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-500">
            <span>Plano de 14 Dias</span>
            <span>·</span>
            <span>{profile.contactSituation === 'asked_no_contact' ? 'Adaptação Individual Ativa' : 'Foco em Autonomia'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white [html.light-theme_&]:text-slate-900 mt-1">
            Olá, {profile.name || 'Companheiro'}
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Seu objetivo: {profile.objective === 'reorganize' ? 'Reorganizar as emoções' : profile.objective === 'reapproach' ? 'Avaliar uma reaproximação' : 'Seguir em frente'}.
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-3">
          <div className={`px-4 py-2 rounded-xl border text-right ${
            isLight ? 'bg-white border-slate-200' : 'bg-[#151D2A] border-slate-800'
          }`}>
            <span className="text-[11px] text-slate-400 block font-medium">Dia do Plano</span>
            <span className="text-lg font-bold text-amber-400 leading-tight">
              Dia {currentActiveDayId} <span className="text-xs text-slate-500 font-normal">/ 14</span>
            </span>
          </div>
        </div>
      </div>

      {/* 2. Card "Seu Próximo Passo" */}
      <div className={`relative p-5 sm:p-7 rounded-2xl border overflow-hidden shadow-xl transition-all ${
        isLight
          ? 'bg-gradient-to-br from-amber-50/60 via-white to-amber-50/30 border-amber-200/80 text-slate-900'
          : 'bg-gradient-to-br from-[#151D2A] via-[#151D2A] to-[#1d2738] border-slate-800 text-white'
      }`}>
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative space-y-4">
          <div className="flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-amber-500/15 border border-amber-500/30 text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              Seu Próximo Passo
            </span>
            <span className="text-xs text-slate-400 font-medium">
              Tempo estimado: {currentDayData.estimatedTime}
            </span>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Dia {currentDayData.id} — {currentDayData.title}
            </h3>
            <p className="text-sm text-slate-300 [html.light-theme_&]:text-slate-600 line-clamp-2 leading-relaxed">
              {isContactRestricted && currentDayData.individualAlternative
                ? currentDayData.individualAlternative.objective
                : currentDayData.subtitle}
            </p>
          </div>

          {/* Quick task counter for this day */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-amber-500" />
              <span>
                {currentDayData.checklist.filter(t => checkedTasks[t.id]).length} de {currentDayData.checklist.length} tarefas deste dia marcadas
              </span>
            </div>

            <button
              onClick={() => openDay(currentDayData.id)}
              className="h-11 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-[0.98] text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Continuar meu plano</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. Progress Bar & Real Stats */}
      <div className={`p-5 rounded-2xl border space-y-4 ${
        isLight ? 'bg-white border-slate-200' : 'bg-[#151D2A] border-slate-800'
      }`}>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-bold text-white [html.light-theme_&]:text-slate-900">
              Progresso Geral da Jornada
            </h4>
            <p className="text-xs text-slate-400">
              {completedDays.length} de 14 dias concluídos ({progressPercent}%)
            </p>
          </div>
          <span className="text-lg font-black font-mono text-amber-400">
            {progressPercent}%
          </span>
        </div>

        {/* Progress track */}
        <div className="w-full h-2.5 rounded-full bg-slate-800 [html.light-theme_&]:bg-slate-200 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-500"
            style={{ width: `${Math.max(progressPercent, 4)}%` }}
          />
        </div>

        {/* 3 Metrics in row */}
        <div className="grid grid-cols-3 gap-3 pt-2 text-center">
          <div className={`p-3 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0B111E]/60 border-slate-800'}`}>
            <span className="text-base sm:text-lg font-bold font-mono text-amber-400 block">
              {completedDays.length}
            </span>
            <span className="text-[11px] text-slate-400 font-medium">Dias Concluídos</span>
          </div>

          <div className={`p-3 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0B111E]/60 border-slate-800'}`}>
            <span className="text-base sm:text-lg font-bold font-mono text-amber-400 block">
              {totalTasksChecked}
            </span>
            <span className="text-[11px] text-slate-400 font-medium">Tarefas Feitas</span>
          </div>

          <div className={`p-3 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0B111E]/60 border-slate-800'}`}>
            <span className="text-base sm:text-lg font-bold font-mono text-amber-400 block">
              {Object.keys(emotionalCheckIns).length}
            </span>
            <span className="text-[11px] text-slate-400 font-medium">Check-ins Diários</span>
          </div>
        </div>
      </div>

      {/* 4. Check-in Emocional Diário (Editable anytime for today) */}
      <div className={`p-5 rounded-2xl border space-y-4 ${
        isLight ? 'bg-white border-slate-200' : 'bg-[#151D2A] border-slate-800'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <div>
            <h4 className="text-sm font-bold text-white [html.light-theme_&]:text-slate-900 flex items-center gap-2">
              <span>Como você está se sentindo hoje?</span>
              {todayCheckIn && (
                <span className="text-[11px] font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/30">
                  Salvo: {todayCheckIn.label}
                </span>
              )}
            </h4>
            <p className="text-xs text-slate-400">
              Check-in diário ({todayStr}). Você pode clicar para alterar sua resposta a qualquer momento.
            </p>
          </div>
        </div>

        {/* 5 Mood buttons */}
        <div className="grid grid-cols-5 gap-2">
          {moodOptions.map(opt => {
            const Icon = opt.icon;
            const isSelected = todayCheckIn?.mood === opt.score;
            return (
              <button
                key={opt.score}
                onClick={() => saveEmotionalCheckIn(opt.score)}
                className={`min-h-[56px] p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  isSelected
                    ? 'border-amber-400 bg-amber-500/20 shadow-md ring-2 ring-amber-400/30 text-amber-300 font-bold'
                    : isLight
                      ? 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                      : 'border-slate-800 bg-[#0B111E]/70 hover:bg-[#0B111E] text-slate-300'
                }`}
              >
                <Icon className={`w-5 h-5 ${isSelected ? 'text-amber-400' : 'text-slate-400'}`} />
                <span className="text-[10px] sm:text-xs text-center leading-tight">
                  {opt.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Encouraging message box */}
        <div className={`p-4 rounded-xl border text-xs sm:text-sm leading-relaxed ${
          isLight
            ? 'bg-amber-50/70 border-amber-200/80 text-amber-950'
            : 'bg-[#0B111E]/80 border-slate-800 text-slate-300'
        }`}>
          <div className="font-semibold text-amber-400 mb-1 flex items-center gap-1.5 text-xs">
            <Compass className="w-4 h-4 text-amber-500 shrink-0" />
            <span>Reflexão Realista de Hoje</span>
          </div>
          <p>{getEncouragement(todayCheckIn?.mood)}</p>
        </div>
      </div>

      {/* 5. Atalhos para os Três Guias Extras */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-base font-bold text-white [html.light-theme_&]:text-slate-900">
              Guias Complementares
            </h4>
            <p className="text-xs text-slate-400">
              Aprofunde temas cruciais com leituras diretas e sem enrolação
            </p>
          </div>
          <button
            onClick={() => setCurrentNav('library')}
            className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
          >
            <span>Ver todos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {GUIDES_DATA.map(guide => (
            <div
              key={guide.id}
              onClick={() => {
                setCurrentNav('library');
                openChapter(guide.id, guide.chapters[0].id);
              }}
              className={`p-4 rounded-2xl border transition-all cursor-pointer group flex flex-col justify-between ${
                isLight
                  ? 'bg-white border-slate-200 hover:border-amber-300 hover:shadow-md'
                  : 'bg-[#151D2A] border-slate-800 hover:border-amber-500/50 hover:bg-[#1a2434]'
              }`}
            >
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                  Guia 0{guide.number} · {guide.badge}
                </span>
                <h5 className="text-sm font-bold text-white [html.light-theme_&]:text-slate-900 group-hover:text-amber-400 transition-colors line-clamp-2">
                  {guide.title}
                </h5>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {guide.subtitle}
                </p>
              </div>

              <div className="pt-3 mt-2 border-t border-slate-800/60 [html.light-theme_&]:border-slate-100 flex items-center justify-between text-xs text-slate-400 group-hover:text-amber-300">
                <span>{guide.chapters.length} capítulos</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
