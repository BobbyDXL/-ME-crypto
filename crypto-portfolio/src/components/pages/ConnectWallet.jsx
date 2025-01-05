import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const wallets = [
  {
    name: "Phantom",
    icon: "/src/assets/PhantomWalletIcon.svg"
  },
  {
    name: "Solflare",
    icon: "/src/assets/SolFlareIcon.png"
  },
  {
    name: "Exodus",
    icon: "/src/assets/ExodusIcon.svg"
  },
  {
    name: "Glow Wallet",
    icon: "/src/assets/GlowWallet.png"
  },
  {
    name: "Slope",
    icon: "/src/assets/SlopeWallet.png"
  }
];

export function ConnectWallet() {
  const navigate = useNavigate();

  // Basic wallet connection function (replace with actual wallet connection logic)
  const connectWallet = async (walletName) => {
    try {
      console.log(`Connecting to ${walletName}...`);
      // Add actual wallet connection logic here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated delay
      console.log(`Connected to ${walletName}`);
    } catch (error) {
      console.error(`Failed to connect to ${walletName}:`, error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center p-4"
    >
      {/* Back Button */}
      <motion.div 
        className="absolute top-4 left-4"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="text-white hover:text-white/80"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </motion.div>

      <motion.div 
        className="w-full max-w-[400px]"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {/* Glass effect header */}
        <div className="relative mb-8">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-500/10 blur-[100px] rounded-full" />
          <h2 className="text-2xl font-bold text-center text-white relative z-10">
            Connect Wallet
          </h2>
        </div>

        {/* Wallet options */}
        <div className="space-y-3">
          {wallets.map((wallet, index) => (
            <motion.button
              key={wallet.name}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative w-full p-4 rounded-xl
                bg-gradient-to-r from-gray-800/50 to-gray-900/50
                hover:from-gray-800 hover:to-gray-900
                border border-gray-800 hover:border-gray-700
                transition-all duration-300 ease-out
                flex items-center gap-4"
              onClick={() => connectWallet(wallet.name)}
            >
              {/* Hover effect */}
              <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 
                rounded-xl transition-colors duration-300" 
              />
              
              {/* Icon container */}
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-gray-900
                flex items-center justify-center border border-gray-700">
                <img
                  src={wallet.icon}
                  alt={wallet.name}
                  className="w-6 h-6 object-contain"
                />
              </div>

              {/* Wallet name */}
              <span className="font-medium text-gray-100 group-hover:text-white
                transition-colors duration-300">
                {wallet.name}
              </span>

              {/* Arrow indicator */}
              <div className="ml-auto opacity-0 group-hover:opacity-100 
                transform translate-x-2 group-hover:translate-x-0
                transition-all duration-300">
                →
              </div>
            </motion.button>
          ))}
        </div>

        {/* Bottom text with animation */}
        <motion.p 
          className="mt-6 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          By connecting a wallet, you agree to our Terms of Service
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
