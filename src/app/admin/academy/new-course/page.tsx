"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { API_BASE_URL } from '@/app/environment/env';
import { Save, ArrowLeft, Loader2, Image as ImageIcon, Settings, ShieldCheck, Search, LayoutTemplate } from 'lucide-react';
import Link from 'next/link';
import RichTextEditor from '../../_components/RichTextEditor';

export default function NewCourse() {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'general' | 'seo' | 'policies'>('general');

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    summary: '',
    description: '',
    category: '',
    trainingType: 'Public Class',
    deliveryMode: 'Virtual',
    instructor: '',
    language: 'English',
    difficulty: 'Beginner',
    duration: '',
    price: '0',
    visibility: 'Draft',
    accessLevel: 'Public',
    seoTitle: '',
    metaDescription: '',
    canonicalUrl: '',
    ogImage: '',
    noIndex: false,
    sitemapInclude: true,
    registrationDeadlineDays: '',
    cancellationPolicy: '',
    reschedulingRules: '',
    certificateEligibility: '',
    accessExpiryDays: '',
    includedMaterials: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    setFormData(prev => {
      const updated = { ...prev, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value };
      
      // Auto-generate slug from title
      if (name === 'title' && !prev.slug) {
        updated.slug = value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      }
      
      return updated;
    });
  };

  const handleDescriptionChange = (val: string) => {
    setFormData(prev => ({ ...prev, description: val }));
  };

  const handleSubmit = async (visibility: 'Draft' | 'Published') => {
    setIsSaving(true);
    setError(null);
    
    try {
      const payload = {
        id: `CRS-${Date.now()}`,
        ...formData,
        visibility
      };
      
      const token = document.cookie.match(/skker_admin_auth=([^;]+)/)?.[1];

      const res = await fetch(`${API_BASE_URL}/academy/courses`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(payload)
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to save course');
      
      // Redirect based on training type
      if (formData.trainingType === 'Public Class') {
        router.push('/admin/academy/public');
      } else if (formData.trainingType === 'Corporate') {
        router.push('/admin/academy/corporate');
      } else if (formData.trainingType === 'Private') {
        router.push('/admin/academy/private');
      } else {
        router.push('/admin/academy/self-paced');
      }
      
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to create course. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <Link href="/admin/academy" className="text-admin-muted hover:text-admin-text transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-admin-text">Create New Course</h1>
            <p className="text-admin-muted text-sm mt-1">Build a new training program or self-paced course.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button 
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 text-admin-text bg-admin-surface border border-admin-border rounded-lg text-sm font-medium hover:bg-admin-bg transition-colors"
          >
            Cancel
          </button>
          <button 
            type="button"
            onClick={() => handleSubmit('Draft')}
            disabled={isSaving}
            className="flex items-center gap-2 bg-admin-surface border border-admin-border hover:bg-admin-bg text-admin-text px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
          >
            {isSaving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />} 
            Save Draft
          </button>
          <button 
            type="button"
            onClick={() => handleSubmit('Published')}
            disabled={isSaving}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
          >
            {isSaving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />} 
            Publish Now
          </button>
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm font-medium">
          {error}
        </div>
      )}

      {/* Tabs */}
      <div className="flex border-b border-admin-border overflow-x-auto hide-scrollbar">
        <button 
          onClick={() => setActiveTab('general')}
          className={`flex items-center gap-2 px-6 py-3 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${activeTab === 'general' ? 'border-blue-500 text-blue-400' : 'border-transparent text-admin-muted hover:text-admin-text'}`}
        >
          <LayoutTemplate size={16} /> General Info
        </button>
        <button 
          onClick={() => setActiveTab('seo')}
          className={`flex items-center gap-2 px-6 py-3 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${activeTab === 'seo' ? 'border-blue-500 text-blue-400' : 'border-transparent text-admin-muted hover:text-admin-text'}`}
        >
          <Search size={16} /> SEO & Discovery
        </button>
        <button 
          onClick={() => setActiveTab('policies')}
          className={`flex items-center gap-2 px-6 py-3 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${activeTab === 'policies' ? 'border-blue-500 text-blue-400' : 'border-transparent text-admin-muted hover:text-admin-text'}`}
        >
          <ShieldCheck size={16} /> Policies & Access
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* GENERAL TAB */}
          {activeTab === 'general' && (
            <>
              <div className="bg-admin-surface border border-admin-border rounded-xl p-6 space-y-5">
                <h3 className="text-sm font-bold text-admin-text uppercase tracking-wider">General Information</h3>
                
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider">Course Title *</label>
                  <input 
                    required
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="e.g. Masterclass in UX Design"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider">Unique Slug *</label>
                  <input 
                    required
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="e.g. masterclass-in-ux-design"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider">Short Summary</label>
                  <textarea 
                    rows={2}
                    name="summary"
                    value={formData.summary}
                    onChange={handleChange}
                    className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="A brief overview of the course for cards and listings..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider">Full Description</label>
                  <RichTextEditor value={formData.description} onChange={handleDescriptionChange} />
                </div>
              </div>
              
              <div className="bg-admin-surface border border-admin-border rounded-xl p-6 space-y-5">
                <h3 className="text-sm font-bold text-admin-text uppercase tracking-wider">Course Media</h3>
                
                <div className="border-2 border-dashed border-admin-border rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-admin-bg/50 transition-colors cursor-pointer">
                  <ImageIcon size={32} className="text-admin-muted mb-3" />
                  <p className="text-sm font-medium text-admin-text">Upload Featured Image</p>
                  <p className="text-xs text-admin-muted mt-1">Recommended: 1280x720 (16:9) PNG or JPG.</p>
                </div>
              </div>
            </>
          )}

          {/* SEO TAB */}
          {activeTab === 'seo' && (
            <div className="bg-admin-surface border border-admin-border rounded-xl p-6 space-y-5">
              <h3 className="text-sm font-bold text-admin-text uppercase tracking-wider">Search Engine Optimization</h3>
              
              <div className="space-y-2">
                <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider">SEO Meta Title</label>
                <input 
                  name="seoTitle"
                  value={formData.seoTitle}
                  onChange={handleChange}
                  className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500"
                  placeholder="Defaults to Course Title if blank"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider">Meta Description</label>
                <textarea 
                  rows={3}
                  name="metaDescription"
                  value={formData.metaDescription}
                  onChange={handleChange}
                  className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500 resize-none"
                  placeholder="Optimal length is 150-160 characters..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider">Canonical URL</label>
                <input 
                  name="canonicalUrl"
                  value={formData.canonicalUrl}
                  onChange={handleChange}
                  className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500"
                  placeholder="Leave blank to use default course URL"
                />
              </div>

              <div className="flex items-center gap-6 pt-4 border-t border-admin-border">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="checkbox"
                    name="noIndex"
                    checked={formData.noIndex}
                    onChange={handleChange}
                    className="w-4 h-4 rounded border-admin-border bg-admin-bg text-blue-500 focus:ring-blue-500 focus:ring-offset-admin-surface"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-admin-text">No-Index (Hide from Search Engines)</span>
                    <span className="text-xs text-admin-muted">Prevents Google from indexing this page.</span>
                  </div>
                </label>
              </div>
              
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="checkbox"
                    name="sitemapInclude"
                    checked={formData.sitemapInclude}
                    onChange={handleChange}
                    className="w-4 h-4 rounded border-admin-border bg-admin-bg text-blue-500 focus:ring-blue-500 focus:ring-offset-admin-surface"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-admin-text">Include in Sitemap</span>
                    <span className="text-xs text-admin-muted">Add this page to the XML sitemap automatically.</span>
                  </div>
                </label>
              </div>
            </div>
          )}

          {/* POLICIES TAB */}
          {activeTab === 'policies' && (
            <div className="bg-admin-surface border border-admin-border rounded-xl p-6 space-y-5">
              <h3 className="text-sm font-bold text-admin-text uppercase tracking-wider">Course Policies & Access</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider">Registration Deadline (Days Before)</label>
                  <input 
                    type="number"
                    name="registrationDeadlineDays"
                    value={formData.registrationDeadlineDays}
                    onChange={handleChange}
                    className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500"
                    placeholder="e.g. 7"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider">Access Expiry (Days After)</label>
                  <input 
                    type="number"
                    name="accessExpiryDays"
                    value={formData.accessExpiryDays}
                    onChange={handleChange}
                    className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500"
                    placeholder="e.g. 365"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider">Cancellation & Refund Policy</label>
                <textarea 
                  rows={2}
                  name="cancellationPolicy"
                  value={formData.cancellationPolicy}
                  onChange={handleChange}
                  className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500 resize-none"
                  placeholder="Specify cancellation terms..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider">Rescheduling Rules</label>
                <textarea 
                  rows={2}
                  name="reschedulingRules"
                  value={formData.reschedulingRules}
                  onChange={handleChange}
                  className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500 resize-none"
                  placeholder="Specify rescheduling logic..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider">Certificate Eligibility</label>
                <input 
                  name="certificateEligibility"
                  value={formData.certificateEligibility}
                  onChange={handleChange}
                  className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500"
                  placeholder="e.g. 80% attendance required"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider">Included Materials / Benefits</label>
                <textarea 
                  rows={2}
                  name="includedMaterials"
                  value={formData.includedMaterials}
                  onChange={handleChange}
                  className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500 resize-none"
                  placeholder="What comes with this course? (books, software, etc)"
                />
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Controls */}
        <div className="space-y-6">
          {/* Classification */}
          <div className="bg-admin-surface border border-admin-border rounded-xl p-6 space-y-5">
            <h3 className="text-sm font-bold text-admin-text uppercase tracking-wider">Classification</h3>
            
            <div className="space-y-2">
              <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider">Training Type</label>
              <select
                name="trainingType"
                value={formData.trainingType}
                onChange={handleChange}
                className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500 appearance-none"
              >
                <option value="Public Class">Public Class</option>
                <option value="Corporate">Corporate Training</option>
                <option value="Private">Private Training</option>
                <option value="Self-Paced">Self-Paced Course</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider">Category</label>
              <input 
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500"
                placeholder="e.g. Design, Business, Tech"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider">Difficulty Level</label>
              <select
                name="difficulty"
                value={formData.difficulty}
                onChange={handleChange}
                className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500 appearance-none"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="All Levels">All Levels</option>
              </select>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-admin-surface border border-admin-border rounded-xl p-6 space-y-5">
            <h3 className="text-sm font-bold text-admin-text uppercase tracking-wider">Pricing</h3>
            
            <div className="space-y-2">
              <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider">Price (RM)</label>
              <input 
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500"
                placeholder="e.g. 1500"
              />
              <p className="text-[10px] text-admin-muted">Set to 0 for free courses.</p>
            </div>
          </div>

          {/* Publishing */}
          <div className="bg-admin-surface border border-admin-border rounded-xl p-6 space-y-5">
            <h3 className="text-sm font-bold text-admin-text uppercase tracking-wider">Visibility</h3>
            
            <div className="space-y-2">
              <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider">Status</label>
              <select
                name="visibility"
                value={formData.visibility}
                onChange={handleChange}
                className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500 appearance-none"
              >
                <option value="Draft">Draft</option>
                <option value="Scheduled">Scheduled</option>
                <option value="Published">Published</option>
                <option value="Archived">Archived</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider">Access Level</label>
              <select
                name="accessLevel"
                value={formData.accessLevel}
                onChange={handleChange}
                className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500 appearance-none"
              >
                <option value="Public">Public (Anyone can see)</option>
                <option value="Private">Private (Invite only)</option>
                <option value="Unlisted">Unlisted (Link only)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
