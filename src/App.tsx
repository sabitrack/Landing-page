// import React from 'react';
import { 
  Smartphone, 
  Users, 
  BarChart3, 
  Shield, 
  Download, 
  Mail, 
  Phone,
  Star,
  CheckCircle,
  Zap,
  Clock,
  TrendingUp,
  MessageSquare,
  Wallet,
  FileText,
  UserCheck,
  Calendar,
  Settings
} from 'lucide-react';

function App() {
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
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#features" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Features</a>
                <a href="#how-it-works" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">How It Works</a>
                <a href="#download" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Download</a>
                <a href="#contact" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-0">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Connect Projects with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600"> Skilled Vendors</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                SabiTrack is the ultimate project management platform that seamlessly connects project sponsors with verified vendors. Manage milestones, track progress, and ensure secure payments all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Coming Soon
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center justify-center">
                  <Smartphone className="w-5 h-5 mr-2" />
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="flex justify-center items-center space-x-4">
                <div className="relative">
                  <img 
                    src="/WhatsApp Image 2025-07-06 at 18.56.34.jpeg" 
                    alt="SabiTrack Mobile App - Project Management" 
                    className="w-64 h-auto rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
                  />
                </div>
                <div className="relative">
                  <img 
                    src="/WhatsApp Image 2025-07-06 at 18.56.34 (1).jpeg" 
                    alt="SabiTrack Mobile App - Vendor Collaboration" 
                    className="w-64 h-auto rounded-3xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience SabiTrack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how SabiTrack transforms project collaboration with intuitive mobile interfaces designed for vendors and project sponsors.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/WhatsApp Image 2025-07-06 at 18.56.34 (1).jpeg" 
                alt="SabiTrack Onboarding - Track milestones and manage vendors" 
                className="w-full max-w-sm mx-auto rounded-3xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Track Milestones & Manage Vendors</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Embrace SabiTrack to enhance productivity, foster collaboration, and achieve project success with ease. Our intuitive interface makes it simple to track project progress and coordinate with your team.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Real-time project tracking</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Vendor collaboration tools</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Secure payment processing</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mt-24">
            <div className="space-y-6 md:order-2">
              <h3 className="text-3xl font-bold text-gray-900">Comprehensive Project Management</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                From project creation to vendor management, SabiTrack provides all the tools you need to successfully deliver projects on time and within budget.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-50 p-4 rounded-xl">
                  <BarChart3 className="w-8 h-8 text-purple-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">Sales Reporting</h4>
                </div>
                <div className="bg-orange-50 p-4 rounded-xl">
                  <Users className="w-8 h-8 text-orange-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">Manage Vendors</h4>
                </div>
                <div className="bg-green-50 p-4 rounded-xl">
                  <Wallet className="w-8 h-8 text-green-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">Withdrawal</h4>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-blue-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">Track Project</h4>
                </div>
              </div>
            </div>
            <div className="md:order-1">
              <img 
                src="/WhatsApp Image 2025-07-06 at 18.56.34.jpeg" 
                alt="SabiTrack Project Management Interface" 
                className="w-full max-w-sm mx-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How SabiTrack Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From vendor registration to project completion, SabiTrack streamlines the entire collaboration process.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <UserCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Vendor Registration</h3>
              <p className="text-gray-600">Vendors register with expertise areas, complete identity verification, and showcase their portfolio to get started.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Project Matching</h3>
              <p className="text-gray-600">Receive project invitations, review details, negotiate terms, and accept projects that match your skills and availability.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Milestone Delivery</h3>
              <p className="text-gray-600">Complete milestones, submit deliverables, communicate with sponsors, and receive secure payments upon approval.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything vendors and project sponsors need for successful collaboration and project delivery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Vendor Dashboard</h3>
              <p className="text-gray-600">Comprehensive dashboard to manage active projects, pending milestones, available balance, and project invitations.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Milestone Management</h3>
              <p className="text-gray-600">Break projects into manageable milestones with clear deliverables, timelines, and payment schedules.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Communication</h3>
              <p className="text-gray-600">Built-in messaging system with file sharing, voice notes, and group chats for seamless project collaboration.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure Payments</h3>
              <p className="text-gray-600">Automated milestone-based payments with support for local and international bank accounts and withdrawal tracking.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Identity Verification</h3>
              <p className="text-gray-600">Comprehensive KYC process with document verification, two-factor authentication, and secure PIN setup for withdrawals.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Negotiation Tools</h3>
              <p className="text-gray-600">Built-in negotiation system allowing vendors to propose alternative terms, pricing, and timelines for projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Journey Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Vendor Journey</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                SabiTrack guides vendors through every step of their professional journey, from initial registration to successful project completion and payment.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-purple-600 font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Registration & Verification</h4>
                    <p className="text-gray-600 text-sm">Complete profile setup with expertise areas, portfolio showcase, and identity verification.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-purple-600 font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Project Discovery</h4>
                    <p className="text-gray-600 text-sm">Receive targeted project invitations based on skills and availability.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-purple-600 font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Collaboration & Delivery</h4>
                    <p className="text-gray-600 text-sm">Work on milestones, communicate with sponsors, and deliver quality results.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-purple-600 font-semibold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Payment & Growth</h4>
                    <p className="text-gray-600 text-sm">Receive secure payments and build reputation for future opportunities.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-2xl">
                  <BarChart3 className="w-8 h-8 text-purple-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Progress Tracking</h3>
                  <p className="text-sm text-gray-600">Monitor project progress and milestone completion</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-2xl mt-8">
                  <TrendingUp className="w-8 h-8 text-purple-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Performance Analytics</h3>
                  <p className="text-sm text-gray-600">Track earnings, completion rates, and client satisfaction</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-2xl -mt-8">
                  <Clock className="w-8 h-8 text-purple-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Time Management</h3>
                  <p className="text-sm text-gray-600">Set availability and manage project timelines</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-2xl">
                  <Star className="w-8 h-8 text-purple-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Reputation Building</h3>
                  <p className="text-sm text-gray-600">Build credibility through successful project delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Get SabiTrack Today</h2>
          <p className="text-xl mb-12 text-purple-100 max-w-2xl mx-auto">
            Join the growing community of vendors and project sponsors who trust SabiTrack for successful project collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <Smartphone className="w-16 h-16 mx-auto mb-4 text-white" />
              <h3 className="text-2xl font-bold mb-2">iOS App</h3>
              <p className="text-purple-100 mb-4">Coming Soon to App Store</p>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Notify Me
              </button>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <Smartphone className="w-16 h-16 mx-auto mb-4 text-white" />
              <h3 className="text-2xl font-bold mb-2">Android App</h3>
              <p className="text-purple-100 mb-4">Coming Soon to Google Play</p>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about SabiTrack? We'd love to hear from you. Reach out to our team.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Get in touch via email</p>
              <a href="mailto:support@sabitrack.com" className="text-purple-600 hover:text-purple-700 font-medium">
                support@sabitrack.com
              </a>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak with our team</p>
              <div className="flex flex-col space-y-2">
                <a href="tel:+16786502960" className="text-purple-600 hover:text-purple-700 font-medium">
                  +1 (678) 650-2960
                </a>
                <a href="tel:+2348122905840" className="text-purple-600 hover:text-purple-700 font-medium">
                  +234 812 290 5840
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#download" className="text-gray-400 hover:text-white transition-colors">Download</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Updates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/delete-account" className="text-gray-400 hover:text-white transition-colors">Delete Account</a></li>
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

export default App;