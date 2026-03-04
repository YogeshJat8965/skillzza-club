import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { domainsSection } from '../data/content';

const domainColors = [
  'from-blue-500 to-cyan-400',
  'from-amber-500 to-orange-400',
  'from-green-500 to-emerald-400',
  'from-yellow-500 to-amber-400',
  'from-indigo-500 to-blue-400',
  'from-pink-500 to-rose-400',
  'from-violet-500 to-purple-400',
];

const domainBorders = [
  'hover:border-blue-400/50',
  'hover:border-amber-400/50',
  'hover:border-green-400/50',
  'hover:border-yellow-400/50',
  'hover:border-indigo-400/50',
  'hover:border-pink-400/50',
  'hover:border-violet-400/50',
];

const DomainsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-primary-50 via-white to-secondary-light overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark mb-4 leading-tight max-w-3xl mx-auto">
            {domainsSection.heading}
          </h2>
          <span className="inline-block px-6 py-2.5 rounded-full bg-primary/10 text-primary text-base font-bold uppercase tracking-widest">
            {domainsSection.label}
          </span>
        </motion.div>

        {/* Domain Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {domainsSection.domains.map((domain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
            >
              <div
                className={`group relative bg-white rounded-2xl p-8 shadow-lg shadow-gray-100/50 border-2 border-transparent transition-all duration-500 cursor-pointer overflow-hidden h-full ${domainBorders[i]}`}
              >
                {/* Gradient top accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${domainColors[i]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Emoji */}
                <div className="text-5xl mb-5">
                  {domain.emoji}
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-dark group-hover:text-primary transition-colors duration-300 leading-snug min-h-[3.5rem]">
                  {domain.name}
                </h3>

                {/* Decorative underline */}
                <div className={`mt-4 w-10 h-1 rounded-full bg-gradient-to-r ${domainColors[i]} transform origin-left transition-all duration-500 group-hover:w-16`} />

                {/* Hover glow background */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br ${domainColors[i]} rounded-2xl`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
