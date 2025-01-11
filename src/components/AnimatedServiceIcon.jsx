import { motion } from 'framer-motion';

const icons = {
  furnace: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11V9a2 2 0 00-2-2H7a2 2 0 00-2 2v6a2 2 0 002 2h8m4-6v4m0 0v4m0-4h-4m4 0h4" />
    </svg>
  ),
  heatpump: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  ac: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7a2 2 0 00-2-2H6a2 2 0 00-2 2m16 0v10M4 7v10m16 0a2 2 0 01-2 2H6a2 2 0 01-2-2m16 0V7M4 17V7m0 0h16" />
    </svg>
  ),
  default: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

const AnimatedServiceIcon = ({ type = 'default', size = 'normal' }) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    normal: 'w-12 h-12',
    large: 'w-16 h-16',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`${sizeClasses[size]} relative group`}
    >
      {/* Background Circle */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500 to-primary-400 dark:from-primary-600 dark:to-primary-500 opacity-90 group-hover:opacity-100 transition-opacity"
      />
      
      {/* Icon Container */}
      <div className="relative h-full w-full flex items-center justify-center text-white">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {icons[type] || icons.default}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AnimatedServiceIcon; 