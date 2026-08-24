"use client";

import { useState, useEffect } from "react";
import { X, Sparkles, Send, CheckCircle2, Phone, Mail, User } from "lucide-react";

export default function OpeningModalForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Custom Web Application",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("hasSeenOpeningModal");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("hasSeenOpeningModal", "true");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.name.trim() || (!formData.email.trim() && !formData.phone.trim())) {
      setErrorMsg("Please enter your name and contact details.");
      return;
    }

    setIsSubmitting(true);
    try {
      const combinedMessage = `[Opening Popup Lead] Phone/WhatsApp: ${formData.phone || "N/A"}`;

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email || `${formData.phone}@phone.lead`,
          service: formData.service,
          message: combinedMessage,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSubmitted(true);
        sessionStorage.setItem("hasSeenOpeningModal", "true");
      } else {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Popup form submission error:", err);
      setErrorMsg("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-3 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div
        className="relative w-full max-w-sm bg-white rounded-xl shadow-2xl overflow-hidden border border-stone-200 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close form"
          className="absolute top-2.5 right-2.5 z-20 h-7 w-7 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-black flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="h-3.5 w-3.5" />
        </button>

        {/* Compact Header */}
        <div className="bg-stone-900 text-white px-5 py-4 relative overflow-hidden text-left">
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-[10px] font-semibold text-blue-300 uppercase tracking-wider mb-1">
            <Sparkles className="h-2.5 w-2.5 text-blue-400" /> Free Consultation
          </div>

          <h3 className="text-base font-bold text-white tracking-tight leading-snug">
            Get a Fast Technical Quote
          </h3>
          <p className="text-[11px] text-stone-300 font-light leading-tight">
            Share your goal &amp; our engineer will contact you in 2 hrs.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-4 sm:p-5 text-left">
          {isSubmitted ? (
            <div className="py-4 text-center space-y-3">
              <div className="h-10 w-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm font-bold text-stone-900">Request Sent!</h4>
                <p className="text-[11px] text-stone-600 font-light max-w-xs mx-auto">
                  Thank you, <strong className="font-semibold text-stone-800">{formData.name}</strong>. We will reach out shortly.
                </p>
              </div>
              <button
                onClick={handleClose}
                className="mt-2 px-4 py-1.5 rounded-md bg-stone-900 text-white text-[11px] font-semibold hover:bg-black cursor-pointer"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2.5">
              {errorMsg && (
                <div className="p-2 rounded bg-red-50 text-red-700 text-[11px] font-medium">
                  {errorMsg}
                </div>
              )}

              {/* Name */}
              <div className="space-y-0.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1">
                  <User className="h-3 w-3 text-blue-700" /> Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-md px-3 py-1.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-blue-700 focus:bg-white transition-all"
                />
              </div>

              {/* Phone / WhatsApp */}
              <div className="space-y-0.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1">
                  <Phone className="h-3 w-3 text-blue-700" /> Phone / WhatsApp <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-md px-3 py-1.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-blue-700 focus:bg-white transition-all"
                />
              </div>

              {/* Email */}
              <div className="space-y-0.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1">
                  <Mail className="h-3 w-3 text-blue-700" /> Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-md px-3 py-1.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-blue-700 focus:bg-white transition-all"
                />
              </div>

              {/* Service */}
              <div className="space-y-0.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-stone-500">
                  Select Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-md px-3 py-1.5 text-xs text-stone-900 focus:outline-none focus:border-blue-700 focus:bg-white transition-all cursor-pointer"
                >
                  <option value="Custom Web Application">Web Apps &amp; Development</option>
                  <option value="AI Chatbot & Automation">AI &amp; Automation</option>
                  <option value="SEO & Organic Growth">SEO &amp; Growth Marketing</option>
                  <option value="E-Commerce Storefront">E-Commerce Storefront</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-md text-[11px] font-bold uppercase tracking-wider bg-blue-700 hover:bg-blue-800 text-white transition-all shadow-sm cursor-pointer mt-1"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <span>Submit &amp; Get Quote</span>
                    <Send className="h-3 w-3" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
