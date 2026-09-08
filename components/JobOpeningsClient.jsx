"use client";

import { useState, useEffect } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  Briefcase,
  ArrowRight,
  MapPin,
  Clock,
  CheckCircle2,
  X,
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
  ChevronDown,
  ChevronUp,
  GraduationCap,
  MapPinIcon,
  Sparkles
} from "lucide-react";

export default function JobOpeningsClient() {
  const [openings, setOpenings] = useState([
    {
      id: "business-dev-intern",
      title: "Business Development Intern",
      department: "Sales & Growth",
      location: "Delhi NCR / Remote / Hybrid",
      type: "Internship (Full-Time / Part-Time)",
      experience: "0-1 Years (Fresher Friendly)",
      description: "Looking for an energetic Business Development Intern to assist with B2B client outreach, SaaS solution presentations, market research, and client relationship management across India and global markets.",
      tags: ["B2B Sales", "Client Outreach", "Market Research", "Communication", "Lead Gen"],
    },
  ]);
  const [expandedId, setExpandedId] = useState("business-dev-intern");

  // Application Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
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

  // Fetch dynamic active openings from API
  useEffect(() => {
    async function fetchOpenings() {
      try {
        const res = await fetch("/api/careers/openings?active=true");
        const data = await res.json();
        if (data.openings && data.openings.length > 0) {
          setOpenings(data.openings);
          setExpandedId(data.openings[0].id);
        }
      } catch (err) {
        console.error("Failed to fetch openings:", err);
      }
    }
    fetchOpenings();
  }, []);

  const toggleAccordion = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleOpenModal = (job) => {
    setSelectedJob(job);
    setIsSubmitted(false);
    setErrorMsg("");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.name.trim() || (!formData.email.trim() && !formData.phone.trim())) {
      setErrorMsg("Please enter your name and phone/email contact details.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/careers/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim() || `${formData.phone.replace(/[^0-9]/g, "")}@phone.lead`,
          phone: formData.phone.trim(),
          location: formData.location.trim(),
          education: formData.education.trim(),
          graduationYear: formData.graduationYear.trim(),
          linkedinUrl: formData.linkedinUrl.trim(),
          resumeUrl: formData.resumeUrl.trim(),
          openingTitle: selectedJob?.title || "Business Development Intern",
          skills: formData.skills.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSubmitted(true);
        setFormData({
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

  return (
    <main className="min-h-screen bg-white text-left selection:bg-blue-600/20 selection:text-blue-950">
      {/* Header Banner */}
      <section className="py-12 bg-stone-50 border-b border-stone-200 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Careers", href: "/careers" },
              { label: "Open Roles", href: "/careers/openings" },
            ]}
          />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[11px] font-bold uppercase tracking-wider text-blue-700">
            <Briefcase className="h-3.5 w-3.5" />
            Current Job Openings
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.15] max-w-4xl">
            Explore Active Positions <span className="font-semibold text-blue-600">&amp; Opportunities</span>
          </h1>

          <p className="text-base sm:text-lg text-stone-600 font-light max-w-3xl leading-relaxed">
            Click on any opening below to expand and view the full Job Description (JD), responsibilities, stipend/perks, and submit your application.
          </p>
        </div>
      </section>

      {/* Accordion Job Openings List Section */}
      <section className="py-16 bg-white border-b border-stone-200 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4">
            {openings.map((job) => {
              const isExpanded = expandedId === job.id;
              const tagList = Array.isArray(job.tags)
                ? job.tags
                : typeof job.tags === "string"
                ? job.tags.split(",").map((t) => t.trim())
                : [];

              return (
                <div
                  key={job.id}
                  className={`border rounded-md transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? "border-blue-400 bg-white"
                      : "border-stone-200 bg-stone-50/70 hover:border-stone-300 hover:bg-white"
                  }`}
                >
                  {/* Accordion Header (Click to Expand JD) */}
                  <div
                    onClick={() => toggleAccordion(job.id)}
                    className="p-5 sm:p-6 md:p-8 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-5 select-none"
                  >
                    <div className="space-y-3.5 max-w-3xl">
                      {/* Meta Pills & Badges */}
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-stone-600 font-medium">
                          <MapPin className="h-3.5 w-3.5 text-stone-400 shrink-0" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-stone-600 font-medium">
                          <Clock className="h-3.5 w-3.5 text-stone-400 shrink-0" />
                          {job.experience}
                        </span>
                      </div>

                      {/* Job Title & Type Badge */}
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-tight">
                          {job.title}
                        </h3>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          {job.type || "Internship"}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed line-clamp-2">
                        {job.description}
                      </p>

                      {/* Skill Tags */}
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1">
                        {tagList.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] text-stone-600 bg-stone-100 px-2.5 py-0.5 rounded-md font-medium border border-stone-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons: Apply Now & Expand Arrow */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3 border-t border-stone-200/60 lg:border-t-0 lg:pt-0 shrink-0 w-full sm:w-auto">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenModal(job);
                        }}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider bg-stone-900 text-white hover:bg-blue-600 transition-colors cursor-pointer w-full sm:w-auto"
                      >
                        Apply Now
                        <ArrowRight className="h-4 w-4" />
                      </button>

                      <button
                        type="button"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-md text-xs font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 transition-colors w-full sm:w-auto"
                      >
                        <span>{isExpanded ? "Hide Details" : "View Full JD"}</span>
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4 text-stone-600" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-stone-600" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Accordion Content Body (Full Job Description JD) */}
                  {isExpanded && (
                    <div className="border-t border-stone-200 p-6 md:p-8 bg-stone-50/50 space-y-8 animate-in fade-in duration-200 text-left">
                      {/* About The Role */}
                      <div className="space-y-3">
                        <h4 className="text-lg font-bold text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-2">
                          <BookOpen className="h-4.5 w-4.5 text-blue-600" /> About The Role
                        </h4>
                        <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                          Anavya Infotech is seeking an energetic, proactive **Business Development Intern** to join our client acquisition and growth team. In this role, you will work directly with lead directors and senior strategists to identify high-value B2B prospects, present custom web applications, Next.js development, AI chatbots, and SEO solutions to business founders, builders, and corporate executives across India and global markets.
                        </p>
                      </div>

                      {/* Key Responsibilities */}
                      <div className="space-y-3">
                        <h4 className="text-lg font-bold text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-2">
                          <Target className="h-4.5 w-4.5 text-blue-600" /> Key Responsibilities
                        </h4>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700 font-normal">
                          <li className="flex items-start gap-3 p-3 rounded-md bg-white border border-stone-200">
                            <CheckCircle2 className="h-4.5 w-4.5 text-blue-600 shrink-0 mt-0.5" />
                            <span><strong>Prospecting &amp; Lead Research:</strong> Research potential B2B clients, tech startups, real estate developers, e-commerce brands, and SMBs needing custom web &amp; AI software solutions.</span>
                          </li>
                          <li className="flex items-start gap-3 p-3 rounded-md bg-white border border-stone-200">
                            <CheckCircle2 className="h-4.5 w-4.5 text-blue-600 shrink-0 mt-0.5" />
                            <span><strong>Client Outreach &amp; Communication:</strong> Initiate outreach via LinkedIn, professional emails, WhatsApp, cold calls, and networking to introduce Anavya Infotech&apos;s technical capabilities.</span>
                          </li>
                          <li className="flex items-start gap-3 p-3 rounded-md bg-white border border-stone-200">
                            <CheckCircle2 className="h-4.5 w-4.5 text-blue-600 shrink-0 mt-0.5" />
                            <span><strong>Consultation Calls &amp; Demos:</strong> Schedule discovery calls with prospective clients, assist senior directors in client presentations, and help prepare custom project scope proposals.</span>
                          </li>
                          <li className="flex items-start gap-3 p-3 rounded-md bg-white border border-stone-200">
                            <CheckCircle2 className="h-4.5 w-4.5 text-blue-600 shrink-0 mt-0.5" />
                            <span><strong>CRM Pipeline Management:</strong> Maintain and update lead status, follow-up logs, and conversation history in our CRM system.</span>
                          </li>
                          <li className="flex items-start gap-3 p-3 rounded-md bg-white border border-stone-200">
                            <CheckCircle2 className="h-4.5 w-4.5 text-blue-600 shrink-0 mt-0.5" />
                            <span><strong>Market Intelligence:</strong> Track market trends, competitor offerings, and emerging client software needs across Delhi NCR, USA, and international territories.</span>
                          </li>
                        </ul>
                      </div>

                      {/* Requirements & Benefits */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <h4 className="text-lg font-bold text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-2">
                            <FileText className="h-4.5 w-4.5 text-blue-600" /> Candidate Requirements
                          </h4>
                          <ul className="space-y-2 text-xs sm:text-sm text-stone-600 font-light">
                            <li className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                              <span>Pursuing or graduate in BBA/MBA, Marketing, CS, IT, or related fields.</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                              <span>Fluent written &amp; verbal English communication skills.</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                              <span>Interest in tech, Web Apps, AI Chatbots, SaaS, and Digital Sales.</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                              <span>Proactive &amp; self-motivated with strong interpersonal skills.</span>
                            </li>
                          </ul>
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-lg font-bold text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-2">
                            <Award className="h-4.5 w-4.5 text-blue-600" /> Stipend &amp; Perks
                          </h4>
                          <div className="space-y-2 text-xs sm:text-sm">
                            <div className="p-3 rounded-md bg-white border border-stone-200 flex items-center gap-2 font-medium text-stone-800">
                              <DollarSign className="h-4 w-4 text-blue-600 shrink-0" />
                              <span>Competitive Monthly Stipend + High Deals Commission</span>
                            </div>
                            <div className="p-3 rounded-md bg-white border border-stone-200 flex items-center gap-2 font-medium text-stone-800">
                              <Award className="h-4 w-4 text-blue-600 shrink-0" />
                              <span>Certificate of Internship + Pre-Placement Offer (PPO)</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Apply CTA Bar Inside Expanded Accordion */}
                      <div className="pt-4 flex items-center justify-between border-t border-stone-200">
                        <span className="text-xs text-stone-500 font-medium">
                          Application takes 2 minutes to fill. Saved directly in Admin HR portal.
                        </span>
                        <button
                          type="button"
                          onClick={() => handleOpenModal(job)}
                          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md text-xs font-bold uppercase tracking-wider bg-blue-600 text-white hover:bg-blue-700 transition-colors cursor-pointer"
                        >
                          Apply Now
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-fade-in overflow-y-auto">
          <div
            className="relative w-full max-w-3xl bg-white rounded-md overflow-hidden border border-stone-200 my-4 sm:my-8 animate-in fade-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              aria-label="Close application form"
              className="absolute top-3 right-3 z-20 h-8 w-8 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-black flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Modal Header */}
            <div className="bg-stone-900 text-white p-4 sm:p-6 text-left border-b border-stone-800">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-500/20 border border-blue-400/30 text-[10px] font-semibold text-blue-300 uppercase tracking-wider mb-1.5">
                <Sparkles className="h-3 w-3 text-blue-400" /> Official Application Portal
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                Apply for {selectedJob?.title || "Business Development Intern"}
              </h3>
              <p className="text-xs text-stone-300 font-light leading-relaxed">
                Fill in candidate details below. Your application will be saved directly into our HR admin portal.
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 text-left max-h-[85vh] overflow-y-auto">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="h-12 w-12 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-stone-900">Application Received!</h4>
                    <p className="text-xs text-stone-600 font-light max-w-sm mx-auto leading-relaxed">
                      Thank you <strong className="font-semibold text-stone-900">{formData.name}</strong>. Your complete candidate profile has been logged in our HR recruitment portal. Our hiring lead will reach out to you within 48 hours.
                    </p>
                  </div>
                  <button
                    onClick={handleCloseModal}
                    className="mt-2 px-6 py-2.5 rounded-md bg-stone-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-black cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMsg && (
                    <div className="p-3 rounded-md bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                      {errorMsg}
                    </div>
                  )}

                  {/* Horizontal Section 1: Basic Information (3-Columns Grid) */}
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md mb-2 inline-block">
                      1. Personal Contact Details
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-1">
                      {/* Full Name */}
                      <div className="space-y-1">
                        <label className="text-[11px] font-semibold text-stone-700 flex items-center gap-1">
                          <User className="h-3.5 w-3.5 text-blue-700" /> Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-stone-50/80 border border-stone-200 rounded-md px-3 py-2 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1">
                        <label className="text-[11px] font-semibold text-stone-700 flex items-center gap-1">
                          <Mail className="h-3.5 w-3.5 text-blue-700" /> Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="rahul@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-stone-50/80 border border-stone-200 rounded-md px-3 py-2 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <label className="text-[11px] font-semibold text-stone-700 flex items-center gap-1">
                          <Phone className="h-3.5 w-3.5 text-blue-700" /> Phone / WhatsApp <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-stone-50/80 border border-stone-200 rounded-md px-3 py-2 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Horizontal Section 2: Education & Location (3-Columns Grid) */}
                  <div className="pt-2 border-t border-stone-100">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md mb-2 inline-block">
                      2. Education & Location
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-1">
                      {/* Current Location */}
                      <div className="space-y-1">
                        <label className="text-[11px] font-semibold text-stone-700 flex items-center gap-1">
                          <MapPinIcon className="h-3.5 w-3.5 text-blue-700" /> Current City / Location <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Delhi NCR, Faridabad"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full bg-stone-50/80 border border-stone-200 rounded-md px-3 py-2 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                        />
                      </div>

                      {/* Education */}
                      <div className="space-y-1">
                        <label className="text-[11px] font-semibold text-stone-700 flex items-center gap-1">
                          <GraduationCap className="h-3.5 w-3.5 text-blue-700" /> College / Qualification <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. BBA / MBA / B.Tech"
                          value={formData.education}
                          onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                          className="w-full bg-stone-50/80 border border-stone-200 rounded-md px-3 py-2 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                        />
                      </div>

                      {/* Graduation Year */}
                      <div className="space-y-1">
                        <label className="text-[11px] font-semibold text-stone-700 flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5 text-blue-700" /> Graduation Year
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 2024 / 2025"
                          value={formData.graduationYear}
                          onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                          className="w-full bg-stone-50/80 border border-stone-200 rounded-md px-3 py-2 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Horizontal Section 3: Links & Profiles (2-Columns Grid) */}
                  <div className="pt-2 border-t border-stone-100">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md mb-2 inline-block">
                      3. Online Links & Resume
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-1">
                      {/* LinkedIn Profile */}
                      <div className="space-y-1">
                        <label className="text-[11px] font-semibold text-stone-700 flex items-center gap-1">
                          <Link2 className="h-3.5 w-3.5 text-blue-700" /> LinkedIn Profile Link
                        </label>
                        <input
                          type="url"
                          placeholder="https://linkedin.com/in/username"
                          value={formData.linkedinUrl}
                          onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                          className="w-full bg-stone-50/80 border border-stone-200 rounded-md px-3 py-2 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                        />
                      </div>

                      {/* Resume / Portfolio Link */}
                      <div className="space-y-1">
                        <label className="text-[11px] font-semibold text-stone-700 flex items-center gap-1">
                          <Link2 className="h-3.5 w-3.5 text-blue-700" /> Resume / Portfolio Link <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="url"
                          required
                          placeholder="https://drive.google.com/file/..."
                          value={formData.resumeUrl}
                          onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
                          className="w-full bg-stone-50/80 border border-stone-200 rounded-md px-3 py-2 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Horizontal Section 4: Skills & Motivation (2-Columns Grid) */}
                  <div className="pt-2 border-t border-stone-100">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md mb-2 inline-block">
                      4. Skills & Additional Information
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-1">
                      {/* Relevant Skills */}
                      <div className="space-y-1">
                        <label className="text-[11px] font-semibold text-stone-700 flex items-center gap-1">
                          <Target className="h-3.5 w-3.5 text-blue-700" /> Key Skills / Expertise
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Sales Outreach, Client Pitching, Lead Gen"
                          value={formData.skills}
                          onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                          className="w-full bg-stone-50/80 border border-stone-200 rounded-md px-3 py-2 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                        />
                      </div>

                      {/* Cover Note */}
                      <div className="space-y-1">
                        <label className="text-[11px] font-semibold text-stone-700 flex items-center gap-1">
                          <FileText className="h-3.5 w-3.5 text-blue-700" /> Short Cover Note / Motivation
                        </label>
                        <textarea
                          rows={2}
                          placeholder="Briefly state your interest in joining Anavya Infotech..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-stone-50/80 border border-stone-200 rounded-md px-3 py-2 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md text-xs font-bold uppercase tracking-wider bg-blue-700 hover:bg-blue-800 text-white transition-all cursor-pointer shadow-none"
                    >
                      {isSubmitting ? (
                        <span>Submitting Candidate Profile...</span>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Submit Application</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
