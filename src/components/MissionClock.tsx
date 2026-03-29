import React, { useState, useEffect } from 'react';

const MissionClock: React.FC = () => {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    // Fictional epoch logic: count up from some arbitrary starting point.
    // Let's just create a clock counting up every second.
    const interval = setInterval(() => {
      setElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds: number) => {
    // Add a base offset to make it look like an ongoing long mission
    const baseSeconds = 86400 * 42 + 3600 * 7 + 60 * 14; 
    const current = totalSeconds + baseSeconds;
    
    const h = Math.floor(current / 3600);
    const m = Math.floor((current % 3600) / 60);
    const s = current % 60;
    
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-[10px] uppercase font-inter text-plasma-cyan tracking-widest mb-1 opacity-80">
        Mission Duration
      </div>
      <div className="font-orbitron text-2xl md:text-3xl font-bold text-void-white text-shadow-glow-cyan tracking-wider">
        T+ {formatTime(elapsed)}
      </div>
    </div>
  );
};

export default MissionClock;
