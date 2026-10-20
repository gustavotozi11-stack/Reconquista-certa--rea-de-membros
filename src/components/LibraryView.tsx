import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { GUIDES_DATA } from '../data/guidesData';
import {
  Search,
  BookOpen,
  Bookmark,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  Filter
} from 'lucide-react';

export const LibraryView: React.FC = () => {
  const {
    profile,
    readChapters,
    favoriteChapters,
    toggleFavoriteChapter,
    openChapter
  } = useApp();

  const isLight = profile.theme === 'light';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGuideId, setSelectedGuideId] = useState<string>('all');
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [readFilter, setReadFilter] = useState<'all' | 'unread' | 'read'>('all');

  // Flatten chapters with parent guide info
  const allChapters = GUIDES_DATA.flatMap(guide =>
    guide.chapters.map(chapter => ({
      ...chapter,
      guideId: guide.id,
      guideNumber: guide.number,
      guideTitle: guide.title,
      guideBadge: guide.badge
    }))
  );

  const filteredChapters = allChapters.filter(ch => {
    // Guide filter
    if (selectedGuideId !== 'all' && ch.guideId !== selectedGuideId) {
      return false;
    }

    // Favorites filter
    if (onlyFavorites && !favoriteChapters.includes(ch.id)) {
      return false;
    }

    // Read filter
    const isRead = readChapters.includes(ch.id);
    if (readFilter === 'read' && !isRead) return false;
    if (readFilter === 'unread' && isRead) return false;

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = ch.title.toLowerCase().includes(q);
      const matchSubtitle = ch.subtitle?.toLowerCase().includes(q) || false;
      const matchBehavior = ch.behavior?.toLowerCase().includes(q) || false;
      const matchIntro = ch.intro?.toLowerCase().includes(q) || false;
      const matchGuide = ch.guideTitle.toLowerCase().includes(q);
      return matchTitle || matchSubtitle || matchBehavior || matchIntro || matchGuide;
    }

    return true;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Page Header */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white [html.light-theme_&]:text-slate-900">
          Biblioteca de Conteúdos Extras
        </h2>
        <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
          Três guias estruturados com aulas escritas, exemplos práticos e checklists para fundamentar sua mentalidade e seu discernimento.
        </p>
      </div>

      {/* Guide Banner Cards (Quick Filter Selectors) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {GUIDES_DATA.map(guide => {
          const isSelected = selectedGuideId === guide.id;
          const readCount = guide.chapters.filter(c => readChapters.includes(c.id)).length;
          return (
            <button
              key={guide.id}
              onClick={() => setSelectedGuideId(isSelected ? 'all' : guide.id)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                isSelected
                  ? 'border-amber-400 bg-amber-500/15 ring-2 ring-amber-400/20'
                  : isLight
                    ? 'bg-white border-slate-200 hover:border-slate-300'
                    : 'bg-[#151D2A] border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] font-bold text-amber-500 uppercase tracking-wider mb-1">
                <span>Guia 0{guide.number}</span>
                <span className="font-mono text-slate-400">
                  {readCount}/{guide.chapters.length} lidos
                </span>
              </div>
              <h3 className="text-sm font-bold text-white [html.light-theme_&]:text-slate-900 line-clamp-1">
                {guide.title}
              </h3>
              <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                {guide.badge}
              </p>
            </button>
          );
        })}
      </div>

      {/* Search and Filters Bar */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Buscar por assunto, título ou palavra-chave nos guias..."
            className="w-full h-11 pl-10 pr-4 rounded-xl bg-[#0B111E] border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
            >
              Limpar
            </button>
          )}
        </div>

        {/* Filter controls row */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1">
          <div className="flex flex-wrap items-center gap-2">
            {/* Guide filter button */}
            {selectedGuideId !== 'all' && (
              <button
                onClick={() => setSelectedGuideId('all')}
                className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1 cursor-pointer"
              >
                <span>Limpar filtro de guia</span>
                <span className="font-bold">×</span>
              </button>
            )}

            {/* Favorites toggle */}
            <button
              onClick={() => setOnlyFavorites(!onlyFavorites)}
              className={`h-8 px-3 rounded-lg text-xs font-semibold border flex items-center gap-1.5 transition-colors cursor-pointer ${
                onlyFavorites
                  ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                  : isLight
                    ? 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    : 'border-slate-800 bg-[#151D2A] text-slate-400 hover:text-slate-200'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${onlyFavorites ? 'fill-current' : ''}`} />
              <span>Favoritos ({favoriteChapters.length})</span>
            </button>

            {/* Read status filter */}
            <div className={`inline-flex rounded-lg border p-0.5 ${
              isLight ? 'bg-slate-200/80 border-slate-300' : 'bg-[#151D2A] border-slate-800'
            }`}>
              {(['all', 'unread', 'read'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setReadFilter(f)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                    readFilter === f
                      ? isLight
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'bg-amber-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {f === 'all' ? 'Todos' : f === 'unread' ? 'Não lidos' : 'Lidos'}
                </button>
              ))}
            </div>
          </div>

          <span className="text-xs text-slate-400 font-medium">
            {filteredChapters.length} capítulos encontrados
          </span>
        </div>
      </div>

      {/* Chapters Grid / List */}
      {filteredChapters.length === 0 ? (
        <div className={`p-12 text-center rounded-2xl border space-y-3 ${
          isLight ? 'bg-white border-slate-200' : 'bg-[#151D2A] border-slate-800'
        }`}>
          <BookOpen className="w-10 h-10 text-slate-500 mx-auto" />
          <h3 className="text-base font-bold text-white [html.light-theme_&]:text-slate-900">
            Nenhum capítulo corresponde aos filtros
          </h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Tente remover os termos de busca ou redefinir os filtros de favoritos e status de leitura.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedGuideId('all');
              setOnlyFavorites(false);
              setReadFilter('all');
            }}
            className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs cursor-pointer"
          >
            Redefinir Filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {filteredChapters.map(chapter => {
            const isRead = readChapters.includes(chapter.id);
            const isFav = favoriteChapters.includes(chapter.id);

            return (
              <div
                key={chapter.id}
                onClick={() => openChapter(chapter.guideId, chapter.id)}
                className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer group flex flex-col justify-between ${
                  isLight
                    ? 'bg-white border-slate-200 hover:border-amber-300 hover:shadow-md'
                    : 'bg-[#151D2A] border-slate-800 hover:border-amber-500/50 hover:bg-[#1a2434]'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold text-amber-500 uppercase tracking-wider">
                      Guia 0{chapter.guideNumber} · Cap. {chapter.number}
                    </span>

                    <div className="flex items-center gap-1.5">
                      {isRead && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                          <CheckCircle2 className="w-3 h-3" />
                          Lido
                        </span>
                      )}

                      <button
                        type="button"
                        onClick={e => {
                          e.stopPropagation();
                          toggleFavoriteChapter(chapter.id);
                        }}
                        aria-label="Favoritar"
                        className={`w-7 h-7 rounded-lg flex items-center justify-center border transition-colors cursor-pointer ${
                          isFav
                            ? 'bg-amber-500/20 border-amber-400 text-amber-400'
                            : 'border-slate-800 hover:border-slate-700 text-slate-500 hover:text-slate-300'
                        }`}
                      >
                        <Bookmark className={`w-3.5 h-3.5 ${isFav ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white [html.light-theme_&]:text-slate-900 group-hover:text-amber-400 transition-colors">
                    {chapter.title}
                  </h3>

                  {chapter.subtitle && (
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {chapter.subtitle}
                    </p>
                  )}
                </div>

                <div className="pt-4 mt-3 border-t border-slate-800/60 [html.light-theme_&]:border-slate-100 flex items-center justify-between text-xs text-slate-400 group-hover:text-amber-300">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-500" />
                    {chapter.readTime}
                  </span>
                  <div className="flex items-center gap-1 font-semibold text-amber-400 text-xs">
                    <span>Ler aula</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
