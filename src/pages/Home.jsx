import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { COMPANY_NAME, SERVICES } from '../constants';
import RotatingTool from '../components/RotatingTool';
import AnimatedServiceIcon from '../components/AnimatedServiceIcon';

// Image paths
const heroImages = [
  {
    src: '/images/hero/main-hero.jpg',
    position: '80% center'
  },
  {
    src: '/images/hero/hero-2.jpg',
    position: '80% center'
  },
  {
    src: '/images/hero/hero-3.jpg',
    position: '80% center'
  }
];
const aboutImage = '/images/hero/about-hero.jpg';
const trustImage = '/images/hero/trust-hero.jpg';

// Service images mapping
const serviceImages = {
  1: '/images/services/furnace.jpg',
  2: '/images/services/heat-pump.jpg',
  3: '/images/services/ac-unit.jpg',
  4: '/images/services/water-heater.jpg',
  5: '/images/services/tankless.jpg',
  6: '/images/services/water-softener.jpg',
  7: '/images/services/water-purifier.jpg',
  8: '/images/services/humidifier.jpg',
  9: '/images/services/hepa-system.jpg',
  default: '/images/services/default.jpg'
};

// Team images
const teamImages = {
  1: '/images/team/tech-1.jpg',
  2: '/images/team/tech-2.jpg',
  3: '/images/team/tech-3.jpg',
  default: '/images/team/default.jpg'
};

// Floating Element Animation Component
const FloatingElement = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ 
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

const ServiceCard = ({ service, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const serviceDetails = {
    1: {
      image: serviceImages[1],
      iconType: "furnace"
    },
    2: {
      image: serviceImages[2],
      iconType: "heatpump"
    },
    3: {
      image: serviceImages[3],
      iconType: "ac"
    },
    4: {
      image: serviceImages[4],
      iconType: "default"
    },
    5: {
      image: serviceImages[5],
      iconType: "default"
    },
    6: {
      image: serviceImages[6],
      iconType: "default"
    }
  };

  const details = serviceDetails[service.id] || {
    image: serviceImages.default,
    iconType: "default"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-100/10 dark:border-secondary-700/10 hover:border-accent-500/20 dark:hover:border-accent-500/20"
    >
      <div className="space-y-4">
        <div className="text-accent-500 dark:text-accent-400">
          <AnimatedServiceIcon type={details.iconType} />
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
            {service.title}
          </h3>
          <p className="text-secondary-600 dark:text-secondary-300 text-sm">
            {service.description}
          </p>
        </div>

        <Link 
          to={`/services#${service.id}`}
          className="inline-flex items-center text-accent-500 hover:text-accent-600 dark:text-accent-400 dark:hover:text-accent-300 text-sm font-medium transition-colors"
        >
          Learn More
          <span className="ml-1">→</span>
        </Link>
      </div>
    </motion.div>
  );
};

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${heroImages[currentImageIndex].src})`,
                backgroundPosition: heroImages[currentImageIndex].position
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-secondary-900/95 via-secondary-900/80 to-secondary-900/20" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button 
          onClick={prevImage}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-all duration-300 hover:scale-110 hidden md:block"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextImage}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-all duration-300 hover:scale-110 hidden md:block"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Content Container */}
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 pt-20 lg:pt-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-xl lg:ml-auto w-full lg:text-right text-center"
          >
            {/* Right Content */}
            <div className="space-y-8 md:space-y-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block bg-white/5 dark:bg-white/10 backdrop-blur-md px-6 py-2 rounded-full"
              >
                <span className="text-primary-400 dark:text-primary-300 font-medium text-sm sm:text-base">
                  <span className="text-accent-400 animate-pulse">★</span> Premier HVAC Solutions
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-display font-bold text-white leading-tight"
              >
                <span className="block mb-4">
                  <span className="text-accent-400 font-extrabold relative">
                    Fast Freeze
                    <motion.span
                      className="absolute -bottom-2 left-0 w-full h-1 bg-accent-400/30"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1, duration: 1 }}
                    />
                  </span>
                </span>
                <span className="block text-3xl sm:text-4xl md:text-5xl xl:text-6xl mb-2">
                  Heating & Refrigeration
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-primary-400 mt-4">
                  Services
                </span>
              </motion.h1>

              <div className="space-y-6">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-xl sm:text-2xl text-white/90 leading-relaxed font-medium"
                >
                  <span className="text-accent-400 font-semibold">Engineering Comfort</span> for Your Space, 
                  <br className="hidden lg:block" />
                  <span className="text-primary-400 font-semibold">Perfecting Climate</span> with Precision
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-lg text-white/80"
                >
                  Experience unmatched expertise in temperature control
                  <br className="hidden lg:block" />
                  and air quality solutions. Available 24/7.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap gap-4 lg:justify-end justify-center pt-4"
              >
                <Link 
                  to="/contact" 
                  className="btn bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-accent-500/25 text-lg font-medium"
                >
                  Get Free Quote
                  <motion.span 
                    className="inline-block ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
                <Link 
                  to="/services" 
                  className="btn bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 px-8 py-4 rounded-xl hover:scale-105 transform transition-all duration-300 shadow-lg text-lg font-medium"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-white dark:bg-secondary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/20 to-transparent dark:from-primary-900/20 pointer-events-none" />
        
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl blur-2xl" />
              <img 
                src={aboutImage} 
                alt="About our service" 
                className="relative rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-secondary-800 p-4 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-primary-500">3+</div>
                <div className="text-secondary-600 dark:text-secondary-400">Years of Excellence</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-block bg-primary-100 dark:bg-primary-900/30 px-4 py-2 rounded-full">
                <span className="text-primary-600 dark:text-primary-400 font-medium">About Our Company</span>
              </div>

              <h2 className="text-4xl font-bold text-secondary-900 dark:text-white">
                Delivering Comfort and Quality Since 2021
              </h2>

              <p className="text-secondary-600 dark:text-secondary-400 text-lg leading-relaxed">
                With over 3 years of experience, we've built our reputation on providing exceptional HVAC services
                that prioritize your comfort and satisfaction. Our team of certified professionals ensures
                that every project meets the highest standards of quality.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "🛠️", title: "Expert Service", desc: "Certified technicians" },
                  { icon: "⚡", title: "Fast Response", desc: "24/7 availability" },
                  { icon: "💯", title: "Quality Work", desc: "Guaranteed satisfaction" },
                  { icon: "🌟", title: "Best Price", desc: "Competitive rates" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="font-semibold text-secondary-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link 
                to="/about"
                className="inline-flex items-center space-x-2 text-primary-500 hover:text-primary-600 font-medium group"
              >
                <span>Learn More About Us</span>
                <motion.span 
                  className="inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section bg-secondary-50 dark:bg-secondary-900/50 overflow-hidden">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle mx-auto">
              We offer comprehensive HVAC solutions to keep your space comfortable all year round.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-secondary-800 shadow-lg hover:shadow-xl transition-all duration-500"
              >
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={serviceImages[service.id]} 
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/80 text-sm line-clamp-2">{service.description}</p>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    
                    <Link 
                      to={`/services#${service.id}`}
                      className="inline-flex items-center text-accent-500 hover:text-accent-600 dark:text-accent-400 dark:hover:text-accent-300 font-medium transition-colors group"
                    >
                      Learn More
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="btn bg-accent-500 hover:bg-accent-600 dark:bg-accent-600 dark:hover:bg-accent-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-accent-500/25 transition-all duration-300 inline-flex items-center gap-2"
            >
              View All Services
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-secondary-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={trustImage} 
                alt="Why choose us" 
                className="rounded-xl shadow-soft"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Why Choose Us?</h2>
              <p className="section-subtitle">
                We combine expertise with dedication to deliver the best HVAC services in the region.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Expert Technicians",
                    description: "Our team consists of certified professionals with years of experience.",
                    icon: "👨‍🔧",
                  },
                  {
                    title: "24/7 Emergency Service",
                    description: "We're always available when you need us most.",
                    icon: "🚨",
                  },
                  {
                    title: "Satisfaction Guaranteed",
                    description: "Your comfort and satisfaction are our top priorities.",
                    icon: "✅",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="text-2xl">{feature.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-secondary-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-secondary-600">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-700">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-accent-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6 rounded-full bg-white/10 backdrop-blur-sm px-6 py-2"
            >
              <span className="text-white/90 font-medium">✨ Transform Your Space Today</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Ready to Experience
              <span className="relative inline-block px-2 mx-2">
                Better
                <motion.div
                  className="absolute inset-0 bg-accent-500/30 -skew-x-12 rounded"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                />
              </span>
              Comfort?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Join thousands of satisfied customers who trust us for their HVAC needs. 
              Experience the perfect indoor climate, tailored just for you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link 
                to="/contact" 
                className="btn bg-accent-500 hover:bg-accent-600 text-white hover:scale-105 transform transition-all duration-300 group flex items-center gap-2 shadow-lg hover:shadow-accent-500/25"
              >
                Schedule Free Consultation
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block"
                >
                  →
                </motion.span>
              </Link>
              <Link 
                to="/services" 
                className="btn bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:scale-105 transform transition-all duration-300 backdrop-blur-sm shadow-lg"
              >
                Explore Our Services
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { icon: "⭐", text: "5-Star Rated" },
                { icon: "🏆", text: "Award Winning" },
                { icon: "🤝", text: "100% Satisfaction" },
                { icon: "💰", text: "Best Price Guarantee" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/10 transition-all"
                >
                  <span className="text-2xl mb-2 block">{item.icon}</span>
                  <span className="text-white/90 text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Update the ServiceCard styles */}
      <style>{`
        .card {
          @apply bg-white/80 dark:bg-secondary-800/80 backdrop-blur-sm rounded-2xl p-6 
                 shadow-lg hover:shadow-xl transition-all duration-300
                 border border-secondary-100/50 dark:border-secondary-700/50;
        }
        
        .card-hover {
          @apply hover:border-accent-500/50 dark:hover:border-accent-500/50
                 hover:translate-y-[-4px] hover:bg-white dark:hover:bg-secondary-800;
        }

        .shadow-soft {
          @apply shadow-lg shadow-secondary-900/10 dark:shadow-black/20;
        }

        .btn-primary {
          @apply bg-accent-500 hover:bg-accent-600 dark:bg-accent-600 dark:hover:bg-accent-700 
                 text-white shadow-lg hover:shadow-accent-500/25 
                 transition-all duration-300;
        }

        .btn-outline {
          @apply bg-white/5 backdrop-blur-sm border border-white/10 
                 text-white hover:bg-white/10 dark:hover:bg-white/10 
                 shadow-lg transition-all duration-300;
        }

        .section-title {
          @apply text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4;
        }

        .section-subtitle {
          @apply text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl;
        }
      `}</style>
    </div>
  );
};

export default Home; 