import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="font-syncopate text-xl font-bold text-white mb-4">
              CRYPTO
            </h3>
            <p className="font-outfit text-gray-400 max-w-md">
              Building the future of decentralized finance, one block at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-syncopate text-sm font-bold text-white mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2">
              {['About', 'Tokenomics', 'Roadmap', 'Team'].map((item) => (
                <li key={item}>
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    className="font-outfit text-gray-400 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-syncopate text-sm font-bold text-white mb-4">
              CONNECT
            </h4>
            <ul className="space-y-2">
              {['Twitter', 'Discord', 'Telegram', 'Medium'].map((platform) => (
                <li key={platform}>
                  <motion.a
                    href="#"
                    className="font-outfit text-gray-400 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {platform}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="font-outfit text-gray-400">
            © 2024 CRYPTO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
