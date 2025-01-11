import { motion } from 'framer-motion';
import { useState } from 'react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

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
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const serviceFeatures = {
    1: [
      "Professional installation by certified technicians",
      "Energy-efficient furnace options",
      "Complete system assessment",
      "Expert recommendations",
      "Warranty coverage",
    ],
    2: [
      "Dual heating and cooling capabilities",
      "Energy-saving technology",
      "Year-round comfort solution",
      "Environmental-friendly options",
      "Regular maintenance service",
    ],
    3: [
      "New AC installation",
      "System repairs and maintenance",
      "Energy efficiency upgrades",
      "24/7 emergency service",
      "Seasonal tune-ups",
    ],
    4: [
      "Tank and tankless options",
      "Energy-efficient models",
      "Professional installation",
      "Repair services",
      "Regular maintenance",
    ],
    5: [
      "Space-saving design",
      "Endless hot water supply",
      "Energy cost savings",
      "Professional installation",
      "Long-term reliability",
    ],
    6: [
      "Water quality testing",
      "Custom treatment solutions",
      "Professional installation",
      "Regular maintenance",
      "Filter replacement service",
    ],
    7: [
      "Advanced filtration technology",
      "Multiple purification stages",
      "Professional installation",
      "Regular maintenance",
      "Filter replacement",
    ],
    8: [
      "Whole-house solutions",
      "Smart humidity control",
      "Energy-efficient operation",
      "Professional installation",
      "Regular maintenance",
    ],
    9: [
      "Advanced air filtration",
      "Allergen removal",
      "Professional installation",
      "Regular maintenance",
      "Filter replacement service",
    ],
  };

  return (
    <div className="min-h-screen bg-white dark:bg-secondary-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20" />
        <div className="container relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block bg-accent-500/10 dark:bg-accent-500/20 px-4 py-2 rounded-full mb-6">
              <span className="text-accent-600 dark:text-accent-400 font-medium">Our Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
              <span className="block text-accent-500 mb-2">Fast Freeze</span>
              <span className="block text-3xl md:text-4xl">Heating & Refrigeration Services</span>
              <span className="block text-2xl md:text-3xl mt-4">Professional HVAC Solutions</span>
            </h1>
            <p className="text-xl text-secondary-600 dark:text-secondary-400">
              Comprehensive heating, cooling, and air quality solutions to keep your space comfortable all year round.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-secondary-50 dark:bg-secondary-800/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`bg-white dark:bg-secondary-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                  selectedService === service.id ? 'ring-2 ring-accent-500' : ''
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={serviceImages[service.id]} 
                    alt={service.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-secondary-900 dark:text-white">{service.title}</h3>
                  <p className="text-secondary-600 dark:text-secondary-400 mb-4">{service.description}</p>
                  
                  {/* Features List */}
                  {selectedService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4 pt-4 border-t border-secondary-200 dark:border-secondary-700"
                    >
                      <h4 className="font-semibold mb-2 text-secondary-900 dark:text-white">Features & Benefits:</h4>
                      <ul className="space-y-2">
                        {serviceFeatures[service.id].map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center text-secondary-600 dark:text-secondary-400"
                          >
                            <span className="text-accent-500 mr-2">✓</span>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                      <Link
                        to="/contact"
                        className="btn bg-accent-500 hover:bg-accent-600 text-white w-full mt-4 py-2 rounded-lg transition-colors"
                      >
                        Request Service
                      </Link>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-pattern opacity-10" />
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold mb-4">24/7 Emergency Services</h2>
                  <p className="text-white/90 max-w-xl">
                    HVAC emergencies don't wait for business hours. Our expert team is available
                    24/7 to handle any urgent heating or cooling issues.
                  </p>
                </div>
                <Link 
                  to="/contact"
                  className="btn bg-white text-accent-600 hover:bg-white/90 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Contact Emergency Service
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-white dark:bg-secondary-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">Our Service Process</h2>
            <p className="text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              We follow a systematic approach to ensure you receive the highest quality service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Schedule",
                description: "Book your service appointment at your convenience",
                icon: "📅",
              },
              {
                title: "Inspect",
                description: "Our experts thoroughly assess your system",
                icon: "🔍",
              },
              {
                title: "Recommend",
                description: "We provide detailed service recommendations",
                icon: "📋",
              },
              {
                title: "Execute",
                description: "Professional service delivery with quality assurance",
                icon: "🛠️",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary-50 dark:bg-secondary-800 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-secondary-900 dark:text-white">{step.title}</h3>
                <p className="text-secondary-600 dark:text-secondary-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">Ready to Get Started?</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and let us help you find the perfect solution for your needs.
            </p>
            <Link 
              to="/contact"
              className="btn bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;