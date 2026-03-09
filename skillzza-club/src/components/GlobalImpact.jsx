import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, School, FileText, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

const AnimatedCounter = ({ value, suffix = '', inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }

    let startValue = 0;
    const duration = 2000; // 2 seconds
    const endValue = parseInt(value);
    const increment = endValue / (duration / 16); // 60fps

    const timer = setInterval(() => {
      startValue += increment;
      if (startValue >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(startValue));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const GlobalImpact = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  const stats = [
    {
      icon: GraduationCap,
      value: 150000,
      suffix: '',
      label: 'Students',
    },
    {
      icon: School,
      value: 150,
      suffix: '+',
      label: 'Partner Schools',
    },
    {
      icon: FileText,
      value: 100,
      suffix: '+',
      label: 'AI Projects',
    },
    {
      icon: Users,
      value: 700,
      suffix: '+',
      label: 'Educator Cohorts\nUpskilled',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#A78BFA] via-[#9F7AEA] to-[#B794F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-white rounded-[2.5rem] px-8 py-16 lg:px-16 lg:py-20 shadow-2xl"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
            >
              Global Impact
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-600 font-medium"
            >
              Cognify AI Is Trusted By Schools And Educators In
            </motion.p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.3 }}
                    className="mb-6"
                  >
                    <div className="relative">
                      <Icon 
                        className="w-16 h-16 md:w-20 md:h-20 text-[#7C3AED]" 
                        strokeWidth={1.5}
                      />
                    </div>
                  </motion.div>

                  {/* Number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 200, 
                      delay: 0.5 + index * 0.1 
                    }}
                    className="text-5xl md:text-6xl font-bold text-[#7C3AED] mb-2"
                  >
                    <AnimatedCounter 
                      value={stat.value} 
                      suffix={stat.suffix} 
                      inView={inView} 
                    />
                  </motion.div>

                  {/* Label */}
                  <p className="text-base md:text-lg text-gray-700 font-medium whitespace-pre-line">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalImpact;
