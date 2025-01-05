import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { MathShape } from "../../components/3D/MathShape";
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
        {/* Background Elements - Only show on non-mobile */}
        {!isMobile && (
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="absolute top-40 left-[15%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-20 right-[15%] w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px]"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        )}

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
              initial={!isMobile ? { opacity: 0, y: 20 } : false}
              animate={!isMobile ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              {/* Tag */}
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 
                           bg-white/5 backdrop-blur-sm mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                <span className="text-sm">Revolutionary DeFi Protocol</span>
              </motion.div>

              {/* Main Heading */}
              <motion.div className="space-y-4 mb-8">
                <h1 className="font-syncopate font-bold leading-none">
                  <span className="text-4xl lg:text-5xl xl:text-6xl">THE</span>
                  <span className="block text-6xl lg:text-7xl xl:text-8xl mt-2">FUTURE</span>
                  <span className="block text-3xl lg:text-4xl xl:text-5xl text-gray-400 mt-2">OF DEFI</span>
                </h1>

                <motion.p
                  className="text-lg text-gray-400 max-w-lg mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Experience the next generation of decentralized finance.
                  Built for the future, available today.
                </motion.p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 font-outfit"
                  onClick={() => navigate('/connect')}
                >
                  Launch App
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black font-outfit"
                  onClick={() => navigate('/connect')}
                >
                  Claim Airdrop
                  <Sparkles className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                className="grid grid-cols-2 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {[
                  { label: 'Total Supply', value: '1B' },
                  { label: 'Holders', value: '12.5K' },
                  { label: 'Market Cap', value: '$14.5M' },
                  { label: 'Locked', value: '95%' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="border border-white/10 rounded-lg p-4 backdrop-blur-sm"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <p className="font-outfit text-sm text-gray-400">{stat.label}</p>
                    <p className="font-syncopate text-2xl text-white mt-1">{stat.value}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - 3D Model */}
            {!isMobile && (
              <div className="relative h-[400px] lg:h-[600px]">
                <div className="w-full h-full">
                  <MathShape />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
