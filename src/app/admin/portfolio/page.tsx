"use client";

import { useState } from 'react';
import { Plus, Building2, TrendingUp, ArrowUpRight, X, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { addCaseStudy } from '@/store/slices/adminSlice';

export default function PortfolioPage() {
  const dispatch = useDispatch();
  const cases = useSelector((state: RootState) => state.admin.cases);

  const [isAddMode, setIsAddMode] = useState(false);
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);

  // Form state
  const [client, setClient] = useState('');
  const [industry, setIndustry] = useState('');
  const [outcome, setOutcome] = useState('');
  const [focus, setFocus] = useState('');

  const selectedCase = selectedCaseId ? cases.find(c => c.id === selectedCaseId) : null;

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addCaseStudy({
      id: `CAS-${Date.now()}`,
      client,
      industry,
      outcome,
      focus,
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80' // Mock image for testing
    }));
    setIsAddMode(false);
    // Reset
    setClient(''); setIndustry(''); setOutcome(''); setFocus('');
  };

  if (isAddMode) {
    return (
      <div className="space-y-6 max-w-2xl">
        <div className="flex items-center gap-4">
          <button onClick={() => setIsAddMode(false)} className="p-2 hover:bg-admin-surface border border-admin-border rounded-lg text-admin-muted hover:text-admin-text transition-colors">
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Add Case Study</h1>
            <p className="text-admin-muted text-sm mt-1">Create a new portfolio entry.</p>
          </div>
        </div>

        <form onSubmit={handleAddSubmit} className="bg-admin-surface border border-admin-border rounded-xl p-6 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-admin-muted uppercase tracking-wider block mb-2">Client / Company Name</label>
              <input type="text" required value={client} onChange={e => setClient(e.target.value)} className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2 px-3 text-sm focus:outline-none focus:border-blue-500" placeholder="e.g. Acme Corp" />
            </div>
            <div>
              <label className="text-xs font-bold text-admin-muted uppercase tracking-wider block mb-2">Industry</label>
              <input type="text" required value={industry} onChange={e => setIndustry(e.target.value)} className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2 px-3 text-sm focus:outline-none focus:border-blue-500" placeholder="e.g. Finance" />
            </div>
            <div>
              <label className="text-xs font-bold text-admin-muted uppercase tracking-wider block mb-2">Primary Focus</label>
              <input type="text" required value={focus} onChange={e => setFocus(e.target.value)} className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2 px-3 text-sm focus:outline-none focus:border-blue-500" placeholder="e.g. Agile Transformation" />
            </div>
            <div>
              <label className="text-xs font-bold text-admin-muted uppercase tracking-wider block mb-2">Key Outcome</label>
              <input type="text" required value={outcome} onChange={e => setOutcome(e.target.value)} className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2 px-3 text-sm focus:outline-none focus:border-blue-500" placeholder="e.g. +40% Delivery Speed" />
            </div>
          </div>
          
          <div className="pt-4 border-t border-admin-border flex justify-end gap-3">
            <button type="button" onClick={() => setIsAddMode(false)} className="px-4 py-2 text-admin-muted hover:text-admin-text font-medium text-sm transition-colors">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors">Save Case Study</button>
          </div>
        </form>
      </div>
    );
  }

  if (selectedCase) {
    return (
      <div className="space-y-6 max-w-4xl">
        <div className="flex items-center gap-4">
          <button onClick={() => setSelectedCaseId(null)} className="p-2 hover:bg-admin-surface border border-admin-border rounded-lg text-admin-muted hover:text-admin-text transition-colors">
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">{selectedCase.client}</h1>
            <p className="text-admin-muted text-sm mt-1">Case Study Details</p>
          </div>
        </div>

        <div className="bg-admin-surface border border-admin-border rounded-xl overflow-hidden">
          <div className="h-64 relative overflow-hidden bg-admin-bg">
            <Image 
              src={selectedCase.image}
              alt={selectedCase.client}
              fill
              className="object-cover opacity-80"
            />
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-admin-muted uppercase tracking-wider mb-2">Industry</h4>
                  <p className="text-admin-text font-medium flex items-center gap-2"><Building2 size={16} className="text-blue-500" /> {selectedCase.industry}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-admin-muted uppercase tracking-wider mb-2">Focus Area</h4>
                  <p className="text-admin-text font-medium">{selectedCase.focus}</p>
                </div>
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                  <h4 className="text-xs font-bold text-emerald-500 uppercase tracking-wider mb-2">Key Outcome</h4>
                  <p className="text-lg font-bold text-emerald-400 flex items-center gap-2">
                    <TrendingUp size={20} /> {selectedCase.outcome}
                  </p>
                </div>
              </div>
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-lg font-semibold text-admin-text">Project Overview</h3>
                <p className="text-admin-muted text-sm leading-relaxed">
                  This is a simulated detailed view for the case study. In a production environment, this area would contain the full rich-text content, methodology, challenges faced, and detailed metrics of the engagement with {selectedCase.client}.
                </p>
                <div className="pt-6">
                  <button className="px-4 py-2 bg-admin-surface border border-admin-border hover:bg-admin-muted text-admin-text rounded-lg text-sm font-medium transition-colors">
                    Edit Content
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Portfolio & Cases</h1>
          <p className="text-admin-muted text-sm mt-1">Manage client success stories and case studies.</p>
        </div>
        <button onClick={() => setIsAddMode(true)} className="whitespace-nowrap px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
          <Plus size={16} /> New Case Study
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((caseStudy) => (
          <div key={caseStudy.id} onClick={() => setSelectedCaseId(caseStudy.id)} className="bg-admin-surface border border-admin-border rounded-xl overflow-hidden hover:border-admin-primary transition-colors group flex flex-col cursor-pointer">
            <div className="h-48 relative overflow-hidden bg-admin-bg">
              <Image 
                src={caseStudy.image}
                alt={caseStudy.client}
                fill
                className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
              />
              <div className="absolute top-3 right-3 bg-admin-surface/80 backdrop-blur border border-admin-primary text-xs px-2 py-1 rounded text-admin-text flex items-center gap-1">
                <Building2 size={12} /> {caseStudy.industry}
              </div>
            </div>
            
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-admin-text group-hover:text-blue-400 transition-colors">{caseStudy.client}</h3>
              <p className="text-sm text-admin-muted mt-1">{caseStudy.focus}</p>
              
              <div className="mt-6 pt-4 border-t border-admin-border flex items-center justify-between">
                <span className="text-sm font-medium text-emerald-400 flex items-center gap-1.5">
                  <TrendingUp size={16} /> {caseStudy.outcome}
                </span>
                <ArrowUpRight size={16} className="text-admin-muted group-hover:text-admin-text transition-colors" />
              </div>
            </div>
          </div>
        ))}

        {/* Empty State / Add New Card */}
        <button onClick={() => setIsAddMode(true)} className="bg-admin-bg border border-admin-border border-dashed rounded-xl p-5 flex flex-col items-center justify-center h-full hover:border-admin-muted hover:bg-admin-surface transition-colors min-h-[300px] group">
          <div className="w-12 h-12 rounded-full bg-admin-surface group-hover:bg-admin-surface border border-admin-border flex items-center justify-center text-admin-muted transition-colors mb-3">
            <Plus size={24} />
          </div>
          <h3 className="font-medium text-admin-text">Add Case Study</h3>
          <p className="text-xs text-admin-muted mt-1">Showcase your results</p>
        </button>
      </div>
    </div>
  );
}
