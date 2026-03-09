import { motion } from 'framer-motion';

const partnerLogos = [
  'https://cognifyai.skillzza.com/assets/img/part/5.png',
  'https://cognifyai.skillzza.com/assets/img/part/1.png',
  'https://cognifyai.skillzza.com/assets/img/part/2.png',
  'https://cognifyai.skillzza.com/assets/img/part/3.png',
  'https://cognifyai.skillzza.com/assets/img/part/4.png',
  'https://cognifyai.skillzza.com/assets/img/part/5.png',
  'https://cognifyai.skillzza.com/assets/img/part/6.png',
  'https://cognifyai.skillzza.com/assets/img/part/7.png',
];

const PartnersMarquee = () => {
  return (
    <section className="relative py-12 lg:py-16 overflow-hidden bg-gradient-to-r from-gray-50 via-white to-gray-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.04) 1px, transparent 0)',
        backgroundSize: '48px 48px'
      }} />

      <div className="relative z-0">
        {/* Section Heading */}
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-dark mb-3">
            Trusted By Leading <span className="text-gray-800">Organizations</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
            Partnership with industry leaders and educational institutions
          </p>
        </div>

        {/* Single Marquee Row */}
        <div className="relative">
          {/* Gradient overlays for fade effect - only on marquee area */}
          <div className="absolute left-0 top-0 bottom-0 w-32 lg:w-48 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 lg:w-48 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />
          <div className="flex overflow-hidden">
            <motion.div
              animate={{
                x: [0, -1920],
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex gap-8 lg:gap-12 items-center"
            >
              {[...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, idx) => (
                <div
                  key={`partner-${idx}`}
                  className="flex-shrink-0 w-36 h-24 sm:w-44 sm:h-28 lg:w-52 lg:h-32 bg-white rounded-xl shadow-md flex items-center justify-center p-5 lg:p-6 border border-gray-200"
                >
                  <img
                    src={logo}
                    alt={`Partner ${idx + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
