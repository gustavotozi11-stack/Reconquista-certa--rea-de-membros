import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { DAYS_DATA } from '../data/daysData';
import {
  CheckCircle2,
  Clock,
  ArrowRight,
  Shield,
  Sparkles,
  Calendar,
  AlertCircle
} from 'lucide-react';

export const PlanView: React.FC = () => {
  const {
    completedDays,
    checkedTasks,
    openDay,
    profile,
    currentActiveDayId
  } = useApp();

  const isLight = profile.theme === 'light';
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');

  const isAskedNoContact = profile.contactSituation === 'asked_no_contact';

  // Compute status for each day:
  // 'completed': in completedDays
  // 'in_progress': has at least 1 checked task, or is currentActiveDayId
  // 'not_started': no checked tasks
  const getDayStatus = (dayId: number) => {
    if (completedDays.includes(dayId)) return 'completed';
    const day = DAYS_DATA.find(d => d.id === dayId);
    if (!day) return 'not_started';
    const hasAnyChecked = day.checklist.some(t => checkedTasks[t.id]) || (day.individualAlternative?.checklist.some(t => checkedTasks[t.id]));
    if (hasAnyChecked || dayId === currentActiveDayId) return 'in_progress';
    return 'not_started';
  };

  const filteredDays = DAYS_DATA.filter(day => {
    const status = getDayStatus(day.id);
    if (filter === 'completed') return status === 'completed';
    if (filter === 'pending') return status !== 'completed';
    return true;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Title & Guidance Banner */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white [html.light-theme_&]:text-slate-900">
          Plano Estruturado de 14 Dias
        </h2>
        <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
          Cada dia trabalha uma dimensão essencial do seu equilíbrio, desde o estancamento da reatividade até a reconstrução de limites sólidos.
        </p>
      </div>

      {/* Advisory Notice */}
      <div className={`p-4 rounded-xl border flex items-start gap-3 ${
        isLight ? 'bg-amber-50/70 border-amber-200 text-amber-950' : 'bg-amber-500/10 border-amber-500/20 text-slate-200'
      }`}>
        <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
        <div className="text-xs space-y-1">
          <p className="font-semibold text-amber-400">
            Recomendação de Ritmo: 1 Dia por Vez
          </p>
          <p className="text-slate-300 [html.light-theme_&]:text-slate-700 leading-relaxed">
            Todos os dias estão desbloqueados para consulta e revisão livre. No entanto, recomendamos dedicar 24 horas a cada etapa para que as reflexões e tarefas práticas tenham efeito real na sua mente e na sua postura.
          </p>
        </div>
      </div>

      {/* Filter Segmented Control */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className={`inline-flex p-1 rounded-xl border ${
          isLight ? 'bg-slate-200/80 border-slate-300' : 'bg-[#151D2A] border-slate-800'
        }`}>
          {[
            { id: 'all' as const, label: 'Todos os 14 Dias' },
            { id: 'pending' as const, label: 'Em Andamento / Pendentes' },
            { id: 'completed' as const, label: 'Concluídos' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                filter === tab.id
                  ? isLight
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'bg-amber-500 text-slate-950 shadow-sm font-bold'
                  : isLight
                    ? 'text-slate-600 hover:text-slate-900'
                    : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <span className="text-xs text-slate-400 font-medium">
          Exibindo {filteredDays.length} de 14 dias
        </span>
      </div>

      {/* Days List */}
      <div className="grid grid-cols-1 gap-3.5">
        {filteredDays.map(day => {
          const status = getDayStatus(day.id);
          const isCompleted = status === 'completed';
          const isInProgress = status === 'in_progress';
          const isCurrent = day.id === currentActiveDayId;

          const hasAlternative = isAskedNoContact && !!day.individualAlternative;
          const displayTitle = hasAlternative ? day.individualAlternative!.title : day.title;
          const displaySubtitle = hasAlternative ? day.individualAlternative!.objective : day.subtitle;

          const checkedCount = day.checklist.filter(t => checkedTasks[t.id]).length;
          const totalTasks = day.checklist.length;

          return (
            <div
              key={day.id}
              onClick={() => openDay(day.id)}
              className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer group flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                isCompleted
                  ? isLight
                    ? 'bg-slate-50 border-slate-200 hover:border-slate-300'
                    : 'bg-[#151D2A]/60 border-slate-800/80 hover:border-slate-700'
                  : isCurrent
                    ? isLight
                      ? 'bg-white border-amber-300 ring-2 ring-amber-300/40 shadow-md'
                      : 'bg-[#151D2A] border-amber-500/40 ring-1 ring-amber-500/20 shadow-lg'
                    : isLight
                      ? 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
                      : 'bg-[#151D2A] border-slate-800 hover:border-slate-700 hover:bg-[#1a2434]'
              }`}
            >
              <div className="flex items-start sm:items-center gap-3.5 min-w-0">
                {/* Number Badge */}
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm shrink-0 transition-transform group-hover:scale-105 ${
                  isCompleted
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : isCurrent
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                      : isLight
                        ? 'bg-slate-100 text-slate-700 border border-slate-200'
                        : 'bg-[#0B111E] text-slate-300 border border-slate-800'
                }`}>
                  {isCompleted ? <CheckCircle2 className="w-5 h-5 stroke-[2.5]" /> : day.id}
                </div>

                {/* Day Details */}
                <div className="min-w-0 space-y-1">
                  <div className="flex items-center gap-2 flex-wrap text-xs">
                    <span className="font-bold text-amber-500 uppercase tracking-wider">
                      Dia {day.id}
                    </span>
                    <span className="text-slate-500">·</span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-500" />
                      {day.estimatedTime}
                    </span>
                    {hasAlternative && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                        Trilha Individual
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-white [html.light-theme_&]:text-slate-900 group-hover:text-amber-400 transition-colors">
                    {displayTitle}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-1 leading-relaxed">
                    {displaySubtitle}
                  </p>
                </div>
              </div>

              {/* Status and Action */}
              <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-0 border-slate-800/40">
                <div className="text-left sm:text-right">
                  <span className={`text-[11px] font-semibold block ${
                    isCompleted
                      ? 'text-emerald-400'
                      : isInProgress
                        ? 'text-amber-400'
                        : 'text-slate-500'
                  }`}>
                    {isCompleted ? 'Concluído' : isInProgress ? 'Em andamento' : 'Não iniciado'}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {checkedCount}/{totalTasks} tarefas
                  </span>
                </div>

                <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-700/60 group-hover:border-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 text-slate-400 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
