/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar, { ActiveTab } from './components/Navbar';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import AccountDeletion from './components/AccountDeletion';
import ContentDeletion from './components/ContentDeletion';
import DataSafetyTable from './components/DataSafetyTable';
import GitHubPagesGuide from './components/GitHubPagesGuide';

export default function App() {
  const [activeTab, setActiveTabState] = useState<ActiveTab>('privacy');

  // Sync with URL Hash or query params for direct links (e.g. /#account-deletion for Google Play reviewer)
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash.replace('#', '');
      const searchParams = new URLSearchParams(window.location.search);
      const tabParam = searchParams.get('tab');

      if (hash === 'account-deletion' || tabParam === 'account-deletion') {
        setActiveTabState('account-deletion');
      } else if (hash === 'content-deletion' || tabParam === 'content-deletion') {
        setActiveTabState('content-deletion');
      } else if (hash === 'data-safety' || tabParam === 'data-safety') {
        setActiveTabState('data-safety');
      } else if (hash === 'github-pages' || tabParam === 'github-pages') {
        setActiveTabState('github-pages');
      } else if (hash === 'privacy' || tabParam === 'privacy') {
        setActiveTabState('privacy');
      }
    };

    handleLocationChange();
    window.addEventListener('hashchange', handleLocationChange);
    return () => window.removeEventListener('hashchange', handleLocationChange);
  }, []);

  const setActiveTab = (tab: ActiveTab) => {
    setActiveTabState(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Institutional Top Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'privacy' && <PrivacyPolicy setActiveTab={setActiveTab} />}
        {activeTab === 'account-deletion' && <AccountDeletion />}
        {activeTab === 'content-deletion' && <ContentDeletion />}
        {activeTab === 'data-safety' && <DataSafetyTable />}
        {activeTab === 'github-pages' && <GitHubPagesGuide />}
      </main>

      {/* Institutional Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
