import { Flame, Calendar, Trophy } from 'lucide-react';

export function StreakBanner() {
  const currentStreak = 5;
  const bestStreak = 12;
  const daysThisWeek = [
    { day: 'S', completed: true },
    { day: 'T', completed: true },
    { day: 'Q', completed: true },
    { day: 'Q', completed: true },
    { day: 'S', completed: true },
    { day: 'S', completed: false },
    { day: 'D', completed: false },
  ];

  return (
    <div className="bg-gradient-to-r from-[#FF6B00]/20 to-[#7B2CFF]/20 rounded-xl p-4 border border-[#FF6B00]/30">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#FF6B00]/20 flex items-center justify-center">
              <Flame className="w-6 h-6 text-[#FF6B00]" />
            </div>
            <div>
              <p className="text-[#A1A1AA] text-sm">Sequência Atual</p>
              <p className="text-2xl text-[#FF6B00]">{currentStreak} dias 🔥</p>
            </div>
          </div>

          <div className="h-10 w-px bg-white/10"></div>

          <div className="flex items-center gap-3">
            <Trophy className="w-5 h-5 text-[#7B2CFF]" />
            <div>
              <p className="text-[#A1A1AA] text-sm">Recorde Pessoal</p>
              <p className="text-white">{bestStreak} dias</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {daysThisWeek.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-1`}
            >
              <span className="text-[#A1A1AA] text-xs">{item.day}</span>
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ${
                  item.completed
                    ? 'bg-[#00D26A]/20 border-2 border-[#00D26A]'
                    : 'bg-[#1A1A22] border-2 border-white/10'
                }`}
              >
                {item.completed && <Calendar className="w-4 h-4 text-[#00D26A]" />}
              </div>
            </div>
          ))}
        </div>

        <div className="text-right">
          <p className="text-[#A1A1AA] text-sm">Não perca sua sequência!</p>
          <p className="text-white">Bata a meta hoje para manter o streak</p>
        </div>
      </div>
    </div>
  );
}
