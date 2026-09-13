"use client";

import { useState, useEffect } from 'react';
import { Plus, Building2, TrendingUp, ArrowUpRight, Shield, Edit, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { API_BASE_URL } from '@/app/environment/env';
import CaseStudyEditor from './components/CaseStudyEditor';

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  testimonial: string;
  date: string;
  tags: string[];
  clientLogo: string;
  anonymiseIdentity: boolean;
  status: string;
}

export default function PortfolioPage() {
  const [cases, setCases] = useState<CaseStudy[]>([]);
  const [view, setView] = useState<'list' | 'editor'>('list');
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);

  const fetchCases = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/portfolio/cases`);
      if (res.ok) {
        const data = await res.json();
        setCases(data.cases || []);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCases();
  }, []);

  const handleCreateNew = () => {
    setSelectedCaseId(null);
    setView('editor');
  };

  const handleEdit = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedCaseId(id);
    setView('editor');
  };

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm('Are you sure you want to delete this case study?')) return;
    try {
      await fetch(`${API_BASE_URL}/portfolio/cases`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: [id] })
      });
      fetchCases();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Portfolio & Cases</h1>
          <p className="text-admin-muted text-sm mt-1">Manage client success stories and case studies.</p>
        </div>
        {view === 'list' && (
          <button onClick={handleCreateNew} className="whitespace-nowrap px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
            <Plus size={16} /> New Case Study
          </button>
        )}
      </div>

      {view === 'list' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseStudy) => (
            <div key={caseStudy.id} onClick={(e) => handleEdit(caseStudy.id, e)} className="bg-admin-surface border border-admin-border rounded-xl overflow-hidden hover:border-admin-primary transition-colors group flex flex-col cursor-pointer relative">
              <div className="h-48 relative overflow-hidden bg-admin-bg flex items-center justify-center p-8">
                {caseStudy.clientLogo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={caseStudy.clientLogo} alt="Logo" className="max-h-full max-w-full object-contain" />
                ) : (
                  <Building2 size={48} className="text-admin-muted opacity-30" />
                )}
                {caseStudy.anonymiseIdentity && (
                  <div className="absolute top-3 left-3 bg-red-500/90 text-white text-[10px] font-bold uppercase px-2 py-1 rounded flex items-center gap-1 shadow">
                    <Shield size={10} /> Anonymised
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-admin-surface/80 backdrop-blur border border-admin-border text-[10px] uppercase font-bold px-2 py-1 rounded text-admin-text flex items-center gap-1">
                  {caseStudy.status}
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-1 relative">
                <h3 className="text-lg font-semibold text-admin-text group-hover:text-blue-400 transition-colors line-clamp-1">
                  {caseStudy.anonymiseIdentity ? `Confidential Client in ${caseStudy.industry}` : caseStudy.client}
                </h3>
                <p className="text-sm text-admin-muted mt-1">{caseStudy.industry}</p>
                
                <div className="mt-6 pt-4 border-t border-admin-border flex items-center justify-between">
                  <span className="text-sm font-medium text-emerald-400 flex items-center gap-1.5 line-clamp-1">
                    <TrendingUp size={16} className="shrink-0" /> {caseStudy.results || 'Pending Results'}
                  </span>
                  
                  <div className="flex gap-2">
                    <button onClick={(e) => handleDelete(caseStudy.id, e)} className="text-admin-muted hover:text-red-400 p-1.5 rounded transition-colors opacity-0 group-hover:opacity-100" title="Delete">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Empty State / Add New Card */}
          <button onClick={handleCreateNew} className="bg-admin-bg border border-admin-border border-dashed rounded-xl p-5 flex flex-col items-center justify-center h-full hover:border-admin-muted hover:bg-admin-surface transition-colors min-h-[300px] group">
            <div className="w-12 h-12 rounded-full bg-admin-surface group-hover:bg-admin-surface border border-admin-border flex items-center justify-center text-admin-muted transition-colors mb-3">
              <Plus size={24} />
            </div>
            <h3 className="font-medium text-admin-text">Add Case Study</h3>
            <p className="text-xs text-admin-muted mt-1">Showcase your results</p>
          </button>
        </div>
      ) : (
        <CaseStudyEditor 
          caseStudy={selectedCaseId ? cases.find(c => c.id === selectedCaseId) : undefined}
          onClose={() => { setView('list'); fetchCases(); }}
        />
      )}
    </div>
  );
}
