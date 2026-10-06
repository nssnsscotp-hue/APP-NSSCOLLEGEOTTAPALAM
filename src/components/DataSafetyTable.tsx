import React, { useState } from 'react';
import { 
  Database, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  Copy, 
  Check, 
  AlertCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  FileSpreadsheet
} from 'lucide-react';
import CollegeLogo from './CollegeLogo';

export const DataSafetyTable: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const dataDeclarations = [
    {
      category: 'Personal Info',
      items: [
        { name: 'Name', collected: true, shared: false, ephemeral: false, required: true, purpose: 'App functionality, Account management' },
        { name: 'Email Address', collected: true, shared: false, ephemeral: false, required: true, purpose: 'App functionality, Account management, Communications' },
        { name: 'Phone Number', collected: true, shared: false, ephemeral: false, required: false, purpose: 'App communications, SMS / WhatsApp alerts' },
        { name: 'User IDs (Admission / Reg No)', collected: true, shared: false, ephemeral: false, required: true, purpose: 'Academic identification & timetable mapping' },
      ],
    },
    {
      category: 'Photos and Videos',
      items: [
        { name: 'Photos (Profile / Scans)', collected: true, shared: false, ephemeral: false, required: false, purpose: 'Student profile picture, document attachment in grievance' },
      ],
    },
    {
      category: 'Files and Docs',
      items: [
        { name: 'Files and Docs (PDF/Word)', collected: true, shared: false, ephemeral: false, required: false, purpose: 'Assignment submission, seminar paper upload' },
      ],
    },
    {
      category: 'App Activity & Info',
      items: [
        { name: 'App interactions & logs', collected: true, shared: false, ephemeral: true, required: false, purpose: 'Analytics & crash diagnostics (Google Play)' },
      ],
    },
    {
      category: 'Device or Other IDs',
      items: [
        { name: 'Device / FCM Token', collected: true, shared: false, ephemeral: false, required: true, purpose: 'Push notifications (Exam alerts & circular notices)' },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header Banner */}
      <div className="rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/30 border border-emerald-500/30 p-6 sm:p-8 shadow-xl mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-3">
              <Database className="w-3.5 h-3.5" />
              Google Play Console Compliance Sheet
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Data Safety Declarations
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-1">
              Official Data Safety Questionnaire Answers for NSS College Ottapalam App Submission
            </p>
          </div>
          <CollegeLogo variant="crest" size="md" className="shrink-0" />
        </div>

        <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <Lock className="w-4 h-4" /> Data is Encrypted in Transit (HTTPS)
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <ShieldCheck className="w-4 h-4 text-amber-400" /> Account Deletion Web URL Provided
          </span>
        </div>
      </div>

      {/* Summary Answers for Google Play Console Form */}
      <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 mb-8 space-y-4">
        <h3 className="font-bold text-slate-200 text-sm uppercase tracking-wider flex items-center gap-2">
          <FileSpreadsheet className="w-4 h-4 text-amber-400" />
          Key Google Play Questionnaire Answers
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
            <div className="text-slate-400">Does your app collect or share any user data?</div>
            <div className="text-emerald-400 font-bold text-sm">YES (Collected for Academic App Functionality)</div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
            <div className="text-slate-400">Is all user data encrypted in transit?</div>
            <div className="text-emerald-400 font-bold text-sm">YES (256-bit SSL / HTTPS enforced)</div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
            <div className="text-slate-400">Do you provide a way for users to request data deletion?</div>
            <div className="text-emerald-400 font-bold text-sm">YES (Dedicated Web Portal & In-App Option)</div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
            <div className="text-slate-400">Is data shared with third parties?</div>
            <div className="text-emerald-400 font-bold text-sm">NO (No commercial sale or ad network sharing)</div>
          </div>
        </div>
      </div>

      {/* Detailed Data Type Table */}
      <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-xl mb-8">
        <div className="p-5 border-b border-slate-800 bg-slate-900/60">
          <h3 className="font-bold text-slate-100 text-base">
            Detailed Data Category Breakdown
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Copy and paste directly into Google Play Console's Data Safety form.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-900 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Data Type</th>
                <th className="py-3 px-3 text-center">Collected</th>
                <th className="py-3 px-3 text-center">Shared</th>
                <th className="py-3 px-4">Purpose / Justification</th>
                <th className="py-3 px-3 text-center">Mandatory</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {dataDeclarations.flatMap((group) =>
                group.items.map((item, idx) => (
                  <tr key={`${group.category}-${item.name}`} className="hover:bg-slate-900/40">
                    <td className="py-3 px-4 font-medium text-slate-200">
                      <div>{item.name}</div>
                      <div className="text-[10px] text-slate-500">{group.category}</div>
                    </td>
                    <td className="py-3 px-3 text-center">
                      <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Yes
                      </span>
                    </td>
                    <td className="py-3 px-3 text-center text-slate-400">
                      No
                    </td>
                    <td className="py-3 px-4 text-slate-300">
                      {item.purpose}
                    </td>
                    <td className="py-3 px-3 text-center">
                      {item.required ? (
                        <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] font-semibold">
                          Required
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px]">
                          Optional
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataSafetyTable;
