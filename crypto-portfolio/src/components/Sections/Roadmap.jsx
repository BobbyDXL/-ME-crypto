import { motion } from 'framer-motion';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export function Roadmap() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  
  const roadmapData = [
    {
      phase: 'Phase 1',
      title: 'Foundation',
      items: ['Token Launch', 'Community Building', 'Website Launch'],
      status: 'completed'
    },
    {
      phase: 'Phase 2',
      title: 'Growth',
      items: ['DEX Listing', 'Marketing Campaign', 'Partnership Development'],
      status: 'current'
    },
    {
      phase: 'Phase 3',
      title: 'Expansion',
      items: ['Platform Development', 'CEX Listing', 'Ecosystem Growth'],
    },
    {
      phase: 'Phase 4',
      title: 'Innovation',
      items: ['New Features', 'Global Expansion', 'Advanced Development'],
    },
  ];

  return (
    <section id="roadmap" className="py-12 lg:py-20 bg-white/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-16"
        >
          <h2 className="font-syncopate text-2xl lg:text-4xl font-bold mb-4">
            ROADMAP
          </h2>
          <p className="font-outfit text-sm lg:text-base text-gray-400 max-w-2xl mx-auto">
            Our journey to revolutionize DeFi
          </p>
        </motion.div>

        {/* Mobile Roadmap */}
        {!isDesktop && (
          <div className="space-y-6">
            {roadmapData.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 border-l border-white/10"
              >
                {/* Phase Indicator */}
                <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2">
                  <div className={`w-4 h-4 rounded-full ${
                    phase.status === 'completed' ? 'bg-white' : 
                    phase.status === 'current' ? 'bg-white/50' : 'bg-white/20'
                  }`} />
                </div>

                {/* Content */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-syncopate text-xs font-bold text-gray-400">
                      {phase.phase}
                    </span>
                    <h3 className="font-syncopate text-sm font-bold">
                      {phase.title}
                    </h3>
                  </div>

                  <ul className="space-y-2">
                    {phase.items.map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="font-outfit text-xs text-gray-400 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 bg-white/50 rounded-full" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Desktop Roadmap */}
        {isDesktop && (
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/10" />

            {/* Roadmap Items */}
            <div className="space-y-24">
              {roadmapData.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1">
                    <div className={`p-6 bg-white/5 rounded-lg border border-white/10
                                  ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <h3 className="font-syncopate text-xl font-bold mb-2">
                        {phase.phase} - {phase.title}
                      </h3>
                      <ul className="space-y-2">
                        {phase.items.map((item, i) => (
                          <motion.li
                            key={item}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="font-outfit text-gray-400"
                          >
                            • {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-white rounded-full 
                                relative z-10 transform -translate-x-1/2" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
