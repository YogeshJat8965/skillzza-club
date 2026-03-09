import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import sustainableImage from '../assets/sustainable.png';

const SkillClubs = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center" ref={ref}>
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Skillzza K-12 Skill Clubs
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Skillzza K-12 Skill Clubs are structured learning studios within schools where students 
              explore their interests, build real-world skills, and develop creativity through hands-on 
              projects and guided activities.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              The program focuses on experiential learning, helping students create{' '}
              <span className="font-bold text-gray-900">
                digital portfolios, complete practical projects, and build essential future skills
              </span>{' '}
              such as creativity, problem-solving, collaboration, and digital literacy.
            </p>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                className="relative z-10"
                style={{
                  borderRadius: '70% 30% 30% 70% / 60% 40% 60% 40%',
                }}
              >
                {/* Blob background */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-100 via-cyan-50 to-blue-50"
                  style={{
                    borderRadius: '70% 30% 30% 70% / 60% 40% 60% 40%',
                  }}
                />
                
                {/* Image with blob shape */}
                <div
                  className="relative overflow-hidden"
                  style={{
                    borderRadius: '70% 30% 30% 70% / 60% 40% 60% 40%',
                  }}
                >
                  <img 
                    src={sustainableImage} 
                    alt="Sustainable Learning" 
                    className="w-full h-auto shadow-2xl"
                    style={{
                      borderRadius: '70% 30% 30% 70% / 60% 40% 60% 40%',
                    }}
                  />
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-cyan-200/30 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillClubs;
