import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-20">
          {/* Logo - Left */}
          <motion.a
            href="#"
            className="font-syncopate text-lg md:text-xl font-bold shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            $ME
          </motion.a>

          {/* Desktop Menu - Center */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-10">
              {['Home', 'About', 'Tokenomics', 'Roadmap'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-outfit text-gray-300 hover:text-white transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Connect Wallet - Right */}
          <div className="hidden md:block shrink-0">
            <Button 
              className="bg-white text-black hover:bg-white/90 px-6"
            >
              Connect Wallet
            </Button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex items-center gap-4 md:hidden">
            <Button 
              size="sm"
              className="bg-white text-black hover:bg-white/90 h-8 px-3 text-sm"
            >
              Connect
            </Button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Optimized */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-2">
                {['Home', 'About', 'Tokenomics', 'Roadmap'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-[15px] font-outfit text-gray-300 hover:text-white py-2.5"
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
