import React, { useState } from 'react';
import { 
  Github, 
  Terminal, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles, 
  FileCode, 
  Layers, 
  Play, 
  Globe, 
  ArrowRight
} from 'lucide-react';
import CollegeLogo from './CollegeLogo';

export const GitHubPagesGuide: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyCommand = (cmd: string, idx: number) => {
    navigator.clipboard.writeText(cmd);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const steps = [
    {
      title: 'Step 1: Create a new GitHub Repository',
      description: 'Go to github.com/new and create a new public repository (e.g., named "nss-college-app-privacy").',
      command: '# On GitHub: Click "New repository" -> Name it "nss-college-app-privacy" -> Public',
    },
    {
      title: 'Step 2: Initialize Git and Push to GitHub',
      description: 'Run these commands in your project root terminal to connect and push your code:',
      command: `git init
git add .
git commit -m "Initial commit: NSS College Ottapalam App Legal & Deletion Portal"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/nss-college-app-privacy.git
git push -u origin main`,
    },
    {
      title: 'Step 3: Enable GitHub Pages in 2 Clicks',
      description: 'In your repository on GitHub: Go to Settings -> Pages -> Under "Build and deployment", set Source to "GitHub Actions".',
      command: '# Settings -> Pages -> Source: Select "GitHub Actions"',
    },
    {
      title: 'Step 4: Automated Deployment!',
      description: 'GitHub Actions will automatically run the built-in .github/workflows/deploy.yml, build the Vite app, and host it live at your GitHub Pages URL!',
      command: '# Live URL will be: https://YOUR_USERNAME.github.io/nss-college-app-privacy/',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header Banner */}
      <div className="rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/30 border border-amber-500/30 p-6 sm:p-8 shadow-xl mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
              <Github className="w-3.5 h-3.5" />
              Direct Push Ready • GitHub Pages Configured
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              GitHub Pages Deployment Guide
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-1">
              Everything in this project is pre-configured for direct push to GitHub and zero-config GitHub Pages hosting.
            </p>
          </div>
          <CollegeLogo variant="crest" size="md" className="shrink-0" />
        </div>

        <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <CheckCircle2 className="w-4 h-4" /> Ready for Zero-Config Deployment
          </span>
          <span>•</span>
          <span className="text-slate-300">
            Form submissions route directly to <strong className="text-amber-400 font-mono">app.nsscollegeottapalam@gmail.com</strong>
          </span>
        </div>
      </div>

      {/* Arrangements already made in this codebase */}
      <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 mb-8 space-y-4">
        <h3 className="font-bold text-slate-200 text-sm uppercase tracking-wider flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          Pre-Configured GitHub Pages Arrangements
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Vite Relative Base ('./')</span>
            </div>
            <p className="text-slate-400">
              `base: './'` is configured in `vite.config.ts`, so scripts and CSS paths resolve correctly under any repo sub-path (`username.github.io/repo/`).
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Automated GitHub Actions Workflow</span>
            </div>
            <p className="text-slate-400">
              Created `.github/workflows/deploy.yml` which automatically builds and publishes to GitHub Pages whenever you push to `main`.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>.nojekyll File in Public</span>
            </div>
            <p className="text-slate-400">
              `public/.nojekyll` prevents GitHub Pages' default Jekyll processor from discarding compiled folders.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Client-Side Email Pipeline</span>
            </div>
            <p className="text-slate-400">
              Account and content deletion forms work without a custom backend server, dispatching requests straight to `app.nsscollegeottapalam@gmail.com`.
            </p>
          </div>
        </div>
      </div>

      {/* Step by step terminal instructions */}
      <div className="space-y-6 mb-8">
        <h3 className="font-bold text-slate-200 text-base flex items-center gap-2">
          <Terminal className="w-5 h-5 text-amber-400" />
          Instructions to Push to GitHub
        </h3>

        {steps.map((s, idx) => (
          <div key={idx} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="font-bold text-slate-100 text-sm">{s.title}</h4>
                <p className="text-xs text-slate-400 mt-0.5">{s.description}</p>
              </div>
              <button
                onClick={() => copyCommand(s.command, idx)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition cursor-pointer shrink-0"
              >
                {copiedIndex === idx ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedIndex === idx ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 font-mono text-xs text-amber-300 overflow-x-auto whitespace-pre">
              {s.command}
            </div>
          </div>
        ))}
      </div>

      {/* Links to use in Google Play Console */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-amber-500/30 space-y-4">
        <h3 className="font-bold text-slate-100 text-sm uppercase tracking-wider flex items-center gap-2">
          <Globe className="w-4 h-4 text-amber-400" />
          URLs to Paste into Google Play Console
        </h3>
        <p className="text-xs text-slate-300">
          Once hosted on your GitHub Pages (e.g. <span className="font-mono text-amber-400">https://yourusername.github.io/nss-college-app-privacy/</span>), enter these exact URLs in your Google Play Console:
        </p>

        <div className="space-y-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3">
            <div>
              <span className="text-[11px] text-slate-400 block font-semibold">Google Play "Privacy Policy URL"</span>
              <span className="font-mono text-slate-200 break-all">https://YOUR_USERNAME.github.io/nss-college-app-privacy/</span>
            </div>
            <button
              onClick={() => copyCommand('https://YOUR_USERNAME.github.io/nss-college-app-privacy/', 99)}
              className="p-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer shrink-0"
              title="Copy"
            >
              {copiedIndex === 99 ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3">
            <div>
              <span className="text-[11px] text-slate-400 block font-semibold">Google Play "Account Deletion Web URL" (Data Safety Section)</span>
              <span className="font-mono text-slate-200 break-all">https://YOUR_USERNAME.github.io/nss-college-app-privacy/#account-deletion</span>
            </div>
            <button
              onClick={() => copyCommand('https://YOUR_USERNAME.github.io/nss-college-app-privacy/#account-deletion', 100)}
              className="p-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer shrink-0"
              title="Copy"
            >
              {copiedIndex === 100 ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubPagesGuide;
