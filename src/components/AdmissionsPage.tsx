import { useState } from "react";

interface AdmissionsPageProps {
  onNavigateHome?: () => void;
}

export function AdmissionsPage({ onNavigateHome }: AdmissionsPageProps) {
  const [formData, setFormData] = useState({
    studentFirstName: '',
    studentLastName: '',
    dateOfBirth: '',
    gender: '',
    gradeApplying: '',
    previousSchool: '',
    fatherName: '',
    motherName: '',
    fatherOccupation: '',
    motherOccupation: '',
    parentPhone: '',
    parentEmail: '',
    address: '',
    city: '',
    pincode: '',
    medicalConditions: '',
    specialRequirements: '',
    transportRequired: false,
    termsAccepted: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    alert('Application submitted successfully! We will contact you within 24 hours.');
    console.log('Form data:', formData);
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* Admissions Header */}
      <section className="bg-gradient-to-br from-[#466a94] to-[#23495c] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <button 
              onClick={onNavigateHome}
              className="text-[#e0e1be] hover:text-white transition-colors"
            >
              Home
            </button>
            <span className="mx-2 text-[#e0e1be]">/</span>
            <span>Admissions</span>
          </nav>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Join Our <span className="text-[#e0e1be]">School Family</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl">
            Begin your child's journey towards academic excellence and holistic development at SMPS Jhansi. We welcome bright minds who are ready to grow, learn, and achieve their dreams.
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0a1c28] mb-4">
              Admission <span className="text-[#f05461]">Process</span>
            </h2>
            <div className="w-24 h-1 bg-[#f05461] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our straightforward admission process ensures a smooth transition for your child into our school community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Inquiry & Information",
                description: "Contact our admissions office or submit an online inquiry to learn about available seats and requirements."
              },
              {
                step: "2", 
                title: "Application Form",
                description: "Complete the admission application form with all required details and attach necessary documents."
              },
              {
                step: "3",
                title: "Interaction & Assessment", 
                description: "Student and parent interaction with our faculty to understand learning needs and school expectations."
              },
              {
                step: "4",
                title: "Admission Confirmation",
                description: "Upon selection, complete the admission formalities and fee payment to confirm your child's seat."
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#f05461] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-[#0a1c28] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grade-wise Admissions */}
      <section className="py-20 bg-[#e0e1be]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0a1c28] mb-4">
              Grade-wise <span className="text-[#f05461]">Admissions</span>
            </h2>
            <div className="w-24 h-1 bg-[#f05461] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We offer admissions across all grades with specific criteria for each level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🌱",
                title: "Pre-Primary (Nursery - UKG)",
                ageGroup: "3-5 years",
                focus: "Play-based learning, basic skills development",
                requirements: "Birth certificate, medical records"
              },
              {
                icon: "📚", 
                title: "Primary (Class I - V)",
                ageGroup: "6-10 years",
                focus: "Foundation building, conceptual learning",
                requirements: "Previous school records, assessment"
              },
              {
                icon: "🧮",
                title: "Middle School (Class VI - VIII)", 
                ageGroup: "11-13 years",
                focus: "Subject specialization, critical thinking",
                requirements: "Academic records, entrance test"
              },
              {
                icon: "🎓",
                title: "Secondary (Class IX - X)",
                ageGroup: "14-16 years", 
                focus: "Board preparation, career guidance",
                requirements: "Previous board results, interview"
              }
            ].map((grade, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 text-center">{grade.icon}</div>
                <h3 className="font-semibold text-[#0a1c28] mb-4 text-center">{grade.title}</h3>
                <div className="space-y-2 text-sm">
                  <p><strong className="text-[#0a1c28]">Age Group:</strong> {grade.ageGroup}</p>
                  <p><strong className="text-[#0a1c28]">Focus:</strong> {grade.focus}</p>
                  <p><strong className="text-[#0a1c28]">Requirements:</strong> {grade.requirements}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-[#e0e1be]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0a1c28] mb-4">
              Online <span className="text-[#f05461]">Application</span>
            </h2>
            <div className="w-24 h-1 bg-[#f05461] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Submit your admission application online. Our team will contact you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg">
            {/* Student Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#0a1c28] mb-6 pb-3 border-b-2 border-[#f05461]">
                Student Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#0a1c28] mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="studentFirstName"
                    value={formData.studentFirstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#466a94] focus:ring-2 focus:ring-[#466a94]/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0a1c28] mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="studentLastName"
                    value={formData.studentLastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#466a94] focus:ring-2 focus:ring-[#466a94]/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0a1c28] mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#466a94] focus:ring-2 focus:ring-[#466a94]/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0a1c28] mb-2">
                    Gender *
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#466a94] focus:ring-2 focus:ring-[#466a94]/20 outline-none transition-colors"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0a1c28] mb-2">
                    Grade Applying For *
                  </label>
                  <select
                    name="gradeApplying"
                    value={formData.gradeApplying}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#466a94] focus:ring-2 focus:ring-[#466a94]/20 outline-none transition-colors"
                  >
                    <option value="">Select Grade</option>
                    <option value="nursery">Nursery</option>
                    <option value="lkg">LKG</option>
                    <option value="ukg">UKG</option>
                    <option value="class1">Class I</option>
                    <option value="class2">Class II</option>
                    <option value="class3">Class III</option>
                    <option value="class4">Class IV</option>
                    <option value="class5">Class V</option>
                    <option value="class6">Class VI</option>
                    <option value="class7">Class VII</option>
                    <option value="class8">Class VIII</option>
                    <option value="class9">Class IX</option>
                    <option value="class10">Class X</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0a1c28] mb-2">
                    Previous School (if any)
                  </label>
                  <input
                    type="text"
                    name="previousSchool"
                    value={formData.previousSchool}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#466a94] focus:ring-2 focus:ring-[#466a94]/20 outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Parent Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#0a1c28] mb-6 pb-3 border-b-2 border-[#f05461]">
                Parent/Guardian Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#0a1c28] mb-2">
                    Father's Name *
                  </label>
                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#466a94] focus:ring-2 focus:ring-[#466a94]/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0a1c28] mb-2">
                    Mother's Name *
                  </label>
                  <input
                    type="text"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#466a94] focus:ring-2 focus:ring-[#466a94]/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0a1c28] mb-2">
                    Primary Phone *
                  </label>
                  <input
                    type="tel"
                    name="parentPhone"
                    value={formData.parentPhone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#466a94] focus:ring-2 focus:ring-[#466a94]/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0a1c28] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="parentEmail"
                    value={formData.parentEmail}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#466a94] focus:ring-2 focus:ring-[#466a94]/20 outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#0a1c28] mb-6 pb-3 border-b-2 border-[#f05461]">
                Address Information
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#0a1c28] mb-2">
                    Complete Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#466a94] focus:ring-2 focus:ring-[#466a94]/20 outline-none transition-colors resize-vertical"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#0a1c28] mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#466a94] focus:ring-2 focus:ring-[#466a94]/20 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0a1c28] mb-2">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#466a94] focus:ring-2 focus:ring-[#466a94]/20 outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#0a1c28] mb-6 pb-3 border-b-2 border-[#f05461]">
                Additional Information
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#0a1c28] mb-2">
                    Any Medical Conditions or Allergies
                  </label>
                  <textarea
                    name="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#466a94] focus:ring-2 focus:ring-[#466a94]/20 outline-none transition-colors resize-vertical"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0a1c28] mb-2">
                    Special Requirements or Comments
                  </label>
                  <textarea
                    name="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#466a94] focus:ring-2 focus:ring-[#466a94]/20 outline-none transition-colors resize-vertical"
                  />
                </div>
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="transportRequired"
                    checked={formData.transportRequired}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 text-[#466a94] border-2 border-gray-200 rounded focus:ring-2 focus:ring-[#466a94]/20"
                  />
                  <label className="text-sm text-gray-700">
                    School transport required
                  </label>
                </div>
              </div>
            </div>

            {/* Terms and Submit */}
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-4 h-4 text-[#466a94] border-2 border-gray-200 rounded focus:ring-2 focus:ring-[#466a94]/20"
                />
                <label className="text-sm text-gray-700">
                  I agree to the <span className="text-[#466a94] underline cursor-pointer">terms and conditions</span> and school policies *
                </label>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#f05461] hover:bg-[#e04451] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Submit Application
                </button>
                <p className="text-sm text-gray-600 mt-4">
                  By submitting this form, you consent to SMPS Jhansi contacting you regarding the admission process.
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0a1c28] mb-4">
              Admissions <span className="text-[#f05461]">Contact</span>
            </h2>
            <div className="w-24 h-1 bg-[#f05461] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Have questions about admissions? Our team is here to help you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                title: "Call Us",
                details: ["+91 510 123 4567", "+91 510 765 4321"],
                subtitle: "Mon-Fri: 9 AM - 5 PM"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Email Us",
                details: ["admissions@smpsjhansi.edu.in", "info@smpsjhansi.edu.in"],
                subtitle: "Response within 24 hours"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Visit Us",
                details: ["123 Education Street", "Jhansi, UP 284001"],
                subtitle: "School tours available by appointment"
              }
            ].map((contact, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#466a94] text-white rounded-xl flex items-center justify-center mx-auto mb-4">
                  {contact.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#0a1c28] mb-3">{contact.title}</h3>
                {contact.details.map((detail, dIndex) => (
                  <p key={dIndex} className="text-gray-700 font-medium mb-1">{detail}</p>
                ))}
                <p className="text-sm text-gray-500 mt-2">{contact.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}