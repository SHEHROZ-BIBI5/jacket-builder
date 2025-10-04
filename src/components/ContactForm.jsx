import React, { useState } from 'react';
import { X } from 'lucide-react';

const ContactForm = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    yourName: '',
    yourEmail: '',
    phoneNo: '',
    country: '',
    yourMessage: '',
    uploadFile: null
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      {/* Button to open popup */}
      <button 
        onClick={() => setIsPopupOpen(true)}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Need Help?
      </button>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closePopup}></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-lg shadow-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button 
              onClick={closePopup}
              className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
            >
              <X size={20} className="text-gray-600" />
            </button>

            {/* Popup Header */}
            <div className="bg-gray-50 px-6 py-4 border-b">
              <h4 className="text-lg font-semibold text-gray-800">Contact Us</h4>
            </div>

            {/* Popup Content */}
            <div className="p-6">
              <div onSubmit={handleSubmit} className="space-y-6">
                {/* Hidden fields simulation */}
                <input type="hidden" name="_wpcf7" value="333" />
                <input type="hidden" name="_wpcf7_version" value="6.0.6" />
                <input type="hidden" name="_wpcf7_locale" value="en_US" />
                <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f333-o1" />
                <input type="hidden" name="_wpcf7_container_post" value="0" />
                <input type="hidden" name="_wpcf7_posted_data_hash" value="" />

                <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h3>

                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      *Your Name
                    </label>
                    <input
                      type="text"
                      name="yourName"
                      value={formData.yourName}
                      onChange={handleInputChange}
                      maxLength="400"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      *Email Address
                    </label>
                    <input
                      type="email"
                      name="yourEmail"
                      value={formData.yourEmail}
                      onChange={handleInputChange}
                      maxLength="400"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Phone and Country Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      *Phone Number
                    </label>
                    <input
                      type="text"
                      name="phoneNo"
                      value={formData.phoneNo}
                      onChange={handleInputChange}
                      maxLength="400"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      *Country
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">—Please choose an option—</option>
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                      <option value="Germany">Germany</option>
                      <option value="Italy">Italy</option>
                      <option value="France">France</option>
                      <option value="South Korea">South Korea</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="South Africa">South Africa</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    *Write a Message
                  </label>
                  <textarea
                    name="yourMessage"
                    value={formData.yourMessage}
                    onChange={handleInputChange}
                    rows="10"
                    maxLength="2000"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical"
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload File (Optional)
                  </label>
                  <input
                    type="file"
                    name="uploadFile"
                    onChange={handleInputChange}
                    accept="audio/*,video/*,image/*"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>

                {/* Turnstile Placeholder */}
                <div className="bg-gray-100 p-4 rounded-md text-center text-gray-600">
                  [cf7sr-turnstile]
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <button
                    onClick={handleSubmit}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center space-x-2"
                  >
                    <span>Submit</span>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent opacity-0 group-hover:opacity-100"></div>
                  </button>
                </div>

                {/* Akismet Hidden Fields */}
                <div style={{ display: 'none' }}>
                  <label>
                    Δ
                    <textarea 
                      name="_wpcf7_ak_hp_textarea" 
                      cols="45" 
                      rows="8" 
                      maxLength="100"
                    ></textarea>
                  </label>
                  <input type="hidden" name="_wpcf7_ak_js" value="1755535426381" />
                </div>

                {/* Response Output */}
                <div className="wpcf7-response-output" aria-hidden="true"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scripts simulation - these would be handled differently in React */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-T362KH3"
          height="0" 
          width="0" 
          style={{display:'none', visibility:'hidden'}}
        />
      </noscript>

      {/* Widget Shopping Cart Live Region */}
      <div className="widget_shopping_cart_live_region screen-reader-text" role="status"></div>

      {/* Screen Reader Response */}
      <div className="screen-reader-response">
        <p role="status" aria-live="polite" aria-atomic="true"></p>
        <ul></ul>
      </div>

      {/* reCAPTCHA Badge Simulation */}
      <div className="fixed bottom-4 right-4 w-64 h-15 bg-gray-100 border border-gray-300 rounded shadow-md p-2 text-xs text-gray-600 opacity-50 hover:opacity-100 transition-opacity">
        reCAPTCHA Badge
        <textarea 
          id="g-recaptcha-response-100000" 
          name="g-recaptcha-response" 
          className="g-recaptcha-response" 
          style={{display: 'none'}}
        />
      </div>
    </>
  );
};

export default ContactForm;