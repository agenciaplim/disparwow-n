import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { StreakBanner } from './components/StreakBanner';
import { InspirationalBanner } from './components/InspirationalBanner';
import { PerformanceHeader } from './components/PerformanceHeader';
import { ProgressSection } from './components/ProgressSection';
import { PotentialEarnings } from './components/PotentialEarnings';
import { LevelProgress } from './components/LevelProgress';
import { AchievementsBadges } from './components/AchievementsBadges';
import { RevenuePanel } from './components/RevenuePanel';
import { ActiveLeadsPanel } from './components/ActiveLeadsPanel';
import { QuickActions } from './components/QuickActions';
import { CRMPipeline } from './components/CRMPipeline';
import { MicroFeedback } from './components/MicroFeedback';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="size-full flex bg-[#0F0F14] dark">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="flex-1 flex flex-col">
        <TopBar />

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-[1600px] mx-auto p-8 space-y-6">
            <StreakBanner />

            <InspirationalBanner />

            <PerformanceHeader />

            <ProgressSection />

            <div className="grid grid-cols-3 gap-6">
              <PotentialEarnings />
              <LevelProgress />
              <AchievementsBadges />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <RevenuePanel />
              <ActiveLeadsPanel />
            </div>

            <QuickActions />

            <CRMPipeline />
          </div>
        </main>
      </div>

      <MicroFeedback />
    </div>
  );
}