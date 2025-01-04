import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, Sparkles, Gift, Timer } from 'lucide-react';
import { Button } from '../ui/button';

export function LimitedOffer() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="relative bg-gradient-to-r from-white/10 via-white/5 to-white/10 border-b border-white/10 backdrop-blur-sm"
        >
          <div className="container mx-auto px-4">
            <div className="py-3 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="hidden sm:block"
                >
                  <Gift className="h-6 w-6 text-white" />
                </motion.div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <span className="font-syncopate text-sm font-bold">LIMITED TIME OFFER</span>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <Timer className="h-4 w-4 text-white" />
                    </motion.div>
                  </div>
                  <p className="font-outfit text-sm sm:text-base">
                    Claim your <span className="text-white font-bold">1,000 $ME tokens</span> airdrop now! 🚀
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="bg-white text-black hover:bg-white/90 font-outfit text-sm px-4 py-2 h-auto"
                    onClick={() => console.log('Connect wallet')}
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Claim Airdrop
                  </Button>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsVisible(false)}
                  className="text-white/60 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
