import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";

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
      [name]: type === "checkbox" ? checked : type === "file" ? files?.[0] : value,
    }));
  };

  const handleFormSubmit = () => {
    if (formData.fullName && formData.email && formData.phone && formData.resume && formData.agreeTerms) {
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
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShow(false)}
            className='absolute inset-0 bg-black/80 backdrop-blur-xl'
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className='relative w-full max-w-2xl bg-zinc-900/50 border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden overflow-y-auto max-h-[90vh]'
          >
            {/* Modal Header */}
            <div className='sticky top-0 z-20 bg-zinc-900/80 backdrop-blur-md border-b border-white/5 px-8 py-6 flex items-center justify-between'>
              <div>
                <h2 className='text-2xl font-bold text-white'>Mission Application</h2>
                <p className='text-xs text-gray-500 font-bold uppercase tracking-widest mt-1'>Transmission Portal</p>
              </div>
              <button
                onClick={() => setShow(false)}
                className='w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all'
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className='p-8'>
              {!formSubmitted ? (
                <div className='space-y-8'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='space-y-3'>
                      <label className='text-xs font-bold uppercase tracking-widest text-gray-400 ml-1'>Full Name *</label>
                      <input
                        type='text'
                        name='fullName'
                        value={formData.fullName}
                        onChange={handleFormChange}
                        placeholder='Identity'
                        className='w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-nexora-teal/50 focus:bg-white/10 transition-all text-sm'
                      />
                    </div>
                    <div className='space-y-3'>
                      <label className='text-xs font-bold uppercase tracking-widest text-gray-400 ml-1'>Email Address *</label>
                      <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder='transmission@endpoint.com'
                        className='w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-nexora-teal/50 focus:bg-white/10 transition-all text-sm'
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='space-y-3'>
                      <label className='text-xs font-bold uppercase tracking-widest text-gray-400 ml-1'>Phone Number *</label>
                      <input
                        type='tel'
                        name='phone'
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder='+1 (000) 000-0000'
                        className='w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-nexora-teal/50 focus:bg-white/10 transition-all text-sm'
                      />
                    </div>
                    <div className='space-y-3'>
                      <label className='text-xs font-bold uppercase tracking-widest text-gray-400 ml-1'>Target Node</label>
                      <select
                        name='position'
                        value={formData.position}
                        onChange={handleFormChange}
                        className='w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-nexora-teal/50 focus:bg-white/10 transition-all text-sm appearance-none cursor-pointer'
                      >
                        <option value='' className='bg-zinc-900'>
                          Select trajectory
                        </option>
                        <option value='developer' className='bg-zinc-900'>
                          Engineering
                        </option>
                        <option value='designer' className='bg-zinc-900'>
                          Design
                        </option>
                        <option value='other' className='bg-zinc-900'>
                          Other / General Inquiry
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className='space-y-3'>
                    <label className='text-xs font-bold uppercase tracking-widest text-gray-400 ml-1'>Knowledge Manifest (Resume) *</label>
                    <label
                      htmlFor='resume-upload'
                      className='group/upload relative flex flex-col items-center justify-center gap-4 w-full p-10 rounded-4xl bg-white/2 border-2 border-dashed border-white/10 hover:border-nexora-teal/40 hover:bg-nexora-teal/5 transition-all cursor-pointer overflow-hidden'
                    >
                      <div className='absolute inset-0 bg-nexora-teal/5 opacity-0 group-hover/upload:opacity-100 transition-opacity' />
                      <div className='w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-nexora-teal group-hover/upload:scale-110 group-hover/upload:bg-nexora-teal/10 transition-all'>
                        <Upload size={24} />
                      </div>
                      <div className='text-center relative z-10'>
                        <p className='text-white font-bold mb-1'>{formData.resume ? formData.resume.name : "Link Transmission Data"}</p>
                        <p className='text-[10px] text-gray-500 font-bold uppercase tracking-widest'>PDF / DOC / DOCX — MAX 10MB</p>
                      </div>
                    </label>
                    <input
                      type='file'
                      name='resume'
                      onChange={handleFormChange}
                      accept='.pdf,.doc,.docx'
                      className='hidden'
                      id='resume-upload'
                    />
                  </div>

                  <div className='space-y-3'>
                    <label className='text-xs font-bold uppercase tracking-widest text-gray-400 ml-1'>Mission Briefing</label>
                    <textarea
                      name='message'
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder='Tell us about your technical legacy...'
                      rows='4'
                      className='w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-nexora-teal/50 focus:bg-white/10 transition-all text-sm resize-none'
                    />
                  </div>

                  <div className='flex items-start gap-3 px-1'>
                    <input
                      type='checkbox'
                      name='agreeTerms'
                      checked={formData.agreeTerms}
                      onChange={handleFormChange}
                      id='agree-terms'
                      className='mt-1 w-4 h-4 rounded border-white/10 bg-white/5 text-nexora-teal focus:ring-nexora-teal accent-nexora-teal'
                    />
                    <label htmlFor='agree-terms' className='text-gray-400 text-xs font-medium leading-relaxed'>
                      I acknowledge the terms of the Nexora intelligence protocol and consent to the processing of my data.
                    </label>
                  </div>

                  <button
                    onClick={handleFormSubmit}
                    disabled={!formData.fullName || !formData.email || !formData.phone || !formData.resume || !formData.agreeTerms}
                    className={`group relative w-full py-5 rounded-4xl border border-nexora-teal/20 bg-nexora-teal text-black font-black uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-95 transition-all duration-500 disabled:opacity-20 disabled:grayscale disabled:cursor-not-allowed flex items-center justify-center gap-3 overflow-hidden shadow-2xl`}
                  >
                    <div className='absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500' />
                    Execute Submission
                  </button>
                </div>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className='text-center py-20'>
                  <div className='w-24 h-24 rounded-full bg-nexora-teal/10 border border-nexora-teal/30 flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(30,202,211,0.2)]'>
                    <CheckCircle2 size={48} className='text-nexora-teal' />
                  </div>
                  <h3 className='text-3xl font-bold text-white mb-4'>Submission Successful</h3>
                  <p className='text-gray-400 font-light max-w-sm mx-auto'>
                    Your manifesto has been stored. Our intelligence officers will review your trajectory shortly.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
