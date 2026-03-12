import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { GraduationCap, BarChart3 } from 'lucide-react';
import { impactMeasurement } from '../data/content';



const dashboardSkills = [
  { name: 'AI & Deep Tech', value: 85, color: '#8B5CF6' },
  { name: 'Robotics', value: 72, color: '#8B5CF6' },
  { name: 'Entrepreneurship', value: 90, color: '#8B5CF6' },
  { name: 'Creative Arts', value: 68, color: '#8B5CF6' },
  { name: 'Leadership', value: 78, color: '#8B5CF6' },
];

const ImpactMeasurement = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section id="impact" className="relative py-12 lg:py-16 bg-primary-50 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark mb-3 leading-tight">
              {impactMeasurement.heading}
            </h2>
            <p className="text-xl font-semibold text-primary mb-3">{impactMeasurement.subheading}</p>
            <p className="text-gray-600 text-base mb-8">{impactMeasurement.description}</p>

            {/* Scrolling Metrics - single column */}
            <div className="overflow-hidden h-[300px] relative">
              {/* Fade masks */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-primary-50 to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-primary-50 to-transparent z-10 pointer-events-none" />

              <motion.div
                animate={{ y: ['-50%', '0%'] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="flex flex-col gap-3"
              >
                {[...impactMeasurement.metrics, ...impactMeasurement.metrics].map((metric, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white shadow-sm border border-gray-100 flex-shrink-0"
                  >
                    <span className="text-sm font-medium text-gray-700">
                      {metric}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Dashboard Mock */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: 10 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative"
            style={{ perspective: '1000px' }}
          >
            <motion.div
              whileHover={{ rotateY: -3, rotateX: 2 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="bg-white rounded-3xl shadow-2xl shadow-primary/10 border border-gray-100 overflow-hidden"
            >
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-primary to-primary-dark p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Student Portfolio</h4>
                    <p className="text-white/70 text-sm">Academic Year 2025-26</p>
                  </div>
                </div>
              </div>

              {/* Dashboard Body */}
              <div className="p-6">
                {/* Skill Progress Bars */}
                <h5 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">
                  Skill Progress
                </h5>
                <div className="space-y-4 mb-6">
                  {dashboardSkills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm font-bold" style={{ color: skill.color }}>
                          {skill.value}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.value}%` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: 0.8 + i * 0.15, ease: 'easeOut' }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: skill.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Achievement badges */}
                <h5 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">
                  Achievements
                </h5>
                {/* <div className="flex gap-3">
                  {['🏆', '🎯', '⭐', '🚀'].map((badge, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 1.5 + i * 0.1, type: 'spring' }}
                      className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-xl shadow-sm"
                    >
                      {badge}
                    </motion.div>
                  ))}
                </div> */}

                {/* Innovation Score */}
                <div className="mt-6 flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-primary-50 to-secondary-light">
                  <div className="relative w-16 h-16">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="16" fill="none" stroke="#E5E7EB" strokeWidth="3" />
                      <motion.circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        stroke="#976EDF"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray="100.53"
                        initial={{ strokeDashoffset: 100.53 }}
                        animate={inView ? { strokeDashoffset: 100.53 * 0.14 } : { strokeDashoffset: 100.53 }}
                        transition={{ duration: 2, delay: 1.2, ease: 'easeOut' }}
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-primary">
                      86
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark">Innovation Score</p>
                    <p className="text-xs text-gray-500">Top 15% of cohort</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating decoration */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 right-2 sm:-right-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-amber to-yellow-400 shadow-lg flex items-center justify-center"
            >
              <BarChart3 size={28} className="text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMeasurement;
