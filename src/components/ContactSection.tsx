import React, { useState } from 'react';
import { Mail, Copy, Check, FileText, Send } from 'lucide-react';
import { profileInfo } from '../data/portfolioData';
import { createGmailComposeUrl, openGmailCompose } from '../utils/emailLinks';

interface ContactSectionProps {
  onOpenResumeNotice: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenResumeNotice,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formDrafted, setFormDrafted] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) {
      errors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormDrafted(true);

    // Open directly in Gmail web composer rather than launching desktop client like Outlook
    openGmailCompose(
      profileInfo.email,
      `[Portfolio Inquiry] ${formData.subject}`,
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    );
  };

  const handleCopyDraft = () => {
    const text = `To: ${profileInfo.email}\nSubject: [Portfolio Inquiry] ${formData.subject}\nFrom: ${formData.name} <${formData.email}>\n\n${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF8C00] mb-3">
            <span>Get In Touch</span>
            <span aria-hidden="true">·</span>
            <span>Connect &amp; Collaborate</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight text-balance mb-4">
            Connect with {profileInfo.name}
          </h2>

          <p className="text-base text-zinc-600 leading-relaxed">
            Interested in discussing IT operations, workflow optimization, equipment documentation, or reviewing detailed project case studies? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Information & Links */}
          <div className="lg:col-span-5 space-y-8">
            {/* Email Card */}
            <div className="p-6 rounded-xl border border-zinc-200 bg-zinc-50/70 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-100/80 text-[#FF8C00] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                    Direct Email
                  </span>
                  <a
                    href={createGmailComposeUrl(profileInfo.email, 'Portfolio Inquiry')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-semibold text-zinc-900 hover:text-[#FF8C00] transition-colors break-all block"
                    title="Compose message in Gmail"
                  >
                    {profileInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={createGmailComposeUrl(profileInfo.email, 'Portfolio Inquiry')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#FF8C00] hover:bg-[#E07B00] rounded-md transition-colors inline-flex items-center gap-1.5 shadow-2xs"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open in Gmail</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-4 py-2 text-xs font-semibold text-zinc-700 bg-white hover:bg-zinc-100 border border-zinc-300 rounded-md transition-colors inline-flex items-center gap-1.5"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-500" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Resume Request Action */}
            <div>
              <button
                type="button"
                onClick={onOpenResumeNotice}
                className="w-full text-left flex items-center justify-between p-4 rounded-xl border border-zinc-200 hover:border-zinc-300 bg-white hover:bg-zinc-50/60 transition-colors group shadow-2xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-100 group-hover:bg-orange-50 text-zinc-700 group-hover:text-[#FF8C00] flex items-center justify-center transition-colors">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">
                      Professional Resume
                    </h4>
                    <span className="text-xs text-zinc-500">
                      Request comprehensive operational CV
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#FF8C00] group-hover:translate-x-0.5 transition-transform">
                  Request →
                </span>
              </button>
            </div>

            {/* Quick Note */}
            <div className="p-4 rounded-lg bg-zinc-50 border border-zinc-200 text-xs text-zinc-500 leading-relaxed">
              <span className="font-semibold text-zinc-700 block mb-1">
                Data Privacy &amp; Integrity:
              </span>
              This portfolio does not embed private workplace passwords, employee records, or confidential organization data. All examples are sanitized workflow models.
            </div>
          </div>

          {/* Right Column: Contact Message Composer */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl border border-zinc-200 bg-white shadow-2xs">
              <h3 className="text-lg font-bold text-zinc-900 mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-zinc-500 mb-6">
                Compose your message below to launch your email client with structured inquiry fields, or copy the formatted draft.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label htmlFor="contact-name" className="text-xs font-semibold text-zinc-700">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Ramos"
                      className={`w-full px-3.5 py-2 text-sm bg-white border ${
                        formErrors.name ? 'border-red-400 focus:ring-red-400' : 'border-zinc-300 focus:ring-[#FF8C00]'
                      } rounded-md focus:outline-none focus:ring-1 text-zinc-900`}
                    />
                    {formErrors.name && (
                      <span className="text-xs text-red-600 block">{formErrors.name}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label htmlFor="contact-email" className="text-xs font-semibold text-zinc-700">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className={`w-full px-3.5 py-2 text-sm bg-white border ${
                        formErrors.email ? 'border-red-400 focus:ring-red-400' : 'border-zinc-300 focus:ring-[#FF8C00]'
                      } rounded-md focus:outline-none focus:ring-1 text-zinc-900`}
                    />
                    {formErrors.email && (
                      <span className="text-xs text-red-600 block">{formErrors.email}</span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label htmlFor="contact-subject" className="text-xs font-semibold text-zinc-700">
                    Subject / Discussion Topic <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. IT Operations Inquiry / Workflow Documentation"
                    className={`w-full px-3.5 py-2 text-sm bg-white border ${
                      formErrors.subject ? 'border-red-400 focus:ring-red-400' : 'border-zinc-300 focus:ring-[#FF8C00]'
                    } rounded-md focus:outline-none focus:ring-1 text-zinc-900`}
                  />
                  {formErrors.subject && (
                    <span className="text-xs text-red-600 block">{formErrors.subject}</span>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label htmlFor="contact-message" className="text-xs font-semibold text-zinc-700">
                    Message Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your question, project, or role details..."
                    className={`w-full px-3.5 py-2 text-sm bg-white border ${
                      formErrors.message ? 'border-red-400 focus:ring-red-400' : 'border-zinc-300 focus:ring-[#FF8C00]'
                    } rounded-md focus:outline-none focus:ring-1 text-zinc-900 resize-y`}
                  />
                  {formErrors.message && (
                    <span className="text-xs text-red-600 block">{formErrors.message}</span>
                  )}
                </div>

                {/* Action buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-[#FF8C00] hover:bg-[#E07B00] active:scale-98 rounded-md transition-all inline-flex items-center gap-2 shadow-2xs cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send via Gmail</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyDraft}
                    className="px-4 py-2.5 text-xs font-semibold text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-md transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedDraft ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Draft Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-500" />
                        <span>Copy Message Draft</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {formDrafted && (
                <div className="mt-4 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between">
                  <span>
                    Gmail composer opened in a new tab! If it didn't open automatically, use <strong>Copy Message Draft</strong> and send to {profileInfo.email}.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
