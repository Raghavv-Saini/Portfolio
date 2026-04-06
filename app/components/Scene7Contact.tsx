'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { COLORS, TIMING } from '@/lib/constants';
import type { ContactFormData, FormValidation } from '@/types';

// Email validation function
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Form validation function
const validateForm = (data: ContactFormData): FormValidation => {
  const errors: FormValidation['errors'] = {};
  let isValid = true;

  if (!data.name.trim()) {
    errors.name = 'Name is required';
    isValid = false;
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required';
    isValid = false;
  } else if (!validateEmail(data.email)) {
    errors.email = 'Invalid email format';
    isValid = false;
  }

  if (!data.message.trim()) {
    errors.message = 'Message is required';
    isValid = false;
  }

  return { isValid, errors };
};

export function Scene7Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Form state
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormValidation['errors']>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // Fade in/out based on viewport position
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -50]);

  // Gradual background darkening effect
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.3, 0.6]);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validation = validateForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    // Simulate form submission
    try {
      setSubmitStatus('idle');
      setStatusMessage('');
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success
      setSubmitStatus('success');
      setStatusMessage('TRANSMISSION SENT SUCCESSFULLY');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Transmission failed. Please try again.');
      console.error('Form submission error:', error);
    }
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-[5vw] md:px-10 lg:px-12" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      {/* Gradual Background Darkening */}
      <motion.div
        className="absolute inset-0 bg-black pointer-events-none"
        style={{ opacity: backgroundOpacity }}
      />

      <motion.div
        style={{ opacity, y }}
        className="relative w-full max-w-5xl mx-auto z-10"
      >
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center"
          style={{ 
            fontWeight: 100,
            letterSpacing: '0.2em',
            marginBottom: 'clamp(3rem, 6vw, 6rem)'
          }}
        >
          FINAL TRANSMISSION
        </motion.h2>

        {/* Spaceship Terminal Interface */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
          viewport={{ once: true }}
          className="relative backdrop-blur-sm"
          style={{
            background: 'linear-gradient(135deg, rgba(77, 124, 254, 0.05) 0%, rgba(0, 0, 0, 0.8) 100%)',
            border: '2px solid rgba(77, 124, 254, 0.3)',
            boxShadow: '0 0 40px rgba(77, 124, 254, 0.2), inset 0 0 60px rgba(77, 124, 254, 0.05)',
          }}
        >
          {/* Terminal Header */}
          <div 
            className="border-b"
            style={{ 
              borderColor: 'rgba(77, 124, 254, 0.3)',
              padding: 'clamp(1.25rem, 4vw, 2rem) clamp(1.5rem, 5vw, 3rem)',
              background: 'rgba(0, 0, 0, 0.4)',
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <motion.div 
                  className="w-3 h-3 rounded-full bg-green-500"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="w-3 h-3 rounded-full bg-yellow-500"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                />
                <motion.div 
                  className="w-3 h-3 rounded-full bg-red-500"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                />
                <span 
                  className="ml-4 tracking-[0.2em] uppercase"
                  style={{ 
                    color: COLORS.ACCENT_BLUE,
                    fontSize: 'clamp(0.75rem, 1.2vw, 0.9rem)',
                    fontWeight: 300,
                  }}
                >
                  TRANSMISSION INTERFACE v2.4.1
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#4D7CFE] animate-pulse" />
                <span 
                  className="text-[#4D7CFE] tracking-wider"
                  style={{ fontSize: 'clamp(0.7rem, 1.1vw, 0.85rem)' }}
                >
                  ONLINE
                </span>
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#4D7CFE]/50 to-transparent" />
          </div>

          {/* Terminal Body */}
          <div style={{ padding: 'clamp(2rem, 6vw, 4rem)' }}>
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-3 tracking-[0.15em] uppercase"
                  style={{
                    color: COLORS.ACCENT_BLUE,
                    fontSize: 'clamp(0.85rem, 1.2vw, 1rem)',
                    fontWeight: 300,
                  }}
                >
                  {'>'} SENDER IDENTIFICATION
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name..."
                  className="w-full bg-black/60 border-2 rounded-none px-6 py-4 text-white focus:outline-none transition-all duration-300 placeholder:text-white/30"
                  style={{ 
                    letterSpacing: '0.05em',
                    fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                    borderColor: errors.name ? '#FF2D75' : 'rgba(77, 124, 254, 0.3)',
                    boxShadow: errors.name ? '0 0 20px rgba(255, 45, 117, 0.3)' : '0 0 20px rgba(77, 124, 254, 0.1)',
                  }}
                  onFocus={(e) => e.target.style.borderColor = COLORS.ACCENT_BLUE}
                  onBlur={(e) => e.target.style.borderColor = errors.name ? '#FF2D75' : 'rgba(77, 124, 254, 0.3)'}
                />
                {errors.name && (
                  <p className="text-[#FF2D75] text-sm mt-2 tracking-wide">{'>'} ERROR: {errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-3 tracking-[0.15em] uppercase"
                  style={{
                    color: COLORS.ACCENT_BLUE,
                    fontSize: 'clamp(0.85rem, 1.2vw, 1rem)',
                    fontWeight: 300,
                  }}
                >
                  {'>'} TRANSMISSION COORDINATES
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@domain.com"
                  className="w-full bg-black/60 border-2 rounded-none px-6 py-4 text-white focus:outline-none transition-all duration-300 placeholder:text-white/30"
                  style={{ 
                    letterSpacing: '0.05em',
                    fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                    borderColor: errors.email ? '#FF2D75' : 'rgba(77, 124, 254, 0.3)',
                    boxShadow: errors.email ? '0 0 20px rgba(255, 45, 117, 0.3)' : '0 0 20px rgba(77, 124, 254, 0.1)',
                  }}
                  onFocus={(e) => e.target.style.borderColor = COLORS.ACCENT_BLUE}
                  onBlur={(e) => e.target.style.borderColor = errors.email ? '#FF2D75' : 'rgba(77, 124, 254, 0.3)'}
                />
                {errors.email && (
                  <p className="text-[#FF2D75] text-sm mt-2 tracking-wide">{'>'} ERROR: {errors.email}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-3 tracking-[0.15em] uppercase"
                  style={{
                    color: COLORS.ACCENT_BLUE,
                    fontSize: 'clamp(0.85rem, 1.2vw, 1rem)',
                    fontWeight: 300,
                  }}
                >
                  {'>'} MESSAGE PAYLOAD
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  rows={6}
                  className="w-full bg-black/60 border-2 rounded-none px-6 py-4 text-white focus:outline-none transition-all duration-300 resize-none placeholder:text-white/30"
                  style={{ 
                    letterSpacing: '0.05em',
                    fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                    lineHeight: '1.6',
                    borderColor: errors.message ? '#FF2D75' : 'rgba(77, 124, 254, 0.3)',
                    boxShadow: errors.message ? '0 0 20px rgba(255, 45, 117, 0.3)' : '0 0 20px rgba(77, 124, 254, 0.1)',
                  }}
                  onFocus={(e) => e.target.style.borderColor = COLORS.ACCENT_BLUE}
                  onBlur={(e) => e.target.style.borderColor = errors.message ? '#FF2D75' : 'rgba(77, 124, 254, 0.3)'}
                />
                {errors.message && (
                  <p className="text-[#FF2D75] text-sm mt-2 tracking-wide">{'>'} ERROR: {errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="relative w-full py-5 rounded-none overflow-hidden group border-2"
                style={{
                  backgroundColor: 'rgba(77, 124, 254, 0.1)',
                  borderColor: COLORS.ACCENT_BLUE,
                  letterSpacing: '0.2em',
                  fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                  fontWeight: 300,
                }}
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: 'rgba(77, 124, 254, 0.2)',
                  boxShadow: '0 0 30px rgba(77, 124, 254, 0.4)',
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                {/* Animated scan line */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4D7CFE]/30 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                
                <span className="relative z-10 tracking-[0.2em] uppercase">
                  {'>'} INITIATE TRANSMISSION
                </span>
              </motion.button>

              {/* Status Message */}
              {statusMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center p-4 border-l-4 ${
                    submitStatus === 'success'
                      ? 'bg-green-500/10 border-green-500'
                      : 'bg-red-500/10 border-red-500'
                  }`}
                  style={{ 
                    letterSpacing: '0.05em',
                    fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)',
                  }}
                >
                  <span style={{ color: submitStatus === 'success' ? '#6DFE7C' : '#FF2D75' }}>
                    {'>'} {statusMessage}
                  </span>
                </motion.div>
              )}
            </form>

              {/* Contact Information */}
            <div className="border-t" style={{ marginTop: '2.5rem', paddingTop: '2rem', borderColor: 'rgba(77, 124, 254, 0.2)' }}>
              <p
                className="text-center tracking-[0.15em] uppercase"
                style={{
                  color: COLORS.ACCENT_BLUE,
                  fontSize: 'clamp(0.85rem, 1.2vw, 1rem)',
                  fontWeight: 300,
                  marginBottom: 'clamp(1.25rem, 2.5vw, 2rem)',
                }}
              >
                {'>'} DIRECT CHANNELS
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                {/* Gmail */}
                <a
                  href="mailto:raghavvv.dev@gmail.com"
                  className="group relative"
                  aria-label="Email"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-2 border-[#4D7CFE]/30 bg-black/40 hover:border-[#4D7CFE] hover:bg-[#4D7CFE]/10 transition-all duration-300"
                    style={{ boxShadow: '0 0 20px rgba(77, 124, 254, 0.1)' }}
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#4D7CFE' }}>
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </motion.div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/raghavendra-saini-216b8b325/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label="LinkedIn"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-2 border-[#4D7CFE]/30 bg-black/40 hover:border-[#4D7CFE] hover:bg-[#4D7CFE]/10 transition-all duration-300"
                    style={{ boxShadow: '0 0 20px rgba(77, 124, 254, 0.1)' }}
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#4D7CFE' }}>
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </motion.div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Raghavv-Saini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label="GitHub"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-2 border-[#4D7CFE]/30 bg-black/40 hover:border-[#4D7CFE] hover:bg-[#4D7CFE]/10 transition-all duration-300"
                    style={{ boxShadow: '0 0 20px rgba(77, 124, 254, 0.1)' }}
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#4D7CFE' }}>
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </motion.div>
                </a>
              </div>
            </div>
          </div>

          {/* Terminal Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2" style={{ borderColor: COLORS.ACCENT_BLUE }} />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2" style={{ borderColor: COLORS.ACCENT_BLUE }} />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2" style={{ borderColor: COLORS.ACCENT_BLUE }} />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2" style={{ borderColor: COLORS.ACCENT_BLUE }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
