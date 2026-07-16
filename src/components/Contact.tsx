import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);

    // Simulate database insertion or API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
    }, 1200);
  };

  return (
    <div id="contact-view" className="relative w-full pt-28 bg-white min-h-screen">
      {/* Background ambient grain */}
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Editorial Narrative (Matching Image 7/8) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <span className="font-mono text-sm tracking-widest text-nuve-stone uppercase block">CONTACT US</span>
            
            <h1 className="font-serif text-4xl sm:text-5xl leading-[1.1] tracking-tight text-nuve-espresso font-light uppercase">
              LET'S BEGIN A <br />
              <span className="font-serif-italic text-nuve-clay normal-case font-normal">Conversation.</span>
            </h1>

            <p className="font-sans text-lg text-nuve-stone leading-relaxed font-light">
              Tell us more about your space, your ideas, and your aspirations. We'll guide you through the next steps with care, patience, and absolute design intention.
            </p>

            <div className="flex flex-col gap-4 border-t border-nuve-stone/15 pt-8 mt-4 text-base">
              <div>
                <span className="font-mono text-sm tracking-widest text-nuve-stone uppercase block mb-1">GENERAL ENQUIRIES</span>
                <a href="mailto:hello@nuvestudio.com" className="font-sans text-lg text-nuve-espresso hover:text-nuve-clay transition-colors underline underline-offset-4">
                  hello@nuvestudio.com
                </a>
              </div>
              <div className="mt-2">
                <span className="font-mono text-sm tracking-widest text-nuve-stone uppercase block mb-1">OFFICE PHONE</span>
                <a href="tel:+351912345678" className="font-sans text-lg text-nuve-espresso hover:text-nuve-clay transition-colors">
                  +351 912 345 678
                </a>
              </div>
            </div>
          </div>

          {/* Right Minimal Form - Underlined Only, NO boxes (Matching Image 7/8) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  id="contact-form-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-10"
                >
                  {/* Name field (Full width row) */}
                  <div className="relative group">
                    <input
                      required
                      type="text"
                      name="name"
                      id="form-input-name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full bg-transparent py-3 border-b border-nuve-stone/30 focus:border-nuve-clay focus:outline-none font-sans text-lg text-nuve-espresso transition-all duration-300 placeholder-nuve-stone/50 font-light"
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-nuve-clay transition-all duration-300 group-focus-within:w-full" />
                  </div>

                  {/* Phone & Email (Split side-by-side row) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div className="relative group">
                      <input
                        type="tel"
                        name="phone"
                        id="form-input-phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        className="w-full bg-transparent py-3 border-b border-nuve-stone/30 focus:border-nuve-clay focus:outline-none font-sans text-lg text-nuve-espresso transition-all duration-300 placeholder-nuve-stone/50 font-light"
                      />
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-nuve-clay transition-all duration-300 group-focus-within:w-full" />
                    </div>

                    <div className="relative group">
                      <input
                        required
                        type="email"
                        name="email"
                        id="form-input-email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full bg-transparent py-3 border-b border-nuve-stone/30 focus:border-nuve-clay focus:outline-none font-sans text-lg text-nuve-espresso transition-all duration-300 placeholder-nuve-stone/50 font-light"
                      />
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-nuve-clay transition-all duration-300 group-focus-within:w-full" />
                    </div>
                  </div>

                  {/* Message (Full width box-underlined style) */}
                  <div className="relative group">
                    <textarea
                      required
                      rows={5}
                      name="message"
                      id="form-input-message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      className="w-full bg-transparent py-3 border border-t-0 border-l-0 border-r-0 border-b-nuve-stone/30 focus:border-b-nuve-clay focus:outline-none font-sans text-lg text-nuve-espresso transition-all duration-300 placeholder-nuve-stone/50 font-light resize-none"
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-nuve-clay transition-all duration-300 group-focus-within:w-full" />
                  </div>

                  {/* Action Button */}
                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group flex items-center gap-3 font-mono text-base tracking-[0.25em] text-nuve-espresso hover:text-nuve-clay transition-colors duration-300 cursor-pointer border-b border-nuve-espresso/30 pb-2 hover:border-nuve-clay/40 disabled:opacity-50 focus:outline-none"
                    >
                      {isSubmitting ? (
                        <>PROCESSING REQUEST <span className="w-2 h-2 rounded-full bg-nuve-clay animate-ping" /></>
                      ) : (
                        <>SEND REQUEST <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" /></>
                      )}
                    </button>
                    
                    <span className="font-mono text-sm text-nuve-stone tracking-widest uppercase">
                      * TYPICALLY RESPOND WITHIN 48 HOURS
                    </span>
                  </div>

                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-nuve-cream/40 p-8 md:p-12 border border-nuve-stone/15 flex flex-col items-center text-center gap-6"
                >
                  <div className="w-16 h-16 rounded-full bg-nuve-espresso text-nuve-cream flex items-center justify-center shadow-md">
                    <Check size={24} />
                  </div>
                  <h2 className="font-serif text-2xl text-nuve-espresso font-light">THANK YOU, REQUEST FILED</h2>
                  <p className="font-sans text-lg text-nuve-stone leading-relaxed max-w-md font-light">
                    Our intake coordinators have received your specifications. Evelyn or Liam will review your files and contact you via email shortly to schedule a somatic video introduction.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="font-mono text-sm tracking-widest text-nuve-clay hover:underline focus:outline-none mt-4 cursor-pointer"
                  >
                    SUBMIT ANOTHER ENQUIRY
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </div>
  );
}
