"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  User,
  Phone,
  Mail,
  Link2,
  FileText,
  Award,
  BookOpen,
  Target,
  DollarSign,
  GraduationCap,
  MapPinIcon,
  Building,
} from "lucide-react";

export default function JobDetailClient({ initialJob, jobId }) {
  const [job, setJob] = useState(initialJob);
  const [loading, setLoading] = useState(!initialJob);
  const [notFound, setNotFound] = useState(false);

  // Application Flow State
  const [isApplying, setIsApplying] = useState(false);
  const [currentStep, setCurrentStep] = useState(1); // 1: Info, 2: Edu, 3: Review
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    education: "",
    graduationYear: "",
    linkedinUrl: "",
    resumeUrl: "",
    skills: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!initialJob) {
      async function fetchJob() {
        try {
          const res = await fetch("/api/careers/openings?active=true");
          const data = await res.json();
          const found = (data.openings || []).find((j) => j.id === jobId);
          if (found) {
            setJob(found);
          } else {
            setNotFound(true);
          }
        } catch (err) {
          console.error("Failed to fetch job:", err);
          setNotFound(true);
        } finally {
          setLoading(false);
        }
      }
      fetchJob();
    }
  }, [initialJob, jobId]);

  const handleNextStep = () => {
    setErrorMsg("");
    if (currentStep === 1) {
      if (!formData.name.trim() || (!formData.email.trim() && !formData.phone.trim())) {
        setErrorMsg("Name and contact details are required.");
        return;
      }
    } else if (currentStep === 2) {
      if (!formData.resumeUrl.trim()) {
        setErrorMsg("Resume / Portfolio link is required.");
        return;
      }
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setErrorMsg("");
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/careers/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          email: formData.email.trim() || `${formData.phone.replace(/[^0-9]/g, "")}@phone.lead`,
          openingTitle: job.title,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMsg(data.error || "Failed to submit application. Please try again.");
      }
    } catch (err) {
      console.error("Career application submit error:", err);
      setErrorMsg("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading job details...</div>;
  }

  if (notFound || !job) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-bold">Job Not Found</h1>
        <Link href="/careers/openings" className="text-blue-600 hover:underline">Return to Openings</Link>
      </div>
    );
  }

  const tagList = Array.isArray(job.tags)
    ? job.tags
    : typeof job.tags === "string"
    ? job.tags.split(",").map((t) => t.trim()).filter(Boolean)
    : [];

  return (
    <main className="min-h-screen bg-stone-50 text-left selection:bg-blue-600/20 selection:text-blue-950 pb-20">
      {/* Header Banner */}
      <section className="pt-8 pb-12 bg-white border-b border-stone-200 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <Breadcrumbs
            items={[
              { label: "Careers", href: "/careers" },
              { label: "Open Roles", href: "/careers/openings" },
              { label: job.title, href: `/careers/jobs/${job.id}` },
            ]}
          />
          
          <Link href="/careers/openings" className="inline-flex items-center gap-2 text-xs font-bold text-stone-500 hover:text-black">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Jobs
          </Link>

          <div className="space-y-4 pt-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900">
              {job.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-medium text-stone-600">
              <span className="flex items-center gap-1.5 bg-stone-100 px-3 py-1.5 rounded-md border border-stone-200">
                <Building className="h-4 w-4 text-stone-400" /> {job.department}
              </span>
              <span className="flex items-center gap-1.5 bg-stone-100 px-3 py-1.5 rounded-md border border-stone-200">
                <MapPin className="h-4 w-4 text-stone-400" /> {job.location}
              </span>
              <span className="flex items-center gap-1.5 bg-stone-100 px-3 py-1.5 rounded-md border border-stone-200">
                <Clock className="h-4 w-4 text-stone-400" /> {job.experience}
              </span>
              <span className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-md border border-emerald-200 uppercase tracking-wider text-[10px] font-bold">
                {job.type}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          {!isApplying ? (
            <div className="space-y-10 bg-white p-6 sm:p-10 rounded-lg border border-stone-200 shadow-sm">
              {/* Job Description Sections */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold flex items-center gap-2 text-stone-900 border-b border-stone-100 pb-2">
                  <BookOpen className="h-5 w-5 text-blue-600" /> About The Role
                </h2>
                <p className="text-sm text-stone-700 leading-relaxed font-light">
                  {job.description}
                </p>
              </div>

              {/* Standard Boilerplate Requirements (If no rich text exists, we assume generic ones for the IBM look) */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold flex items-center gap-2 text-stone-900 border-b border-stone-100 pb-2">
                  <Target className="h-5 w-5 text-blue-600" /> Key Responsibilities
                </h2>
                <ul className="space-y-3 text-sm text-stone-700 font-light">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-stone-400 shrink-0" />
                    <span>Take ownership of your role and drive high-impact outcomes for the team and our clients.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-stone-400 shrink-0" />
                    <span>Collaborate with cross-functional teams including engineering, design, and product management.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-stone-400 shrink-0" />
                    <span>Leverage modern tools and workflows to maintain high standards of quality and efficiency.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-stone-400 shrink-0" />
                    <span>Stay updated on industry trends and actively contribute to the company's growth strategies.</span>
                  </li>
                </ul>
              </div>

              {tagList.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-bold flex items-center gap-2 text-stone-900 border-b border-stone-100 pb-2">
                    <Award className="h-5 w-5 text-blue-600" /> Required Skills
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {tagList.map((tag, idx) => (
                      <span key={idx} className="bg-stone-100 text-stone-700 border border-stone-200 px-3 py-1 rounded-md text-xs font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-6 border-t border-stone-200 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-medium">Ready to build the future with us?</span>
                <button
                  onClick={() => {
                    setIsApplying(true);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md text-sm font-bold uppercase tracking-wider bg-stone-900 text-white hover:bg-blue-600 transition-colors cursor-pointer"
                >
                  Start Application
                </button>
              </div>
            </div>
          ) : (
            /* Multi-Step Application Flow */
            <div className="bg-white p-6 sm:p-10 rounded-lg border border-stone-200 shadow-sm animate-in fade-in zoom-in-95 duration-300">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-6">
                  <div className="h-16 w-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-stone-900">Application Submitted</h2>
                    <p className="text-sm text-stone-600 font-light max-w-md mx-auto leading-relaxed">
                      Thank you for applying to the <strong className="font-semibold text-stone-900">{job.title}</strong> role. Our recruitment team will review your profile and get back to you shortly.
                    </p>
                  </div>
                  <Link
                    href="/careers/openings"
                    className="inline-block mt-4 px-8 py-3 rounded-md bg-stone-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors"
                  >
                    Return to Open Roles
                  </Link>
                </div>
              ) : (
                <div className="space-y-8">
                  {/* Progress Indicator */}
                  <div className="flex items-center justify-between border-b border-stone-100 pb-6 relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-stone-100 -translate-y-1/2 -z-10"></div>
                    <div className="absolute top-1/2 left-0 h-0.5 bg-blue-600 -translate-y-1/2 -z-10 transition-all duration-300" style={{ width: `${(currentStep - 1) * 50}%` }}></div>
                    
                    {[1, 2, 3].map((step) => (
                      <div key={step} className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors ${currentStep >= step ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-stone-300 text-stone-400"}`}>
                        {step}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-stone-900">
                      {currentStep === 1 ? "Personal Details" : currentStep === 2 ? "Education & Links" : "Review & Submit"}
                    </h2>
                    <p className="text-xs text-stone-500 font-light">Application for {job.title}</p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-md bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                      {errorMsg}
                    </div>
                  )}

                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    
                    {currentStep === 1 && (
                      <div className="space-y-5 animate-in slide-in-from-right-4 duration-300">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-stone-700">Full Name <span className="text-red-500">*</span></label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-stone-50 border border-stone-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-stone-700">Email Address <span className="text-red-500">*</span></label>
                            <input
                              type="email"
                              required
                              placeholder="john@example.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full bg-stone-50 border border-stone-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-stone-700">Phone Number <span className="text-red-500">*</span></label>
                            <input
                              type="tel"
                              required
                              placeholder="+91 98765 43210"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full bg-stone-50 border border-stone-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="space-y-5 animate-in slide-in-from-right-4 duration-300">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-stone-700">Highest Education</label>
                            <input
                              type="text"
                              placeholder="e.g. B.Tech Computer Science"
                              value={formData.education}
                              onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                              className="w-full bg-stone-50 border border-stone-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-stone-700">Current Location</label>
                            <input
                              type="text"
                              placeholder="e.g. Delhi NCR"
                              value={formData.location}
                              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                              className="w-full bg-stone-50 border border-stone-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                            />
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-stone-700">Resume / Portfolio Link <span className="text-red-500">*</span></label>
                          <input
                            type="url"
                            required
                            placeholder="https://drive.google.com/..."
                            value={formData.resumeUrl}
                            onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
                            className="w-full bg-stone-50 border border-stone-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-stone-700">LinkedIn Profile (Optional)</label>
                          <input
                            type="url"
                            placeholder="https://linkedin.com/in/username"
                            value={formData.linkedinUrl}
                            onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                            className="w-full bg-stone-50 border border-stone-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                          />
                        </div>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="space-y-5 animate-in slide-in-from-right-4 duration-300">
                        <div className="p-5 rounded-md bg-stone-50 border border-stone-200 space-y-4">
                          <h3 className="font-bold text-stone-900 border-b border-stone-200 pb-2">Profile Summary</h3>
                          <div className="grid grid-cols-2 gap-4 text-sm font-light text-stone-700">
                            <div><strong>Name:</strong> {formData.name}</div>
                            <div><strong>Email:</strong> {formData.email}</div>
                            <div><strong>Phone:</strong> {formData.phone}</div>
                            <div><strong>Location:</strong> {formData.location || "N/A"}</div>
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-stone-700">Key Skills (Optional)</label>
                          <input
                            type="text"
                            placeholder="e.g. React, Next.js, Marketing"
                            value={formData.skills}
                            onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                            className="w-full bg-stone-50 border border-stone-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-stone-700">Cover Note (Optional)</label>
                          <textarea
                            rows={3}
                            placeholder="Why are you a good fit for this role?"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full bg-stone-50 border border-stone-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors resize-none"
                          />
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="pt-6 border-t border-stone-200 flex items-center justify-between">
                      {currentStep > 1 ? (
                        <button
                          type="button"
                          onClick={handlePrevStep}
                          className="px-6 py-3 rounded-md text-xs font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 transition-colors uppercase tracking-wider"
                        >
                          Back
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setIsApplying(false)}
                          className="px-6 py-3 rounded-md text-xs font-bold text-stone-500 hover:text-stone-800 transition-colors uppercase tracking-wider"
                        >
                          Cancel
                        </button>
                      )}

                      {currentStep < 3 ? (
                        <button
                          type="button"
                          onClick={handleNextStep}
                          className="px-8 py-3 rounded-md text-xs font-bold text-white bg-stone-900 hover:bg-blue-600 transition-colors uppercase tracking-wider flex items-center gap-2"
                        >
                          Continue <ArrowRight className="h-4 w-4" />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={handleSubmit}
                          disabled={isSubmitting}
                          className="px-8 py-3 rounded-md text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 transition-colors uppercase tracking-wider flex items-center gap-2"
                        >
                          {isSubmitting ? "Submitting..." : (
                            <>Submit Application <Send className="h-4 w-4" /></>
                          )}
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
