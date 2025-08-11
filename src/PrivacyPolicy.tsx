import { ArrowLeft } from 'lucide-react';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img 
                  src="/Artboard 4@300x-100.jpg" 
                  alt="SabiTrack Logo" 
                  className="h-10 w-auto"
                />
              </div>
            </div>
            <div className="flex items-center">
              <a 
                href="/" 
                className="flex items-center text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="text-gray-600 mb-8">
            <p className="text-lg font-medium">Version 1.0 | May 27, 2025</p>
            <div className="w-20 h-px bg-gray-300 my-4"></div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">General Info</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              SabiTrack ("we", "us", or "our") is committed to protecting your privacy and handling your data in a transparent and secure way. This Privacy Policy explains how we collect, use, and protect your personal data when you use our platform to manage projects, collaborate with vendors, or oversee construction and event activities. By using our services, you agree to the terms outlined in this Privacy Policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Lawful Basis for Processing Your Data</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect and process personal data based on the following lawful grounds:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li><strong>Contractual necessity</strong> – to provide our services, including managing project workflows and enabling communication between sponsors, collaborators, and vendors.</li>
              <li><strong>Legitimate interests</strong> – to improve our platform, prevent fraud, and ensure system integrity.</li>
              <li><strong>Legal obligations</strong> – to comply with regulatory requirements where applicable.</li>
              <li><strong>Consent</strong>; in situations where you have explicitly agreed to data collection (e.g. marketing emails or platform notifications).</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Consent</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By using SabiTrack, you consent to the collection and use of your data as described in this policy. Where we rely on your consent for specific data uses, you have the right to withdraw it at any time. This will not affect the lawfulness of any processing carried out before you withdrew your consent.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              You can manage your consent preferences via your account settings or by contacting us directly at{' '}
              <a href="mailto:support@sabitrack.com" className="text-purple-600 hover:text-purple-700 font-medium">
                support@sabitrack.com
              </a>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. What Personal Data Do We Collect?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect the following categories of personal data:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li><strong>Basic account information:</strong> Name, email address, phone number, and role (e.g., Project Sponsor, Vendor, Co-Collaborator).</li>
              <li><strong>Project data:</strong> Project names, milestones, budgets, timelines, and related documentation.</li>
              <li><strong>Communication data:</strong> Messages, video uploads, and activity logs shared on the platform.</li>
              <li><strong>Usage data:</strong> Log data, device information, browser type, IP address, and time zone.</li>
              <li><strong>Payment information:</strong> Bank details or wallet information for vendor payments and milestone releases, processed securely via third-party payment processors.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We only collect data necessary to operate the platform effectively and do not sell your personal information to third parties.
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <img 
                  src="/Artboard 4@300x-100.jpg" 
                  alt="SabiTrack Logo" 
                  className="h-10 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The ultimate project management platform connecting project sponsors with skilled vendors for successful collaboration and delivery.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm">in</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Product</h4>
              <ul className="space-y-4">
                <li><a href="/#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="/#download" className="text-gray-400 hover:text-white transition-colors">Download</a></li>
                <li><a href="/#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Updates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="/privacy" className="text-purple-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2024 SabiTrack. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PrivacyPolicy; 