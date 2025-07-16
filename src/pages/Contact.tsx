import React from "react";
import { Mail, Phone, MapPin, User2 } from "lucide-react";

const Contact = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-orange-100 to-yellow-100 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/public/hero-mascot.jpg')] bg-cover bg-center opacity-20 z-0" />
    <div className="relative z-10 w-full max-w-5xl mx-auto rounded-3xl shadow-2xl bg-white/90 border border-orange-200 flex flex-col md:flex-row overflow-hidden">
      {/* Left: Contact Info */}
      <div className="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-orange-400/90 to-pink-300/80 text-white flex flex-col justify-center">
        <img
          src="/ozi-logo.png"
          alt="Ozi Logo"
          className="h-15 w-13 mb-0 animate-float"
        />
        <h2 className="text-2xl font-bold mb-6">CONTACT INFORMATION</h2>
        <div className="flex items-center gap-3 mb-4">
          <Phone className="w-5 h-5" />
          <a href="tel:+918527701482" className="text-lg">+91 85277 01482</a>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <Mail className="w-5 h-5" />
          <a href="mailto:contact@ozi.in" className="text-lg">contact@ozi.in</a>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <MapPin className="w-5 h-5" />
          <span className="text-lg">
            7th Floor, B-Block, Imperia Mindspace,
            <br />
            Sector 62, Gurugram, Haryana - 122102
          </span>
        </div>
        <div className="flex items-start gap-3 mb-4">
          <User2 className="w-5 h-5 mt-1" />
          <span className="text-base">
            IT Grievance Officer
            <br />
            Mr.Akash Dip, {" "}
            <a href="mailto:akash@ozi.in" className="text-white text-lg">
              akash@ozi.in
            </a>
          </span>
        </div>
        <div className="mt-6 font-bold text-base tracking-wide">
          OZI TECHNOLOGIES PRIVATE LIMITED
        </div>
      </div>
      {/* Right: Form */}
      <div className="md:w-1/2 p-8 md:p-12 bg-white/90 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-orange-500 mb-2">
          Any Questions or remarks? Just write us a message
        </h2>
        <p className="text-sm text-muted-foreground mb-6">
          By submitting your contact information, you grant Ozi explicit
          permission to contact you in the future through calls, SMS, and emails
          to provide information about our products.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white/80"
            required
          />
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Mobile number"
              className="w-1/2 px-4 py-2 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white/80"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-1/2 px-4 py-2 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white/80"
              required
            />
          </div>
          <input
            type="text"
            placeholder="City"
            className="w-full px-4 py-2 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white/80"
            required
          />
          <textarea
            placeholder="Write your query/ question here"
            rows={4}
            className="w-full px-4 py-2 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white/80"
            required
          />
          <button
            type="submit"
            className="ml-auto block bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default Contact;
