import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent } from '../ui/card';

export function PortfolioCard({ crypto }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <img 
              src={crypto.image} 
              alt={crypto.name} 
              className="w-8 h-8"
            />
            <h3 className="text-lg font-semibold">{crypto.name}</h3>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p>Price: ${crypto.current_price}</p>
            <p>Holdings: {crypto.amount}</p>
            <p>Value: ${crypto.value}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
