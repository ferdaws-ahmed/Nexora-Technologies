"use client";
import { useState } from "react";
import { X, Upload } from "lucide-react";

export default function ResumeFormModal({ show, setShow }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    resume: null,
    agreeTerms: false,
  });

  const handleFormChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files?.[0] : value,
    }));
  };

  const handleFormSubmit = () => {
    if (
      formData.fullName &&
      formData.email &&
      formData.phone &&
      formData.resume &&
      formData.agreeTerms
    ) {
      console.log("Form submitted:", formData);
      setFormSubmitted(true);

      setTimeout(() => {
        setShow(false);
        setFormSubmitted(false);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          position: "",
          message: "",
          resume: null,
          agreeTerms: false,
        });
      }, 3000);
    } else {
      alert("Please fill in all required fields");
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-slate-800 border border-blue-500/30 rounded-lg w-full max-w-2xl my-8">
        {/* Modal Header */}
        <div className="bg-slate-800 border-b border-blue-500/30 px-6 py-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Submit Your Resume</h2>
          <button
            onClick={() => setShow(false)}
            className="text-gray-400 hover:text-white transition"
          >
            <X size={28} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {!formSubmitted ? (
            <div className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleFormChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-blue-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-blue-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    placeholder="+880 1929-559902"
                    className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-blue-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Interested Position
                </label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-blue-500/20 text-white focus:outline-none focus:border-blue-500 transition"
                >
                  <option value="">Select a position (optional)</option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="other">Other / Not specified</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Upload Resume *
                </label>
                <label
                  htmlFor="resume-upload"
                  className="flex items-center justify-center gap-3 w-full px-4 py-6 rounded-lg bg-slate-700/30 border-2 border-dashed border-blue-500/40 hover:border-blue-500/60 transition cursor-pointer"
                >
                  <Upload size={24} className="text-blue-400" />
                  <div className="text-center">
                    <p className="text-white font-semibold">
                      {formData.resume
                        ? formData.resume.name
                        : "Click to upload"}
                    </p>
                    <p className="text-gray-400 text-sm">
                      PDF, DOC, DOCX (Max 5MB)
                    </p>
                  </div>
                </label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleFormChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  id="resume-upload"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Tell us about yourself..."
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-blue-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition resize-none"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleFormChange}
                  id="agree-terms"
                  className="mt-1 w-4 h-4 accent-blue-600"
                />
                <label htmlFor="agree-terms" className="text-gray-300 text-sm">
                  I agree to NEXORA's privacy policy
                </label>
              </div>

              <button
                onClick={handleFormSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
              >
                Submit Application
              </button>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4 text-green-400">✓</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Application Submitted!
              </h3>
              <p className="text-gray-300">
                Thank you! We'll contact you soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
