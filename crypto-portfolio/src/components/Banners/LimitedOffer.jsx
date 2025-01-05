import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, Sparkles, Gift, Timer } from 'lucide-react';
import { Button } from '../ui/button';

export function LimitedOffer() {
  const [isVisible, setIsVisible] = useState(true);

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
                className="w-full bg-white text-black hover:bg-white/90 font-outfit 
                         text-sm px-4 py-2 h-8 mt-1"
                onClick={() => console.log('Connect wallet')}
              >
                <Sparkles className="w-3 h-3 mr-2" />
                Claim Airdrop
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
