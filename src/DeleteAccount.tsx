import { ArrowLeft, Trash2, Clock, Shield, Mail, User, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

function DeleteAccount() {
  const [formData, setFormData] = useState({
    email: '',
    reason: '',
    confirmDeletion: false,
    confirmDataLoss: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.reason) {
      newErrors.reason = 'Please provide a reason for deletion';
    }
    
    if (!formData.confirmDeletion) {
      newErrors.confirmDeletion = 'You must confirm account deletion';
    }
    
    if (!formData.confirmDataLoss) {
      newErrors.confirmDataLoss = 'You must acknowledge data loss';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Deletion request submitted:', formData);
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting deletion request:', error);
      setErrors({ submit: 'Failed to submit request. Please try again or contact support.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
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

        {/* Success Message */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Deletion Request Submitted</h1>
          <p className="text-lg text-gray-600 mb-8">
            We've received your account deletion request. You'll receive a confirmation email shortly.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="font-semibold text-blue-900 mb-2">What happens next?</h2>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>• Your account will be deactivated within 24-48 hours</li>
              <li>• You'll receive a confirmation email with further instructions</li>
              <li>• Your data will be held for 30 days before permanent deletion</li>
              <li>• You can cancel this request by contacting support within 24 hours</li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/" 
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Return to Home
            </a>
            <a 
              href="mailto:support@sabitrack.com?subject=Cancel Deletion Request" 
              className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
            >
              Cancel Request
            </a>
          </div>
        </div>
      </div>
    );
  }

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
        <div className="bg-gray-50 rounded-2xl p-8 text-center mb-12">
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

        {/* Deletion Request Form */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Request Account Deletion</h2>
            <p className="text-gray-600">
              Submit your account deletion request below. We'll process it within 24-48 hours.
            </p>
          </div>

          {errors.submit && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start">
              <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
              <p className="text-red-800 text-sm">{errors.submit}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors ${
                  errors.email ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Enter your account email address"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                Reason for Deletion *
              </label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                rows={4}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors ${
                  errors.reason ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Please tell us why you're deleting your account (optional but helpful for improving our service)"
              />
              {errors.reason && (
                <p className="text-red-600 text-sm mt-1">{errors.reason}</p>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="confirmDeletion"
                  name="confirmDeletion"
                  checked={formData.confirmDeletion}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 mt-1"
                />
                <label htmlFor="confirmDeletion" className="ml-3 text-sm text-gray-700">
                  I understand that this action will permanently delete my SabiTrack account and all associated data.
                  {errors.confirmDeletion && (
                    <span className="block text-red-600 text-sm mt-1">{errors.confirmDeletion}</span>
                  )}
                </label>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="confirmDataLoss"
                  name="confirmDataLoss"
                  checked={formData.confirmDataLoss}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 mt-1"
                />
                <label htmlFor="confirmDataLoss" className="ml-3 text-sm text-gray-700">
                  I acknowledge that all my project data, communication history, and account information will be permanently lost and cannot be recovered.
                  {errors.confirmDataLoss && (
                    <span className="block text-red-600 text-sm mt-1">{errors.confirmDataLoss}</span>
                  )}
                </label>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-900 mb-1">Important Notice</h3>
                  <p className="text-yellow-800 text-sm">
                    This action cannot be undone. Once your account is deleted, all data will be permanently removed after 30 days. 
                    You can cancel this request within 24 hours by contacting support.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 disabled:bg-red-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <Trash2 className="w-5 h-5 mr-2" />
                    Submit Deletion Request
                  </>
                )}
              </button>
              <a
                href="/"
                className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-center"
              >
                Cancel
              </a>
            </div>
          </form>
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