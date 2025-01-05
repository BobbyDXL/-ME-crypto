import { motion } from 'framer-motion';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export function Team() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  
  const teamMembers = [
    {
      name: 'Kai Zhang',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Aisha Patel',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=1969&auto=format&fit=crop',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Zain Al-Rashid',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Luna Park',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop',
      linkedin: '#',
      twitter: '#'
    },
  ];

  return (
    <section id="team" className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-16"
        >
          <h2 className="font-syncopate text-2xl lg:text-4xl font-bold mb-4">
            OUR TEAM
          </h2>
          <p className="font-outfit text-sm lg:text-base text-gray-400 max-w-2xl mx-auto">
            Meet the innovators behind our success
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div className="relative aspect-square mb-3">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full object-cover rounded-lg ${
                    isDesktop ? 'grayscale hover:grayscale-0 transition-all' : ''
                  }`}
                />
                
                {!isDesktop && (
                  <div className="absolute bottom-2 right-2 flex gap-2">
                    <a
                      href={member.linkedin}
                      className="bg-black/50 backdrop-blur-sm p-1.5 rounded-full hover:bg-black/70"
                    >
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a
                      href={member.twitter}
                      className="bg-black/50 backdrop-blur-sm p-1.5 rounded-full hover:bg-black/70"
                    >
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  </div>
                )}
              </div>

              <div className="text-center lg:text-left">
                <h3 className="font-syncopate text-sm lg:text-base font-bold text-white">
                  {member.name}
                </h3>
                <p className="font-outfit text-xs lg:text-sm text-gray-400">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
