import { useState, useEffect } from 'react';
import { X, Sparkles, TrendingUp, Target, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const quotes = [
  {
    text: "Cada mensagem é uma oportunidade. Cada follow-up é um passo para o sucesso.",
    icon: Sparkles,
    gradient: "from-[#7B2CFF] to-[#FF6B00]"
  },
  {
    text: "Vendedores de sucesso transformam 'não' em 'ainda não'. Continue persistindo!",
    icon: TrendingUp,
    gradient: "from-[#FF6B00] to-[#00D26A]"
  },
  {
    text: "Sua meta não é um limite, é apenas o começo do que você pode conquistar.",
    icon: Target,
    gradient: "from-[#00D26A] to-[#7B2CFF]"
  },
  {
    text: "A diferença entre quem vende e quem vende MUITO é a consistência. Você está no caminho certo!",
    icon: Zap,
    gradient: "from-[#7B2CFF] to-[#FF6B00]"
  },
  {
    text: "Cada lead frio que você reativa é uma história de sucesso. Não desista deles!",
    icon: Sparkles,
    gradient: "from-[#FF6B00] to-[#7B2CFF]"
  },
];

export function InspirationalBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('inspirationalBannerClosed');
    if (saved === 'true') {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('inspirationalBannerClosed', 'true');
  };

  const quote = quotes[currentQuote];
  const Icon = quote.icon;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, height: 0 }}
          animate={{ opacity: 1, y: 0, height: 'auto' }}
          exit={{ opacity: 0, y: -20, height: 0 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden"
        >
          <div className={`relative bg-gradient-to-r ${quote.gradient} rounded-xl p-6 border border-white/20 shadow-[0_0_40px_rgba(123,44,255,0.2)]`}>
            <div className="absolute inset-0 bg-[#0F0F14]/40 backdrop-blur-sm"></div>

            <div className="relative flex items-center gap-4">
              <motion.div
                key={`icon-${currentQuote}`}
                initial={{ scale: 0.8, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0"
              >
                <Icon className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                key={`text-${currentQuote}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-1"
              >
                <p className="text-white text-lg">
                  {quote.text}
                </p>
              </motion.div>

              <button
                onClick={handleClose}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 flex-shrink-0 group"
                aria-label="Fechar"
              >
                <X className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
              </button>
            </div>

            <div className="relative flex items-center gap-1 mt-4 justify-center">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuote(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentQuote
                      ? 'w-8 bg-white'
                      : 'w-1.5 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Ir para frase ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
