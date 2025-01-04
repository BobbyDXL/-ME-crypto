import { AnimatedBackground } from './components/Background/AnimatedBackground';
import { Navbar } from './components/Layout/Navbar';
import { Hero } from './components/Sections/Hero';
import { Tokenomics } from './components/Sections/Tokenomics';
import { Roadmap } from './components/Sections/Roadmap';
import { Team } from './components/Sections/Team';
import { Footer } from './components/Sections/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { LimitedOffer } from './components/Banners/LimitedOffer';

function App() {
  return (
    <AnimatePresence>
      <div className="min-h-screen bg-black text-white relative">
        {/* Animated Background */}
        <AnimatedBackground />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black to-black pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10">
          <LimitedOffer />
          <Navbar />
          
          {/* Main Content */}
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="py-20 bg-white/5"
            >
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="font-syncopate text-3xl md:text-4xl font-bold mb-6">
                    REVOLUTIONIZING DEFI
                  </h2>
                  <p className="font-outfit text-gray-400 leading-relaxed">
                    Building the next generation of decentralized finance protocols.
                    Our platform combines security, efficiency, and innovation to
                    deliver the best DeFi experience.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Tokenomics Section */}
            <Tokenomics />

            {/* Roadmap Section */}
            <Roadmap />

            {/* Team Section */}
            <Team />

            {/* Community Section */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="py-20"
            >
              <div className="container mx-auto px-4 text-center">
                <h2 className="font-syncopate text-3xl md:text-4xl font-bold mb-8">
                  JOIN OUR COMMUNITY
                </h2>
                <div className="flex justify-center space-x-6">
                  {/* Social Links */}
                  {['Twitter', 'Discord', 'Telegram'].map((platform) => (
                    <motion.a
                      key={platform}
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 border border-white/10 rounded-lg 
                               hover:bg-white hover:text-black transition-all 
                               duration-300 font-outfit"
                    >
                      {platform}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.section>
          </motion.main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </AnimatePresence>
  );
}

export default App;
