import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { RotatingCoin } from '../3D/RotatingCoin';

export function Hero() {
  // Define scroll animations
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Abstract Background Elements */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ opacity }}
      >
        <motion.div 
          className="absolute top-20 left-[20%] w-72 h-72 bg-white/5 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-[20%] w-96 h-96 bg-white/10 rounded-full blur-3xl"
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="text-sm">Revolutionary DeFi Protocol</span>
            </motion.div>

            <motion.h1 
              className="font-syncopate text-6xl md:text-7xl xl:text-8xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              FUTURE OF
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                DEFI
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-400 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Revolutionary blockchain technology meeting decentralized finance.
              Join the future of crypto.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg"
                className="bg-white text-black hover:bg-gray-200 font-outfit"
              >
                Launch App
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black font-outfit"
              >
                Learn More
              </Button>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              {[
                { label: 'Total Supply', value: '1B' },
                { label: 'Holders', value: '12.5K' },
                { label: 'Market Cap', value: '$14.5M' },
                { label: 'Locked', value: '95%' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + (index * 0.1) }}
                  className="border border-white/10 rounded-lg p-4"
                >
                  <p className="font-outfit text-gray-400 text-sm">{stat.label}</p>
                  <p className="font-syncopate text-white text-2xl">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - 3D Coin */}
          <motion.div
            className="relative h-[600px] hidden lg:block"
            style={{ y }}
          >
            <div className="w-full h-full">
              <RotatingCoin />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
