"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Calendar, Settings, Shield, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { GoldButton } from "@/components/common/GoldButton";
import { ANCHOR_IDS } from "@/lib/constants/routes";
import { FRAMER_VIEWPORT } from "@/lib/constants/animations";

export function ConsultationSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    overview: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          overview: "",
        });
      } else {
        const data = await response.json();
        alert(data.error || "Failed to submit request. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    {
      icon: Calendar,
      title: "1. Diagnostic Discovery Call",
      description: "A 30-minute deep-dive call to analyze your current bottlenecks, target goals, and existing software systems.",
    },
    {
      icon: Settings,
      title: "2. Custom Architecture Blueprint",
      description: "Our engineering team drafts a tailored high-level technology stack and database schema for your review.",
    },
    {
      icon: Shield,
      title: "3. Transparent Roadmap",
      description: "Receive a detailed execution roadmap, precise milestone breakdown, and tailored quotation with no template pricing.",
    },
  ];

  return (
    <section id={ANCHOR_IDS.consultation} className="bg-transparent px-6 py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10">
        <SectionHeader
          title="Expert Consultation & Strategy"
          subtitle="Every project is unique. Rather than restrictive template plans, we build custom solutions tailored around your growth goals."
        />

        <div className="grid gap-12 lg:grid-cols-12 items-stretch mt-12">
          {/* Methodology Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={FRAMER_VIEWPORT}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-neutral-400 mb-3 block">
                How We Operate
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mb-6 leading-tight">
                Engage Our Technical Architects
              </h3>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
                We believe in architectural integrity. Instead of providing pre-packaged plans that either fall short or overcharge, we conduct deep technical diagnostics to scope exactly what your company needs.
              </p>

              {/* Consultation Steps */}
              <div className="space-y-6">
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 p-2 rounded-lg bg-neutral-900 border border-white/10 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-heading text-sm sm:text-base font-bold text-white mb-1">
                          {step.title}
                        </h4>
                        <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-neutral-900/60 hidden lg:block">
              <p className="text-xs text-neutral-500 italic">
                * Note: All initial consultation calls are held under complete confidentiality. NDA is signed upon request.
              </p>
            </div>
          </motion.div>

          {/* Interactive Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={FRAMER_VIEWPORT}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card mono-glow rounded-2xl bg-[#0A0A0A]/80 p-8 sm:p-10 border border-white/10 relative h-full flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col h-full justify-between"
                  >
                    <div>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
                        Request a Free Consultation
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed">
                        Submit details regarding your product requirements, and our engineering team will respond within 24 hours.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          {/* Name */}
                          <div>
                            <label htmlFor="consult-name" className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                              Full Name
                            </label>
                            <input
                              id="consult-name"
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
                            <label htmlFor="consult-email" className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                              Business Email
                            </label>
                            <input
                              id="consult-email"
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
                        </div>

                        {/* Phone */}
                        <div>
                          <label htmlFor="consult-phone" className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                            WhatsApp / Phone Number
                          </label>
                          <input
                            id="consult-phone"
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
                          <label htmlFor="consult-overview" className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                            Project Description & Tech Goals
                          </label>
                          <textarea
                            id="consult-overview"
                            name="overview"
                            rows={4}
                            value={formData.overview}
                            onChange={handleChange}
                            className="w-full bg-neutral-900 border border-white/10 focus:border-white/30 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white/20 transition-all duration-300 resize-none"
                            placeholder="Briefly describe the software solution, product category, or custom features you want to consult with us about..."
                          />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                          <GoldButton
                            type="submit"
                            variant="primary"
                            className="w-full text-center py-3.5 font-semibold"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Submitting Inquiry..." : "Secure My Free Consultation"}
                          </GoldButton>
                        </div>
                      </form>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-12 h-full gap-5"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white mono-glow">
                      <Check className="h-8 w-8" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white leading-tight">
                      Consultation Request Received
                    </h3>
                    <p className="font-sans text-sm text-neutral-300 max-w-md leading-relaxed">
                      Thank you for contacting Growza. Our lead technical engineer has been notified, and we will get back to you within 24 hours to schedule our virtual strategy session.
                    </p>
                    <div className="mt-4">
                      <GoldButton
                        onClick={() => setIsSubmitted(false)}
                        variant="ghost"
                        className="px-8"
                      >
                        Submit Another Request
                      </GoldButton>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
