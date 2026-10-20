import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ObjectiveType, ContactSituationType } from '../types';
import { Shield, Sparkles, CheckCircle2, User, Target, MessageSquareOff, Lock } from 'lucide-react';

export const OnboardingModal: React.FC = () => {
  const { profile, completeOnboarding } = useApp();

  const [name, setName] = useState('');
  const [objective, setObjective] = useState<ObjectiveType>('reorganize');
  const [contactSituation, setContactSituation] = useState<ContactSituationType>('no_contact');
  const [error, setError] = useState('');

  if (profile.onboarded) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Por favor, informe como prefere ser chamado.');
      return;
    }
    setError('');
    completeOnboarding(name, objective, contactSituation);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl my-8 bg-[#151D2A] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-slate-100">
        {/* Subtle decorative gold line */}
        <div className="h-1.5 w-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600" />

        <div className="p-6 sm:p-8 space-y-6">
          {/* Header */}
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Área de Membros Exclusiva</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Plano Reconquista Certa
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-medium">
              14 dias para recuperar sua clareza, fortalecer sua confiança e agir com maturidade.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 1. Nome */}
            <div className="space-y-2">
              <label htmlFor="user-name" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                <User className="w-4 h-4 text-amber-400" />
                Como você quer ser chamado?
              </label>
              <input
                id="user-name"
                type="text"
                value={name}
                onChange={e => {
                  setName(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Ex: Gustavo, Rodrigo, Alex..."
                className="w-full h-12 px-4 rounded-xl bg-[#0B111E] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-sm sm:text-base transition-all"
                maxLength={40}
                required
              />
              {error && <p className="text-xs text-rose-400 font-medium">{error}</p>}
            </div>

            {/* 2. Objetivo */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                <Target className="w-4 h-4 text-amber-400" />
                Qual é o seu principal objetivo agora?
              </label>
              <div className="grid grid-cols-1 gap-2.5">
                {[
                  {
                    id: 'reorganize' as ObjectiveType,
                    title: 'Reorganizar as emoções',
                    desc: 'Acalmar a mente, diminuir a ansiedade e retomar o controle do meu dia a dia.'
                  },
                  {
                    id: 'reapproach' as ObjectiveType,
                    title: 'Avaliar uma reaproximação',
                    desc: 'Entender se ainda há base sólida e reciprocidade para reconstruir a relação com maturidade.'
                  },
                  {
                    id: 'move_on' as ObjectiveType,
                    title: 'Seguir em frente',
                    desc: 'Encerrar o ciclo com respeito, recuperar a autoestima e focar integralmente no meu futuro.'
                  }
                ].map(opt => {
                  const isSelected = objective === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setObjective(opt.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all ${
                        isSelected
                          ? 'bg-amber-500/10 border-amber-500/60 shadow-sm'
                          : 'bg-[#0B111E]/70 border-slate-800 hover:border-slate-700 hover:bg-[#0B111E]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className={`text-sm font-semibold ${isSelected ? 'text-amber-300' : 'text-slate-200'}`}>
                            {opt.title}
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                            {opt.desc}
                          </div>
                        </div>
                        <div className={`shrink-0 w-5 h-5 rounded-full border flex items-center justify-center mt-0.5 ${
                          isSelected ? 'border-amber-400 bg-amber-400 text-slate-950' : 'border-slate-600'
                        }`}>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5 fill-current" />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Situação Atual */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                <MessageSquareOff className="w-4 h-4 text-amber-400" />
                Qual é a sua situação de contato atual?
              </label>
              <div className="grid grid-cols-1 gap-2.5">
                {[
                  {
                    id: 'still_talking' as ContactSituationType,
                    title: 'Ainda conversamos',
                    desc: 'Temos contato esporádico ou conversas pontuais em andamento.'
                  },
                  {
                    id: 'no_contact' as ContactSituationType,
                    title: 'Estamos sem contato',
                    desc: 'Houve afastamento natural ou uma pausa combinada nos últimos dias.'
                  },
                  {
                    id: 'asked_no_contact' as ContactSituationType,
                    title: 'Ela pediu para não ser procurada',
                    desc: 'Houve pedido explícito de espaço, encerramento definitivo ou bloqueio.'
                  }
                ].map(opt => {
                  const isSelected = contactSituation === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setContactSituation(opt.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all ${
                        isSelected
                          ? 'bg-amber-500/10 border-amber-500/60 shadow-sm'
                          : 'bg-[#0B111E]/70 border-slate-800 hover:border-slate-700 hover:bg-[#0B111E]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className={`text-sm font-semibold ${isSelected ? 'text-amber-300' : 'text-slate-200'}`}>
                            {opt.title}
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                            {opt.desc}
                          </div>
                        </div>
                        <div className={`shrink-0 w-5 h-5 rounded-full border flex items-center justify-center mt-0.5 ${
                          isSelected ? 'border-amber-400 bg-amber-400 text-slate-950' : 'border-slate-600'
                        }`}>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5 fill-current" />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {contactSituation === 'asked_no_contact' && (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 space-y-1">
                  <div className="font-semibold flex items-center gap-1.5 text-amber-300">
                    <Shield className="w-3.5 h-3.5" />
                    Adaptação de Respeito aos Limites
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Com base nessa escolha, todas as atividades de contato deste plano serão automaticamente substituídas por exercícios individuais de autocuidado e reflexão. Nunca orientaremos a contornar bloqueios ou insistir.
                  </p>
                </div>
              )}
            </div>

            {/* Privacy notice */}
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0B111E]/50 border border-slate-800 text-xs text-slate-400">
              <Lock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <p>
                Privacidade total: suas informações ficam salvas apenas na memória deste navegador. Nenhum dado é enviado ou transmitido para servidores externos.
              </p>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-[0.99] text-slate-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
            >
              <span>Começar Meu Plano</span>
              <CheckCircle2 className="w-4 h-4 text-slate-950" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
