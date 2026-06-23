"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { useConsultation } from "./ConsultationProvider";
import { GoldButton } from "./GoldButton";

export function FreeConsultationModal() {
  const { isOpen, closeModal } = useConsultation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    overview: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Business email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone or WhatsApp number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Store/Console-log the captured data object structure
    console.log("Captured Consultation Request Lead Data:", formData);

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Clean up form
    setFormData({
      name: "",
      email: "",
      phone: "",
      overview: "",
    });
  };

  const handleClose = () => {
    closeModal();
    // Reset submission states shortly after modal closes
    setTimeout(() => {
      setIsSubmitted(false);
      setErrors({});
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="glass-card mono-glow relative w-full max-w-lg rounded-2xl bg-[#0A0A0A]/95 p-8 border border-white/10 z-10 overflow-hidden shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors duration-200 cursor-pointer p-1 rounded-full hover:bg-white/5"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {!isSubmitted ? (
              <>
                <h3 className="font-heading text-2xl font-bold text-white mb-2 leading-tight">
                  Book Your Free Software Consultation
                </h3>
                <p className="font-sans text-sm text-neutral-400 mb-6 leading-relaxed">
                  Tell us about your project, and we'll jump on a call to map out your software architecture—completely free.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="modal-name" className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                      Full Name
                    </label>
                    <input
                      id="modal-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-neutral-900 border ${
                        errors.name ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-white/30"
                      } rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white/20 transition-all duration-300`}
                      placeholder="e.g. John Doe"
                    />
                    {errors.name && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.name}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="modal-email" className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                      Business Email
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-neutral-900 border ${
                        errors.email ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-white/30"
                      } rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white/20 transition-all duration-300`}
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.email}</span>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="modal-phone" className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                      WhatsApp / Phone Number
                    </label>
                    <input
                      id="modal-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full bg-neutral-900 border ${
                        errors.phone ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-white/30"
                      } rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white/20 transition-all duration-300`}
                      placeholder="+1 (555) 000-0000 or +91 ..."
                    />
                    {errors.phone && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.phone}</span>
                    )}
                  </div>

                  {/* Project Overview */}
                  <div>
                    <label htmlFor="modal-overview" className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                      Project Overview / Challenges
                    </label>
                    <textarea
                      id="modal-overview"
                      name="overview"
                      rows={3}
                      value={formData.overview}
                      onChange={handleChange}
                      className="w-full bg-neutral-900 border border-white/10 focus:border-white/30 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white/20 transition-all duration-300 resize-none animate-none"
                      placeholder="Briefly describe the software solution or problem you want to consult with us about..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <GoldButton
                      type="submit"
                      variant="primary"
                      className="w-full text-center py-3 font-semibold disabled:opacity-50 disabled:pointer-events-none"
                    >
                      {isSubmitting ? "Processing..." : "Secure My Free Consultation"}
                    </GoldButton>
                  </div>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 flex flex-col items-center gap-4"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white mono-glow">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mt-2">
                  Consultation Request Sent!
                </h3>
                <p className="font-sans text-sm text-neutral-300 max-w-sm leading-relaxed">
                  Thank you! One of our lead technical consultants will reach out to you via Email/WhatsApp within 24 hours to schedule our call.
                </p>
                <div className="mt-4 w-full">
                  <GoldButton
                    onClick={handleClose}
                    variant="ghost"
                    className="w-full"
                  >
                    Close Window
                  </GoldButton>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
