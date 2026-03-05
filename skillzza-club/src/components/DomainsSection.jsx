import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Lightbulb, Sprout, Landmark, Globe, Palette, Telescope } from 'lucide-react';
import { domainsSection } from '../data/content';

const domainIcons = [Bot, Lightbulb, Sprout, Landmark, Globe, Palette, Telescope];

const ICON_COLOR = '#7C3AED';

const DomainCard = ({ domain, Icon, i, inView, totalDomains }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
    transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
    whileHover={{ y: -8, scale: 1.04 }}
    className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-primary/15 hover:border-primary/40 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col items-center justify-center text-center min-h-[160px]"
  >
    {/* Icon container */}
    <motion.div
      className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:rounded-xl"
      animate={{ scale: [1, 1.15, 1] }}
      transition={{
        duration: 0.8,
        delay: i * 0.8,
        repeat: Infinity,
        repeatDelay: (totalDomains - 1) * 0.8,
        ease: 'easeInOut',
      }}
    >
      <Icon size={30} style={{ color: ICON_COLOR }} strokeWidth={1.8} />
    </motion.div>

    {/* Name */}
    <p className="text-gray-800 font-semibold text-sm leading-snug group-hover:text-gray-900 transition-colors">
      {domain.name}
    </p>
  </motion.div>
);

const DomainsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-[#F0EDF8] via-[#EDE9FE] to-[#F0EDF8] overflow-hidden">
      {/* Background decoration */}
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl"
      />
      {/* Dot grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle, rgba(124,58,237,0.04) 1.5px, transparent 1.5px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark mb-4 leading-tight max-w-3xl mx-auto">
            {domainsSection.heading || "Elevate Your Institution with Structured Studio Learning"}
          </h2>
          <span className="inline-block px-6 py-2.5 rounded-full bg-primary/10 text-primary text-base font-bold uppercase tracking-widest">
            {domainsSection.label}
          </span>
        </motion.div>

        {/* Row 1: 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {domainsSection.domains.slice(0, 4).map((domain, i) => (
            <DomainCard
              key={i}
              domain={domain}
              Icon={domainIcons[i]}
              i={i}
              inView={inView}
              totalDomains={domainsSection.domains.length}
            />
          ))}
        </div>

        {/* Row 2: 3 cards centered, same size as row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:max-w-[75%] mx-auto">
          {domainsSection.domains.slice(4).map((domain, i) => {
            const idx = i + 4;
            return (
              <DomainCard
                key={idx}
                domain={domain}
                Icon={domainIcons[idx]}
                i={idx}
                inView={inView}
                totalDomains={domainsSection.domains.length}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
