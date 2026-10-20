import React from 'react';
import { useApp } from '../context/AppContext';
import { Sun, Moon, Calendar, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  const { profile, updateProfile, completedDays, currentActiveDayId, currentNav, setCurrentNav } = useApp();

  const isLight = profile.theme === 'light';

  const toggleTheme = () => {
    updateProfile({ theme: isLight ? 'dark' : 'light' });
  };

  const navTitles: Record<string, { title: string; subtitle: string }> = {
    home: { title: 'Visão Geral', subtitle: 'Acompanhe seu momento e o próximo passo' },
    plan: { title: 'Plano de 14 Dias', subtitle: 'Jornada estruturada de maturidade e clareza' },
    library: { title: 'Biblioteca de Guias', subtitle: '3 guias aprofundados com aulas práticas' },
    progress: { title: 'Evolução Pessoal', subtitle: 'Métricas reais de consistência e reflexão' },
    profile: { title: 'Meu Perfil & Preferências', subtitle: 'Ajuste sua situação, dados e temas' }
  };

  const currentInfo = navTitles[currentNav] || navTitles.home;

  return (
    <header className={`sticky top-0 z-20 border-b backdrop-blur-md transition-colors ${
      isLight
        ? 'bg-white/90 border-slate-200'
        : 'bg-[#0B111E]/90 border-slate-800/80'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Left: Mobile Brand & Desktop View Info */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="md:hidden flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black text-xs shadow-sm">
              PR
            </div>
            <div className="truncate">
              <span className="font-bold text-sm tracking-tight text-white [html.light-theme_&]:text-slate-900 block truncate">
                Plano Reconquista Certa
              </span>
              <span className="text-[10px] text-amber-500 font-semibold block -mt-0.5">
                Dia {currentActiveDayId} ativo
              </span>
            </div>
          </div>

          <div className="hidden md:block truncate">
            <h1 className="text-lg font-bold tracking-tight text-white [html.light-theme_&]:text-slate-900 truncate">
              {currentInfo.title}
            </h1>
            <p className="text-xs text-slate-400 truncate">
              {currentInfo.subtitle}
            </p>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={() => setCurrentNav('plan')}
            className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
              isLight
                ? 'bg-amber-50 border-amber-200 text-amber-900 hover:bg-amber-100'
                : 'bg-amber-500/10 border-amber-500/30 text-amber-300 hover:bg-amber-500/20'
            }`}
          >
            <Calendar className="w-3.5 h-3.5 text-amber-500" />
            <span>Dia {currentActiveDayId} de 14</span>
          </button>

          <button
            onClick={toggleTheme}
            aria-label={isLight ? 'Ativar tema escuro' : 'Ativar tema claro'}
            className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-colors cursor-pointer ${
              isLight
                ? 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                : 'bg-[#151D2A] border-slate-800 text-slate-300 hover:bg-slate-800'
            }`}
          >
            {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
          </button>

          <button
            onClick={() => setCurrentNav('profile')}
            className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs uppercase border transition-colors cursor-pointer ${
              isLight
                ? 'bg-slate-900 text-white border-slate-900 hover:bg-slate-800'
                : 'bg-amber-500 text-slate-950 border-amber-400 hover:bg-amber-400 shadow-sm'
            }`}
          >
            {profile.name ? profile.name.charAt(0) : 'P'}
          </button>
        </div>
      </div>
    </header>
  );
};
