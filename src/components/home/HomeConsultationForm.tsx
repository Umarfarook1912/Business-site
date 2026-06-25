"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CONSULTATION_STEPS } from "@/lib/constants";

type FormData = {
  fullName: string;
  company: string;
  workEmail: string;
  projectType: string;
  message: string;
};

const PROJECT_TYPES = [
  "Custom Software Development",
  "Cloud Infrastructure",
  "IT Strategy & Consulting",
  "Dedicated DevOps Team",
  "Other",
];

const INITIAL: FormData = { fullName: "", company: "", workEmail: "", projectType: "", message: "" };

export function HomeConsultationForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async () => {
    try {
      await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } finally {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <section className="bg-off-white py-20" id="consultation">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <CheckCircle2 className="mx-auto text-sky mb-4" size={48} />
          <h3 className="text-2xl font-bold text-navy mb-2">Request Received</h3>
          <p className="text-charcoal/70">
            We&apos;ll review your project details and get back to you within 1 business day.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-off-white py-20" id="consultation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="section-label mb-3">Get in Touch</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
              Book a Free Consultation
            </h2>
            <p className="mt-3 text-charcoal/70 leading-relaxed">
              Tell us about your project and our experts will get back to you within 1 business day.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "No commitment required",
                "Confidential & secure",
                "Response within 24 hours",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-sky" />
                  </div>
                  <span className="text-sm text-charcoal/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-border-light rounded-xl p-8 shadow-sm">
            {/* Step indicators */}
            <div className="flex items-center gap-2 mb-8">
              {CONSULTATION_STEPS.map((label, i) => (
                <div key={label} className="flex items-center gap-2">
                  <button
                    onClick={() => i < step && setStep(i)}
                    className={`text-xs font-medium px-3 py-1 rounded-full transition-colors ${
                      i === step
                        ? "bg-sky text-white"
                        : i < step
                        ? "bg-sky/20 text-sky cursor-pointer"
                        : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    {label}
                  </button>
                  {i < CONSULTATION_STEPS.length - 1 && (
                    <div className={`h-px w-6 ${i < step ? "bg-sky" : "bg-slate-200"}`} />
                  )}
                </div>
              ))}
            </div>

            {/* Step 0: About You */}
            {step === 0 && (
              <div className="space-y-4">
                <FormField label="Full Name" value={form.fullName} onChange={(v) => update("fullName", v)} placeholder="Your name" />
                <FormField label="Company Name" value={form.company} onChange={(v) => update("company", v)} placeholder="Your company" />
                <FormField label="Work Email" type="email" value={form.workEmail} onChange={(v) => update("workEmail", v)} placeholder="you@company.com" />
                <button
                  className="btn-primary w-full inline-flex items-center justify-center gap-2 mt-2"
                  onClick={() => setStep(1)}
                  disabled={!form.fullName || !form.workEmail}
                >
                  Next Step <ArrowRight size={16} />
                </button>
              </div>
            )}

            {/* Step 1: Project Details */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Project Type</label>
                  <div className="grid grid-cols-1 gap-2">
                    {PROJECT_TYPES.map((type) => (
                      <button
                        key={type}
                        onClick={() => update("projectType", type)}
                        className={`text-left text-sm px-4 py-3 rounded-lg border transition-colors ${
                          form.projectType === type
                            ? "border-sky bg-sky/5 text-sky font-medium"
                            : "border-border-light text-charcoal hover:border-sky/50"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  className="btn-primary w-full inline-flex items-center justify-center gap-2 mt-2"
                  onClick={() => setStep(2)}
                  disabled={!form.projectType}
                >
                  Next Step <ArrowRight size={16} />
                </button>
              </div>
            )}

            {/* Step 2: Additional Info */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">
                    Tell us about your project
                  </label>
                  <textarea
                    className="w-full border border-border-light rounded-lg px-4 py-3 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:border-sky resize-none"
                    rows={5}
                    placeholder="Describe your goals, current challenges, timeline, or anything else we should know..."
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                  />
                </div>
                <button
                  className="btn-sky w-full inline-flex items-center justify-center gap-2"
                  onClick={handleSubmit}
                >
                  Submit Request <ArrowRight size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label, value, onChange, placeholder, type = "text",
}: {
  label: string; value: string; onChange: (v: string) => void; placeholder: string; type?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-navy mb-1.5">{label}</label>
      <input
        type={type}
        className="w-full border border-border-light rounded-lg px-4 py-3 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:border-sky"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
