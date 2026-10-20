import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ObjectiveType, ContactSituationType } from '../types';
import { ConfirmationModal } from './ConfirmationModal';
import {
  User,
  Target,
  MessageSquareOff,
  Moon,
  Sun,
  Download,
  RotateCcw,
  Trash2,
  CheckCircle2,
  Shield,
  Sliders,
  Sparkles,
  Lock,
  LogOut
} from 'lucide-react';

export const ProfileView: React.FC = () => {
  const {
    profile,
    updateProfile,
    logoutUser,
    exportNotesAsTxt,
    resetProgress,
    clearAllData
  } = useApp();

  const isLight = profile.theme === 'light';

  // Local form state
  const [name, setName] = useState(profile.name);
  const [objective, setObjective] = useState<ObjectiveType>(profile.objective);
  const [contactSituation, setContactSituation] = useState<ContactSituationType>(profile.contactSituation);
  const [reducedMotion, setReducedMotion] = useState(profile.reducedMotion);
  const [savedFeedback, setSavedFeedback] = useState(false);

  // Modal states
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [isWipeModalOpen, setIsWipeModalOpen] = useState(false);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      name: name.trim() || 'Companheiro',
      objective,
      contactSituation,
      reducedMotion
    });
    setSavedFeedback(true);
    setTimeout(() => setSavedFeedback(false), 2500);
  };

  return (
    <div className="space-y-6 pb-12 max-w-3xl">
      {/* Title */}
      <div className="space-y-1">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white [html.light-theme_&]:text-slate-900">
          Perfil & Preferências
        </h2>
        <p className="text-sm text-slate-400">
          Gerencie seus objetivos, situação de contato, temas e seus dados salvos localmente.
        </p>
      </div>

      {/* Main Settings Form */}
      <form onSubmit={handleSaveProfile} className="space-y-6">
        <div className={`p-5 sm:p-6 rounded-2xl border space-y-6 ${
          isLight ? 'bg-white border-slate-200' : 'bg-[#151D2A] border-slate-800'
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800/60 [html.light-theme_&]:border-slate-100">
            <h3 className="text-base font-bold text-white [html.light-theme_&]:text-slate-900 flex items-center gap-2">
              <User className="w-4 h-4 text-amber-500" />
              Dados do Membro
            </h3>
            {savedFeedback && (
              <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1 animate-pulse">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Alterações salvas
              </span>
            )}
          </div>

          {/* Nome */}
          <div className="space-y-1.5">
            <label htmlFor="profile-name" className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Como você quer ser chamado
            </label>
            <input
              id="profile-name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Seu nome ou apelido"
              className="w-full h-11 px-4 rounded-xl bg-[#0B111E] border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Objetivo */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-amber-500" />
              Objetivo Principal
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                { id: 'reorganize' as ObjectiveType, title: 'Reorganizar emoções', desc: 'Acalmar e focar no autocontrole' },
                { id: 'reapproach' as ObjectiveType, title: 'Avaliar reaproximação', desc: 'Checar base e reciprocidade' },
                { id: 'move_on' as ObjectiveType, title: 'Seguir em frente', desc: 'Encerrar ciclo com dignidade' }
              ].map(opt => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setObjective(opt.id)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    objective === opt.id
                      ? 'border-amber-400 bg-amber-500/15 text-amber-300 ring-1 ring-amber-400/30'
                      : isLight
                        ? 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                        : 'border-slate-800 bg-[#0B111E]/70 hover:bg-[#0B111E] text-slate-300'
                  }`}
                >
                  <div className="text-xs font-bold">{opt.title}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{opt.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Situação de Contato */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <MessageSquareOff className="w-3.5 h-3.5 text-amber-500" />
              Situação de Contato Atual
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                { id: 'still_talking' as ContactSituationType, title: 'Ainda conversamos', desc: 'Contato esporádico ou conversas abertas' },
                { id: 'no_contact' as ContactSituationType, title: 'Estamos sem contato', desc: 'Pausa natural ou distanciamento mútuo' },
                { id: 'asked_no_contact' as ContactSituationType, title: 'Pediu para não ser procurada', desc: 'Bloqueio, encerramento ou limite explícito' }
              ].map(opt => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setContactSituation(opt.id)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    contactSituation === opt.id
                      ? 'border-amber-400 bg-amber-500/15 text-amber-300 ring-1 ring-amber-400/30'
                      : isLight
                        ? 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                        : 'border-slate-800 bg-[#0B111E]/70 hover:bg-[#0B111E] text-slate-300'
                  }`}
                >
                  <div className="text-xs font-bold">{opt.title}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{opt.desc}</div>
                </button>
              ))}
            </div>

            {/* Live adaptation note */}
            <div className={`p-3.5 rounded-xl border text-xs leading-relaxed space-y-1 ${
              contactSituation === 'asked_no_contact'
                ? 'bg-amber-500/15 border-amber-500/40 text-amber-200'
                : 'bg-[#0B111E]/60 border-slate-800 text-slate-300'
            }`}>
              <div className="font-semibold flex items-center gap-1 text-amber-400">
                <Shield className="w-3.5 h-3.5" />
                <span>Impacto Imediato no Plano</span>
              </div>
              <p>
                {contactSituation === 'asked_no_contact'
                  ? 'Como ela pediu para não ser procurada, os dias 10 e 12 foram adaptados imediatamente para exercícios reflexivos individuais. O plano nunca sugerirá contornar bloqueios.'
                  : 'Os dias 10 e 12 apresentarão a abordagem equilibrada de contato, com opção de alternar para reflexões individuais.'}
              </p>
            </div>
          </div>

          {/* Submit Save */}
          <div className="pt-2">
            <button
              type="submit"
              className="h-11 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Salvar Alterações de Perfil</span>
            </button>
          </div>
        </div>
      </form>

      {/* Preferências Visuais e Animações */}
      <div className={`p-5 sm:p-6 rounded-2xl border space-y-4 ${
        isLight ? 'bg-white border-slate-200' : 'bg-[#151D2A] border-slate-800'
      }`}>
        <h3 className="text-base font-bold text-white [html.light-theme_&]:text-slate-900 flex items-center gap-2">
          <Sliders className="w-4 h-4 text-amber-500" />
          Aparência & Experiência
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Theme Switcher */}
          <div className={`p-4 rounded-xl border flex items-center justify-between gap-3 ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0B111E]/70 border-slate-800'
          }`}>
            <div>
              <div className="text-xs font-bold text-white [html.light-theme_&]:text-slate-900">
                Tema Visual
              </div>
              <div className="text-[11px] text-slate-400">
                {isLight ? 'Tema Claro Ativo' : 'Tema Escuro Ativo'}
              </div>
            </div>
            <button
              type="button"
              onClick={() => updateProfile({ theme: isLight ? 'dark' : 'light' })}
              className="px-3 py-1.5 rounded-lg border border-slate-700 bg-[#151D2A] text-xs font-semibold flex items-center gap-1.5 text-amber-400 hover:border-amber-400 cursor-pointer"
            >
              {isLight ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
              <span>Alternar</span>
            </button>
          </div>

          {/* Reduced Motion Toggle */}
          <div className={`p-4 rounded-xl border flex items-center justify-between gap-3 ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0B111E]/70 border-slate-800'
          }`}>
            <div>
              <div className="text-xs font-bold text-white [html.light-theme_&]:text-slate-900">
                Animações da Interface
              </div>
              <div className="text-[11px] text-slate-400">
                {reducedMotion ? 'Movimentos reduzidos' : 'Animações fluidas'}
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                const nextVal = !reducedMotion;
                setReducedMotion(nextVal);
                updateProfile({ reducedMotion: nextVal });
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
                reducedMotion
                  ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                  : 'border-slate-700 text-slate-400 hover:text-white'
              }`}
            >
              {reducedMotion ? 'Reduzidas' : 'Padrão'}
            </button>
          </div>
        </div>
      </div>

      {/* Exportação de Dados e Anotações */}
      <div className={`p-5 sm:p-6 rounded-2xl border space-y-4 ${
        isLight ? 'bg-white border-slate-200' : 'bg-[#151D2A] border-slate-800'
      }`}>
        <h3 className="text-base font-bold text-white [html.light-theme_&]:text-slate-900 flex items-center gap-2">
          <Download className="w-4 h-4 text-amber-500" />
          Exportar Minhas Anotações
        </h3>
        <p className="text-xs text-slate-400 leading-relaxed">
          Gere um arquivo de texto (.txt) completo contendo todas as notas que você registrou ao longo dos 14 dias, histórico de check-ins e seus compromissos pessoais para guardar no seu computador ou celular.
        </p>

        <button
          type="button"
          onClick={exportNotesAsTxt}
          className="h-11 px-5 rounded-xl border border-slate-700 hover:border-amber-400 hover:bg-amber-500/10 text-xs sm:text-sm font-semibold flex items-center gap-2 text-amber-300 transition-colors cursor-pointer"
        >
          <Download className="w-4 h-4 text-amber-400" />
          <span>Baixar Arquivo .txt com Minhas Anotações</span>
        </button>
      </div>

      {/* Sessão do Membro & Logout */}
      <div className={`p-5 sm:p-6 rounded-2xl border space-y-4 ${
        isLight ? 'bg-white border-slate-200' : 'bg-[#151D2A] border-slate-800'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-white [html.light-theme_&]:text-slate-900 flex items-center gap-2">
              <LogOut className="w-4 h-4 text-amber-500" />
              Sessão de Membro
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Conectado como <span className="font-semibold text-white [html.light-theme_&]:text-slate-800">{profile.name}</span> {profile.email ? `(${profile.email})` : ''}
            </p>
          </div>

          <button
            type="button"
            onClick={logoutUser}
            className="h-10 px-4 rounded-xl border border-slate-700 hover:border-amber-400/60 hover:bg-[#0B111E] text-xs font-semibold text-amber-300 flex items-center justify-center gap-2 transition-colors cursor-pointer self-start sm:self-auto"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sair / Voltar para a Tela de Login</span>
          </button>
        </div>
      </div>

      {/* Zona de Gerenciamento & Reset */}
      <div className={`p-5 sm:p-6 rounded-2xl border border-rose-500/30 space-y-4 ${
        isLight ? 'bg-white' : 'bg-[#151D2A]'
      }`}>
        <h3 className="text-base font-bold text-rose-400 flex items-center gap-2">
          <Trash2 className="w-4 h-4 text-rose-500" />
          Reinício e Exclusão de Dados
        </h3>
        <p className="text-xs text-slate-400 leading-relaxed">
          Ações irreversíveis para reiniciar o plano ou apagar completamente seus dados deste navegador.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
          <button
            type="button"
            onClick={() => setIsResetModalOpen(true)}
            className="h-10 px-4 rounded-xl border border-slate-700 hover:bg-slate-800 text-xs font-semibold text-slate-300 flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reiniciar Meu Progresso</span>
          </button>

          <button
            type="button"
            onClick={() => setIsWipeModalOpen(true)}
            className="h-10 px-4 rounded-xl bg-rose-600/20 border border-rose-500/40 hover:bg-rose-600 text-rose-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Apagar Todos os Dados Locais</span>
          </button>
        </div>
      </div>

      {/* Privacy Seal */}
      <div className="flex items-center gap-2 text-xs text-slate-500 pt-2">
        <Lock className="w-3.5 h-3.5 text-slate-500" />
        <span>Armazenamento 100% local e privado no seu navegador. Sem rastreadores.</span>
      </div>

      {/* Confirmation Modals */}
      <ConfirmationModal
        isOpen={isResetModalOpen}
        title="Reiniciar Progresso do Plano?"
        description="Esta ação irá zerar os 14 dias concluídos, tarefas marcadas, histórico de check-ins e capítulos lidos. Seu nome, preferências e anotações serão mantidos. Deseja continuar?"
        confirmLabel="Sim, Reiniciar Progresso"
        onConfirm={resetProgress}
        onCancel={() => setIsResetModalOpen(false)}
      />

      <ConfirmationModal
        isOpen={isWipeModalOpen}
        title="Apagar Absolutamente Tudo?"
        description="Esta ação apagará todas as suas anotações, tarefas, check-ins e perfil deste navegador. O aplicativo retornará à tela de primeiro acesso. Esta ação não pode ser desfeita."
        confirmLabel="Sim, Apagar Tudo"
        isDestructive={true}
        onConfirm={clearAllData}
        onCancel={() => setIsWipeModalOpen(false)}
      />
    </div>
  );
};
