"use client";

import { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { API_BASE_URL } from '@/app/environment/env';
import BlogList from './components/BlogList';
import BlogEditor from './components/BlogEditor';

export interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  readTime: string;
  status: string;
  publishDate: string;
  seoTitle: string;
  seoDescription: string;
  canonicalUrl: string;
  ogImage: string;
  indexing: string;
  sitemap: boolean;
}

export default function InsightsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [view, setView] = useState<'list' | 'editor'>('list');
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);

  const fetchBlogs = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/blogs`);
      if (res.ok) {
        const data = await res.json();
        setBlogs(data.blogs || []);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleCreateNew = () => {
    setSelectedBlogId(null);
    setView('editor');
  };

  const handleEdit = (id: string) => {
    setSelectedBlogId(id);
    setView('editor');
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;
    try {
      await fetch(`${API_BASE_URL}/blogs`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: [id] })
      });
      fetchBlogs();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Insights & Articles</h1>
          <p className="text-admin-muted text-sm mt-1">Manage thought leadership, SEO content, and blog posts.</p>
        </div>
        {view === 'list' && (
          <button 
            onClick={handleCreateNew}
            className="whitespace-nowrap px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
          >
            <Plus size={16} /> Create Post
          </button>
        )}
      </div>

      {view === 'list' ? (
        <BlogList 
          blogs={blogs} 
          onEdit={handleEdit} 
          onDelete={handleDelete} 
        />
      ) : (
        <BlogEditor 
          blog={selectedBlogId ? blogs.find(b => b.id === selectedBlogId) : undefined}
          onClose={() => { setView('list'); fetchBlogs(); }}
        />
      )}
    </div>
  );
}
