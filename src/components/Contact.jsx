import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData';

// ── Arrow icon ────────────────────────────────────────────────────────────────
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

// ── Spinner icon ──────────────────────────────────────────────────────────────
const Spinner = () => (
  <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
  </svg>
);

// ── Underline input style ─────────────────────────────────────────────────────
const inputCls =
  'w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors duration-300';

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // 'idle'|'sending'|'success'|'error'

  // Parallax background word
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%']);

  // Destructure EmailJS config
  const { serviceId, templateId, publicKey } = emailjsConfig;
  const PLACEHOLDERS = [
    'YOUR_EMAILJS_SERVICE_ID',
    'YOUR_EMAILJS_TEMPLATE_ID',
    'YOUR_EMAILJS_PUBLIC_KEY',
  ];
  const isConfigured =
    serviceId && templateId && publicKey &&
    !PLACEHOLDERS.includes(serviceId) &&
    !PLACEHOLDERS.includes(templateId) &&
    !PLACEHOLDERS.includes(publicKey);

  const resetAfter = (ms) =>
    setTimeout(() => setStatus('idle'), ms);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    const firstName = formRef.current.querySelector('#firstName').value.trim();
    const lastName  = formRef.current.querySelector('#lastName').value.trim();
    const email     = formRef.current.querySelector('#email').value.trim();
    const message   = formRef.current.querySelector('#message').value.trim();

    // Basic validation
    if (!firstName || !email || !message) {
      setStatus('error');
      resetAfter(3000);
      return;
    }

    setStatus('sending');

    if (!isConfigured) {
      // Fallback: open mailto
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=Portfolio Contact from ${firstName} ${lastName}&body=${encodeURIComponent(`From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`)}`,
        '_blank'
      );
      setStatus('success');
      formRef.current.reset();
      resetAfter(3000);
      return;
    }

    // Send via EmailJS (dynamic import)
    try {
      const emailjs = await import('@emailjs/browser');
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus('success');
      formRef.current.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    } finally {
      resetAfter(4000);
    }
  };

  // Submit button appearance
  const btnContent = {
    idle: (
      <span className="flex items-center gap-2">
        Send Message
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          <ArrowIcon />
        </span>
      </span>
    ),
    sending: (
      <span className="flex items-center gap-2">
        <Spinner /> Sending...
      </span>
    ),
    success: <span>Sent Successfully ✓</span>,
    error:   <span>Failed — Try Again</span>,
  };

  const btnCls = {
    idle:    'border-white text-black bg-white hover:bg-transparent hover:text-white',
    sending: 'border-white/40 text-white/50 bg-transparent cursor-not-allowed',
    success: 'border-green-400 text-green-400 bg-transparent',
    error:   'border-red-900 text-red-200 bg-red-900/40',
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* ── Parallax giant "Contact" word ─────────────────────────── */}
      <motion.div
        style={{ y }}
        className="absolute inset-x-0 top-0 pointer-events-none z-0 flex justify-center overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none text-white/[0.04] scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact','Arial Black',sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* ── Red contact card ──────────────────────────────────────── */}
      <div className="relative z-10 w-full flex justify-end pb-0">
        <div
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16"
          data-aos="fade-up"
        >
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
            <p className="uppercase tracking-[0.2em] text-white/70 text-sm font-semibold">
              Reach Me
            </p>
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 border border-white/20 text-white text-sm font-semibold hover:bg-black/40 transition"
              >
                DM on Instagram ↗
              </a>
            )}
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-12"
            noValidate
          >
            {/* Two-column row: inputs left, textarea right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left: inputs */}
              <div className="flex flex-col gap-8">
                <div>
                  <input
                    id="firstName"
                    name="first_name"
                    type="text"
                    placeholder="First Name *"
                    required
                    className={inputCls}
                  />
                </div>
                <div>
                  <input
                    id="lastName"
                    name="last_name"
                    type="text"
                    placeholder="Last Name"
                    className={inputCls}
                  />
                </div>
                <div>
                  <input
                    id="email"
                    name="user_email"
                    type="email"
                    placeholder="Email Address *"
                    required
                    className={inputCls}
                  />
                </div>
              </div>

              {/* Right: textarea */}
              <div>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message *"
                  required
                  rows={6}
                  className={`${inputCls} resize-none min-h-[120px]`}
                />
              </div>
            </div>

            {/* Bottom row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex flex-col gap-3 text-sm text-white/70 max-w-md">
                {/* Permission checkbox */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="mt-1 accent-black"
                  />
                  <span>
                    I agree to being contacted about opportunities and projects.
                  </span>
                </label>

                <p>
                  Your message will be sent directly to my inbox. I typically respond within 24–48 hours.{' '}
                  <a
                    href={`mailto:${personalInfo.emails.primary}?subject=Urgent – Portfolio Enquiry`}
                    className="underline text-white hover:text-black transition"
                  >
                    Email me urgently →
                  </a>
                </p>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`group flex-shrink-0 inline-flex items-center gap-2 rounded-full border px-8 py-4 font-semibold text-sm transition-all duration-300 ${btnCls[status]}`}
              >
                {btnContent[status]}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

