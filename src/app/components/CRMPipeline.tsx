import { motion } from 'motion/react';

interface Deal {
  id: string;
  name: string;
  value: string;
  company: string;
}

interface StageProps {
  title: string;
  count: number;
  deals: Deal[];
  color: string;
}

function Stage({ title, count, deals, color }: StageProps) {
  return (
    <div className="flex-1">
      <div className="bg-[#1A1A22] rounded-lg p-3 mb-3 border border-white/5">
        <div className="flex items-center justify-between">
          <h4 className="text-white text-sm">{title}</h4>
          <span className={`${color} text-xs px-2 py-1 rounded`}>{count}</span>
        </div>
      </div>

      <div className="space-y-2">
        {deals.map((deal) => (
          <motion.div
            key={deal.id}
            whileHover={{ scale: 1.02 }}
            className="bg-[#15151B] rounded-lg p-3 border border-white/5 hover:border-white/10 cursor-move transition-all duration-200"
          >
            <h5 className="text-white text-sm mb-1">{deal.name}</h5>
            <p className="text-[#A1A1AA] text-xs mb-2">{deal.company}</p>
            <p className="text-[#00D26A] text-sm">{deal.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function CRMPipeline() {
  const stages = [
    {
      title: 'Novo',
      count: 8,
      color: 'bg-[#7B2CFF]/20 text-[#7B2CFF]',
      deals: [
        { id: '1', name: 'Curso Avançado', value: 'R$ 2.400', company: 'Maria Silva' },
        { id: '2', name: 'Mentoria Premium', value: 'R$ 850', company: 'João Pedro' },
      ]
    },
    {
      title: 'Contatado',
      count: 12,
      color: 'bg-[#FF6B00]/20 text-[#FF6B00]',
      deals: [
        { id: '3', name: 'Consultoria Completa', value: 'R$ 5.200', company: 'Ana Costa' },
        { id: '4', name: 'Kit de Vendas', value: 'R$ 1.100', company: 'Carlos Lima' },
      ]
    },
    {
      title: 'Respondeu',
      count: 6,
      color: 'bg-blue-500/20 text-blue-400',
      deals: [
        { id: '5', name: 'Pacote VIP', value: 'R$ 3.800', company: 'Fernanda Souza' },
      ]
    },
    {
      title: 'Negociando',
      count: 4,
      color: 'bg-yellow-500/20 text-yellow-400',
      deals: [
        { id: '6', name: 'Assinatura Anual', value: 'R$ 4.500', company: 'Ricardo Alves' },
      ]
    },
    {
      title: 'Fechado',
      count: 15,
      color: 'bg-[#00D26A]/20 text-[#00D26A]',
      deals: [
        { id: '7', name: 'Programa Exclusivo', value: 'R$ 6.200', company: 'Juliana Martins' },
        { id: '8', name: 'Treinamento In Company', value: 'R$ 1.450', company: 'Roberto Santos' },
      ]
    },
  ];

  return (
    <div className="bg-[#15151B] rounded-xl p-6 border border-white/10">
      <h3 className="text-white mb-6">Pipeline de Vendas</h3>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {stages.map((stage) => (
          <Stage key={stage.title} {...stage} />
        ))}
      </div>
    </div>
  );
}
