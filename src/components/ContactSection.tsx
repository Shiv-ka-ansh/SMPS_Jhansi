import { useState } from "react";
import { Alert, AlertDescription } from "./ui/alert";
import { CheckCircle, AlertCircle } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, always show success
      setSubmitStatus('success');
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
      });
      
      console.log('Contact form submitted (demo mode):', {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      });
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#23495c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get in <span className="text-[#f05461]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-[#f05461] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            We're here to help! Reach out to us for admissions,
            inquiries, or any information about SMPS Jhansi.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Get in Touch
              </h3>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4 p-6 bg-[#466a94] rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-[#f05461] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">
                      School Address
                    </h4>
                    <p className="text-gray-200 leading-relaxed">
                      Siddheshwar Mountain Public School
                      <br />
                      Mountain View Campus, Jhansi Road
                      <br />
                      Jhansi, Uttar Pradesh - 284001
                      <br />
                      India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 p-6 bg-[#466a94] rounded-xl">
                  <div className="w-12 h-12 bg-[#f05461] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">
                      Phone Numbers
                    </h4>
                    <div className="space-y-1 text-gray-200">
                      <p>
                        <span className="font-medium">
                          Main Office:
                        </span>{" "}
                        +91 510 123 4567
                      </p>
                      <p>
                        <span className="font-medium">
                          Admissions:
                        </span>{" "}
                        +91 510 123 4568
                      </p>
                      <p>
                        <span className="font-medium">
                          Principal:
                        </span>{" "}
                        +91 510 123 4569
                      </p>
                      <p>
                        <span className="font-medium">
                          Emergency:
                        </span>{" "}
                        +91 987 654 3210
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 p-6 bg-[#466a94] rounded-xl">
                  <div className="w-12 h-12 bg-[#f05461] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">
                      Email Addresses
                    </h4>
                    <div className="space-y-1 text-gray-200">
                      <p>
                        <span className="font-medium">
                          General:
                        </span>{" "}
                        info@smpsjhansi.edu.in
                      </p>
                      <p>
                        <span className="font-medium">
                          Admissions:
                        </span>{" "}
                        admissions@smpsjhansi.edu.in
                      </p>
                      <p>
                        <span className="font-medium">
                          Principal:
                        </span>{" "}
                        principal@smpsjhansi.edu.in
                      </p>
                      <p>
                        <span className="font-medium">
                          Support:
                        </span>{" "}
                        support@smpsjhansi.edu.in
                      </p>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start space-x-4 p-6 bg-[#466a94] rounded-xl">
                  <div className="w-12 h-12 bg-[#f05461] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">
                      Office Hours
                    </h4>
                    <div className="space-y-1 text-gray-200">
                      <p>
                        <span className="font-medium">
                          Monday - Friday:
                        </span>{" "}
                        8:00 AM - 4:00 PM
                      </p>
                      <p>
                        <span className="font-medium">
                          Saturday:
                        </span>{" "}
                        8:00 AM - 12:00 PM
                      </p>
                      <p>
                        <span className="font-medium">
                          Sunday:
                        </span>{" "}
                        Closed
                      </p>
                      <p className="text-sm text-gray-300 mt-2">
                        *School hours: 7:30 AM - 2:30 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="space-y-8">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#0a1c28] mb-6">
                Send us a Message
              </h3>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <Alert className="mb-6 border-green-200 bg-green-50">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-700">
                    Your message has been sent successfully! We'll get back to you soon.
                  </AlertDescription>
                </Alert>
              )}

              {submitStatus === 'error' && (
                <Alert className="mb-6 border-red-200 bg-red-50">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-700">
                    {errorMessage || 'Failed to send message. Please try again.'}
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#0a1c28] font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#466a94] focus:border-transparent"
                      placeholder="Enter your first name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-[#0a1c28] font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#466a94] focus:border-transparent"
                      placeholder="Enter your last name"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#0a1c28] font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#466a94] focus:border-transparent"
                    placeholder="Enter your email address"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-[#0a1c28] font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#466a94] focus:border-transparent"
                    placeholder="Enter your phone number"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-[#0a1c28] font-medium mb-2">
                    Subject
                  </label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#466a94] focus:border-transparent"
                    disabled={isSubmitting}
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Admissions">Admissions</option>
                    <option value="Academic Information">Academic Information</option>
                    <option value="Campus Visit">Campus Visit</option>
                    <option value="Fee Information">Fee Information</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#0a1c28] font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#466a94] focus:border-transparent resize-none"
                    placeholder="Enter your message here..."
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#f05461] hover:bg-[#e04451] disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg transition-colors duration-300 font-medium"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#466a94]/20 to-[#23495c]/20"></div>
              <div className="text-center z-10">
                <div className="w-16 h-16 bg-[#f05461] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-[#0a1c28] mb-2">
                  Interactive Map
                </h4>
                <p className="text-gray-600 mb-4">
                  Click to view our location on Google Maps
                </p>
                <button
                  onClick={() =>
                    window.open("https://maps.app.goo.gl/nxgiFPLNSWdcLqt88", "_blank")
                  }
                  className="bg-[#466a94] hover:bg-[#f05461] text-white px-6 py-2 rounded-lg transition-colors"
                >
                  View on Maps
                </button>
              </div>

              {/* Map Grid Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-6 h-full">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div
                      key={i}
                      className="border border-[#466a94]"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}