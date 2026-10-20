import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navigation } from './components/Navigation';
import { Header } from './components/Header';
import { AuthOnboardingScreen } from './components/AuthOnboardingScreen';
import { HomeView } from './components/HomeView';
import { PlanView } from './components/PlanView';
import { LibraryView } from './components/LibraryView';
import { ProgressView } from './components/ProgressView';
import { ProfileView } from './components/ProfileView';
import { DayDetailModal } from './components/DayDetailModal';
import { ChapterReaderModal } from './components/ChapterReaderModal';

const MainLayout: React.FC = () => {
  const {
    currentNav,
    selectedDayId,
    closeDay,
    selectedGuideId,
    selectedChapterId,
    closeChapter,
    profile
  } = useApp();

  const isLight = profile.theme === 'light';

  // If not logged in, render the dedicated full-page auth/onboarding screen without clipping
  if (!profile.isLoggedIn) {
    return <AuthOnboardingScreen />;
  }

  return (
    <div className={`min-h-screen flex flex-col md:flex-row transition-colors ${
      isLight ? 'bg-slate-100 text-slate-800' : 'bg-[#0B111E] text-slate-100'
    } ${profile.reducedMotion ? 'motion-reduce' : ''}`}>
      {/* Navigation: Sidebar (desktop) and Bottom Tabs (mobile) */}
      <Navigation />

      {/* Primary Content Column */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen pb-20 md:pb-8">
        <Header />

        <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 lg:p-8">
          {currentNav === 'home' && <HomeView />}
          {currentNav === 'plan' && <PlanView />}
          {currentNav === 'library' && <LibraryView />}
          {currentNav === 'progress' && <ProgressView />}
          {currentNav === 'profile' && <ProfileView />}
        </main>
      </div>

      {/* Active Day Detail Modal */}
      {selectedDayId !== null && (
        <DayDetailModal dayId={selectedDayId} onClose={closeDay} />
      )}

      {/* Active Chapter Reader Modal */}
      {selectedGuideId !== null && selectedChapterId !== null && (
        <ChapterReaderModal
          guideId={selectedGuideId}
          chapterId={selectedChapterId}
          onClose={closeChapter}
        />
      )}
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
