import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, Percent } from 'lucide-react';

const data = [
  { id: 'mon', day: 'Seg', revenue: 1200 },
  { id: 'tue', day: 'Ter', revenue: 1890 },
  { id: 'wed', day: 'Qua', revenue: 1450 },
  { id: 'thu', day: 'Qui', revenue: 2100 },
  { id: 'fri', day: 'Sex', revenue: 2450 },
  { id: 'sat', day: 'Sáb', revenue: 1800 },
  { id: 'sun', day: 'Dom', revenue: 3240 },
];

export function RevenuePanel() {
  const totalRevenue = data.reduce((sum, item) => sum + item.revenue, 0);
  const conversionRate = 18.4;

  return (
    <div className="bg-[#15151B] rounded-xl p-6 border border-white/10">
      <h3 className="text-white mb-6">Visão Geral de Faturamento</h3>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-[#1A1A22] rounded-lg p-4 border border-white/5">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-4 h-4 text-[#00D26A]" />
            <span className="text-[#A1A1AA] text-sm">Últimos 7 Dias</span>
          </div>
          <div className="text-2xl text-white">R$ {totalRevenue.toLocaleString()}</div>
        </div>

        <div className="bg-[#1A1A22] rounded-lg p-4 border border-white/5">
          <div className="flex items-center gap-2 mb-2">
            <Percent className="w-4 h-4 text-[#7B2CFF]" />
            <span className="text-[#A1A1AA] text-sm">Taxa de Conversão</span>
          </div>
          <div className="text-2xl text-white">{conversionRate}%</div>
        </div>
      </div>

      <div className="h-64 min-h-64">
        <ResponsiveContainer width="100%" height="100%" minHeight={256}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorRevenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7B2CFF" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#7B2CFF" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis
              dataKey="day"
              stroke="#A1A1AA"
              style={{ fontSize: '12px' }}
              tickLine={false}
            />
            <YAxis
              stroke="#A1A1AA"
              style={{ fontSize: '12px' }}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#15151B',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                color: '#fff'
              }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#7B2CFF"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorRevenueGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
