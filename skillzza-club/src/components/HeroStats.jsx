import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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

const HeroStats = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  const stats = [
    {
      value: 150000,
      suffix: '',
      label: 'Students',
    },
    {
      value: 150,
      suffix: '+',
      label: 'Partner Schools',
    },
    {
      value: 100,
      suffix: '+',
      label: 'AI Projects',
    },
    {
      value: 700,
      suffix: '+',
      label: 'Educator Cohorts Upskilled',
    },
  ];

  return (
    <section className="py-6 lg:py-8" style={{ backgroundColor: '#F0EDF8' }} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              {/* Number */}
              <motion.div
                initial={{ scale: 0.8 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ 
                  type: 'spring', 
                  stiffness: 200, 
                  delay: 0.2 + index * 0.1 
                }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#7C3AED] mb-2"
              >
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  inView={inView} 
                />
              </motion.div>

              {/* Label */}
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-medium whitespace-pre-line">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroStats;
