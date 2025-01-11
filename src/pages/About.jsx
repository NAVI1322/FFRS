import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { COMPANY_NAME } from '../constants';

const About = () => {
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
            <div className="inline-block bg-primary-100 dark:bg-primary-900/30 px-4 py-2 rounded-full mb-6">
              <span className="text-primary-600 dark:text-primary-400 font-medium">Our Story</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
              <span className="block text-accent-500 mb-2">Fast Freeze</span>
              <span className="block text-3xl md:text-4xl">Heating & Refrigeration Services</span>
              <span className="block text-2xl md:text-3xl mt-4">Dedicated to Your Comfort Since 2022</span>
            </h1>
            <p className="text-xl text-secondary-600 dark:text-secondary-400">
              {COMPANY_NAME} brings professional HVAC solutions with a commitment to quality and customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl blur-2xl" />
              <img 
                src="/images/hero/about-hero.jpg"
                alt="Our HVAC Service"
                className="relative rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-secondary-800 p-4 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-primary-500">2+</div>
                <div className="text-secondary-600 dark:text-secondary-400">Years of Service</div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white">
                Professional HVAC Services You Can Trust
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-400">
                Since our establishment in 2022, we've been committed to providing exceptional heating, 
                ventilation, and air conditioning services to our community. Our journey began with a 
                simple mission: to deliver reliable comfort solutions with unmatched customer service.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '500+', label: 'Happy Customers' },
                  { number: '24/7', label: 'Emergency Service' },
                  { number: '100%', label: 'Satisfaction Rate' },
                  { number: '0', label: 'Service Complaints' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-primary-50 dark:bg-primary-900/10 p-4 rounded-lg text-center"
                  >
                    <div className="text-3xl font-bold text-primary-500 mb-1">{stat.number}</div>
                    <div className="text-secondary-600 dark:text-secondary-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary-50 dark:bg-secondary-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              These principles guide everything we do, ensuring we deliver the best possible service to our customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Excellence",
                description: "We strive for excellence in every service we provide, ensuring your complete satisfaction."
              },
              {
                icon: "⚡",
                title: "Reliability",
                description: "Count on us for prompt, dependable service whenever you need us, 24/7."
              },
              {
                icon: "💪",
                title: "Integrity",
                description: "We believe in honest, transparent service with no hidden costs or surprises."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-secondary-900 p-6 rounded-xl shadow-soft"
              >
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary-500 rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Experience Better Comfort?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let us help you create the perfect indoor environment for your home or business.
              Contact us today for a free consultation!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="btn bg-white text-primary-500 hover:bg-white/90"
              >
                Get Free Consultation
              </Link>
              <Link 
                to="/services" 
                className="btn btn-outline text-white border-white hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 