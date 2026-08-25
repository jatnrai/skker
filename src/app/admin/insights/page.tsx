"use client";

import { useState } from 'react';
import { Search, Plus, Eye, Edit, Trash2, Tag, BarChart2 } from 'lucide-react';

const DUMMY_INSIGHTS = [
  { id: '1', title: 'The Future of Product Management', author: 'Soon Kiat Ker', status: 'Published', date: '2026-08-20', views: '2.4k', category: 'Product' },
  { id: '2', title: 'Kanban vs Scrum: What to choose?', author: 'Jane Doe', status: 'Published', date: '2026-08-15', views: '1.8k', category: 'Agile' },
  { id: '3', title: 'Navigating Organizational Change', author: 'Soon Kiat Ker', status: 'Draft', date: '-', views: '-', category: 'Org Design' },
  { id: '4', title: 'AI Strategy for Non-Technical Leaders', author: 'Jane Doe', status: 'Published', date: '2026-08-01', views: '5.1k', category: 'AI' },
];

export default function InsightsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = DUMMY_INSIGHTS.filter(i => 
    i.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Insights / Blog</h1>
          <p className="text-neutral-400 text-sm mt-1">Manage articles, thought leadership, and SEO content.</p>
        </div>
        <button className="whitespace-nowrap px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
          <Plus size={16} /> Create Post
        </button>
      </div>

      <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
        <div className="p-4 border-b border-neutral-800 bg-neutral-950/50 flex flex-col sm:flex-row items-center gap-4">
          <div className="relative w-full sm:w-64">
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="bg-neutral-950 border border-neutral-800 text-white rounded-lg py-2 pl-9 pr-4 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search size={16} className="absolute left-3 top-2.5 text-neutral-500" />
          </div>
          <select className="bg-neutral-950 border border-neutral-800 text-white rounded-lg py-2 px-3 text-sm focus:outline-none focus:border-blue-500 appearance-none w-full sm:w-auto">
            <option value="">All Categories</option>
            <option value="Product">Product Management</option>
            <option value="Agile">Agile & Kanban</option>
            <option value="AI">AI Strategy</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left whitespace-nowrap">
            <thead className="text-xs text-neutral-500 uppercase bg-neutral-950/50">
              <tr>
                <th className="px-6 py-4 font-medium">Title & Author</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium text-right">Views</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800">
              {filtered.map((post) => (
                <tr key={post.id} className="hover:bg-neutral-800/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-semibold text-white">{post.title}</span>
                      <span className="text-neutral-500 text-xs mt-0.5">by {post.author}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-neutral-950 border border-neutral-800 rounded text-xs text-neutral-400">
                      <Tag size={10} /> {post.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${
                      post.status === 'Published' 
                        ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' 
                        : 'bg-neutral-800 text-neutral-400 border-neutral-700'
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-neutral-400 text-xs">
                    {post.date}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1 text-neutral-400 text-xs">
                      {post.status === 'Published' && <BarChart2 size={12} />} {post.views}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-neutral-500 hover:text-white p-1.5 rounded transition-colors"><Eye size={16} /></button>
                      <button className="text-neutral-500 hover:text-white p-1.5 rounded transition-colors"><Edit size={16} /></button>
                      <button className="text-neutral-500 hover:text-red-400 p-1.5 rounded transition-colors"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-neutral-500">
                    No articles found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
