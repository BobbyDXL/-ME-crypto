import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="w-full bg-background border-b"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold"
        >
          Crypto Portfolio
        </motion.h1>
        <nav>
          {/* Navigation items will be added later */}
        </nav>
      </div>
    </motion.header>
  );
}
