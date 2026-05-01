import { Trophy, Star, Zap } from 'lucide-react';
import * as Progress from '@radix-ui/react-progress';

export function LevelProgress() {
  const currentLevel = 'Prata';
  const currentXP = 7850;
  const nextLevelXP = 10000;
  const progressPercentage = (currentXP / nextLevelXP) * 100;
  const remaining = nextLevelXP - currentXP;

  const levels = [
    { name: 'Bronze', min: 0, color: 'text-[#CD7F32]', completed: true },
    { name: 'Prata', min: 5000, color: 'text-[#C0C0C0]', completed: false, current: true },
    { name: 'Ouro', min: 10000, color: 'text-[#FFD700]', completed: false },
    { name: 'Platina', min: 20000, color: 'text-[#E5E4E2]', completed: false },
    { name: 'Diamante', min: 35000, color: 'text-[#7B2CFF]', completed: false },
  ];

  return (
    <div className="bg-[#15151B] rounded-xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C0C0C0] to-[#808080] flex items-center justify-center">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white">Nível {currentLevel}</h3>
            <p className="text-[#A1A1AA] text-sm">Continue vendendo para evoluir!</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-white">R$ {currentXP.toLocaleString()} / R$ {nextLevelXP.toLocaleString()}</span>
          <span className="text-[#7B2CFF]">Faltam R$ {remaining.toLocaleString()} para Ouro</span>
        </div>

        <Progress.Root className="relative h-4 overflow-hidden rounded-full bg-[#1A1A22] border border-white/10">
          <Progress.Indicator
            className="h-full bg-gradient-to-r from-[#C0C0C0] to-[#FFD700] transition-transform duration-500 shadow-[0_0_15px_rgba(192,192,192,0.5)]"
            style={{ transform: `translateX(-${100 - progressPercentage}%)` }}
          />
        </Progress.Root>
      </div>

      <div className="flex items-center justify-between gap-2">
        {levels.map((level, index) => (
          <div
            key={level.name}
            className="flex flex-col items-center gap-2 flex-1"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                level.completed
                  ? 'bg-[#00D26A]/20 border-2 border-[#00D26A]'
                  : level.current
                  ? 'bg-gradient-to-br from-[#C0C0C0]/20 to-[#808080]/20 border-2 border-[#C0C0C0] animate-pulse'
                  : 'bg-[#1A1A22] border-2 border-white/10'
              }`}
            >
              {level.completed ? (
                <Star className="w-5 h-5 text-[#00D26A]" />
              ) : level.current ? (
                <Zap className="w-5 h-5 text-[#C0C0C0]" />
              ) : (
                <Star className="w-5 h-5 text-white/20" />
              )}
            </div>
            <span className={`text-xs ${level.current ? level.color : 'text-[#A1A1AA]'}`}>
              {level.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
