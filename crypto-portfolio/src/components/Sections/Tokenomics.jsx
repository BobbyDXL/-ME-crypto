import { motion } from 'framer-motion';

export function Tokenomics() {
  const tokenomicsData = [
    { category: 'Liquidity Pool', percentage: 40 },
    { category: 'Team', percentage: 15 },
    { category: 'Marketing', percentage: 10 },
    { category: 'Development', percentage: 20 },
    { category: 'Community', percentage: 15 },
  ];

  return (
    <section id="tokenomics" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-syncopate text-3xl md:text-4xl font-bold mb-6">
            TOKENOMICS
          </h2>
          <p className="font-outfit text-gray-400 max-w-2xl mx-auto">
            Our token distribution is designed for long-term sustainability and growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Distribution List */}
          <div className="space-y-4">
            {tokenomicsData.map((item, index) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 p-4 rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <span className="font-outfit text-white">{item.category}</span>
                  <span className="font-syncopate text-white">{item.percentage}%</span>
                </div>
                <div className="mt-2 bg-white/10 h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-white"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Visual Representation */}
          <div className="relative h-[400px]">
            {tokenomicsData.map((item, index) => {
              const angle = (index / tokenomicsData.length) * Math.PI * 2;
              const radius = 150;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="absolute top-1/2 left-1/2 h-4 w-4 bg-white rounded-full"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
