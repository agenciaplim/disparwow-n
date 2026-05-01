import { TrendingUp, Flame, AlertCircle } from 'lucide-react';

export function PotentialEarnings() {
  const hotLeadsCommission = 627; // R$ 360 + R$ 267
  const warmLeadsCommission = 630; // R$ 195 + R$ 435
  const totalPotential = hotLeadsCommission + warmLeadsCommission;

  return (
    <div className="bg-gradient-to-br from-[#00D26A]/10 to-[#00D26A]/5 rounded-xl p-6 border border-[#00D26A]/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D26A]/5 rounded-full blur-3xl"></div>

      <div className="relative">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-[#00D26A]" />
          <h3 className="text-white">Potencial de Ganhos</h3>
        </div>

        <div className="mb-6">
          <p className="text-[#A1A1AA] text-sm mb-2">Se você fechar todos os leads ativos:</p>
          <div className="text-4xl text-[#00D26A] drop-shadow-[0_0_20px_rgba(0,210,106,0.3)]">
            +R$ {totalPotential.toLocaleString()}
          </div>
          <p className="text-[#A1A1AA] text-sm mt-1">de comissão a receber</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#1A1A22] rounded-lg p-4 border border-white/5">
            <div className="flex items-center gap-2 mb-2">
              <Flame className="w-4 h-4 text-[#FF6B00]" />
              <span className="text-[#A1A1AA] text-sm">Leads Quentes</span>
            </div>
            <p className="text-2xl text-white">R$ {hotLeadsCommission}</p>
            <p className="text-[#00D26A] text-xs mt-1">2 leads prontos para fechar</p>
          </div>

          <div className="bg-[#1A1A22] rounded-lg p-4 border border-white/5">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-4 h-4 text-[#7B2CFF]" />
              <span className="text-[#A1A1AA] text-sm">Leads Mornos</span>
            </div>
            <p className="text-2xl text-white">R$ {warmLeadsCommission}</p>
            <p className="text-[#FF6B00] text-xs mt-1">Precisa fazer follow-up</p>
          </div>
        </div>

        <div className="mt-4 bg-[#7B2CFF]/10 rounded-lg p-3 border border-[#7B2CFF]/20">
          <p className="text-white text-sm">
            💡 <span className="text-[#A1A1AA]">Dica:</span> Priorize os leads quentes primeiro para garantir R$ {hotLeadsCommission} hoje!
          </p>
        </div>
      </div>
    </div>
  );
}
