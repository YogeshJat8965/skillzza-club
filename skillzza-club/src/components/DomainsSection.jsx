import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Lightbulb, Sprout, Landmark, Globe, Palette, Telescope } from 'lucide-react';
import { domainsSection } from '../data/content';

const domainIcons = [Bot, Lightbulb, Sprout, Landmark, Globe, Palette, Telescope];

const DomainsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section className="relative py-24 lg:py-32 bg-[#F0EDF8] overflow-hidden">
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
            {domainsSection.heading || "Elevate Your Institution with Structured Studio Learning"}
          </h2>
          <span className="inline-block px-6 py-2.5 rounded-full bg-primary/10 text-primary text-base font-bold uppercase tracking-widest">
            {domainsSection.label}
          </span>
        </motion.div>

        {/* Domain Icons + Text Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-wrap justify-center gap-10 lg:gap-14"
        >
          {domainsSection.domains.map((domain, i) => {
            const Icon = domainIcons[i];
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex flex-col items-center text-center w-[calc(50%-20px)] sm:w-[calc(25%-30px)] lg:w-[calc(14.28%-40px)] min-w-[120px]"
              >
                {/* Icon */}
                <motion.div
                  className="flex items-center justify-center mb-4"
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.8,
                    repeat: Infinity,
                    repeatDelay: (domainsSection.domains.length - 1) * 0.8,
                    ease: 'easeInOut',
                  }}
                >
                  <Icon size={48} className="text-[#7C3AED]" strokeWidth={1.5} />
                </motion.div>

                {/* Name */}
                <p className="text-gray-700 font-semibold text-sm leading-snug max-w-[140px]">
                  {domain.name}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default DomainsSection;
