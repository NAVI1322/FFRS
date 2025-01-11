import { motion } from 'framer-motion';
import { COMPANY_NAME } from '../constants';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-secondary-900">
      {/* Emergency Contact Banner */}
    

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
              <span className="text-accent-600 dark:text-accent-400 font-medium">Contact Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
              <span className="block text-accent-500 mb-2">Fast Freeze</span>
              <span className="block text-3xl md:text-4xl">Heating & Refrigeration Services</span>
              <span className="block text-2xl md:text-3xl mt-4">Get in Touch with Our HVAC Experts</span>
            </h1>
            <p className="text-xl text-secondary-600 dark:text-secondary-400">
              Professional heating and cooling solutions for your comfort needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 bg-secondary-50 dark:bg-secondary-800/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-accent-500 text-3xl mb-4">📞</div>
              <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">Phone</h3>
              <div className="space-y-2">
                <a href="tel:+16478942308" className="block text-secondary-600 dark:text-secondary-400 hover:text-accent-500 transition-colors">
                  (647) 894-2308
                </a>
                <a href="tel:+14379866955" className="block text-secondary-600 dark:text-secondary-400 hover:text-accent-500 transition-colors">
                  (437) 986-6955
                </a>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-accent-500 text-3xl mb-4">✉️</div>
              <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">Email</h3>
              <a href="mailto:rksharma041976@gmail.com" className="text-secondary-600 dark:text-secondary-400 hover:text-accent-500 transition-colors">
                varinder@gmail.com
              </a>
            </motion.div>

            {/* Hours Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-accent-500 text-3xl mb-4">🕒</div>
              <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">Hours</h3>
              <div className="space-y-1 text-secondary-600 dark:text-secondary-400">
                <p>Monday - Friday: 8AM - 6PM</p>
                <p>Saturday: 9AM - 4PM</p>
                <p>Sunday: Emergency Only</p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-secondary-800 rounded-xl overflow-hidden shadow-lg h-full"
            >
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.8876712542584!2d-79.76569112346687!3d43.75581317109986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3d1310a3c695%3A0x1d2e8c6c26f92d6e!2s43.7558132%2C-79.7635024!5e0!3m2!1sen!2sca!4v1706636176479!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>

            {/* Emergency Services Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-accent-500 rounded-xl p-8 text-white h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl animate-pulse">🚨</span>
                  <h3 className="text-xl font-bold">Emergency Services</h3>
                </div>
                <p className="mb-8 text-lg">
                  Need immediate assistance? Our emergency team is available 24/7 to handle your urgent HVAC needs.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-white/90">Call us now:</h4>
                <div className="grid grid-cols-1 gap-4">
                  <a 
                    href="tel:+16478942308"
                    className="bg-white text-accent-500 py-4 px-6 rounded-lg text-center font-semibold hover:bg-white/90 transition-colors text-lg flex items-center justify-center gap-2"
                  >
                    <span className="animate-pulse">📞</span>
                    (647) 894-2308
                  </a>
                  <a 
                    href="tel:+14379866955"
                    className="bg-white text-accent-500 py-4 px-6 rounded-lg text-center font-semibold hover:bg-white/90 transition-colors text-lg flex items-center justify-center gap-2"
                  >
                    <span className="animate-pulse">📞</span>
                    (437) 986-6955
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 