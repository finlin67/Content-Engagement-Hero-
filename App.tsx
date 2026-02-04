import React from 'react';
import ContentEngagementTile from './components/ContentEngagementTile';

export default function App() {
  return (
    <main className="min-h-screen w-full bg-[#020617] flex flex-col items-center justify-center p-4 md:p-12 relative overflow-hidden">
      
      {/* Background Decor (Matching the aesthetic of the component) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#05b7d6]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#ec4899]/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Command Center
          </h1>
          <p className="text-slate-400 max-w-md mx-auto">
            The heart of your marketing operations. Orchestrate, analyze, and scale from one beautiful interface.
          </p>
        </div>

        {/* The Isolated Component */}
        <div className="scale-90 md:scale-100 transition-transform duration-500 hover:scale-[1.02]">
          <ContentEngagementTile />
        </div>

        <div className="mt-12 flex gap-4 text-slate-500 text-sm font-medium">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            System Operational
          </span>
          <span className="flex items-center gap-2">
             v2.4.0-beta
          </span>
        </div>
      </div>
    </main>
  );
}