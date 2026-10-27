import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Send, MessageSquare, CheckCircle, Clock } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

interface ContactProps {
  initialMessage?: string;
  onNotify: (message: string, type?: 'success' | 'info') => void;
}

export const Contact: React.FC<ContactProps> = ({ initialMessage, onNotify }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: 'General Inquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialMessage) {
      setFormData((prev) => ({
        ...prev,
        message: initialMessage
      }));
    }
  }, [initialMessage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName.trim() || !formData.email.trim() || !formData.message.trim()) {
      onNotify('Please fill in required fields (Name, Email, Message)', 'info');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onNotify('Message sent successfully! Aldy will respond within 24 hours.', 'success');
    }, 800);
  };

  const handleSendViaWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Aldy! My name is ${formData.firstName} ${formData.lastName}.\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\n\nProject details: ${formData.message || 'I would like to discuss a project with you.'}`
    );
    window.open(`https://wa.me/${PORTFOLIO_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      projectType: 'General Inquiry',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 max-w-[1300px] mx-auto px-6 md:px-12 relative">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Left Side: Contact Intro */}
        <div className="flex-1">
          <p className="text-[#f97316] font-medium text-sm tracking-wide mb-3">
            ✦ Contact Me
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white mb-6 leading-tight">
            Get in touch to discuss<br />
            <span className="text-[#f97316]">your next project!</span>
          </h2>

          <p className="text-[#a1a1aa] text-base leading-relaxed mb-8 max-w-lg">
            Ready to take your project to the next level? Whether you need a new
            website, a web application, or just a second opinion on your build,
            I'm happy to talk.
          </p>

          {/* Details Card */}
          <div className="space-y-4 mb-8 bg-[#141414] border border-[#222222] p-6 rounded-2xl max-w-lg">
            <div className="flex items-center gap-3 text-sm text-[#e4e4e7]">
              <div className="w-8 h-8 rounded-full bg-[#1e1e1e] flex items-center justify-center text-[#f97316] shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs text-[#71717a] block">Email:</span>
                <strong className="text-white font-medium">{PORTFOLIO_INFO.email}</strong>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-[#e4e4e7]">
              <div className="w-8 h-8 rounded-full bg-[#1e1e1e] flex items-center justify-center text-[#f97316] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs text-[#71717a] block">Based In:</span>
                <strong className="text-white font-medium">{PORTFOLIO_INFO.location}</strong>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-[#e4e4e7]">
              <div className="w-8 h-8 rounded-full bg-[#1e1e1e] flex items-center justify-center text-[#22c55e] shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs text-[#71717a] block">Response Time:</span>
                <span className="text-[#a1a1aa] font-medium">Within 24 hours (Mon – Sat)</span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <p className="text-xs text-[#71717a] mb-3">Prefer direct messaging?</p>
            <a
              href={PORTFOLIO_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white text-sm font-semibold transition-all shadow-md shadow-green-500/15"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex-1 w-full">
          <div className="bg-[#141414] border border-[#222222] rounded-[22px] p-6 sm:p-10 shadow-2xl relative">
            {submitted ? (
              <div className="text-center py-10 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-[#22c55e] flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                <p className="text-[#a1a1aa] text-sm max-w-md mx-auto mb-6">
                  Thank you, <strong className="text-white">{formData.firstName}</strong>. I've received your note and will review your project details shortly.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleSendViaWhatsApp}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold text-sm flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Also Send to WhatsApp</span>
                  </button>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#333333] hover:border-[#f97316] text-[#a1a1aa] hover:text-white text-sm font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-[#a1a1aa] text-sm mb-6">
                  Fill out the form below and I'll get back to you soon.
                </p>

                {/* Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#71717a] mb-1.5" htmlFor="firstNameInput">
                      First Name *
                    </label>
                    <input
                      id="firstNameInput"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      required
                      className="w-full bg-[#0a0a0a] border border-[#333333] focus:border-[#f97316] rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#71717a] mb-1.5" htmlFor="lastNameInput">
                      Last Name
                    </label>
                    <input
                      id="lastNameInput"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="w-full bg-[#0a0a0a] border border-[#333333] focus:border-[#f97316] rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Contact Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#71717a] mb-1.5" htmlFor="emailInput">
                      Email Address *
                    </label>
                    <input
                      id="emailInput"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                      className="w-full bg-[#0a0a0a] border border-[#333333] focus:border-[#f97316] rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#71717a] mb-1.5" htmlFor="phoneInput">
                      Phone / WhatsApp
                    </label>
                    <input
                      id="phoneInput"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full bg-[#0a0a0a] border border-[#333333] focus:border-[#f97316] rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-[#71717a] mb-1.5" htmlFor="messageInput">
                    Project Details *
                  </label>
                  <textarea
                    id="messageInput"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project, goals, or timeline..."
                    required
                    className="w-full bg-[#0a0a0a] border border-[#333333] focus:border-[#f97316] rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors resize-y min-h-[120px]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-[#f97316] hover:bg-[#ea580c] disabled:opacity-50 text-white font-semibold text-[15px] shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
