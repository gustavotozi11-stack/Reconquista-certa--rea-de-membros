import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Home,
  CalendarCheck,
  BookOpen,
  TrendingUp,
  User,
  Sun,
  Moon,
  Sparkles
} from 'lucide-react';

export const Navigation: React.FC = () => {
  const { currentNav, setCurrentNav, profile, updateProfile, completedDays } = useApp();

  const navItems = [
    { id: 'home' as const, label: 'Início', icon: Home },
    { id: 'plan' as const, label: 'Plano', icon: CalendarCheck, badge: `${completedDays.length}/14` },
    { id: 'library' as const, label: 'Biblioteca', icon: BookOpen },
    { id: 'progress' as const, label: 'Progresso', icon: TrendingUp },
    { id: 'profile' as const, label: 'Perfil', icon: User }
  ];

  const isLight = profile.theme === 'light';

  const toggleTheme = () => {
    updateProfile({ theme: isLight ? 'dark' : 'light' });
  };

  return (
    <>
      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside className={`hidden md:flex flex-col w-64 lg:w-72 shrink-0 border-r h-screen sticky top-0 transition-colors z-30 ${
        isLight
          ? 'bg-white border-slate-200 text-slate-800'
          : 'bg-[#151D2A] border-slate-800 text-slate-200'
      }`}>
        {/* Brand Header */}
        <div className={`p-6 border-b ${isLight ? 'border-slate-100' : 'border-slate-800/80'}`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-500/20">
              PR
            </div>
            <div>
              <div className="text-base font-bold tracking-tight text-white dark:text-white [html.light-theme_&]:text-slate-900 leading-tight">
                Reconquista Certa
              </div>
              <div className="text-xs text-amber-500 font-semibold tracking-wide">
                Plano de 14 Dias
              </div>
            </div>
          </div>
        </div>

        {/* User Mini Card */}
        <div className={`mx-4 my-4 p-3.5 rounded-xl border ${
          isLight
            ? 'bg-slate-50 border-slate-200'
            : 'bg-[#0B111E]/70 border-slate-800/80'
        }`}>
          <div className="flex items-center justify-between">
            <div className="truncate pr-2">
              <div className="text-xs text-slate-400 font-medium">Membro ativo</div>
              <div className="text-sm font-semibold truncate text-white [html.light-theme_&]:text-slate-900">
                {profile.name || 'Companheiro'}
              </div>
            </div>
            <div className="shrink-0 text-right">
              <span className="text-xs font-bold text-amber-400">
                Dia {Math.min(completedDays.length + 1, 14)}
              </span>
              <div className="text-[10px] text-slate-400">
                {Math.round((completedDays.length / 14) * 100)}% feito
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = currentNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentNav(item.id)}
                className={`w-full h-11 px-3.5 rounded-xl flex items-center justify-between font-medium text-sm transition-all cursor-pointer ${
                  isActive
                    ? isLight
                      ? 'bg-amber-500/15 text-amber-900 font-bold'
                      : 'bg-amber-500/15 text-amber-400 font-semibold border border-amber-500/30'
                    : isLight
                      ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${isActive ? (isLight ? 'text-amber-600' : 'text-amber-400') : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`text-[11px] px-2 py-0.5 rounded-full font-mono ${
                    isActive
                      ? isLight ? 'bg-amber-600 text-white' : 'bg-amber-500 text-slate-950 font-bold'
                      : isLight ? 'bg-slate-200 text-slate-600' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer / Theme Switch */}
        <div className={`p-4 border-t space-y-3 ${isLight ? 'border-slate-100' : 'border-slate-800/80'}`}>
          <button
            onClick={toggleTheme}
            className={`w-full h-10 px-3 rounded-xl flex items-center justify-between text-xs font-medium border transition-colors cursor-pointer ${
              isLight
                ? 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                : 'bg-[#0B111E] border-slate-800 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <div className="flex items-center gap-2">
              {isLight ? <Moon className="w-4 h-4 text-slate-700" /> : <Sun className="w-4 h-4 text-amber-400" />}
              <span>{isLight ? 'Tema Escuro' : 'Tema Claro'}</span>
            </div>
            <span className="text-[10px] uppercase tracking-wider text-slate-400">
              {isLight ? 'Claro' : 'Escuro'}
            </span>
          </button>

          <div className="text-center">
            <span className="text-[11px] text-slate-500">
              Privado · Foco em Autonomia
            </span>
          </div>
        </div>
      </aside>

      {/* ================= MOBILE BOTTOM TAB BAR ================= */}
      <nav
        aria-label="Navegação Principal Móvel"
        className={`md:hidden fixed bottom-0 left-0 right-0 z-40 border-t backdrop-blur-lg pb-[env(safe-area-inset-bottom)] transition-colors ${
          isLight
            ? 'bg-white/95 border-slate-200 shadow-lg'
            : 'bg-[#151D2A]/95 border-slate-800/90 shadow-2xl'
        }`}
      >
        <div className="grid grid-cols-5 h-16 max-w-lg mx-auto">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = currentNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentNav(item.id)}
                className={`min-h-[48px] min-w-[48px] flex flex-col items-center justify-center relative transition-colors cursor-pointer ${
                  isActive
                    ? isLight
                      ? 'text-amber-600 font-bold'
                      : 'text-amber-400 font-semibold'
                    : isLight
                      ? 'text-slate-500 hover:text-slate-800'
                      : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="relative">
                  <Icon className="w-5 h-5" />
                  {item.id === 'plan' && completedDays.length > 0 && (
                    <span className="absolute -top-1 -right-2 w-2 h-2 rounded-full bg-amber-400" />
                  )}
                </div>
                <span className="text-[11px] tracking-tight mt-1">
                  {item.label}
                </span>
                {isActive && (
                  <span className="absolute top-0 w-8 h-0.5 rounded-full bg-amber-400" />
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
