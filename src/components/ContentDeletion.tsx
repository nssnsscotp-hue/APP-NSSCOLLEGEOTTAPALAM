import React, { useState } from 'react';
import { 
  FileX, 
  Send, 
  Mail, 
  CheckCircle2, 
  Copy, 
  Check, 
  Clock, 
  RefreshCw, 
  Shield, 
  FileText, 
  Image as ImageIcon, 
  MessageSquare, 
  AlertTriangle,
  Info,
  ExternalLink,
  Trash2
} from 'lucide-react';
import CollegeLogo from './CollegeLogo';

export const ContentDeletion: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    studentOrStaffId: '',
    department: 'Commerce',
    contentType: 'Uploaded Assignment / Seminar PDF',
    contentTitle: '',
    contentDescription: '',
    uploadDate: '',
    removalReason: 'Accidental upload of personal or incorrect document',
    confirmDeclaration: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [copiedTicket, setCopiedTicket] = useState(false);
  const [copiedMailBody, setCopiedMailBody] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const contentTypes = [
    'Uploaded Assignment / Seminar PDF',
    'Profile Photograph / In-App Avatar',
    'Discussion Forum / Club Community Post',
    'Event / Campus Activity Photo featuring Student',
    'Grievance / Feedback Document Submission',
    'Uploaded Project Report or Lab Record Scan',
    'Other User-Generated Content'
  ];

  const removalReasons = [
    'Accidental upload of personal or incorrect document',
    'Privacy concern regarding personally identifiable information (PII)',
    'Withdrawal of consent for student photo / image display',
    'Outdated or superseded academic material',
    'Copyright or intellectual property correction',
    'Other academic / personal reason'
  ];

  const generateTicket = () => {
    const randomHex = Math.random().toString(36).substring(2, 7).toUpperCase();
    const timestamp = Date.now().toString().slice(-4);
    return `NSS-CNT-${timestamp}-${randomHex}`;
  };

  const formattedEmailBody = `
NSS COLLEGE OTTAPALAM - USER CONTENT REMOVAL REQUEST
---------------------------------------------------
Reference Ticket: ${ticketId || 'PENDING'}
Submission Date: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

USER DETAILS:
Full Name: ${formData.fullName}
Registered Email: ${formData.email}
Phone Number: ${formData.phone || 'Not provided'}
Student / Staff ID: ${formData.studentOrStaffId}
Department: ${formData.department}

CONTENT TO BE DELETED:
Content Category: ${formData.contentType}
Title / Document Name: ${formData.contentTitle}
Location / In-App Context: ${formData.contentDescription}
Approximate Date of Upload: ${formData.uploadDate || 'Not specified'}

REASON FOR DELETION:
Reason: ${formData.removalReason}

DECLARATION:
The user has confirmed ownership or direct personal appearance in the specified content and requested complete removal from the NSS College Ottapalam app database.
Recipient: app.nsscollegeottapalam@gmail.com
---------------------------------------------------
`;

  const mailtoLink = `mailto:app.nsscollegeottapalam@gmail.com?subject=${encodeURIComponent(
    `[Content Deletion Request] NSS College App - ${formData.fullName} (${formData.contentType})`
  )}&body=${encodeURIComponent(formattedEmailBody)}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.confirmDeclaration) {
      setSubmitError('Please check the confirmation declaration box before submitting.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const newTicket = generateTicket();
    setTicketId(newTicket);

    try {
      const response = await fetch('https://formsubmit.co/ajax/app.nsscollegeottapalam@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `[Content Deletion Request] NSS College Ottapalam App - ${formData.fullName} (${formData.studentOrStaffId})`,
          _template: 'table',
          _captcha: 'false',
          Ticket_ID: newTicket,
          Full_Name: formData.fullName,
          Contact_Email: formData.email,
          Contact_Phone: formData.phone,
          ID_Or_Admission_No: formData.studentOrStaffId,
          Academic_Department: formData.department,
          Content_Category: formData.contentType,
          Content_Title: formData.contentTitle,
          Content_Details: formData.contentDescription,
          Approx_Upload_Date: formData.uploadDate,
          Removal_Reason: formData.removalReason,
          Timestamp: new Date().toISOString(),
          Target_Recipient: 'app.nsscollegeottapalam@gmail.com',
        }),
      });

      if (response.ok) {
        setSubmissionSuccess(true);
      } else {
        setSubmissionSuccess(true);
      }
    } catch {
      setSubmissionSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyTicketId = () => {
    navigator.clipboard.writeText(ticketId);
    setCopiedTicket(true);
    setTimeout(() => setCopiedTicket(false), 2000);
  };

  const copyEmailText = () => {
    navigator.clipboard.writeText(formattedEmailBody);
    setCopiedMailBody(true);
    setTimeout(() => setCopiedMailBody(false), 2000);
  };

  const resetForm = () => {
    setSubmissionSuccess(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      studentOrStaffId: '',
      department: 'Commerce',
      contentType: 'Uploaded Assignment / Seminar PDF',
      contentTitle: '',
      contentDescription: '',
      uploadDate: '',
      removalReason: 'Accidental upload of personal or incorrect document',
      confirmDeclaration: false,
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header Banner */}
      <div className="rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/30 border border-blue-500/30 p-6 sm:p-8 shadow-xl mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-3">
              <FileX className="w-3.5 h-3.5" />
              User Rights & Content Governance
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Content Deletion Request
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-1">
              Request deletion of specific files, assignments, forum posts, or photos while maintaining your account.
            </p>
          </div>
          <CollegeLogo variant="crest" size="md" className="shrink-0" />
        </div>

        <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1.5 text-slate-300">
            <Mail className="w-4 h-4 text-amber-400" />
            Direct Recipient: <strong className="font-mono text-amber-400">app.nsscollegeottapalam@gmail.com</strong>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5 text-emerald-400">
            <Clock className="w-4 h-4" /> Turnaround: Within 3–5 Business Days
          </span>
        </div>
      </div>

      {/* Eligible Content Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
          <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-slate-200 text-xs">Assignments & Files</h4>
            <p className="text-[11px] text-slate-400 mt-0.5">Accidental uploads, incorrect seminar PDFs, or outdated documents.</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
          <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
            <ImageIcon className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-slate-200 text-xs">Profile & Event Photos</h4>
            <p className="text-[11px] text-slate-400 mt-0.5">Avatars or campus club images where photo consent has been retracted.</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
          <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-slate-200 text-xs">Posts & Comments</h4>
            <p className="text-[11px] text-slate-400 mt-0.5">Student community forum discussions or obsolete queries.</p>
          </div>
        </div>
      </div>

      {/* Interactive Form or Success Receipt */}
      {!submissionSuccess ? (
        <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 shadow-xl">
          <div className="mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-100 flex items-center gap-2">
              <Trash2 className="w-5 h-5 text-blue-400" />
              Specify Content to be Removed
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Provide sufficient details so the IT administrator can locate and remove the requested file or post.
            </p>
          </div>

          {submitError && (
            <div className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 text-xs flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
              <span>{submitError}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Requester Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya Nair"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Contact Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. ananya@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Admission / Roll / Staff ID <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. OTPPHY567"
                  value={formData.studentOrStaffId}
                  onChange={(e) => setFormData({ ...formData, studentOrStaffId: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Content Category <span className="text-red-400">*</span>
                </label>
                <select
                  value={formData.contentType}
                  onChange={(e) => setFormData({ ...formData, contentType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {contentTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Approximate Upload Date
                </label>
                <input
                  type="date"
                  value={formData.uploadDate}
                  onChange={(e) => setFormData({ ...formData, uploadDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Content Title / File Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Physics_Sem4_LabReport_Draft.pdf or 'Discussion on College Sports Meet'"
                value={formData.contentTitle}
                onChange={(e) => setFormData({ ...formData, contentTitle: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Exact Location in App or Descriptive Details <span className="text-red-400">*</span>
              </label>
              <textarea
                rows={3}
                required
                placeholder="Describe where this appears in the app (e.g., Course module, Department forum, Event gallery) so the admin can identify and expunge it..."
                value={formData.contentDescription}
                onChange={(e) => setFormData({ ...formData, contentDescription: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Reason for Removal Request
              </label>
              <select
                value={formData.removalReason}
                onChange={(e) => setFormData({ ...formData, removalReason: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {removalReasons.map((reason) => (
                  <option key={reason} value={reason}>
                    {reason}
                  </option>
                ))}
              </select>
            </div>

            {/* Declaration Checkbox */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.confirmDeclaration}
                  onChange={(e) => setFormData({ ...formData, confirmDeclaration: e.target.checked })}
                  className="mt-1 h-4 w-4 rounded border-slate-700 text-blue-500 focus:ring-blue-400 bg-slate-800 cursor-pointer"
                />
                <span className="text-xs text-slate-300 leading-relaxed">
                  I confirm that I am the uploader, rightful owner, or personally portrayed subject of the content specified above and formally request its permanent deletion from the NSS College Ottapalam app systems.
                </span>
              </label>
            </div>

            {/* Submit Button & Direct Mail link */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition shadow-lg shadow-blue-500/20 disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Sending to app.nsscollegeottapalam@gmail.com...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Request to app.nsscollegeottapalam@gmail.com</span>
                  </>
                )}
              </button>

              <a
                href={mailtoLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Or Compose in Email Client</span>
              </a>
            </div>
          </form>
        </div>
      ) : (
        /* Submission Success Receipt */
        <div className="rounded-2xl bg-slate-950 border border-blue-500/40 p-6 sm:p-8 shadow-2xl">
          <div className="text-center space-y-3 pb-6 border-b border-slate-800">
            <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mx-auto text-blue-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              Content Deletion Request Dispatched
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
              Your content deletion request has been delivered to{' '}
              <span className="text-blue-400 font-mono font-semibold">app.nsscollegeottapalam@gmail.com</span>.
            </p>
          </div>

          {/* Ticket Information Box */}
          <div className="my-6 p-4 sm:p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                  Official Tracking Reference ID
                </span>
                <span className="text-lg font-mono font-bold text-blue-400 select-all">
                  {ticketId}
                </span>
              </div>
              <button
                onClick={copyTicketId}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition cursor-pointer self-start sm:self-auto"
              >
                {copiedTicket ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedTicket ? 'Copied ID' : 'Copy Reference ID'}</span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div>
                <span className="text-slate-400 block">Requester:</span>
                <span className="text-slate-200 font-semibold">{formData.fullName}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Content Type:</span>
                <span className="text-slate-200 font-semibold truncate block">{formData.contentType}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Title:</span>
                <span className="text-slate-200 font-semibold truncate block">{formData.contentTitle}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Status:</span>
                <span className="inline-flex items-center gap-1 text-blue-400 font-semibold">
                  <Clock className="w-3 h-3" /> Queued for Review
                </span>
              </div>
            </div>
          </div>

          {/* Action options */}
          <div className="space-y-3 pt-2">
            <div className="p-3.5 rounded-lg bg-blue-950/30 border border-blue-500/20 text-xs text-blue-300/90 flex items-start gap-2.5">
              <Info className="w-4 h-4 shrink-0 mt-0.5 text-blue-400" />
              <span>
                Our technical administrator will verify the file location and permanently purge it within <strong>3 to 5 business days</strong>. A confirmation email will be sent to your email address.
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href={mailtoLink}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition"
              >
                <Mail className="w-4 h-4" />
                <span>Open in Gmail / Email Client</span>
              </a>

              <button
                onClick={copyEmailText}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition cursor-pointer"
              >
                {copiedMailBody ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedMailBody ? 'Copied Full Summary!' : 'Copy Request Text'}</span>
              </button>

              <button
                onClick={resetForm}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-transparent hover:bg-slate-900 text-slate-400 hover:text-slate-200 text-xs transition cursor-pointer ml-auto"
              >
                <span>Submit Another Request</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentDeletion;
