import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DollarSign, MessageCircle, TrendingUp, CheckCircle2 } from 'lucide-react';

interface Notification {
  id: string;
  type: 'revenue' | 'message' | 'goal' | 'success';
  message: string;
  icon: React.ReactNode;
}

export function MicroFeedback() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const messages = [
      { type: 'revenue' as const, message: '+R$ 120 faturados', icon: <DollarSign className="w-4 h-4" /> },
      { type: 'message' as const, message: 'Nova mensagem recebida', icon: <MessageCircle className="w-4 h-4" /> },
      { type: 'goal' as const, message: 'Meta atualizada', icon: <TrendingUp className="w-4 h-4" /> },
      { type: 'success' as const, message: 'Follow-up concluído', icon: <CheckCircle2 className="w-4 h-4" /> },
    ];

    const interval = setInterval(() => {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      const newNotification = {
        ...randomMessage,
        id: Date.now().toString(),
      };

      setNotifications(prev => [...prev, newNotification]);

      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
      }, 3000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'revenue': return 'bg-[#00D26A]/20 border-[#00D26A]/30 text-[#00D26A]';
      case 'message': return 'bg-[#7B2CFF]/20 border-[#7B2CFF]/30 text-[#7B2CFF]';
      case 'goal': return 'bg-[#FF6B00]/20 border-[#FF6B00]/30 text-[#FF6B00]';
      case 'success': return 'bg-blue-500/20 border-blue-500/30 text-blue-400';
      default: return 'bg-white/10 border-white/20 text-white';
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50 space-y-2">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            className={`${getNotificationColor(notification.type)} px-4 py-3 rounded-lg border backdrop-blur-sm flex items-center gap-2 shadow-[0_0_20px_rgba(123,44,255,0.2)] min-w-[200px]`}
          >
            {notification.icon}
            <span className="text-sm">{notification.message}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
