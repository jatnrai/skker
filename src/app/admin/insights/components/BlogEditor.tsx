import { useState } from 'react';
import { ArrowLeft, Save, Globe } from 'lucide-react';
import { API_BASE_URL } from '@/app/environment/env';
import type { Blog } from '../page';
import RichTextEditor from '@/app/admin/_components/RichTextEditor';

export default function BlogEditor({ blog, onClose }: { blog?: Blog, onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<'content' | 'seo'>('content');
  const [formData, setFormData] = useState<Partial<Blog>>(blog || {
    title: '', slug: '', author: '', category: '', status: 'Draft', content: '', 
    seoTitle: '', seoDescription: '', canonicalUrl: '', ogImage: '', indexing: 'index', sitemap: true
  });
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    if (!formData.title || !formData.slug) {
      alert("Title and Slug are required.");
      return;
    }
    setIsSaving(true);
    try {
      const url = blog ? `${API_BASE_URL}/blogs/${blog.id}` : `${API_BASE_URL}/blogs`;
      const method = blog ? 'PUT' : 'POST';
      const payload = blog ? formData : { ...formData, id: `BLG-${Date.now()}` };

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        onClose();
      } else {
        const error = await res.json();
        alert(error.error || "Failed to save blog post.");
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
          <h2 className="text-lg font-semibold text-admin-text">{blog ? 'Edit Article' : 'Create Article'}</h2>
        </div>
        <div className="flex items-center gap-3">
          <select 
            value={formData.status}
            onChange={(e) => setFormData({...formData, status: e.target.value})}
            className="bg-admin-surface border border-admin-border text-admin-text rounded-lg py-2 px-3 text-sm focus:outline-none"
          >
            <option value="Draft">Draft</option>
            <option value="Published">Published</option>
            <option value="Scheduled">Scheduled</option>
            <option value="Archived">Archived</option>
          </select>
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white px-4 py-2 rounded-lg text-sm font-medium"
          >
            <Save size={16} /> {isSaving ? 'Saving...' : 'Save Post'}
          </button>
        </div>
      </div>

      <div className="flex border-b border-admin-border px-6 shrink-0 bg-admin-bg/30">
        <button
          onClick={() => setActiveTab('content')}
          className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'content' ? 'border-blue-500 text-blue-400' : 'border-transparent text-admin-muted hover:text-admin-text'}`}
        >
          Content & Details
        </button>
        <button
          onClick={() => setActiveTab('seo')}
          className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'seo' ? 'border-blue-500 text-blue-400' : 'border-transparent text-admin-muted hover:text-admin-text'}`}
        >
          <Globe size={16} /> SEO & Metadata
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 bg-admin-bg/20">
        {activeTab === 'content' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2 sm:col-span-2">
                <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider block">Post Title *</label>
                <input 
                  type="text" 
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full bg-admin-surface border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:border-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider block">URL Slug *</label>
                <input 
                  type="text" 
                  value={formData.slug}
                  onChange={(e) => setFormData({...formData, slug: e.target.value})}
                  className="w-full bg-admin-surface border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:border-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider block">Author</label>
                <input 
                  type="text" 
                  value={formData.author}
                  onChange={(e) => setFormData({...formData, author: e.target.value})}
                  className="w-full bg-admin-surface border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:border-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider block">Category</label>
                <input 
                  type="text" 
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full bg-admin-surface border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:border-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider block">Publish Date (if Scheduled/Published)</label>
                <input 
                  type="datetime-local" 
                  value={formData.publishDate ? new Date(formData.publishDate).toISOString().slice(0, 16) : ''}
                  onChange={(e) => setFormData({...formData, publishDate: e.target.value})}
                  className="w-full bg-admin-surface border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:border-blue-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider block">Article Content</label>
              <div className="bg-white rounded-lg overflow-hidden border border-admin-border text-black">
                <RichTextEditor 
                  value={formData.content || ''}
                  onChange={(val) => setFormData({...formData, content: val})}
                  placeholder="Write your article here..."
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'seo' && (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider block">SEO Title (Optional)</label>
              <input 
                type="text" 
                value={formData.seoTitle || ''}
                onChange={(e) => setFormData({...formData, seoTitle: e.target.value})}
                placeholder="Defaults to Post Title if empty"
                className="w-full bg-admin-surface border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:border-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider block">Meta Description</label>
              <textarea 
                rows={3}
                value={formData.seoDescription || ''}
                onChange={(e) => setFormData({...formData, seoDescription: e.target.value})}
                className="w-full bg-admin-surface border border-admin-border text-admin-text rounded-lg p-3 text-sm focus:border-blue-500 resize-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider block">Canonical URL</label>
              <input 
                type="text" 
                value={formData.canonicalUrl || ''}
                onChange={(e) => setFormData({...formData, canonicalUrl: e.target.value})}
                placeholder="https://..."
                className="w-full bg-admin-surface border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:border-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider block">Open Graph (OG) Image URL</label>
              <input 
                type="text" 
                value={formData.ogImage || ''}
                onChange={(e) => setFormData({...formData, ogImage: e.target.value})}
                placeholder="https://..."
                className="w-full bg-admin-surface border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:border-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-admin-border">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider block">Search Engine Indexing</label>
                <select 
                  value={formData.indexing || 'index'}
                  onChange={(e) => setFormData({...formData, indexing: e.target.value})}
                  className="w-full bg-admin-surface border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:border-blue-500"
                >
                  <option value="index">Index (Allow search engines)</option>
                  <option value="noindex">Noindex (Hide from search engines)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider block">Sitemap Inclusion</label>
                <label className="flex items-center gap-2 mt-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={formData.sitemap !== false}
                    onChange={(e) => setFormData({...formData, sitemap: e.target.checked})}
                    className="w-4 h-4 rounded border-admin-primary bg-admin-surface border border-admin-border text-blue-500 focus:ring-blue-500/20"
                  />
                  <span className="text-sm text-admin-text">Include in sitemap.xml</span>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
