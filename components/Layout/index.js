import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Toggle from '../Toggle';
import { motion } from 'framer-motion';

// Our custom easing
let easing = [0.6, -0.05, 0.01, 0.99];

// animate: defines animation
// initial: defines initial state of animation or stating point.
// exit: defines animation when component exits

// Custom variant
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Navbar />
        <div className="px-28">
          <motion.div variants={fadeInUp}>{children}</motion.div>
        </div>
        <div className="fixed bottom-0 right-0 px-28 py-10">
          <Toggle />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
