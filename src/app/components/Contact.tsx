import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [showEmailHint, setShowEmailHint] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_o0goo68', // Replace with your EmailJS service ID
        'template_ayedwxh', // Replace with your EmailJS template ID
        formRef.current,
        'opvqsTbGtNovuWgqi' // Replace with your EmailJS public key
      );
      setIsSubmitted(true);
      formRef.current.reset();
      setEmail('');
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to send me a message!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 text-center"
            >
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-400">
                Thank you for reaching out. I`&apos;`ll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-green-500 hover:text-green-400 transition-colors"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Name Field */}
              <div className="group">
                <label className="flex items-center gap-2 text-gray-300 mb-2 text-sm">
                  <User className="w-4 h-4" />
                  Your Name
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="from_name"
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg 
                           focus:outline-none focus:border-blue-500 transition-colors
                           text-white placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div className="group">
                <label className="flex items-center gap-2 text-gray-300 mb-2 text-sm">
                  <Mail className="w-4 h-4" />
                  Your Email
                  <button
                    type="button"
                    onMouseEnter={() => setShowEmailHint(true)}
                    onMouseLeave={() => setShowEmailHint(false)}
                    className="ml-1 text-gray-500 hover:text-gray-400"
                  >
                    (optional)
                  </button>
                </label>
                {showEmailHint && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-gray-500 mb-2"
                  >
                    Provide your email if you`&apos;`d like me to get back to you
                  </motion.p>
                )}
                <input
                  type="email"
                  name="from_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg 
                           focus:outline-none focus:border-blue-500 transition-colors
                           text-white placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Field */}
              <div className="group">
                <label className="flex items-center gap-2 text-gray-300 mb-2 text-sm">
                  Message
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg 
                           focus:outline-none focus:border-blue-500 transition-colors
                           text-white placeholder-gray-500 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-lg font-medium text-white
                          flex items-center justify-center gap-2
                          ${isSubmitting 
                            ? 'bg-blue-600/50 cursor-not-allowed' 
                            : 'bg-blue-600 hover:bg-blue-700'} 
                          transition-colors duration-300`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;