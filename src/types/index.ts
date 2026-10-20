export type ObjectiveType = 'reorganize' | 'reapproach' | 'move_on';

export type ContactSituationType = 'still_talking' | 'no_contact' | 'asked_no_contact';

export type MoodScore = 1 | 2 | 3 | 4 | 5;

export interface UserProfile {
  name: string;
  email?: string;
  objective: ObjectiveType;
  contactSituation: ContactSituationType;
  onboarded: boolean;
  isLoggedIn: boolean;
  theme: 'dark' | 'light';
  reducedMotion: boolean;
}

export interface TaskItem {
  id: string;
  text: string;
}

export interface DayChallenge {
  title: string;
  duration: string;
  description: string;
  steps: string[];
}

export interface DayReflection {
  prompt: string;
  questions: string[];
}

export interface DayMistake {
  title: string;
  explanation: string;
  solution: string;
}

export interface DayItem {
  id: number;
  title: string;
  subtitle: string;
  estimatedTime: string;
  objective: string;
  lesson: string;
  challenge: DayChallenge;
  checklist: TaskItem[];
  reflection: DayReflection;
  commonMistake: DayMistake;
  isConditionalContact?: boolean;
  individualAlternative?: {
    title: string;
    objective: string;
    lesson: string;
    challenge: DayChallenge;
    checklist: TaskItem[];
    reflection: DayReflection;
    commonMistake: DayMistake;
  };
}

export interface GuideChapter {
  id: string;
  number: number;
  title: string;
  subtitle?: string;
  readTime: string;
  // Guia 1 structure
  behavior?: string;
  whyHurtful?: string;
  example?: string;
  whatToDoInstead?: string;
  practicalExercise?: string;
  // Guia 2 / Guia 3 structure
  intro?: string;
  keyPoints?: { title: string; description: string }[];
  practicalAction?: string;
  checklist?: string[];
  takeaway?: string;
}

export interface Guide {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  chapters: GuideChapter[];
}

export interface EmotionalCheckIn {
  date: string; // YYYY-MM-DD
  mood: MoodScore;
  label: string;
  note?: string;
  timestamp: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  progressText?: string;
}

export interface AppState {
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
}
