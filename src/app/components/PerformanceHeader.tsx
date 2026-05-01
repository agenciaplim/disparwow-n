import { TrendingUp, Target } from 'lucide-react';
import * as Progress from '@radix-ui/react-progress';

export function PerformanceHeader() {
  const todayRevenue = 3240;
  const todayCommission = 972;
  const fixedCommission = 500;
  const totalEarnings = todayCommission + fixedCommission;
  const weeklyGoal = 10000;
  const weeklyProgress = 7850;
  const progressPercentage = (weeklyProgress / weeklyGoal) * 100;

  return (
    <div className="bg-gradient-to-br from-[#15151B] to-[#1A1A22] rounded-xl p-8 border border-white/10 shadow-[0_0_40px_rgba(123,44,255,0.1)]">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-[#00D26A]" />
            <span className="text-[#A1A1AA]">Seus Ganhos Hoje</span>
          </div>
          <div className="text-5xl text-[#00D26A] mb-2 drop-shadow-[0_0_20px_rgba(0,210,106,0.3)]">R$ {totalEarnings.toLocaleString()}</div>
          <div className="flex items-center gap-3 flex-wrap">
            <p className="text-white text-sm">Vendas: R$ {todayRevenue.toLocaleString()}</p>
            <span className="text-[#A1A1AA]">•</span>
            <p className="text-[#7B2CFF] text-sm">Comissão: R$ {todayCommission}</p>
            <span className="text-[#A1A1AA]">•</span>
            <p className="text-[#FF6B00] text-sm">Fixo: R$ {fixedCommission}</p>
          </div>
          <p className="text-[#00D26A] text-sm mt-2">+R$ 234 a mais que ontem</p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-[#7B2CFF]" />
            <span className="text-[#A1A1AA]">Meta Semanal</span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-white">R$ {weeklyProgress.toLocaleString()} / R$ {weeklyGoal.toLocaleString()}</span>
              <span className="text-[#A1A1AA]">{Math.round(progressPercentage)}%</span>
            </div>

            <Progress.Root className="relative h-3 overflow-hidden rounded-full bg-[#1A1A22]">
              <Progress.Indicator
                className="h-full bg-gradient-to-r from-[#7B2CFF] to-[#FF6B00] transition-transform duration-500 shadow-[0_0_15px_rgba(123,44,255,0.5)]"
                style={{ transform: `translateX(-${100 - progressPercentage}%)` }}
              />
            </Progress.Root>

            <p className="text-[#A1A1AA] text-sm mt-3">
              Você está quase lá. Continue assim!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
