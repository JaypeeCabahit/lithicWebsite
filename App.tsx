import React, { useState } from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Artifacts from './components/Artifacts';
import ChatGuide from './components/ChatGuide';
import Developers from './components/Developers';
import Footer from './components/Footer';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('HOME');

  const renderView = () => {
    switch (currentView) {
      case 'HOME':
        return <Hero onNavigate={setCurrentView} />;
      case 'TIMELINE':
        return <Timeline />;
      case 'ARTIFACTS':
        return <Artifacts />;
      case 'GUIDE':
        return <ChatGuide />;
      case 'TEAM':
        return <Developers />;
      default:
        return <Hero onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 selection:bg-amber-500 selection:text-stone-900 font-sans overflow-x-hidden flex flex-col">
      <main className="flex-grow">
        <div key={currentView} className="animate-page-enter min-h-screen w-full">
          {renderView()}
        </div>
      </main>
      {currentView !== 'HOME' && <Footer />}
    </div>
  );
};

export default App;
