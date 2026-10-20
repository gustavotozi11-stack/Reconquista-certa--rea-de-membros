import React from 'react';
import { useApp } from '../context/AppContext';
import { DAYS_DATA } from '../data/daysData';
import { GUIDES_DATA } from '../data/guidesData';
import {
  CheckCircle2,
  TrendingUp,
  Award,
  BookOpen,
  Calendar,
  HeartPulse,
  Shield,
  Compass,
  Footprints,
  Info,
  Sparkles
} from 'lucide-react';

export const ProgressView: React.FC = () => {
  const {
    profile,
    completedDays,
    checkedTasks,
    readChapters,
    emotionalCheckIns,
    achievements
  } = useApp();

  const isLight = profile.theme === 'light';

  // Calculate total tasks available in plan
  const totalTasksInPlan = DAYS_DATA.reduce((acc, d) => acc + d.checklist.length, 0);
  const completedTasksCount = Object.values(checkedTasks).filter(Boolean).length;
  const progressPercent = Math.round((completedDays.length / 14) * 100);

  // Total chapters across all 3 guides
  const totalChapters = GUIDES_DATA.reduce((acc, g) => acc + g.chapters.length, 0);

  // Map icon strings to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Footprints':
        return Footprints;
      case 'HeartPulse':
        return HeartPulse;
      case 'Compass':
        return Compass;
      case 'BookOpen':
        return BookOpen;
      case 'Shield':
        return Shield;
      case 'Award':
      default:
        return Award;
    }
  };

  // Sort check-ins by date descending
  const sortedCheckIns = Object.values(emotionalCheckIns).sort((a, b) => b.timestamp - a.timestamp);

  const moodColors: Record<number, { bg: string; text: string; bar: string }> = {
    1: { bg: 'bg-rose-500/10 border-rose-500/30', text: 'text-rose-400', bar: 'bg-rose-500' },
    2: { bg: 'bg-amber-500/10 border-amber-500/30', text: 'text-amber-500', bar: 'bg-amber-500' },
    3: { bg: 'bg-slate-500/10 border-slate-500/30', text: 'text-slate-400', bar: 'bg-slate-400' },
    4: { bg: 'bg-emerald-500/10 border-emerald-500/30', text: 'text-emerald-400', bar: 'bg-emerald-400' },
    5: { bg: 'bg-teal-500/10 border-teal-500/30', text: 'text-teal-400', bar: 'bg-teal-400' }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Title & Framing Notice */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white [html.light-theme_&]:text-slate-900">
          Progresso & Desenvolvimento Pessoal
        </h2>
        <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
          Acompanhe suas conquistas práticas, hábitos reconstruídos e o histórico das suas emoções ao longo dos dias.
        </p>
      </div>

      {/* Autonomous Growth Disclaimer */}
      <div className={`p-4 rounded-xl border flex items-start gap-3 ${
        isLight ? 'bg-slate-100 border-slate-200 text-slate-700' : 'bg-[#151D2A] border-slate-800 text-slate-300'
      }`}>
        <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
        <div className="text-xs space-y-0.5 leading-relaxed">
          <span className="font-semibold text-white [html.light-theme_&]:text-slate-900 block">
            Princípio de Autonomia Pessoal
          </span>
          <p className="text-slate-400">
            Este painel mede exclusivamente a sua dedicação, seu autodomínio e sua evolução interior. Nenhuma métrica aqui garante ou prevê atitudes de terceiros; o objetivo é o seu crescimento como homem maduro.
          </p>
        </div>
      </div>

      {/* 4 Main Real Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        <div className={`p-4 rounded-2xl border space-y-2 ${
          isLight ? 'bg-white border-slate-200' : 'bg-[#151D2A] border-slate-800'
        }`}>
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Dias Concluídos</span>
            <Calendar className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white [html.light-theme_&]:text-slate-900">
            {completedDays.length} <span className="text-sm text-slate-500 font-normal">/ 14</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-slate-800 [html.light-theme_&]:bg-slate-200 overflow-hidden">
            <div
              className="h-full bg-amber-400 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <div className={`p-4 rounded-2xl border space-y-2 ${
          isLight ? 'bg-white border-slate-200' : 'bg-[#151D2A] border-slate-800'
        }`}>
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Plano Concluído</span>
            <TrendingUp className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-400">
            {progressPercent}%
          </div>
          <span className="text-[11px] text-slate-400 block truncate">
            {14 - completedDays.length} dias restantes
          </span>
        </div>

        <div className={`p-4 rounded-2xl border space-y-2 ${
          isLight ? 'bg-white border-slate-200' : 'bg-[#151D2A] border-slate-800'
        }`}>
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Tarefas Marcadas</span>
            <CheckCircle2 className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white [html.light-theme_&]:text-slate-900">
            {completedTasksCount} <span className="text-sm text-slate-500 font-normal">/ {totalTasksInPlan}</span>
          </div>
          <span className="text-[11px] text-slate-400 block truncate">
            Ações práticas executadas
          </span>
        </div>

        <div className={`p-4 rounded-2xl border space-y-2 ${
          isLight ? 'bg-white border-slate-200' : 'bg-[#151D2A] border-slate-800'
        }`}>
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Capítulos Lidos</span>
            <BookOpen className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white [html.light-theme_&]:text-slate-900">
            {readChapters.length} <span className="text-sm text-slate-500 font-normal">/ {totalChapters}</span>
          </div>
          <span className="text-[11px] text-slate-400 block truncate">
            {Math.round((readChapters.length / totalChapters) * 100)}% da biblioteca lida
          </span>
        </div>
      </div>

      {/* Histórico dos Check-ins Emocionais */}
      <div className={`p-5 sm:p-6 rounded-2xl border space-y-4 ${
        isLight ? 'bg-white border-slate-200' : 'bg-[#151D2A] border-slate-800'
      }`}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white [html.light-theme_&]:text-slate-900 flex items-center gap-2">
              <HeartPulse className="w-4 h-4 text-amber-500" />
              Histórico dos Check-ins Emocionais
            </h3>
            <p className="text-xs text-slate-400">
              Registros da sua estabilidade e clareza ao longo dos dias
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-amber-400">
            {sortedCheckIns.length} registros
          </span>
        </div>

        {sortedCheckIns.length === 0 ? (
          <div className="p-8 text-center text-xs text-slate-400 space-y-1 border border-dashed border-slate-800 rounded-xl">
            <p>Nenhum check-in registrado ainda.</p>
            <p className="text-[11px] text-slate-500">
              Acesse a tela inicial para registrar como você está se sentindo hoje.
            </p>
          </div>
        ) : (
          <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
            {sortedCheckIns.map(item => {
              const theme = moodColors[item.mood] || moodColors[3];
              return (
                <div
                  key={item.date}
                  className={`p-3 rounded-xl border flex items-center justify-between gap-3 text-xs ${
                    isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0B111E]/70 border-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-slate-400 font-semibold text-[11px]">
                      {item.date}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full font-semibold border text-[11px] ${theme.bg} ${theme.text}`}>
                      {item.label} ({item.mood}/5)
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map(step => (
                      <div
                        key={step}
                        className={`w-2.5 h-2.5 rounded-full ${
                          step <= item.mood ? theme.bar : 'bg-slate-800 [html.light-theme_&]:bg-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Conquistas Simples (Badges) */}
      <div className="space-y-3">
        <div>
          <h3 className="text-base font-bold text-white [html.light-theme_&]:text-slate-900 flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            Conquistas de Maturidade
          </h3>
          <p className="text-xs text-slate-400">
            Reconhecimento das etapas de perseverança e autocontrole atingidas
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {achievements.map(ach => {
            const Icon = getIcon(ach.icon);
            return (
              <div
                key={ach.id}
                className={`p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                  ach.unlocked
                    ? isLight
                      ? 'bg-amber-50/70 border-amber-300 shadow-sm'
                      : 'bg-[#151D2A] border-amber-500/40 bg-gradient-to-br from-[#151D2A] to-[#1f2838]'
                    : isLight
                      ? 'bg-slate-50 border-slate-200 opacity-60'
                      : 'bg-[#151D2A]/40 border-slate-800/60 opacity-60'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  ach.unlocked
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'bg-slate-800 text-slate-500 border border-slate-700'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>

                <div className="space-y-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="text-sm font-bold text-white [html.light-theme_&]:text-slate-900 truncate">
                      {ach.title}
                    </h4>
                    {ach.unlocked && (
                      <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                        Desbloqueado
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {ach.description}
                  </p>

                  {ach.progressText && (
                    <div className="pt-1 text-[11px] font-mono text-slate-400">
                      {ach.progressText}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
