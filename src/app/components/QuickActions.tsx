import { Send, Radio, UserPlus, Zap } from 'lucide-react';

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  description: string;
  color: string;
  onClick?: () => void;
}

function ActionButton({ icon, label, description, color, onClick }: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${color} rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 text-left group hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(123,44,255,0.2)]`}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="flex-1">
          <h4 className="text-white mb-1">{label}</h4>
          <p className="text-[#A1A1AA] text-sm">{description}</p>
        </div>
        <Zap className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
      </div>
    </button>
  );
}

export function QuickActions() {
  return (
    <div className="bg-[#15151B] rounded-xl p-6 border border-white/10">
      <h3 className="text-white mb-6">Ações Rápidas</h3>

      <div className="grid grid-cols-3 gap-4">
        <ActionButton
          icon={<Send className="w-6 h-6 text-white" />}
          label="Enviar Mensagens"
          description="Disparar para sua lista"
          color="bg-gradient-to-br from-[#7B2CFF]/20 to-[#7B2CFF]/5"
        />

        <ActionButton
          icon={<Radio className="w-6 h-6 text-white" />}
          label="Iniciar Campanha"
          description="Criar novo disparo"
          color="bg-gradient-to-br from-[#FF6B00]/20 to-[#FF6B00]/5"
        />

        <ActionButton
          icon={<UserPlus className="w-6 h-6 text-white" />}
          label="Follow-up de Leads"
          description="Ver contatos pendentes"
          color="bg-gradient-to-br from-[#00D26A]/20 to-[#00D26A]/5"
        />
      </div>
    </div>
  );
}
