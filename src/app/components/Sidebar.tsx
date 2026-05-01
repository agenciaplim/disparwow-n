import { LayoutDashboard, MessageCircle, Users, Database, Inbox, Radio, Clock, Settings, Zap } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
    { id: 'leads', label: 'Leads / Nichos', icon: Users },
    { id: 'crm', label: 'CRM', icon: Database },
    { id: 'inbox', label: 'Caixa de Entrada', icon: Inbox },
    { id: 'campaigns', label: 'Campanhas', icon: Radio },
    { id: 'followups', label: 'Follow-ups', icon: Clock },
    { id: 'settings', label: 'Configurações', icon: Settings },
  ];

  return (
    <div className="w-64 bg-[#0F0F14] border-r border-white/10 flex flex-col h-screen">
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7B2CFF] to-[#FF6B00] flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl text-white">DisparWOW</h1>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                ${isActive
                  ? 'bg-[#7B2CFF]/20 text-white shadow-[0_0_20px_rgba(123,44,255,0.3)]'
                  : 'text-[#A1A1AA] hover:bg-[#15151B] hover:text-white'
                }
              `}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
