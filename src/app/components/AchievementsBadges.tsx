import { CheckCircle2, Lock, Zap, Target, Flame, MessageSquare } from 'lucide-react';

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  unlocked: boolean;
  color: string;
  bgColor: string;
}

const badges: Badge[] = [
  {
    id: '1',
    name: 'Primeira Venda',
    description: 'Fechou a primeira venda do dia',
    icon: CheckCircle2,
    unlocked: true,
    color: 'text-[#00D26A]',
    bgColor: 'bg-[#00D26A]/20'
  },
  {
    id: '2',
    name: 'Velocidade',
    description: '5 follow-ups em 1 hora',
    icon: Zap,
    unlocked: true,
    color: 'text-[#FF6B00]',
    bgColor: 'bg-[#FF6B00]/20'
  },
  {
    id: '3',
    name: 'Meta Batida',
    description: 'Bateu a meta diária',
    icon: Target,
    unlocked: false,
    color: 'text-[#7B2CFF]',
    bgColor: 'bg-[#7B2CFF]/20'
  },
  {
    id: '4',
    name: 'Streak Master',
    description: '7 dias seguidos batendo meta',
    icon: Flame,
    unlocked: false,
    color: 'text-[#FF6B00]',
    bgColor: 'bg-[#FF6B00]/20'
  },
  {
    id: '5',
    name: 'Comunicador',
    description: '100 mensagens enviadas',
    icon: MessageSquare,
    unlocked: true,
    color: 'text-[#7B2CFF]',
    bgColor: 'bg-[#7B2CFF]/20'
  },
];

export function AchievementsBadges() {
  const unlockedCount = badges.filter(b => b.unlocked).length;

  return (
    <div className="bg-[#15151B] rounded-xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white">Conquistas</h3>
        <span className="text-[#A1A1AA] text-sm">{unlockedCount}/{badges.length} desbloqueadas</span>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {badges.map((badge) => {
          const Icon = badge.icon;

          return (
            <div
              key={badge.id}
              className={`relative group cursor-pointer transition-all duration-300 ${
                badge.unlocked ? 'hover:scale-110' : ''
              }`}
            >
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  badge.unlocked
                    ? `${badge.bgColor} border-2 ${badge.color.replace('text', 'border')}`
                    : 'bg-[#1A1A22] border-2 border-white/10 grayscale'
                }`}
              >
                {badge.unlocked ? (
                  <Icon className={`w-8 h-8 ${badge.color}`} />
                ) : (
                  <Lock className="w-8 h-8 text-white/20" />
                )}
              </div>

              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                <div className="bg-[#15151B] border border-white/10 rounded-lg p-3 shadow-lg min-w-[160px]">
                  <p className={`text-sm ${badge.unlocked ? 'text-white' : 'text-[#A1A1AA]'} mb-1`}>
                    {badge.name}
                  </p>
                  <p className="text-xs text-[#A1A1AA]">{badge.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
