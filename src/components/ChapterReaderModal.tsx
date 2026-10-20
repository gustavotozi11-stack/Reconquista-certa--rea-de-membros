import React from 'react';
import { useApp } from '../context/AppContext';
import { GUIDES_DATA } from '../data/guidesData';
import {
  X,
  Bookmark,
  CheckCircle2,
  Clock,
  BookOpen,
  ArrowRight,
  Sparkles,
  AlertCircle
} from 'lucide-react';

interface ChapterReaderModalProps {
  guideId: string;
  chapterId: string;
  onClose: () => void;
}

export const ChapterReaderModal: React.FC<ChapterReaderModalProps> = ({ guideId, chapterId, onClose }) => {
  const {
    profile,
    readChapters,
    favoriteChapters,
    toggleReadChapter,
    toggleFavoriteChapter,
    openChapter
  } = useApp();

  const isLight = profile.theme === 'light';

  const guide = GUIDES_DATA.find(g => g.id === guideId) || GUIDES_DATA[0];
  const chapter = guide.chapters.find(c => c.id === chapterId) || guide.chapters[0];

  const isRead = readChapters.includes(chapter.id);
  const isFavorite = favoriteChapters.includes(chapter.id);

  // Next chapter within same guide or next guide
  const currentIndex = guide.chapters.findIndex(c => c.id === chapter.id);
  const nextChapter = guide.chapters[currentIndex + 1];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className={`relative w-full max-w-3xl my-4 sm:my-8 rounded-2xl border shadow-2xl overflow-hidden flex flex-col max-h-[92vh] ${
        isLight
          ? 'bg-white border-slate-200 text-slate-800'
          : 'bg-[#151D2A] border-slate-800 text-slate-100'
      }`}>
        {/* Header */}
        <div className={`p-4 sm:p-5 border-b flex items-center justify-between gap-4 sticky top-0 z-10 backdrop-blur-md ${
          isLight ? 'bg-white/95 border-slate-100' : 'bg-[#151D2A]/95 border-slate-800'
        }`}>
          <div className="min-w-0">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-500 block truncate">
              {guide.title} · Capítulo {chapter.number}
            </span>
            <h2 className="text-base sm:text-lg font-bold text-white [html.light-theme_&]:text-slate-900 truncate">
              {chapter.title}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => toggleFavoriteChapter(chapter.id)}
              aria-label={isFavorite ? 'Remover dos favoritos' : 'Favoritar capítulo'}
              className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-colors cursor-pointer ${
                isFavorite
                  ? 'bg-amber-500/20 border-amber-400 text-amber-400'
                  : isLight
                    ? 'border-slate-200 hover:bg-slate-100 text-slate-500'
                    : 'border-slate-800 hover:bg-slate-800 text-slate-400'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
            </button>

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

        {/* Content body */}
        <div className="p-4 sm:p-8 overflow-y-auto space-y-7 text-sm sm:text-base leading-relaxed">
          {/* Metadata banner */}
          <div className="flex items-center gap-3 text-xs text-slate-400 pb-2 border-b border-slate-800/60 [html.light-theme_&]:border-slate-100">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              Tempo de leitura: {chapter.readTime}
            </span>
            <span>·</span>
            <span className="text-amber-400 font-semibold">{guide.badge}</span>
          </div>

          {chapter.subtitle && (
            <p className="text-base sm:text-lg font-semibold text-slate-200 [html.light-theme_&]:text-slate-800 italic">
              "{chapter.subtitle}"
            </p>
          )}

          {/* Guia 1 Format: Behavior / Why Hurtful / Example / What to do instead / Practical Exercise */}
          {chapter.behavior && (
            <div className="space-y-6">
              <div className="space-y-1.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-500">
                  O Comportamento
                </h3>
                <p className="text-slate-300 [html.light-theme_&]:text-slate-700">
                  {chapter.behavior}
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400">
                  Por Que Prejudica o Relacionamento
                </h3>
                <p className="text-slate-300 [html.light-theme_&]:text-slate-700">
                  {chapter.whyHurtful}
                </p>
              </div>

              <div className={`p-4 rounded-xl border ${
                isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0B111E]/80 border-slate-800'
              }`}>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Exemplo do Cotidiano
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 [html.light-theme_&]:text-slate-700 italic">
                  "{chapter.example}"
                </p>
              </div>

              <div className={`p-4 rounded-xl border border-amber-500/30 ${
                isLight ? 'bg-amber-50/50 text-amber-950' : 'bg-amber-500/10 text-slate-200'
              }`}>
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  O Que Fazer no Lugar
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed">
                  {chapter.whatToDoInstead}
                </p>
              </div>

              {chapter.practicalExercise && (
                <div className={`p-4 rounded-xl border ${
                  isLight ? 'bg-slate-100 border-slate-200' : 'bg-[#0B111E] border-slate-800'
                }`}>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Exercício Breve de Fixação
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 [html.light-theme_&]:text-slate-700">
                    {chapter.practicalExercise}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Guia 2 / Guia 3 Format: Intro / Key Points / Practical Action / Takeaway */}
          {chapter.intro && (
            <div className="space-y-6">
              <p className="text-slate-200 [html.light-theme_&]:text-slate-700 leading-relaxed font-medium">
                {chapter.intro}
              </p>

              {chapter.keyPoints && (
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-500">
                    Pontos Fundamentais de Discernimento
                  </h3>
                  <div className="space-y-3">
                    {chapter.keyPoints.map((point, idx) => (
                      <div key={idx} className={`p-4 rounded-xl border ${
                        isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0B111E]/70 border-slate-800'
                      }`}>
                        <h4 className="text-sm font-bold text-white [html.light-theme_&]:text-slate-900 mb-1">
                          {point.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-300 [html.light-theme_&]:text-slate-700 leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {chapter.practicalAction && (
                <div className={`p-4 rounded-xl border border-amber-500/30 ${
                  isLight ? 'bg-amber-50/50 text-amber-950' : 'bg-amber-500/10 text-slate-200'
                }`}>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    Ação Prática do Capítulo
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    {chapter.practicalAction}
                  </p>
                </div>
              )}

              {chapter.checklist && (
                <div className={`p-4 rounded-xl border ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0B111E] border-slate-800'
                } space-y-2`}>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Checklist de Postura Masculina
                  </h4>
                  <ul className="space-y-1.5">
                    {chapter.checklist.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-300 [html.light-theme_&]:text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {chapter.takeaway && (
                <div className={`p-4 rounded-xl border border-slate-700/60 ${
                  isLight ? 'bg-slate-100 text-slate-800' : 'bg-[#0B111E]/80 text-slate-300'
                }`}>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                    Conclusão Chave
                  </h4>
                  <p className="text-xs sm:text-sm italic">
                    "{chapter.takeaway}"
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className={`p-4 sm:p-5 border-t flex flex-col sm:flex-row items-center justify-between gap-3 sticky bottom-0 z-10 backdrop-blur-md ${
          isLight ? 'bg-white/95 border-slate-100' : 'bg-[#151D2A]/95 border-slate-800'
        }`}>
          <button
            onClick={() => toggleReadChapter(chapter.id)}
            className={`w-full sm:w-auto h-10 px-5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border transition-all cursor-pointer ${
              isRead
                ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                : 'bg-amber-500 hover:bg-amber-400 text-slate-950 border-amber-400 shadow-sm'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isRead ? 'Capítulo Lido (clique para desmarcar)' : 'Marcar Como Lido'}</span>
          </button>

          {nextChapter && (
            <button
              onClick={() => openChapter(guide.id, nextChapter.id)}
              className="w-full sm:w-auto h-10 px-4 rounded-xl text-xs font-semibold border border-slate-700 hover:border-slate-600 flex items-center justify-center gap-1.5 text-slate-300 cursor-pointer"
            >
              <span>Próximo Capítulo: {nextChapter.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
