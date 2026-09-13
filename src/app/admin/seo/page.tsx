"use client";

import { useState } from 'react';
import { Search, Plus, Trash2, ExternalLink, Globe, FileDiff } from 'lucide-react';

const DUMMY_REDIRECTS = [
  { id: '1', old: '/about-us', new: '/company', type: '301 Permanent', status: 'Active', hits: 142 },
  { id: '2', old: '/training/scrum', new: '/academy/agile', type: '301 Permanent', status: 'Active', hits: 89 },
  { id: '3', old: '/promo-2025', new: '/', type: '302 Temporary', status: 'Inactive', hits: 0 },
];

export default function SEOPage() {
  const [activeTab, setActiveTab] = useState<'meta' | 'redirects'>('meta');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">SEO & Redirects</h1>
        <p className="text-admin-muted text-sm mt-1">Manage global meta tags, indexing, and URL redirects.</p>
      </div>

      <div className="flex border-b border-admin-border bg-admin-bg/30 overflow-x-auto whitespace-nowrap no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0">
        {[
          { id: 'meta', label: 'Global SEO Defaults', icon: Globe },
          { id: 'redirects', label: 'URL Redirects', icon: FileDiff },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-4 py-3 border-b-2 font-medium text-sm transition-colors ${
              activeTab === tab.id 
                ? 'border-blue-500 text-blue-500' 
                : 'border-transparent text-admin-muted hover:text-admin-text hover:border-admin-primary'
            }`}
          >
            <tab.icon size={16} /> {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'meta' && (
        <div className="max-w-2xl bg-admin-surface border border-admin-border rounded-xl p-6 space-y-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-admin-text">Default Meta Tags</h3>
            <div className="space-y-2">
              <label className="text-xs font-bold text-admin-muted uppercase tracking-wider">Site Title Format</label>
              <input type="text" defaultValue="%page_title% | SKKER Training" className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2 px-3 text-sm focus:outline-none focus:border-blue-500" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-admin-muted uppercase tracking-wider">Default Description</label>
              <textarea rows={3} defaultValue="Premium corporate training, product management coaching, and agile transformation consulting." className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2 px-3 text-sm focus:outline-none focus:border-blue-500"></textarea>
            </div>
          </div>
          
          <div className="space-y-4 pt-6 border-t border-admin-border">
            <h3 className="font-semibold text-admin-text">Search Engine Indexing</h3>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 rounded bg-admin-bg border-admin-border text-blue-500 focus:ring-blue-500 focus:ring-offset-neutral-900" />
              <span className="text-sm text-admin-text">Allow search engines to index this site (robots.txt)</span>
            </label>
          </div>

          <div className="pt-4 flex justify-end">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors">
              Save SEO Settings
            </button>
          </div>
        </div>
      )}

      {activeTab === 'redirects' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-admin-text">Active Redirects</h3>
            <button className="px-3 py-1.5 bg-admin-surface border border-admin-border hover:bg-admin-muted text-admin-text rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
              <Plus size={14} /> Add Redirect
            </button>
          </div>
          <div className="bg-admin-surface border border-admin-border rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left whitespace-nowrap">
                <thead className="text-xs text-admin-muted uppercase bg-admin-bg border-b border-admin-border">
                  <tr>
                    <th className="px-6 py-4 font-medium">Old URL Path</th>
                    <th className="px-6 py-4 font-medium">Target URL</th>
                    <th className="px-6 py-4 font-medium">Type</th>
                    <th className="px-6 py-4 font-medium">Hits</th>
                    <th className="px-6 py-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-admin-border">
                  {DUMMY_REDIRECTS.map(r => (
                    <tr key={r.id} className="hover:bg-admin-surface border border-admin-border/50 transition-colors">
                      <td className="px-6 py-4 font-mono text-xs text-admin-muted">{r.old}</td>
                      <td className="px-6 py-4 font-mono text-xs text-blue-400 flex items-center gap-1">
                        {r.new} <ExternalLink size={12} />
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2 py-1 bg-admin-bg border border-admin-border rounded text-xs text-admin-muted">
                          {r.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-admin-muted text-xs">{r.hits}</td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-admin-muted hover:text-red-400 p-1.5 rounded transition-colors"><Trash2 size={16} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
