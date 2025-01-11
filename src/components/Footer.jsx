import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, CONTACT_INFO, NAVIGATION_LINKS } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      {/* Map Section */}
      <div className="h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.8876712542584!2d-79.76569112346687!3d43.75581317109986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3d1310a3c695%3A0x1d2e8c6c26f92d6e!2s43.7558132%2C-79.7635024!5e0!3m2!1sen!2sca!4v1706636176479!5m2!1sen!2sca"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="filter grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-6">Fast Freeze</h3>
            <p className="text-secondary-300 mb-4">
              Professional heating, cooling, and refrigeration services for your comfort.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Links */}
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <motion.a
                  key={social}
                  href={`#${social}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  {/* Replace with actual icons */}
                  <div className="w-5 h-5 bg-white/10 rounded-full" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-secondary-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-secondary-300">
              {CONTACT_INFO.phones.map((phone, index) => (
                <li key={index}>
                  <a
                    href={`tel:${phone}`}
                    className="hover:text-white transition-colors"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm">
              © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-secondary-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-secondary-400 hover:text-white text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 