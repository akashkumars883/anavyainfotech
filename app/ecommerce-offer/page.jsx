import Link from "next/link";
import { ArrowRight, CheckCircle2, Star, Search, TrendingUp, ShieldCheck } from "lucide-react";
import FaqSection from "@/components/FaqSection";

const OFFER_FAQS = [
  {
    question: "Are there any hidden charges beyond ₹19,999?",
    answer: "No hidden development fees. The ₹19,999 is a one-time cost for the fully coded website. You will only need to pay standard yearly renewal charges for your domain name and hosting, which is standard for any website."
  },
  {
    question: "Who owns the code after the website is built?",
    answer: "You do. Once the final payment is made, you get 100% ownership of your website's source code. You are never locked in with us."
  },
  {
    question: "Do I need technical skills to add products?",
    answer: "Not at all. We provide a very intuitive, user-friendly admin dashboard. If you can upload a photo on Instagram, you can easily add products, manage inventory, and process orders on your new store."
  },
  {
    question: "Which payment gateways do you integrate?",
    answer: "We integrate popular and secure Indian payment gateways like Razorpay, PayU, or Cashfree, allowing your customers to pay via UPI, Credit/Debit cards, and NetBanking easily."
  }
];

export const metadata = {
  title: "E-Commerce Website Development Offer | Anavya Infotech",
  description: "Get a fully custom-coded E-Commerce website for just ₹19,999. Special Launch & Grow bundles available.",
};

export default function EcommerceOfferPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-left selection:bg-blue-600/20 selection:text-blue-950 pb-20">
      {/* Hero Section */}
      <section className="py-20 bg-white border-b border-stone-100 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1]">
            Launch Your Dream E-Commerce Business for Just <span className="font-semibold text-blue-700">₹19,999</span>
          </h1>
          <p className="text-lg sm:text-xl text-stone-600 font-light max-w-2xl mx-auto leading-relaxed">
            Stop paying monthly rent to platforms like Shopify. Own your fully custom-coded e-commerce store with zero hidden fees. From a secure payment gateway to a powerful admin panel, everything is ready.
          </p>
          <div className="pt-6">
            <Link
              href="#pricing"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-sm font-semibold uppercase tracking-wider bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-lg"
            >
              View Our Packages <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Benefits Section */}
      <section className="py-20 px-6 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
              Why Pair Your Store With SEO?
            </h2>
            <p className="text-stone-600 font-light text-lg">
              A beautiful website is just a digital storefront. SEO is the engine that brings high-intent buyers inside.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
              <Search className="h-8 w-8 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-stone-900 mb-3">High-Intent Buyers</h3>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                Social media ads target people who are scrolling. SEO targets people who are actively searching to buy your specific products on Google, leading to significantly higher conversion rates.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
              <TrendingUp className="h-8 w-8 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Compound Growth</h3>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                When you stop paying for ads, your sales drop to zero instantly. A strong SEO foundation compounds over time, bringing you free, consistent daily orders month after month.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
              <ShieldCheck className="h-8 w-8 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Brand Trust</h3>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                Consumers inherently trust brands that rank on the first page of Google. Securing those top positions establishes your store as an authority, overcoming initial buyer hesitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
              Choose Your Growth Plan
            </h2>
            <p className="text-stone-600 font-light text-lg">
              We offer heavily discounted bundles if you want to pair your new website with our expert SEO marketing services to start getting sales from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            {/* Basic Tier */}
            <div className="bg-white rounded-xl border border-stone-200 p-8 shadow-sm hover:shadow-md transition-shadow relative">
              <h3 className="text-xl font-semibold text-stone-900">Just The Store</h3>
              <p className="text-sm text-stone-500 mt-2 min-h-[40px]">Perfect for those who already have a marketing team.</p>
              <div className="mt-6 mb-8">
                <span className="text-4xl font-bold text-stone-900">₹19,999</span>
                <span className="text-stone-500 text-sm"> / one-time</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-stone-700"><CheckCircle2 className="h-5 w-5 text-stone-400 shrink-0" /> Fully custom-coded website</li>
                <li className="flex items-start gap-3 text-sm text-stone-700"><CheckCircle2 className="h-5 w-5 text-stone-400 shrink-0" /> Secure Payment Gateway</li>
                <li className="flex items-start gap-3 text-sm text-stone-700"><CheckCircle2 className="h-5 w-5 text-stone-400 shrink-0" /> Powerful Admin Panel</li>
                <li className="flex items-start gap-3 text-sm text-stone-700"><CheckCircle2 className="h-5 w-5 text-stone-400 shrink-0" /> 1 Month Free Tech Support</li>
                <li className="flex items-start gap-3 text-sm text-stone-400 line-through"><CheckCircle2 className="h-5 w-5 text-stone-200 shrink-0" /> SEO & Marketing Services</li>
              </ul>
              <Link href="/contact?plan=basic" className="block w-full py-3 px-4 text-center rounded-md border border-stone-300 text-sm font-semibold text-stone-700 hover:bg-stone-50 transition-colors">
                Get The Store
              </Link>
            </div>

            {/* Popular Tier */}
            <div className="bg-white rounded-xl border-2 border-blue-600 p-8 shadow-xl relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 shadow-md whitespace-nowrap">
                <Star className="h-3 w-3 fill-current" /> Most Popular
              </div>
              <h3 className="text-xl font-semibold text-stone-900">Launch & Grow</h3>
              <p className="text-sm text-stone-500 mt-2 min-h-[40px]">Website + 1st Month SEO. Get your store and start driving traffic.</p>
              <div className="mt-6 mb-8 flex flex-col">
                <span className="text-sm text-stone-400 line-through font-medium">₹29,999</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-stone-900">₹24,999</span>
                </div>
                <span className="text-green-600 text-xs font-bold mt-1 uppercase tracking-wide">Save ₹5,000 Instantly</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-stone-700"><CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" /> <strong>Everything in Basic, plus:</strong></li>
                <li className="flex items-start gap-3 text-sm text-stone-700"><CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" /> 1st Month Complete SEO</li>
                <li className="flex items-start gap-3 text-sm text-stone-700"><CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" /> Keyword Strategy & Analysis</li>
                <li className="flex items-start gap-3 text-sm text-stone-700"><CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" /> On-Page Optimization</li>
                <li className="flex items-start gap-3 text-xs text-stone-500 italic mt-4">*Then ₹10,000/mo for SEO from Month 2</li>
              </ul>
              <Link href="/contact?plan=launch-grow" className="block w-full py-3 px-4 text-center rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors shadow-md">
                Get The Bundle
              </Link>
            </div>

            {/* Premium Tier */}
            <div className="bg-white rounded-xl border border-stone-200 p-8 shadow-sm hover:shadow-md transition-shadow relative">
              <h3 className="text-xl font-semibold text-stone-900">Quarterly Scale-up</h3>
              <p className="text-sm text-stone-500 mt-2 min-h-[40px]">Maximum growth. Website + 3 Months SEO commitment.</p>
              <div className="mt-6 mb-8 flex flex-col">
                <span className="text-sm text-stone-400 line-through font-medium">₹49,999</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-stone-900">₹39,999</span>
                </div>
                <span className="text-green-600 text-xs font-bold mt-1 uppercase tracking-wide">Save ₹10,000 Instantly</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-stone-700"><CheckCircle2 className="h-5 w-5 text-stone-700 shrink-0" /> <strong>Everything in Basic, plus:</strong></li>
                <li className="flex items-start gap-3 text-sm text-stone-700"><CheckCircle2 className="h-5 w-5 text-stone-700 shrink-0" /> 3 Full Months of SEO</li>
                <li className="flex items-start gap-3 text-sm text-stone-700"><CheckCircle2 className="h-5 w-5 text-stone-700 shrink-0" /> Dedicated Growth Strategy</li>
                <li className="flex items-start gap-3 text-sm text-stone-700"><CheckCircle2 className="h-5 w-5 text-stone-700 shrink-0" /> Guaranteed Organic Results</li>
              </ul>
              <Link href="/contact?plan=quarterly" className="block w-full py-3 px-4 text-center rounded-md border-2 border-stone-900 text-stone-900 text-sm font-semibold hover:bg-stone-900 hover:text-white transition-colors">
                Maximize My Sales
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
              Trusted by Indian Brand Owners
            </h2>
            <p className="text-stone-600 font-light text-lg">
              Hear from business owners who escaped platform fees and scaled their organic sales with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm relative">
              <div className="flex gap-1 text-yellow-400 mb-4">
                <Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" />
              </div>
              <p className="text-stone-600 font-light text-sm italic mb-6 leading-relaxed">
                "I was paying almost ₹4,500 every month just for Shopify and some basic apps. Switching to Anavya's custom store saved me over ₹50,000 this year, and my site loads twice as fast now."
              </p>
              <div>
                <p className="font-semibold text-stone-900 text-sm">Rahul S.</p>
                <p className="text-xs text-stone-500">Founder, Ethnic Wear Brand</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm relative">
              <div className="flex gap-1 text-yellow-400 mb-4">
                <Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" />
              </div>
              <p className="text-stone-600 font-light text-sm italic mb-6 leading-relaxed">
                "We opted for the Launch & Grow bundle. Initially, it took a few weeks to see SEO changes, but by month 3, we started getting 5-7 organic orders daily. The investment paid for itself very quickly."
              </p>
              <div>
                <p className="font-semibold text-stone-900 text-sm">Priya M.</p>
                <p className="text-xs text-stone-500">Owner, Organic Skincare</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm relative">
              <div className="flex gap-1 text-yellow-400 mb-4">
                <Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" />
              </div>
              <p className="text-stone-600 font-light text-sm italic mb-6 leading-relaxed">
                "I have zero coding knowledge. Anavya's team handled everything from Razorpay integration to the server setup. The admin panel they provided is honestly easier to use than my Facebook account."
              </p>
              <div>
                <p className="font-semibold text-stone-900 text-sm">Amit V.</p>
                <p className="text-xs text-stone-500">Electronics Retailer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <FaqSection
        title="Frequently Asked Questions"
        subtitle="Common questions about our e-commerce packages."
        faqs={OFFER_FAQS}
      />

      {/* Final CTA Section */}
      <section className="py-16 bg-stone-50 px-6 border-t border-stone-200">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">
            Still have questions? Let's discuss your project.
          </h2>
          <p className="text-stone-600 font-light">Our experts are available to guide you on which bundle suits your business best.</p>
          <div className="pt-4 flex justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-bold uppercase tracking-wider bg-black text-white hover:bg-zinc-800 transition-colors">
              Contact Us To Discuss
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
