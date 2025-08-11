import { ArrowLeft, Trash2, Clock, Shield, Mail } from 'lucide-react';

function DeleteAccount() {
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

      {/* Delete Account Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trash2 className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Delete Your SabiTrack Account</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're sorry to see you go. This page explains how to delete your account and what happens to your data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* How to Delete */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Trash2 className="w-6 h-6 mr-3 text-red-600" />
              How to Request Account Deletion
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-semibold text-gray-900 mb-2">Option 1: Through the App</h3>
                <p className="text-gray-700">
                  Open SabiTrack → Settings → Account → Delete Account
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-gray-900 mb-2">Option 2: Email Request</h3>
                <p className="text-gray-700">
                  Email us at{' '}
                  <a href="mailto:support@sabitrack.com" className="text-purple-600 hover:text-purple-700 font-medium">
                    support@sabitrack.com
                  </a>
                  {' '}with subject "Delete Account"
                </p>
              </div>
            </div>
          </div>

          {/* Data Retention */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Clock className="w-6 h-6 mr-3 text-blue-600" />
              Data Retention Timeline
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Immediate Deletion</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Account access and login credentials</li>
                  <li>• Profile information</li>
                  <li>• App preferences and settings</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">30-Day Hold Period</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Project data and milestones</li>
                  <li>• Communication history</li>
                  <li>• Payment information</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Permanent Deletion</h3>
                <p className="text-gray-700 text-sm">
                  All data permanently deleted after 30 days
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What Gets Deleted */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">What Will Be Permanently Deleted</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Account Information</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Your profile and personal information
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Login credentials and authentication data
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Account preferences and settings
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Project Data</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  All project information and milestones
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Communication history and messages
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Transaction history and payment records
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Exceptions */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <Shield className="w-6 h-6 mr-3 text-yellow-600" />
            Legal Exceptions & Data Retention
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              <strong>Legal Compliance:</strong> Some data may be retained for legal or regulatory compliance purposes, including:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li>• Financial records required for tax purposes</li>
              <li>• Transaction data for fraud prevention</li>
              <li>• Information required by law enforcement</li>
              <li>• Data subject to ongoing legal proceedings</li>
            </ul>
            <p className="text-gray-700">
              <strong>Processing Time:</strong> Account deletion requests are processed within <strong>24-48 hours</strong> during business days.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help?</h2>
          <p className="text-gray-600 mb-6">
            If you cannot access your account or have questions about the deletion process, contact our support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:support@sabitrack.com?subject=Delete Account Request" 
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center justify-center"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Support
            </a>
            <a 
              href="tel:+16786502960" 
              className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors inline-flex items-center justify-center"
            >
              Call Support
            </a>
          </div>
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
                <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/delete-account" className="text-purple-400 hover:text-white transition-colors">Delete Account</a></li>
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

export default DeleteAccount; 