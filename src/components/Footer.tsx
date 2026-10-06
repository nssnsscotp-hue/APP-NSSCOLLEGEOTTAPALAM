import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, ShieldCheck, Award, Heart } from 'lucide-react';
import CollegeLogo from './CollegeLogo';
import { ActiveTab } from './Navbar';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-12 px-4 sm:px-6 lg:px-8 no-print">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Col 1: Institution Details */}
        <div className="space-y-4">
          <CollegeLogo variant="both" size="md" />
          <p className="text-slate-400 leading-relaxed text-xs">
            A premier institution of higher learning established in 1961 by the Nair Service Society under the visionary leadership of Bharata Kesari Sri. Mannathu Padmanabhan.
          </p>
          <div className="flex items-center gap-2 text-[11px] text-amber-400 font-medium">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Re-accredited with NAAC 'A' Grade</span>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="text-slate-200 font-bold uppercase tracking-wider text-xs mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            App Governance
          </h4>
          <ul className="space-y-2.5">
            <li>
              <button 
                onClick={() => setActiveTab('privacy')} 
                className="hover:text-amber-400 transition cursor-pointer text-left"
              >
                Privacy Policy (App & Web)
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('account-deletion')} 
                className="hover:text-amber-400 transition cursor-pointer text-left text-amber-300 font-medium"
              >
                Request Account Deletion (Google Play)
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('content-deletion')} 
                className="hover:text-amber-400 transition cursor-pointer text-left"
              >
                Request Content Deletion / Removal
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('data-safety')} 
                className="hover:text-amber-400 transition cursor-pointer text-left"
              >
                Play Store Data Safety Declarations
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('github-pages')} 
                className="hover:text-amber-400 transition cursor-pointer text-left text-slate-400"
              >
                GitHub Pages Hosting Setup
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Regulatory Compliance */}
        <div>
          <h4 className="text-slate-200 font-bold uppercase tracking-wider text-xs mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            Compliance & Standards
          </h4>
          <ul className="space-y-2.5 text-slate-400">
            <li className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Google Play User Data & Account Deletion Policy 2026</span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Digital Personal Data Protection Act (DPDP Act 2023)</span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Affiliated to University of Calicut Academic Norms</span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>SSL 256-bit In-Transit Encryption</span>
            </li>
          </ul>
        </div>

        {/* Col 4: Institutional Contact */}
        <div>
          <h4 className="text-slate-200 font-bold uppercase tracking-wider text-xs mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            Contact & Requests
          </h4>
          <div className="space-y-3">
            <div className="flex items-start gap-2.5 text-slate-300">
              <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] text-slate-400">App Support & Data Officer:</span>
                <a 
                  href="mailto:app.nsscollegeottapalam@gmail.com"
                  className="font-mono text-amber-400 hover:underline break-all"
                >
                  app.nsscollegeottapalam@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-slate-300">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <div className="text-[11px] leading-relaxed text-slate-400">
                NSS College Ottapalam,<br />
                Palappuram P.O, Ottapalam,<br />
                Palakkad District, Kerala - 679 103, India
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://nsscollegeottapalam.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-medium"
              >
                <span>Visit nsscollegeottapalam.org</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
        <div>
          © {new Date().getFullYear()} NSS College Ottapalam. Managed by Nair Service Society (NSS). All Rights Reserved.
        </div>
        <div className="flex items-center gap-4">
          <span>Official Institutional Mobile Application Portal</span>
          <span>•</span>
          <span className="text-slate-400">Designed for Direct Push to GitHub & GitHub Pages</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
