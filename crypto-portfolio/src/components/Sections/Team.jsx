import { motion } from 'framer-motion';

export function Team() {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Founder & CEO',
      image: 'https://via.placeholder.com/200x200',
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      image: 'https://via.placeholder.com/200x200',
    },
    {
      name: 'Mike Johnson',
      role: 'Lead Developer',
      image: 'https://via.placeholder.com/200x200',
    },
    {
      name: 'Sarah Williams',
      role: 'Marketing Director',
      image: 'https://via.placeholder.com/200x200',
    },
  ];

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-syncopate text-3xl md:text-4xl font-bold mb-6">
            OUR TEAM
          </h2>
          <p className="font-outfit text-gray-400 max-w-2xl mx-auto">
            Meet the visionaries behind our project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg bg-white/5 
                            border border-white/10 aspect-square mb-4">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <h3 className="font-syncopate text-lg font-bold text-white">
                {member.name}
              </h3>
              <p className="font-outfit text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
