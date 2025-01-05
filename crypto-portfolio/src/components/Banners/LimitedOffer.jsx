import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, Sparkles, Gift, Timer } from 'lucide-react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

export function LimitedOffer() {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div className="relative bg-gradient-to-r from-white/10 via-white/5 to-white/10 border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="py-4 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Gift className="h-4 w-4 text-white" />
                  <span className="font-syncopate text-[11px] font-bold tracking-tight">
                    LIMITED OFFER
                  </span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsVisible(false)}
                  className="text-white/60 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </motion.button>
              </div>

              <p className="font-outfit text-[13px] text-gray-300 leading-snug">
                Claim your <span className="text-white font-bold">1,000 $ME</span> airdrop now!
              </p>

              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black font-outfit"
                onClick={() => navigate('/connect')}
              >
                Claim Airdrop
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
