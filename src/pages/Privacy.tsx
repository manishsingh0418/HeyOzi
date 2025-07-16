import React from "react";

const Privacy = () => (
  <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-pink-100 via-orange-100 to-yellow-100 py-12 px-2 sm:px-4">
    <div className="max-w-3xl w-full bg-white/90 rounded-3xl shadow-2xl p-4 sm:p-8 md:p-12 border border-orange-200">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-kids font-bold text-orange-500 mb-6 drop-shadow-lg text-left">Privacy Policy – Ozi Technologies Private Limited</h1>
      <p className="text-base sm:text-lg text-muted-foreground mb-8 text-left">Welcome to <span className="font-bold">Ozi</span>, your trusted partner in the world of modern parenting and family essentials. This Privacy Policy explains how we collect, use, and protect your personal information when you interact with our website or app. By using our services, you agree to the practices outlined below.</p>
      <div className="space-y-8 text-left">
        {/* Section 1 */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-orange-600">1. What Personal Information We Collect</h2>
          <p className="mb-2">At <span className="font-bold">Ozi</span>, we collect certain information to enhance your experience and provide personalized services. This includes:</p>
          <ul className="list-disc pl-6 mb-2 space-y-1">
            <li>Your <span className="font-bold">full name, phone number, and email address</span> during registration</li>
            <li><span className="font-bold">Order and preference details</span> when submitting inquiries or making purchases</li>
            <li><span className="font-bold">Communication records</span> such as call logs and messages, for internal quality checks</li>
          </ul>
        </div>
        {/* Section 2 */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-orange-600">2. How We Use the Information</h2>
          <ul className="list-disc pl-6 mb-2 space-y-1">
            <li>Deliver a smooth, customized experience</li>
            <li>Manage orders, service queries, and support interactions</li>
            <li>Improve our services based on your usage patterns</li>
            <li>Contact you for service updates, notifications, and occasional marketing (only if opted in)</li>
          </ul>
          <p className="mb-2">Your information will <span className="font-bold">never be shared with third parties</span> except as required by law or stated in this policy. We may collect additional data to improve services, but it will remain protected under our data usage principles.</p>
          <p>You may receive communication from us through SMS, email, or calls, for updates, order tracking, and feedback collection.</p>
        </div>
        {/* Section 3 */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-orange-600">3. Non-Personal Information Collection</h2>
          <p className="mb-2">When you use our website/app, we may collect non-personal information such as:</p>
          <ul className="list-disc pl-6 mb-2 space-y-1">
            <li><span className="font-bold">Browser type, pages visited, and session duration</span></li>
            <li><span className="font-bold">IP address, device name, location data</span>, and browsing behavior</li>
          </ul>
          <p>We may assign a random <span className="font-bold">User ID</span> to understand user preferences better. This is done through tools like cookies or web beacons. You can disable cookies or opt out via browser settings if you wish to restrict data collection.</p>
        </div>
        {/* Section 4 */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-orange-600">4. When We Share Your Data</h2>
          <p>Your personal data is accessible only to <span className="font-bold">authorized Ozi team members</span> and used strictly for business operations. We may also share information with government or law enforcement agencies <span className="font-bold">only if legally required</span>.</p>
        </div>
        {/* Section 5 */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-orange-600">5. Security Practices</h2>
          <p className="mb-2">We implement <span className="font-bold">industry-standard security measures</span>, including:</p>
          <ul className="list-disc pl-6 mb-2 space-y-1">
            <li>End-to-end encryption during data transmission</li>
            <li>Secure storage servers with restricted access</li>
            <li>Continuous training of staff on privacy and security best practices</li>
          </ul>
          <p>We retain your data only for the duration needed to fulfill the services you’ve requested.</p>
        </div>
        {/* Section 6 */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-orange-600">6. Your Choices & Opting Out</h2>
          <p className="mb-2">You can opt out of promotional emails or marketing messages by following the “unsubscribe” link provided in the communication.</p>
          <p className="mb-2">If you wish to:</p>
          <ul className="list-disc pl-6 mb-2 space-y-1">
            <li><span className="font-bold">Withdraw consent</span></li>
            <li><span className="font-bold">Request data deletion</span></li>
            <li><span className="font-bold">Raise a privacy concern</span></li>
          </ul>
          <p>Please email us at: <a href="mailto:contact@ozi.in" className="text-orange-600 font-bold">contact@ozi.in</a></p>
          <p>We will respond within a reasonable timeframe. Note that withdrawing consent will not apply retroactively or affect required legal data processing.</p>
        </div>
        {/* Section 7 */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-orange-600">7. Call/Message Recordings for Quality Assurance</h2>
          <p>All <span className="font-bold">calls and messages made by Ozi</span> may be recorded for internal training and service quality improvements. These recordings are used only within the organization and never shared externally.</p>
        </div>
        {/* Section 8 */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-orange-600">8. Policy Updates</h2>
          <p>We may occasionally update this Privacy Policy. Users will be notified in case of any material changes. Please check back periodically to stay informed.</p>
        </div>
        {/* Section 9 */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-orange-600">9. Contact Us</h2>
          <p>For questions, concerns, or privacy-related requests, please reach out to our Privacy Officer:<br />
            <span className="font-bold">📧 Email:</span> <a href="mailto:contact@ozi.in" className="text-orange-600 font-bold">contact@ozi.in</a>
          </p>
        </div>
        <div className="pt-4 border-t mt-8">
          <p className="text-sm text-muted-foreground">By using the Ozi platform (website or app), you acknowledge that you have read and understood this Privacy Policy and agree to its terms.</p>
          <p className="text-sm text-muted-foreground font-bold mt-2">Effective Date: 16/07/2025</p>
        </div>
      </div>
    </div>
  </div>
);

export default Privacy; 