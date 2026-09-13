import { useState } from 'react';
import { ArrowLeft, Save, Globe } from 'lucide-react';
import { API_BASE_URL } from '@/app/environment/env';
import type { CaseStudy } from '../page';
import RichTextEditor from '@/app/admin/_components/RichTextEditor';

export default function CaseStudyEditor({ caseStudy, onClose }: { caseStudy?: CaseStudy, onClose: () => void }) {
  const [formData, setFormData] = useState<Partial<CaseStudy>>(caseStudy || {
    client: '', industry: '', challenge: '', solution: '', results: '', 
    testimonial: '', date: '', clientLogo: '', anonymiseIdentity: false, status: 'Draft'
  });
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    if (!formData.client || !formData.industry) {
      alert("Client Name and Industry are required.");
      return;
    }
    setIsSaving(true);
    try {
      const url = caseStudy ? `${API_BASE_URL}/portfolio/cases/${caseStudy.id}` : `${API_BASE_URL}/portfolio/cases`;
      const method = caseStudy ? 'PUT' : 'POST';
      const payload = caseStudy ? formData : { ...formData, id: `CAS-${Date.now()}` };

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        onClose();
      } else {
        const error = await res.json();
        alert(error.error || "Failed to save case study.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="bg-admin-surface border border-admin-border rounded-xl flex flex-col min-h-[700px]">
      <div className="p-4 border-b border-admin-border flex justify-between items-center bg-admin-bg shrink-0">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="p-2 text-admin-muted hover:text-admin-text bg-admin-surface rounded-lg border border-admin-border"><ArrowLeft size={16}/></button>
          <h2 className="text-lg font-semibold text-admin-text">{caseStudy ? 'Edit Case Study' : 'Create Case Study'}</h2>
        </div>
        <div className="flex items-center gap-3">
          <select 
            value={formData.status}
            onChange={(e) => setFormData({...formData, status: e.target.value})}
            className="bg-admin-surface border border-admin-border text-admin-text rounded-lg py-2 px-3 text-sm focus:outline-none"
          >
            <option value="Draft">Draft</option>
            <option value="Published">Published</option>
          </select>
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white px-4 py-2 rounded-lg text-sm font-medium"
          >
            <Save size={16} /> {isSaving ? 'Saving...' : 'Save Case Study'}
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 bg-admin-bg/20">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg flex items-start gap-3">
            <Globe size={18} className="text-blue-400 shrink-0 mt-0.5" />
            <div className="text-sm">
              <h4 className="text-blue-400 font-bold mb-1">Confidentiality Notice</h4>
              <p className="text-admin-muted">If this engagement is under NDA, use the Anonymise toggle to hide the true client identity from the public portfolio.</p>
              <label className="flex items-center gap-2 mt-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={formData.anonymiseIdentity || false}
                  onChange={(e) => setFormData({...formData, anonymiseIdentity: e.target.checked})}
                  className="w-4 h-4 rounded border-admin-primary bg-admin-surface border border-admin-border text-blue-500 focus:ring-blue-500/20"
                />
                <span className="text-sm font-medium text-admin-text">Anonymise Client Identity (Show as "Confidential Client in {formData.industry || 'Industry'}")</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider block">Client Name *</label>
              <input 
                type="text" 
                value={formData.client}
                onChange={(e) => setFormData({...formData, client: e.target.value})}
                className="w-full bg-admin-surface border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:border-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider block">Industry *</label>
              <input 
                type="text" 
                value={formData.industry}
                onChange={(e) => setFormData({...formData, industry: e.target.value})}
                className="w-full bg-admin-surface border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:border-blue-500"
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider block">Client Logo URL</label>
              <input 
                type="text" 
                value={formData.clientLogo || ''}
                onChange={(e) => setFormData({...formData, clientLogo: e.target.value})}
                placeholder="https://..."
                className="w-full bg-admin-surface border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:border-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider block">Engagement Date</label>
              <input 
                type="date" 
                value={formData.date ? formData.date.split('T')[0] : ''}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full bg-admin-surface border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:border-blue-500"
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider block">Key Results (Quantitative/Qualitative)</label>
              <input 
                type="text" 
                value={formData.results || ''}
                onChange={(e) => setFormData({...formData, results: e.target.value})}
                placeholder="e.g. +40% Delivery Speed, Reduced silos by 60%"
                className="w-full bg-admin-surface border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:border-blue-500"
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider block">Challenge / Problem Statement</label>
              <textarea 
                rows={3}
                value={formData.challenge || ''}
                onChange={(e) => setFormData({...formData, challenge: e.target.value})}
                className="w-full bg-admin-surface border border-admin-border text-admin-text rounded-lg p-3 text-sm focus:border-blue-500 resize-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider block">Solution & Approach</label>
            <div className="bg-white rounded-lg overflow-hidden border border-admin-border text-black">
              <RichTextEditor 
                value={formData.solution || ''}
                onChange={(val) => setFormData({...formData, solution: val})}
                placeholder="Detail the methodology and steps taken..."
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider block">Client Testimonial</label>
            <textarea 
              rows={3}
              value={formData.testimonial || ''}
              onChange={(e) => setFormData({...formData, testimonial: e.target.value})}
              placeholder='"The training completely transformed our team..."'
              className="w-full bg-admin-surface border border-admin-border text-admin-text rounded-lg p-3 text-sm focus:border-blue-500 resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
