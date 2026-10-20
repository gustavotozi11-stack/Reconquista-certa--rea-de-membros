import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ObjectiveType, ContactSituationType } from '../types';
import {
  Shield,
  Sparkles,
  CheckCircle2,
  User,
  Mail,
  Lock,
  Target,
  MessageSquareOff,
  Eye,
  EyeOff,
  ArrowRight,
  KeyRound,
  Compass
} from 'lucide-react';

export const AuthOnboardingScreen: React.FC = () => {
  const { profile, loginUser, completeOnboarding } = useApp();

  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  // Login form state
  const [loginEmail, setLoginEmail] = useState(profile.email || '');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loginError, setLoginError] = useState('');

  // Register / Onboarding form state
  const [regName, setRegName] = useState(profile.name || '');
  const [regEmail, setRegEmail] = useState(profile.email || '');
  const [regObjective, setRegObjective] = useState<ObjectiveType>(profile.objective || 'reorganize');
  const [regSituation, setRegSituation] = useState<ContactSituationType>(profile.contactSituation || 'no_contact');
  const [regError, setRegError] = useState('');

  // Handle Login Submit
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail.trim()) {
      setLoginError('Por favor, informe seu e-mail de membro.');
      return;
    }
    setLoginError('');
    loginUser(loginEmail, loginPassword);
  };

  // Quick Demo Login (Zero friction)
  const handleQuickDemoLogin = () => {
    const demoEmail = loginEmail.trim() || 'membro@planoreconquista.com';
    loginUser(demoEmail, 'demo123', profile.name || 'Gustavo');
  };

  // Handle Register / First Access Submit
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regName.trim()) {
      setRegError('Por favor, informe como você quer ser chamado.');
      return;
    }
    setRegError('');
    completeOnboarding(regName, regObjective, regSituation, regEmail);
  };

  return (
    <div className="min-h-screen w-full bg-[#0B111E] text-slate-100 py-8 sm:py-14 px-4 sm:px-6 flex flex-col items-center justify-start overflow-y-auto selection:bg-amber-500/30 selection:text-amber-200">
      {/* Background ambient gold/navy glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-amber-500/5 blur-[120px] pointer-events-none" />

      {/* Brand Header */}
      <div className="w-full max-w-xl mx-auto text-center space-y-3 mb-6 sm:mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wide uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Área de Membros Oficial</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
          Plano Reconquista Certa
        </h1>
        <p className="text-sm sm:text-base text-slate-300 font-medium max-w-md mx-auto leading-relaxed">
          14 dias para recuperar sua clareza, fortalecer sua confiança e agir com maturidade.
        </p>
      </div>

      {/* Main Container Card */}
      <div className="w-full max-w-xl mx-auto bg-[#151D2A] border border-slate-800 rounded-3xl shadow-2xl relative z-10 overflow-hidden">
        {/* Top gold bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600" />

        {/* Tab switch header */}
        <div className="p-3 sm:p-4 bg-[#0E1522] border-b border-slate-800">
          <div className="grid grid-cols-2 gap-2 bg-[#0B111E] p-1.5 rounded-2xl border border-slate-800/80">
            <button
              type="button"
              onClick={() => {
                setActiveTab('login');
                setLoginError('');
              }}
              className={`min-h-[44px] px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'login'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <KeyRound className="w-4 h-4" />
              <span>Entrar como Membro</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab('register');
                setRegError('');
              }}
              className={`min-h-[44px] px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'register'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Primeiro Acesso / Configurar</span>
            </button>
          </div>
        </div>

        {/* ================= TAB 1: ÁREA DE LOGIN ================= */}
        {activeTab === 'login' && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Acesse sua Área de Membros
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Informe o seu e-mail de acesso e senha para continuar sua jornada de onde parou.
              </p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-5">
              {/* E-mail */}
              <div className="space-y-1.5">
                <label
                  htmlFor="login-email"
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>E-mail do Membro</span>
                </label>
                <input
                  id="login-email"
                  type="email"
                  value={loginEmail}
                  onChange={e => {
                    setLoginEmail(e.target.value);
                    if (loginError) setLoginError('');
                  }}
                  placeholder="ex: seuemail@exemplo.com"
                  className="w-full h-12 px-4 rounded-xl bg-[#0B111E] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Senha */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="login-password"
                    className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300"
                  >
                    <Lock className="w-4 h-4 text-amber-400" />
                    <span>Chave de Acesso / Senha</span>
                  </label>
                  <span className="text-[11px] text-slate-500">
                    (Use qualquer senha ou chave de compra)
                  </span>
                </div>
                <div className="relative">
                  <input
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    value={loginPassword}
                    onChange={e => setLoginPassword(e.target.value)}
                    placeholder="Sua senha de membro"
                    className="w-full h-12 pl-4 pr-11 rounded-xl bg-[#0B111E] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1 cursor-pointer"
                    aria-label={showPassword ? 'Ocultar senha' : 'Ver senha'}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember me & Security */}
              <div className="flex items-center justify-between text-xs text-slate-400">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={e => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-700 bg-[#0B111E] text-amber-500 focus:ring-amber-400 accent-amber-500"
                  />
                  <span>Lembrar meu acesso neste dispositivo</span>
                </label>
              </div>

              {loginError && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-medium">
                  {loginError}
                </div>
              )}

              {/* Main Login CTA */}
              <button
                type="submit"
                className="w-full h-12 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-[0.99] text-slate-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
              >
                <span>Entrar na Área de Membros</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Fast demonstration access button */}
              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={handleQuickDemoLogin}
                  className="w-full h-11 px-4 rounded-xl border border-slate-700 hover:border-amber-500/40 hover:bg-[#0B111E] text-xs font-semibold text-slate-300 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Acesso Imediato de Demonstração (Sem Senha)</span>
                </button>
              </div>
            </form>

            <div className="pt-4 border-t border-slate-800 text-center">
              <p className="text-xs text-slate-400">
                Primeiro acesso ou deseja personalizar do zero?{' '}
                <button
                  type="button"
                  onClick={() => setActiveTab('register')}
                  className="font-bold text-amber-400 hover:underline cursor-pointer"
                >
                  Configure seu plano aqui
                </button>
              </p>
            </div>
          </div>
        )}

        {/* ================= TAB 2: PRIMEIRO ACESSO / CONFIGURAR ================= */}
        {activeTab === 'register' && (
          <div className="p-6 sm:p-8 space-y-7">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Personalize seu Plano de 14 Dias
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Responda com honestidade para que os conteúdos e atividades respeitem o seu momento real.
              </p>
            </div>

            <form onSubmit={handleRegisterSubmit} className="space-y-6">
              {/* Campo 1: Nome */}
              <div className="space-y-1.5">
                <label
                  htmlFor="reg-name"
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  <User className="w-4 h-4 text-amber-400" />
                  <span>Como você quer ser chamado? *</span>
                </label>
                <input
                  id="reg-name"
                  type="text"
                  value={regName}
                  onChange={e => {
                    setRegName(e.target.value);
                    if (regError) setRegError('');
                  }}
                  placeholder="Ex: Gustavo, Rodrigo, Alex..."
                  className="w-full h-12 px-4 rounded-xl bg-[#0B111E] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                  maxLength={40}
                  required
                />
              </div>

              {/* Campo 2: E-mail (Opcional para identificação) */}
              <div className="space-y-1.5">
                <label
                  htmlFor="reg-email"
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>Seu E-mail de Membro (Opcional)</span>
                </label>
                <input
                  id="reg-email"
                  type="email"
                  value={regEmail}
                  onChange={e => setRegEmail(e.target.value)}
                  placeholder="ex: seuemail@exemplo.com"
                  className="w-full h-12 px-4 rounded-xl bg-[#0B111E] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                />
              </div>

              {/* Campo 3: Objetivo */}
              <div className="space-y-2.5">
                <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                  <Target className="w-4 h-4 text-amber-400" />
                  <span>Qual é o seu principal objetivo agora? *</span>
                </label>

                <div className="grid grid-cols-1 gap-2.5">
                  {[
                    {
                      id: 'reorganize' as ObjectiveType,
                      title: 'Reorganizar as emoções',
                      desc: 'Acalmar a mente, diminuir a ansiedade e retomar o controle da minha rotina.'
                    },
                    {
                      id: 'reapproach' as ObjectiveType,
                      title: 'Avaliar uma reaproximação',
                      desc: 'Entender se ainda há base sólida e reciprocidade real para reconstruir a relação.'
                    },
                    {
                      id: 'move_on' as ObjectiveType,
                      title: 'Seguir em frente',
                      desc: 'Encerrar o ciclo com respeito, recuperar a autoestima e focar no meu futuro.'
                    }
                  ].map(opt => {
                    const isSelected = regObjective === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setRegObjective(opt.id)}
                        className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
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
                          <div
                            className={`shrink-0 w-5 h-5 rounded-full border flex items-center justify-center mt-0.5 ${
                              isSelected
                                ? 'border-amber-400 bg-amber-400 text-slate-950'
                                : 'border-slate-600'
                            }`}
                          >
                            {isSelected && <CheckCircle2 className="w-3.5 h-3.5 fill-current" />}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Campo 4: Situação de Contato */}
              <div className="space-y-2.5">
                <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                  <MessageSquareOff className="w-4 h-4 text-amber-400" />
                  <span>Qual é a sua situação de contato atual? *</span>
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
                    const isSelected = regSituation === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setRegSituation(opt.id)}
                        className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
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
                          <div
                            className={`shrink-0 w-5 h-5 rounded-full border flex items-center justify-center mt-0.5 ${
                              isSelected
                                ? 'border-amber-400 bg-amber-400 text-slate-950'
                                : 'border-slate-600'
                            }`}
                          >
                            {isSelected && <CheckCircle2 className="w-3.5 h-3.5 fill-current" />}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Live Feedback banner if asked_no_contact */}
                {regSituation === 'asked_no_contact' && (
                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 space-y-1">
                    <div className="font-semibold flex items-center gap-1.5 text-amber-300">
                      <Shield className="w-3.5 h-3.5" />
                      Adaptação Ética e Respeitosa
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      Com base nessa escolha, todas as atividades de contato deste plano serão automaticamente substituídas por exercícios individuais de autocuidado e reflexão. Nunca orientaremos a contornar bloqueios ou insistir.
                    </p>
                  </div>
                )}
              </div>

              {/* Privacy Notice */}
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#0B111E]/50 border border-slate-800 text-xs text-slate-400 leading-relaxed">
                <Lock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <p>
                  Privacidade total: suas informações ficam salvas apenas na memória deste navegador. Nenhum dado é compartilhado ou enviado a servidores externos.
                </p>
              </div>

              {regError && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-medium">
                  {regError}
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full h-12 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-[0.99] text-slate-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
              >
                <span>Liberar Acesso e Iniciar Plano</span>
                <CheckCircle2 className="w-4 h-4 text-slate-950" />
              </button>
            </form>

            <div className="pt-4 border-t border-slate-800 text-center">
              <p className="text-xs text-slate-400">
                Já é membro cadastrado?{' '}
                <button
                  type="button"
                  onClick={() => setActiveTab('login')}
                  className="font-bold text-amber-400 hover:underline cursor-pointer"
                >
                  Entrar na sua conta
                </button>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer subtle credits */}
      <div className="mt-8 text-center text-xs text-slate-500 space-y-1">
        <p>Plano Reconquista Certa © Todos os direitos reservados</p>
        <p className="text-[11px] text-slate-600">
          Área de Membros Protegida · Foco em Autonomia e Maturidade
        </p>
      </div>
    </div>
  );
};
