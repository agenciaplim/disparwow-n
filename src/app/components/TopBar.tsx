import { ChevronDown, Phone, Bell, User } from 'lucide-react';
import * as Select from '@radix-ui/react-select';

interface WhatsAppNumber {
  id: string;
  number: string;
  name: string;
  status: 'active' | 'inactive';
}

const numbers: WhatsAppNumber[] = [
  { id: '1', number: '+55 11 98765-4321', name: 'Vendas Principal', status: 'active' },
  { id: '2', number: '+55 11 97654-3210', name: 'Vendas Secundário', status: 'active' },
  { id: '3', number: '+55 21 99876-5432', name: 'Atendimento Rio', status: 'active' },
  { id: '4', number: '+55 47 98123-4567', name: 'Suporte SC', status: 'inactive' },
];

export function TopBar() {
  return (
    <div className="bg-[#15151B] border-b border-white/10 px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-[#A1A1AA] text-sm">
            <Phone className="w-4 h-4" />
            <span>Número ativo:</span>
          </div>

          <Select.Root defaultValue="1">
            <Select.Trigger className="flex items-center gap-3 bg-[#1A1A22] hover:bg-[#1A1A22]/80 border border-white/10 hover:border-[#7B2CFF]/50 rounded-lg px-4 py-2.5 transition-all duration-200 group outline-none">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#00D26A] animate-pulse"></div>
                <div className="text-left">
                  <Select.Value />
                </div>
              </div>
              <Select.Icon>
                <ChevronDown className="w-4 h-4 text-[#A1A1AA] group-hover:text-white transition-colors" />
              </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
              <Select.Content className="bg-[#15151B] border border-white/10 rounded-lg overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] z-50">
                <Select.Viewport className="p-2">
                  {numbers.map((num) => (
                    <Select.Item
                      key={num.id}
                      value={num.id}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-[#1A1A22] cursor-pointer outline-none transition-colors duration-200"
                    >
                      <div className={`w-2 h-2 rounded-full ${num.status === 'active' ? 'bg-[#00D26A]' : 'bg-[#A1A1AA]'}`}></div>
                      <div className="flex-1">
                        <Select.ItemText>
                          <div className="text-sm text-white">{num.name}</div>
                          <div className="text-xs text-[#A1A1AA]">{num.number}</div>
                        </Select.ItemText>
                      </div>
                      {num.status === 'inactive' && (
                        <span className="text-xs text-[#A1A1AA]">Offline</span>
                      )}
                    </Select.Item>
                  ))}

                  <div className="border-t border-white/10 mt-2 pt-2">
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-[#7B2CFF] hover:bg-[#7B2CFF]/10 transition-colors duration-200 text-sm">
                      <Phone className="w-4 h-4" />
                      Adicionar novo número
                    </button>
                  </div>
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>

        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-lg hover:bg-[#1A1A22] transition-colors duration-200">
            <Bell className="w-5 h-5 text-[#A1A1AA] hover:text-white transition-colors" />
            <div className="absolute top-1 right-1 w-2 h-2 bg-[#FF6B00] rounded-full"></div>
          </button>

          <div className="h-6 w-px bg-white/10"></div>

          <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#1A1A22] transition-colors duration-200">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7B2CFF] to-[#FF6B00] flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="text-white text-sm">Minha Conta</span>
          </button>
        </div>
      </div>
    </div>
  );
}
