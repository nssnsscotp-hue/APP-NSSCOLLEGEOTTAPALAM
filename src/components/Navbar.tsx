import React, { useState } from 'react';
import { 
  Shield, 
  UserX, 
  FileX, 
  Database, 
  Github, 
  Printer, 
  Menu, 
  X, 
  Mail, 
  ExternalLink,
  Award,
  CheckCircle2
} from 'lucide-react';
import CollegeLogo from './CollegeLogo';

export type ActiveTab = 'privacy' | 'account-deletion' | 'content-deletion' | 'data-safety' | 'github-pages';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ActiveTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'privacy', label: 'Privacy Policy', icon: <Shield className="w-4 h-4" /> },
    { id: 'account-deletion', label: 'Account Deletion', icon: <UserX className="w-4 h-4" />, badge: 'Mandatory' },
    { id: 'content-deletion', label: 'Content Deletion', icon: <FileX className="w-4 h-4" /> },
    { id: 'data-safety', label: 'Play Store Data Safety', icon: <Database className="w-4 h-4" /> },
    { id: 'github-pages', label: 'GitHub Host Guide', icon: <Github className="w-4 h-4" />, badge: 'Host' },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 text-slate-100 no-print">
      {/* Top institutional strip */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800/80 px-4 py-1.5 text-[11px] sm:text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-amber-400 font-semibold">
              <Award className="w-3.5 h-3.5" />
              Nair Service Society Management
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="hidden sm:inline text-slate-400">Palakkad District, Kerala, India</span>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href="mailto:app.nsscollegeottapalam@gmail.com"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3 h-3 text-amber-400" />
              <span className="font-mono">app.nsscollegeottapalam@gmail.com</span>
            </a>
            <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[10px] font-medium">
              <CheckCircle2 className="w-3 h-3" />
              Google Play 2026 Compliant
            </span>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & College Identity */}
          <div 
            className="flex items-center gap-3 cursor-pointer py-2"
            onClick={() => setActiveTab('privacy')}
          >
            <CollegeLogo variant="both" size="md" />
            <div className="sm:hidden flex flex-col">
              <span className="text-xs text-slate-400 font-medium">Official Mobile App</span>
              <span className="text-xs text-amber-400 font-semibold">Legal & Data Portal</span>
            </div>
          </div>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge && !isActive && (
                    <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-800 text-amber-400 border border-amber-500/20 font-semibold">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Quick Actions (Print & Official Site) */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="Print or Save PDF"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-amber-400" />
              <span>Print / PDF</span>
            </button>
            <a
              href="https://nsscollegeottapalam.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-amber-400 bg-amber-950/30 hover:bg-amber-950/60 border border-amber-500/30 transition cursor-pointer"
            >
              <span>College Web</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700"
              title="Print Page"
            >
              <Printer className="w-4 h-4 text-amber-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white bg-slate-800/80 border border-slate-700 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950/98 px-4 pt-3 pb-5 space-y-1.5">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-slate-950 text-amber-400' : 'bg-slate-800 text-amber-400'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
          
          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
            <a
              href="mailto:app.nsscollegeottapalam@gmail.com"
              className="text-xs text-amber-400 hover:underline flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              app.nsscollegeottapalam@gmail.com
            </a>
            <a
              href="https://nsscollegeottapalam.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1"
            >
              Main Site <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
