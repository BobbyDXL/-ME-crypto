import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="font-syncopate text-5xl md:text-7xl font-bold text-white leading-tight">
              FUTURE OF
              <span className="block">DEFI</span>
            </h1>
            
            <p className="font-outfit text-lg text-gray-400 max-w-lg">
              Revolutionary blockchain technology meeting decentralized finance.
              Built for the future of crypto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
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
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
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
                  transition={{ delay: 0.2 * index }}
                  className="border border-white/10 rounded-lg p-4"
                >
                  <p className="font-outfit text-gray-400 text-sm">{stat.label}</p>
                  <p className="font-syncopate text-white text-2xl">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Abstract Shape */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden lg:block"
          >
            <div className="relative w-full h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-full blur-3xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
