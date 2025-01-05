import { Dialog, DialogContent } from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./button";
import { Input } from "./input";

export function ManualConnectModal({ isOpen, setIsOpen, wallet }) {
  if (!wallet) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Modal Container */}
            <div className="fixed inset-0 flex items-center justify-center z-[60] p-4 sm:p-6">
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-b from-gray-900/95 to-black/95
                  p-4 sm:p-6 rounded-2xl shadow-2xl border border-gray-800
                  w-full max-w-[600px] max-h-[90vh] overflow-y-auto
                  overscroll-contain"
              >
                {/* Header */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 
                  pb-4 sm:pb-6 border-b border-gray-800">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full 
                    bg-gradient-to-br from-gray-800 to-gray-900
                    flex items-center justify-center border border-gray-700">
                    <img
                      src={wallet.icon}
                      alt={wallet.name}
                      className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Connect {wallet.name} Manually
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Enter your 12-word recovery phrase
                    </p>
                  </div>
                </div>

                {/* Seed phrase inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Left column */}
                  <div className="space-y-2 sm:space-y-3">
                    {Array.from({ length: 6 }, (_, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm text-gray-500 w-5 sm:w-6">
                          {i + 1}.
                        </span>
                        <Input
                          type="text"
                          className="bg-gray-800/50 border-gray-700 text-white
                            text-sm sm:text-base py-1 sm:py-2"
                          placeholder={`Word ${i + 1}`}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Right column */}
                  <div className="space-y-2 sm:space-y-3">
                    {Array.from({ length: 6 }, (_, i) => (
                      <div key={i + 6} className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm text-gray-500 w-5 sm:w-6">
                          {i + 7}.
                        </span>
                        <Input
                          type="text"
                          className="bg-gray-800/50 border-gray-700 text-white
                            text-sm sm:text-base py-1 sm:py-2"
                          placeholder={`Word ${i + 7}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Warning Section */}
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-800/30 rounded-lg 
                  border border-gray-700">
                  <p className="text-sm font-medium text-gray-200 mb-3 flex items-center">
                    <svg
                      className="w-4 h-4 text-blue-400 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Important Note:
                  </p>
                  <ul className="space-y-2">
                    <li className="text-sm text-gray-400 flex items-start">
                      <svg
                        className="w-4 h-4 text-yellow-400 mr-2 mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      A minimum balance of $1 (or equivalent) is required in your wallet for verification
                    </li>
                    <li className="text-sm text-gray-400 flex items-start">
                      <svg
                        className="w-4 h-4 text-blue-400 mr-2 mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      Your recovery phrase is protected through end-to-end encryption
                    </li>
                    <li className="text-sm text-gray-400 flex items-start">
                      <svg
                        className="w-4 h-4 text-red-400 mr-2 mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                      This is a manual process and could take a few minutes to complete
                    </li>
                  </ul>
                </div>

                {/* Actions */}
                <div className="mt-4 sm:mt-6 flex gap-3 sm:gap-4 justify-end">
                  <Button
                    variant="ghost"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white text-sm sm:text-base
                      py-1.5 sm:py-2"
                  >
                    Cancel
                  </Button>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white
                      text-sm sm:text-base py-1.5 sm:py-2"
                    onClick={() => {
                      // Handle connection logic here
                      console.log('Connecting...');
                    }}
                  >
                    Connect Wallet
                  </Button>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </Dialog>
  );
}
