import React, { useState } from 'react';
import { 
  Shield, 
  Search, 
  CheckCircle, 
  FileText, 
  Lock, 
  Eye, 
  Server, 
  Smartphone, 
  AlertCircle, 
  Mail, 
  Download, 
  Copy, 
  Check, 
  UserX, 
  FileX, 
  Clock, 
  Award,
  ChevronRight,
  BookOpen,
  Building,
  GraduationCap
} from 'lucide-react';
import { ActiveTab } from './Navbar';
import CollegeLogo from './CollegeLogo';

interface PrivacyPolicyProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ setActiveTab }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const sections = [
    {
      id: 'introduction',
      title: '1. Introduction & Institutional Scope',
      icon: <Building className="w-5 h-5 text-amber-400" />,
      content: (
        <div className="space-y-3 text-slate-300 leading-relaxed text-sm">
          <p>
            Welcome to the official <strong>NSS College Ottapalam Mobile Application</strong> ("App"), managed and operated by <strong>N.S.S. College, Ottapalam</strong> (Palappuram P.O, Ottapalam, Palakkad District, Kerala - 679103, India), established under the auspices of the <strong>Nair Service Society (NSS)</strong> and affiliated to the <strong>University of Calicut</strong>.
          </p>
          <p>
            This Privacy Policy explains how we collect, process, store, and protect the personal and academic data of registered students, faculty members, administrative staff, parents/guardians, and alumni using our mobile app and associated digital services.
          </p>
          <div className="p-3.5 rounded-lg bg-amber-950/20 border border-amber-500/20 text-amber-300/90 text-xs flex items-start gap-2.5">
            <Award className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
            <div>
              <strong>Institutional Commitment:</strong> NSS College Ottapalam is dedicated to protecting student and staff privacy in accordance with the <em>Digital Personal Data Protection Act (DPDP Act 2023)</em>, UGC / Calicut University guidelines, and Google Play Store Developer Policies.
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'information-collected',
      title: '2. Information We Collect',
      icon: <FileText className="w-5 h-5 text-blue-400" />,
      content: (
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm">
          <p>
            We collect only the minimum necessary data required for institutional operations, academic administration, and student communication:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h4 className="font-semibold text-slate-100 text-xs uppercase tracking-wider mb-2 text-amber-400 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" /> Academic Profile Data
              </h4>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                <li>Student Full Name (as per SSLC / College Roll)</li>
                <li>University Register Number & College Admission Number</li>
                <li>Department, Degree Programme (UG / PG / Ph.D), Semester & Batch</li>
                <li>Official Institution Email ID & Mobile Phone Number</li>
                <li>Parent / Guardian Emergency Contact Details</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h4 className="font-semibold text-slate-100 text-xs uppercase tracking-wider mb-2 text-blue-400 flex items-center gap-1.5">
                <Server className="w-4 h-4" /> Academic & Operational Records
              </h4>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                <li>Subject-wise attendance percentages and duty leave records</li>
                <li>Internal examination marks and progress evaluation reports</li>
                <li>Uploaded student assignments, seminar submissions, or notes</li>
                <li>Library book issue status and fee transaction reference numbers</li>
                <li>Disciplinary and mentor-mentee interaction records</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h4 className="font-semibold text-slate-100 text-xs uppercase tracking-wider mb-2 text-emerald-400 flex items-center gap-1.5">
                <Smartphone className="w-4 h-4" /> Device & Technical Telemetry
              </h4>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                <li>Device Model, Operating System Version (Android / iOS)</li>
                <li>Unique Firebase Cloud Messaging (FCM) Push Notification Token</li>
                <li>App crash diagnostics and performance logs (via Google Play Services)</li>
                <li>Internet Protocol (IP) address during active sessions for security audits</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h4 className="font-semibold text-slate-100 text-xs uppercase tracking-wider mb-2 text-purple-400 flex items-center gap-1.5">
                <Lock className="w-4 h-4" /> User-Uploaded Content
              </h4>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                <li>Student profile photograph for in-app college ID</li>
                <li>PDF documents, certificates, and project submissions</li>
                <li>Feedback, complaints, and student grievance submissions</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'purpose',
      title: '3. Purpose & Lawful Basis for Data Processing',
      icon: <Eye className="w-5 h-5 text-emerald-400" />,
      content: (
        <div className="space-y-3 text-slate-300 leading-relaxed text-sm">
          <p>
            All information collected through the app is used solely for genuine non-commercial academic and administrative functions:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <li className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Timetable, class schedules, and attendance monitoring</span>
            </li>
            <li className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Publishing official exam notifications, circulars, and hall tickets</span>
            </li>
            <li className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Delivering real-time campus alerts, emergency closures & NSS events</span>
            </li>
            <li className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Assignment submission, internal mark verification, and feedback</span>
            </li>
            <li className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Authentication, session security, and unauthorized access prevention</span>
            </li>
            <li className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Statutory reporting to University of Calicut and NAAC authorities</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'device-permissions',
      title: '4. Device Permissions Requested by the App',
      icon: <Smartphone className="w-5 h-5 text-amber-400" />,
      content: (
        <div className="space-y-3 text-slate-300 leading-relaxed text-sm">
          <p>
            The mobile application requests runtime user permission only when strictly necessary for specific functionalities:
          </p>
          <div className="space-y-2.5">
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-start gap-3">
              <div className="p-2 rounded-md bg-amber-500/10 text-amber-400 font-bold text-xs uppercase">
                POST_NOTIFICATIONS
              </div>
              <div className="text-xs">
                <span className="font-semibold text-slate-100 block">Notifications Permission</span>
                <span className="text-slate-400">
                  Used to deliver urgent academic circulars, fee deadlines, exam schedule alterations, and campus alerts. You can disable this anytime in your device settings.
                </span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-start gap-3">
              <div className="p-2 rounded-md bg-blue-500/10 text-blue-400 font-bold text-xs uppercase">
                CAMERA & MEDIA
              </div>
              <div className="text-xs">
                <span className="font-semibold text-slate-100 block">Camera and Photo Library (Scoped Access)</span>
                <span className="text-slate-400">
                  Requested only when a student or teacher chooses to upload their profile avatar, scan an assignment page, or attach a document in leave/grievance submissions. We never access your gallery in the background.
                </span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-start gap-3">
              <div className="p-2 rounded-md bg-emerald-500/10 text-emerald-400 font-bold text-xs uppercase">
                NETWORK_STATE
              </div>
              <div className="text-xs">
                <span className="font-semibold text-slate-100 block">Internet & Network State</span>
                <span className="text-slate-400">
                  Used to sync academic records, verify live attendance, and determine whether the device has active connectivity.
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'data-sharing',
      title: '5. Third-Party Disclosures & No-Commercial-Sale Policy',
      icon: <Shield className="w-5 h-5 text-red-400" />,
      content: (
        <div className="space-y-3 text-slate-300 leading-relaxed text-sm">
          <div className="p-3.5 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            🛡️ Zero Commercial Monetization: We never sell, lease, monetize, or trade student, faculty, or parent personal information to third-party advertisers or data brokers under any circumstances.
          </div>
          <p>
            Data is strictly shared only with authorized institutional partners:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-300">
            <li><strong>University of Calicut:</strong> For enrollment, semester registration, and degree verification as legally mandated.</li>
            <li><strong>Collegiate Education Department, Kerala:</strong> For government scholarships and mandatory compliance audits.</li>
            <li><strong>Cloud Service Providers:</strong> Google Cloud / Firebase for secure database hosting, encrypted backend infrastructure, and push notification transmission under strict confidentiality agreements.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'security-standards',
      title: '6. Data Security & Encryption Standards',
      icon: <Lock className="w-5 h-5 text-emerald-400" />,
      content: (
        <div className="space-y-3 text-slate-300 leading-relaxed text-sm">
          <p>
            We implement comprehensive technical and organizational safeguards to protect your personal data from unauthorized access, accidental alteration, disclosure, or destruction:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
              <div className="font-mono text-amber-400 font-bold text-sm mb-1">TLS 1.3 / HTTPS</div>
              <p className="text-slate-400">All data in transit between the mobile app and server is 256-bit SSL encrypted.</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
              <div className="font-mono text-blue-400 font-bold text-sm mb-1">AES-256 Storage</div>
              <p className="text-slate-400">Sensitive database entries and auth tokens are encrypted at rest with enterprise keys.</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
              <div className="font-mono text-emerald-400 font-bold text-sm mb-1">RBAC Isolation</div>
              <p className="text-slate-400">Strict Role-Based Access Control ensures students cannot access other students' records.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'retention-and-deletion',
      title: '7. Data Retention & Your Rights (Account & Content Deletion)',
      icon: <UserX className="w-5 h-5 text-amber-400" />,
      content: (
        <div className="space-y-3 text-slate-300 leading-relaxed text-sm">
          <p>
            Under Google Play Store Developer policies and the DPDP Act 2023, all users have the right to request deletion of their mobile app account or specific user-uploaded content at any time.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-3">
            <div className="p-4 rounded-xl bg-slate-900 border border-amber-500/30 flex flex-col justify-between">
              <div>
                <h5 className="font-bold text-amber-400 text-sm mb-1 flex items-center gap-1.5">
                  <UserX className="w-4 h-4" /> Account Deletion Policy
                </h5>
                <p className="text-xs text-slate-400 mb-3">
                  Request complete removal of your app account, login credentials, push tokens, and profile data without needing to retain the app installed.
                </p>
              </div>
              <button
                onClick={() => setActiveTab('account-deletion')}
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition cursor-pointer"
              >
                Go to Account Deletion Page
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-blue-500/30 flex flex-col justify-between">
              <div>
                <h5 className="font-bold text-blue-400 text-sm mb-1 flex items-center gap-1.5">
                  <FileX className="w-4 h-4" /> Content Deletion Policy
                </h5>
                <p className="text-xs text-slate-400 mb-3">
                  Request deletion of specific uploaded files, assignments, forum contributions, or profile pictures while keeping your main account active.
                </p>
              </div>
              <button
                onClick={() => setActiveTab('content-deletion')}
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition cursor-pointer"
              >
                Go to Content Deletion Page
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <p className="text-xs text-slate-400 italic">
            * Note: Official statutory university marks and degree audit registers governed by Kerala State University Regulations cannot be expunged via mobile app deletion requests and remain preserved in the college permanent register.
          </p>
        </div>
      ),
    },
    {
      id: 'contact-officer',
      title: '8. Data Grievance Redressal & Contact Information',
      icon: <Mail className="w-5 h-5 text-amber-400" />,
      content: (
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm">
          <p>
            If you have questions, privacy inquiries, or wish to report an issue regarding your data, please contact our designated App Support and Data Privacy Officer directly:
          </p>
          <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 via-amber-950/20 to-slate-900 border border-amber-500/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                  Designated Compliance & Support Email
                </div>
                <div className="text-base sm:text-lg font-mono font-bold text-slate-100 select-all mt-0.5">
                  app.nsscollegeottapalam@gmail.com
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  App Technical Cell, NSS College Ottapalam, Palappuram, Palakkad - 679103
                </div>
              </div>
              <a
                href="mailto:app.nsscollegeottapalam@gmail.com?subject=NSS%20College%20App%20Privacy%20Inquiry"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition shrink-0"
              >
                <Mail className="w-4 h-4" />
                <span>Compose Email</span>
              </a>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const filteredSections = sections.filter((s) =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Official Header Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/40 border border-amber-500/30 p-6 sm:p-8 shadow-xl mb-8">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
              <Shield className="w-3.5 h-3.5" />
              Official Institutional Documentation
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-slate-300 text-sm sm:text-base font-medium max-w-2xl">
              NSS College Ottapalam Mobile Application for Students, Faculty & Campus Community
            </p>
          </div>

          <CollegeLogo variant="crest" size="lg" className="shrink-0 hidden sm:flex" />
        </div>

        {/* Metadata info strip */}
        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-4 h-4 text-amber-400" />
              <strong>Last Updated:</strong> October 2026
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Award className="w-4 h-4 text-amber-400" />
              <strong>Affiliation:</strong> University of Calicut
            </span>
            <span>•</span>
            <span className="text-emerald-400 font-medium">
              Google Play Verified URL
            </span>
          </div>

          <div className="flex items-center gap-2 no-print">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition cursor-pointer"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copiedLink ? 'Copied URL!' : 'Share Policy URL'}</span>
            </button>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 no-print">
        <button
          onClick={() => setActiveTab('account-deletion')}
          className="text-left p-4 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-amber-500/30 hover:border-amber-400 transition cursor-pointer group shadow-sm"
        >
          <div className="flex items-center justify-between mb-2">
            <UserX className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
              Google Play Required
            </span>
          </div>
          <h3 className="font-bold text-slate-100 text-sm mb-1">Account Deletion</h3>
          <p className="text-xs text-slate-400">Request complete account and mobile profile removal.</p>
        </button>

        <button
          onClick={() => setActiveTab('content-deletion')}
          className="text-left p-4 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 hover:border-slate-700 transition cursor-pointer group shadow-sm"
        >
          <div className="flex items-center justify-between mb-2">
            <FileX className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
              User Rights
            </span>
          </div>
          <h3 className="font-bold text-slate-100 text-sm mb-1">Content Deletion</h3>
          <p className="text-xs text-slate-400">Request removal of specific files, assignments, or posts.</p>
        </button>

        <button
          onClick={() => setActiveTab('data-safety')}
          className="text-left p-4 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 hover:border-slate-700 transition cursor-pointer group shadow-sm"
        >
          <div className="flex items-center justify-between mb-2">
            <Shield className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              Console Ready
            </span>
          </div>
          <h3 className="font-bold text-slate-100 text-sm mb-1">Play Store Data Safety</h3>
          <p className="text-xs text-slate-400">Detailed declaration table for app store review.</p>
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-8 no-print">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search privacy topics (e.g., permissions, attendance, encryption, deletion)..."
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
          />
        </div>
      </div>

      {/* Table of Contents for quick navigation */}
      <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 mb-8 no-print">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-amber-400" /> Quick Index
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-xs text-slate-300 hover:text-amber-400 transition truncate flex items-center gap-1.5 py-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60 shrink-0"></span>
              <span className="truncate">{section.title}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Main Sections */}
      <div className="space-y-6">
        {filteredSections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            className="rounded-2xl bg-slate-950 border border-slate-800/90 p-6 sm:p-7 transition-all duration-200 hover:border-slate-700"
          >
            <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-800">
              <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                {section.icon}
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-100">
                {section.title}
              </h2>
            </div>
            <div>{section.content}</div>
          </div>
        ))}

        {filteredSections.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            <AlertCircle className="w-10 h-10 mx-auto text-amber-400 mb-2 opacity-70" />
            <p className="font-semibold text-slate-300">No matching sections found for "{searchQuery}"</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-xs text-amber-400 hover:underline cursor-pointer"
            >
              Clear search filter
            </button>
          </div>
        )}
      </div>

      {/* Institutional Sign-off Certificate */}
      <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-amber-500/30 text-center space-y-4">
        <CollegeLogo variant="crest" size="md" className="mx-auto justify-center" />
        <div className="font-serif-college text-lg font-bold text-amber-400">
          N.S.S. COLLEGE OTTAPALAM
        </div>
        <p className="text-xs text-slate-400 max-w-xl mx-auto">
          Affiliated to the University of Calicut | Managed by Nair Service Society | Re-accredited with NAAC 'A' Grade
        </p>
        <div className="text-[11px] text-slate-500 font-mono">
          Official App Policy Document Ref: NSS-OTP-POL-2026-v2.4 • Effective since App Launch
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
