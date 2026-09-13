import { useState } from 'react';
import { Search, Edit, Trash2, Tag, Calendar, Globe } from 'lucide-react';
import type { Blog } from '../page';

export default function BlogList({ blogs, onEdit, onDelete }: { blogs: Blog[], onEdit: (id: string) => void, onDelete: (id: string) => void }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const filtered = blogs.filter(b => {
    const matchesSearch = b.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === '' || b.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="bg-admin-surface border border-admin-border rounded-xl overflow-hidden flex flex-col">
      <div className="p-4 border-b border-admin-border bg-admin-bg flex flex-col sm:flex-row items-center gap-4 shrink-0">
        <div className="relative w-full sm:w-64">
          <input 
            type="text" 
            placeholder="Search articles..." 
            className="bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2 pl-9 pr-4 text-sm focus:outline-none focus:border-blue-500 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search size={16} className="absolute left-3 top-2.5 text-admin-muted" />
        </div>
        <select 
          className="bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2 px-3 text-sm focus:outline-none focus:border-blue-500 appearance-none w-full sm:w-auto"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="Draft">Draft</option>
          <option value="Published">Published</option>
          <option value="Scheduled">Scheduled</option>
          <option value="Archived">Archived</option>
        </select>
      </div>

      <div className="overflow-x-auto min-h-[500px]">
        <table className="w-full text-sm text-left whitespace-nowrap">
          <thead className="text-xs text-admin-muted uppercase bg-admin-bg border-b border-admin-border">
            <tr>
              <th className="px-6 py-4 font-medium">Title & Author</th>
              <th className="px-6 py-4 font-medium">Category</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Publish Date</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-admin-border">
            {filtered.map((post) => (
              <tr key={post.id} className="hover:bg-admin-surface border border-admin-border/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="font-semibold text-admin-text">{post.title}</span>
                    <span className="text-admin-muted text-xs mt-0.5">by {post.author || 'Unknown'}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-admin-bg border border-admin-border rounded text-xs text-admin-muted">
                    <Tag size={10} /> {post.category || 'Uncategorized'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${
                    post.status === 'Published' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                    post.status === 'Draft' ? 'bg-admin-surface border border-admin-border text-admin-muted border-admin-primary' :
                    post.status === 'Scheduled' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                    'bg-neutral-800 text-neutral-400 border-neutral-700'
                  }`}>
                    {post.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-admin-muted text-xs">
                  {post.publishDate ? new Date(post.publishDate).toLocaleDateString() : '-'}
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => onEdit(post.id)} className="text-admin-muted hover:text-admin-text p-1.5 rounded transition-colors" title="Edit"><Edit size={16} /></button>
                    <button onClick={() => onDelete(post.id)} className="text-admin-muted hover:text-red-400 p-1.5 rounded transition-colors" title="Delete"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-admin-muted">No articles found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
