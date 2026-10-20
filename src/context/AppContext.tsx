import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  UserProfile,
  ObjectiveType,
  ContactSituationType,
  MoodScore,
  EmotionalCheckIn,
  Achievement
} from '../types';
import { DAYS_DATA } from '../data/daysData';
import { GUIDES_DATA } from '../data/guidesData';

interface AppContextType {
  profile: UserProfile;
  completedDays: number[];
  checkedTasks: Record<string, boolean>;
  dayNotes: Record<number, string>;
  emotionalCheckIns: Record<string, EmotionalCheckIn>;
  readChapters: string[];
  favoriteChapters: string[];
  currentNav: 'home' | 'plan' | 'library' | 'progress' | 'profile';
  selectedDayId: number | null;
  selectedGuideId: string | null;
  selectedChapterId: string | null;
  currentActiveDayId: number;
  // actions
  updateProfile: (updates: Partial<UserProfile>) => void;
  loginUser: (email: string, passwordOrCode?: string, name?: string) => void;
  logoutUser: () => void;
  completeOnboarding: (name: string, objective: ObjectiveType, contactSituation: ContactSituationType, email?: string) => void;
  setCurrentNav: (nav: 'home' | 'plan' | 'library' | 'progress' | 'profile') => void;
  openDay: (dayId: number) => void;
  closeDay: () => void;
  openChapter: (guideId: string, chapterId: string) => void;
  closeChapter: () => void;
  toggleTask: (taskId: string) => void;
  toggleDayCompleted: (dayId: number) => void;
  saveDayNote: (dayId: number, note: string) => void;
  saveEmotionalCheckIn: (mood: MoodScore, note?: string) => void;
  toggleReadChapter: (chapterId: string) => void;
  toggleFavoriteChapter: (chapterId: string) => void;
  exportNotesAsTxt: () => void;
  resetProgress: () => void;
  clearAllData: () => void;
  achievements: Achievement[];
  getTodayDateString: () => string;
}

const STORAGE_KEY_PROFILE = 'prc_user_profile_v1';
const STORAGE_KEY_PROGRESS = 'prc_user_progress_v1';
const STORAGE_KEY_NOTES = 'prc_user_notes_v1';
const STORAGE_KEY_CHECKINS = 'prc_user_checkins_v1';
const STORAGE_KEY_LIBRARY = 'prc_user_library_v1';

const defaultProfile: UserProfile = {
  name: '',
  email: '',
  objective: 'reorganize',
  contactSituation: 'no_contact',
  onboarded: false,
  isLoggedIn: false,
  theme: 'dark',
  reducedMotion: false
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Profile State
  const [profile, setProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROFILE);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...defaultProfile,
          ...parsed,
          isLoggedIn: typeof parsed.isLoggedIn === 'boolean' ? parsed.isLoggedIn : Boolean(parsed.onboarded)
        };
      }
      return defaultProfile;
    } catch {
      return defaultProfile;
    }
  });

  // 2. Completed Days and Tasks
  const [completedDays, setCompletedDays] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROGRESS);
      if (saved) {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed.completedDays) ? parsed.completedDays : [];
      }
      return [];
    } catch {
      return [];
    }
  });

  const [checkedTasks, setCheckedTasks] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROGRESS);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.checkedTasks || {};
      }
      return {};
    } catch {
      return {};
    }
  });

  // 3. Day Notes
  const [dayNotes, setDayNotes] = useState<Record<number, string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_NOTES);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // 4. Emotional Check-ins (by YYYY-MM-DD)
  const [emotionalCheckIns, setEmotionalCheckIns] = useState<Record<string, EmotionalCheckIn>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CHECKINS);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // 5. Library stats (read, favorites)
  const [readChapters, setReadChapters] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_LIBRARY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed.read) ? parsed.read : [];
      }
      return [];
    } catch {
      return [];
    }
  });

  const [favoriteChapters, setFavoriteChapters] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_LIBRARY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed.favorites) ? parsed.favorites : [];
      }
      return [];
    } catch {
      return [];
    }
  });

  // 6. Navigation and selection state
  const [currentNav, setCurrentNav] = useState<'home' | 'plan' | 'library' | 'progress' | 'profile'>('home');
  const [selectedDayId, setSelectedDayId] = useState<number | null>(null);
  const [selectedGuideId, setSelectedGuideId] = useState<string | null>(null);
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);

  // Sync profile to localStorage and html tag
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(profile));
    } catch (e) {
      console.error(e);
    }

    if (profile.theme === 'light') {
      document.documentElement.classList.add('light-theme');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.remove('light-theme');
      document.documentElement.classList.add('dark');
    }
  }, [profile]);

  // Sync progress
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY_PROGRESS,
        JSON.stringify({ completedDays, checkedTasks })
      );
    } catch (e) {
      console.error(e);
    }
  }, [completedDays, checkedTasks]);

  // Sync notes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_NOTES, JSON.stringify(dayNotes));
    } catch (e) {
      console.error(e);
    }
  }, [dayNotes]);

  // Sync check-ins
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_CHECKINS, JSON.stringify(emotionalCheckIns));
    } catch (e) {
      console.error(e);
    }
  }, [emotionalCheckIns]);

  // Sync library
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY_LIBRARY,
        JSON.stringify({ read: readChapters, favorites: favoriteChapters })
      );
    } catch (e) {
      console.error(e);
    }
  }, [readChapters, favoriteChapters]);

  // Helpers
  const getTodayDateString = () => {
    const today = new Date();
    const y = today.getFullYear();
    const m = String(today.getMonth() + 1).padStart(2, '0');
    const d = String(today.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  };

  const updateProfile = (updates: Partial<UserProfile>) => {
    setProfile(prev => ({ ...prev, ...updates }));
  };

  const loginUser = (email: string, _passwordOrCode?: string, customName?: string) => {
    setProfile(prev => {
      const derivedName = customName?.trim() || prev.name || (email ? email.split('@')[0] : 'Membro');
      return {
        ...prev,
        email: email.trim(),
        name: derivedName,
        onboarded: true,
        isLoggedIn: true
      };
    });
  };

  const logoutUser = () => {
    setProfile(prev => ({
      ...prev,
      isLoggedIn: false
    }));
  };

  const completeOnboarding = (
    name: string,
    objective: ObjectiveType,
    contactSituation: ContactSituationType,
    email?: string
  ) => {
    setProfile(prev => ({
      ...prev,
      name: name.trim() || 'Companheiro',
      email: email?.trim() || prev.email || '',
      objective,
      contactSituation,
      onboarded: true,
      isLoggedIn: true
    }));
  };

  const openDay = (dayId: number) => {
    setSelectedDayId(dayId);
  };

  const closeDay = () => {
    setSelectedDayId(null);
  };

  const openChapter = (guideId: string, chapterId: string) => {
    setSelectedGuideId(guideId);
    setSelectedChapterId(chapterId);
  };

  const closeChapter = () => {
    setSelectedGuideId(null);
    setSelectedChapterId(null);
  };

  const toggleTask = (taskId: string) => {
    setCheckedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  const toggleDayCompleted = (dayId: number) => {
    setCompletedDays(prev => {
      if (prev.includes(dayId)) {
        return prev.filter(id => id !== dayId);
      } else {
        return [...prev, dayId].sort((a, b) => a - b);
      }
    });
  };

  const saveDayNote = (dayId: number, note: string) => {
    setDayNotes(prev => ({
      ...prev,
      [dayId]: note
    }));
  };

  const saveEmotionalCheckIn = (mood: MoodScore, note?: string) => {
    const todayStr = getTodayDateString();
    const moodLabels: Record<MoodScore, string> = {
      1: 'Muito mal',
      2: 'Mal',
      3: 'Neutro',
      4: 'Bem',
      5: 'Muito bem'
    };
    const newCheckIn: EmotionalCheckIn = {
      date: todayStr,
      mood,
      label: moodLabels[mood],
      note,
      timestamp: Date.now()
    };
    setEmotionalCheckIns(prev => ({
      ...prev,
      [todayStr]: newCheckIn
    }));
  };

  const toggleReadChapter = (chapterId: string) => {
    setReadChapters(prev =>
      prev.includes(chapterId)
        ? prev.filter(id => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  const toggleFavoriteChapter = (chapterId: string) => {
    setFavoriteChapters(prev =>
      prev.includes(chapterId)
        ? prev.filter(id => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  // Current active day is the first uncompleted day, or 14 if all completed, or 1 by default
  const currentActiveDayId = (() => {
    for (let i = 1; i <= 14; i++) {
      if (!completedDays.includes(i)) {
        return i;
      }
    }
    return 14;
  })();

  const exportNotesAsTxt = () => {
    let content = `PLANO RECONQUISTA CERTA — 14 DIAS\n`;
    content += `Caderno de Anotações Pessoais de ${profile.name || 'Usuário'}\n`;
    content += `Exportado em: ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')}\n`;
    content += `Objetivo Definido: ${
      profile.objective === 'reorganize'
        ? 'Reorganizar as emoções'
        : profile.objective === 'reapproach'
        ? 'Avaliar uma reaproximação'
        : 'Seguir em frente'
    }\n`;
    content += `Situação de Contato: ${
      profile.contactSituation === 'still_talking'
        ? 'Ainda conversamos'
        : profile.contactSituation === 'no_contact'
        ? 'Estamos sem contato'
        : 'Ela pediu para não ser procurada'
    }\n`;
    content += `========================================================\n\n`;

    let notesCount = 0;
    DAYS_DATA.forEach(day => {
      const note = dayNotes[day.id];
      if (note && note.trim().length > 0) {
        notesCount++;
        content += `DIA ${day.id}: ${day.title.toUpperCase()}\n`;
        content += `Objetivo: ${day.objective}\n`;
        content += `Minhas Anotações:\n${note.trim()}\n`;
        content += `--------------------------------------------------------\n\n`;
      }
    });

    if (notesCount === 0) {
      content += `Nenhuma anotação individual foi registrada até o momento.\n`;
    }

    content += `\nHistórico de Check-ins Emocionais:\n`;
    const checkinDates = Object.keys(emotionalCheckIns).sort();
    if (checkinDates.length === 0) {
      content += `Nenhum check-in registrado.\n`;
    } else {
      checkinDates.forEach(date => {
        const item = emotionalCheckIns[date];
        content += `${date}: ${item.label} (${item.mood}/5)${item.note ? ` - Nota: ${item.note}` : ''}\n`;
      });
    }

    content += `\nFim do documento.\n`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `plano-reconquista-anotacoes-${getTodayDateString()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const resetProgress = () => {
    setCompletedDays([]);
    setCheckedTasks({});
    setEmotionalCheckIns({});
    setReadChapters([]);
    localStorage.removeItem(STORAGE_KEY_PROGRESS);
    localStorage.removeItem(STORAGE_KEY_CHECKINS);
    localStorage.removeItem(STORAGE_KEY_LIBRARY);
  };

  const clearAllData = () => {
    localStorage.removeItem(STORAGE_KEY_PROFILE);
    localStorage.removeItem(STORAGE_KEY_PROGRESS);
    localStorage.removeItem(STORAGE_KEY_NOTES);
    localStorage.removeItem(STORAGE_KEY_CHECKINS);
    localStorage.removeItem(STORAGE_KEY_LIBRARY);
    setProfile(defaultProfile);
    setCompletedDays([]);
    setCheckedTasks({});
    setDayNotes({});
    setEmotionalCheckIns({});
    setReadChapters([]);
    setFavoriteChapters([]);
    setCurrentNav('home');
    setSelectedDayId(null);
    setSelectedGuideId(null);
    setSelectedChapterId(null);
  };

  // Real achievements calculation
  const achievements: Achievement[] = [
    {
      id: 'first_step',
      title: 'Primeiro Passo',
      description: 'Concluiu o primeiro dia do plano com serenidade.',
      icon: 'Footprints',
      unlocked: completedDays.includes(1) || completedDays.length >= 1,
      progressText: completedDays.length >= 1 ? 'Concluído' : '0/1 dia'
    },
    {
      id: 'constancy_checkins',
      title: 'Constância Emocional',
      description: 'Registrou 3 ou mais check-ins emocionais diários.',
      icon: 'HeartPulse',
      unlocked: Object.keys(emotionalCheckIns).length >= 3,
      progressText: `${Math.min(Object.keys(emotionalCheckIns).length, 3)}/3 registros`
    },
    {
      id: 'halfway',
      title: 'Metade do Caminho',
      description: 'Concluiu 7 dias completos da sua jornada pessoal.',
      icon: 'Compass',
      unlocked: completedDays.length >= 7,
      progressText: `${Math.min(completedDays.length, 7)}/7 dias`
    },
    {
      id: 'conscious_reader',
      title: 'Leitor Consciente',
      description: 'Completou a leitura de 3 capítulos na biblioteca.',
      icon: 'BookOpen',
      unlocked: readChapters.length >= 3,
      progressText: `${Math.min(readChapters.length, 3)}/3 lidos`
    },
    {
      id: 'clarity_strength',
      title: 'Autonomia & Clareza',
      description: 'Alcançou a marca de 10 dias concluídos com maturidade.',
      icon: 'Shield',
      unlocked: completedDays.length >= 10,
      progressText: `${Math.min(completedDays.length, 10)}/10 dias`
    },
    {
      id: 'master_journey',
      title: 'Mestre da Própria Jornada',
      description: 'Finalizou todos os 14 dias do plano com excelência.',
      icon: 'Award',
      unlocked: completedDays.length >= 14,
      progressText: `${completedDays.length}/14 dias`
    }
  ];

  return (
    <AppContext.Provider
      value={{
        profile,
        completedDays,
        checkedTasks,
        dayNotes,
        emotionalCheckIns,
        readChapters,
        favoriteChapters,
        currentNav,
        selectedDayId,
        selectedGuideId,
        selectedChapterId,
        currentActiveDayId,
        updateProfile,
        loginUser,
        logoutUser,
        completeOnboarding,
        setCurrentNav,
        openDay,
        closeDay,
        openChapter,
        closeChapter,
        toggleTask,
        toggleDayCompleted,
        saveDayNote,
        saveEmotionalCheckIn,
        toggleReadChapter,
        toggleFavoriteChapter,
        exportNotesAsTxt,
        resetProgress,
        clearAllData,
        achievements,
        getTodayDateString
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
