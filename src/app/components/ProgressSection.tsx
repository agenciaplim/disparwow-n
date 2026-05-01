import { MessageSquare, Clock, TrendingUp, CheckCircle2 } from 'lucide-react';
import * as Progress from '@radix-ui/react-progress';

interface ProgressCardProps {
  icon: React.ReactNode;
  label: string;
  current: number;
  target: number;
  color: string;
  glowColor: string;
}

function ProgressCard({ icon, label, current, target, color, glowColor }: ProgressCardProps) {
  const percentage = (current / target) * 100;

  return (
    <div className="bg-[#15151B] rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center shadow-[${glowColor}]`}>
          {icon}
        </div>
        <span className="text-[#A1A1AA]">{label}</span>
      </div>

      <div className="mb-3">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl text-white">{current}</span>
          <span className="text-[#A1A1AA]">/ {target}</span>
        </div>
      </div>

      <Progress.Root className="relative h-2 overflow-hidden rounded-full bg-[#1A1A22]">
        <Progress.Indicator
          className={`h-full ${color} transition-transform duration-500`}
          style={{ transform: `translateX(-${100 - percentage}%)` }}
        />
      </Progress.Root>
    </div>
  );
}

export function ProgressSection() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <ProgressCard
        icon={<MessageSquare className="w-5 h-5 text-white" />}
        label="Mensagens Enviadas"
        current={142}
        target={200}
        color="bg-[#7B2CFF]"
        glowColor="0_0_20px_rgba(123,44,255,0.4)"
      />
      <ProgressCard
        icon={<Clock className="w-5 h-5 text-white" />}
        label="Follow-ups Feitos"
        current={18}
        target={25}
        color="bg-[#FF6B00]"
        glowColor="0_0_20px_rgba(255,107,0,0.4)"
      />
      <ProgressCard
        icon={<TrendingUp className="w-5 h-5 text-white" />}
        label="Vendas Fechadas"
        current={9}
        target={15}
        color="bg-[#00D26A]"
        glowColor="0_0_20px_rgba(0,210,106,0.4)"
      />
      <ProgressCard
        icon={<CheckCircle2 className="w-5 h-5 text-white" />}
        label="Meta Diária"
        current={73}
        target={100}
        color="bg-gradient-to-r from-[#7B2CFF] to-[#FF6B00]"
        glowColor="0_0_20px_rgba(123,44,255,0.4)"
      />
    </div>
  );
}
