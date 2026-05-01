import { Flame, Meh, Snowflake, ArrowRight } from 'lucide-react';

interface Lead {
  id: string;
  name: string;
  temperature: 'hot' | 'warm' | 'cold';
  lastInteraction: string;
  value: string;
  commission: string;
  action: string;
}

const leads: Lead[] = [
  { id: '1', name: 'Carlos Silva', temperature: 'hot', lastInteraction: '5 min atrás', value: 'R$ 1.200', commission: 'R$ 360', action: 'Enviar proposta' },
  { id: '2', name: 'Mariana Santos', temperature: 'hot', lastInteraction: '12 min atrás', value: 'R$ 890', commission: 'R$ 267', action: 'Agendar call' },
  { id: '3', name: 'Pedro Oliveira', temperature: 'warm', lastInteraction: '2 horas atrás', value: 'R$ 650', commission: 'R$ 195', action: 'Fazer follow-up' },
  { id: '4', name: 'Ana Costa', temperature: 'warm', lastInteraction: '5 horas atrás', value: 'R$ 1.450', commission: 'R$ 435', action: 'Enviar info' },
  { id: '5', name: 'Lucas Ferreira', temperature: 'cold', lastInteraction: '2 dias atrás', value: 'R$ 320', commission: 'R$ 96', action: 'Reativar' },
];

function getTemperatureConfig(temp: 'hot' | 'warm' | 'cold') {
  switch (temp) {
    case 'hot':
      return {
        icon: Flame,
        color: 'text-[#FF6B00]',
        bg: 'bg-[#FF6B00]/10',
        label: 'Quente'
      };
    case 'warm':
      return {
        icon: Meh,
        color: 'text-[#7B2CFF]',
        bg: 'bg-[#7B2CFF]/10',
        label: 'Morno'
      };
    case 'cold':
      return {
        icon: Snowflake,
        color: 'text-[#A1A1AA]',
        bg: 'bg-[#A1A1AA]/10',
        label: 'Frio'
      };
  }
}

export function ActiveLeadsPanel() {
  return (
    <div className="bg-[#15151B] rounded-xl p-6 border border-white/10">
      <h3 className="text-white mb-6">Leads Ativos</h3>

      <div className="space-y-3">
        {leads.map((lead) => {
          const config = getTemperatureConfig(lead.temperature);
          const Icon = config.icon;

          return (
            <div
              key={lead.id}
              className="bg-[#1A1A22] rounded-lg p-4 border border-white/5 hover:border-white/10 transition-all duration-200 group relative"
            >
              <div className="flex items-center gap-3">
                <div className={`${config.bg} ${config.color} p-2 rounded-lg flex-shrink-0`}>
                  <Icon className="w-4 h-4" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-white">{lead.name}</h4>
                    <span className={`text-xs ${config.color}`}>{config.label}</span>
                  </div>
                  <p className="text-[#A1A1AA] text-sm">Última interação: {lead.lastInteraction}</p>
                </div>

                <div className="text-right flex-shrink-0 mr-3">
                  <p className="text-white mb-1">{lead.value}</p>
                  <p className="text-[#00D26A] text-sm">Comissão: {lead.commission}</p>
                </div>
              </div>

              <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#7B2CFF] hover:bg-[#7B2CFF]/80 text-white px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 opacity-0 group-hover:opacity-100 shadow-[0_0_15px_rgba(123,44,255,0.3)] whitespace-nowrap pointer-events-none group-hover:pointer-events-auto">
                {lead.action}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
