"use client";

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { deleteContent, restoreContent } from '@/store/slices/adminSlice';
import { 
  FileText, 
  Search, 
  Filter, 
  Plus, 
  MoreHorizontal,
  Home,
  Layout,
  MessageSquare,
  HelpCircle,
  Shield,
  Search as SearchIcon,
  Globe,
  Clock,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';
import Link from 'next/link';

const sidebarModules = [
  { id: 'global', name: 'Global Header & Footer', icon: Globe },
  { id: 'home', name: 'Homepage', icon: Home },
  { id: 'about', name: 'About Page', icon: FileText },
  { id: 'portfolio', name: 'Portfolio (Case Studies)', icon: Layout },
  { id: 'insights', name: 'Insights (Blog)', icon: MessageSquare },
  { id: 'faq', name: 'FAQ & Support', icon: HelpCircle },
  { id: 'legal', name: 'Legal Pages', icon: Shield },
  { id: 'seo', name: 'Global SEO Defaults', icon: SearchIcon },
  { id: 'trash', name: 'Trash / Archived', icon: Trash2 },
];

const statusStyles: Record<string, string> = {
  'Draft': 'bg-neutral-800 text-neutral-400 border-neutral-700',
  'Scheduled': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'Published': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
};

export default function ContentAdmin() {
  const [activeModule, setActiveModule] = useState('insights');
  const [searchTerm, setSearchTerm] = useState('');
  
  const dispatch = useDispatch();
  const content = useSelector((state: RootState) => state.admin.content);

  const filteredContent = content.filter(c => 
    (activeModule === 'trash' ? c.isDeleted : (!c.isDeleted && c.module === activeModule)) && 
    c.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Sidebar Navigation */}
      <div className="lg:w-64 shrink-0 flex flex-col gap-1 -mx-6 px-6 lg:mx-0 lg:px-0">
        <h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4 px-3 hidden lg:block">Website Modules</h2>
        <div className="flex lg:flex-col gap-2 lg:gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
          {sidebarModules.map((mod) => {
            const Icon = mod.icon;
            const isActive = activeModule === mod.id;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveModule(mod.id)}
                className={`flex items-center gap-2 lg:gap-3 px-3 py-2 lg:py-2.5 rounded-lg text-sm font-medium transition-colors shrink-0 border lg:border-transparent ${
                  isActive 
                    ? 'bg-blue-600/10 text-blue-500 border-blue-500/20 lg:border-transparent' 
                    : 'bg-neutral-900 lg:bg-transparent text-neutral-400 border-neutral-800 hover:bg-neutral-800 hover:text-white'
                }`}
              >
                <Icon size={16} className="lg:w-[18px] lg:h-[18px]" />
                {mod.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              {sidebarModules.find(m => m.id === activeModule)?.name}
            </h1>
            <p className="text-neutral-400 text-sm mt-1">Manage structured content and publish states.</p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full sm:w-auto">
              <Plus size={16} />
              New Entry
            </button>
          </div>
        </div>

        {activeModule === 'insights' ? (
          <div className="space-y-6">
            {/* Filters & Search */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-neutral-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <select className="bg-neutral-950 border border-neutral-800 text-white rounded-lg py-2.5 px-4 text-sm focus:outline-none focus:border-blue-500 w-full sm:w-auto appearance-none pr-8 relative">
                  <option value="">All Statuses</option>
                  <option value="Draft">Draft</option>
                  <option value="Scheduled">Scheduled</option>
                  <option value="Published">Published</option>
                </select>
                <button className="bg-neutral-950 border border-neutral-800 hover:bg-neutral-800 p-2.5 rounded-lg transition-colors flex items-center justify-center text-neutral-400 hover:text-white">
                  <Filter size={18} />
                </button>
              </div>
            </div>

            {/* Content Table */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left whitespace-nowrap">
                  <thead className="text-xs text-neutral-400 uppercase bg-neutral-950/50 border-b border-neutral-800">
                    <tr>
                      <th className="px-6 py-4 font-medium">Title & Author</th>
                      <th className="px-6 py-4 font-medium">Status</th>
                      <th className="px-6 py-4 font-medium">Date (Asia/Kuala_Lumpur)</th>
                      <th className="px-6 py-4 font-medium text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800">
                    {filteredContent.map((item) => (
                      <tr key={item.id} className="hover:bg-neutral-800/50 transition-colors group">
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="font-semibold text-white">{item.title}</span>
                            <div className="flex items-center gap-2 text-neutral-500 text-xs mt-1">
                              <span>{item.author}</span>
                              {item.tags && item.tags.length > 0 && (
                                <>
                                  <span>•</span>
                                  <span>{item.tags.join(', ')}</span>
                                </>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${statusStyles[item.status]}`}>
                            {item.status === 'Scheduled' && <Clock size={10} className="mr-1" />}
                            {item.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-neutral-400 text-xs">
                          {item.date}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity">
                            <button 
                              className="text-neutral-500 hover:text-white p-1.5 rounded transition-colors" 
                              title="Preview"
                            >
                              <Eye size={16} />
                            </button>
                            <button 
                              className="text-neutral-500 hover:text-white p-1.5 rounded transition-colors" 
                              title="Edit"
                            >
                              <Edit size={16} />
                            </button>
                            <button 
                              className="text-neutral-500 hover:text-red-400 p-1.5 rounded transition-colors" 
                              title="Delete"
                              onClick={() => dispatch(deleteContent(item.id))}
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {filteredContent.length === 0 && (
                      <tr>
                        <td colSpan={4} className="px-6 py-8 text-center text-neutral-500">
                          No content entries found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 flex gap-3 text-sm text-blue-400">
              <Shield className="shrink-0 mt-0.5" size={16} />
              <p>
                <strong>Workflow Note:</strong> Content deletion is soft-restricted. Deleting an article will move it to the Trash, where it can be recovered. 
              </p>
            </div>
          </div>
        ) : activeModule === 'trash' ? (
          <div className="space-y-6">
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left whitespace-nowrap">
                  <thead className="text-xs text-neutral-400 uppercase bg-neutral-950/50 border-b border-neutral-800">
                    <tr>
                      <th className="px-6 py-4 font-medium">Title & Author</th>
                      <th className="px-6 py-4 font-medium">Original Module</th>
                      <th className="px-6 py-4 font-medium">Date Deleted</th>
                      <th className="px-6 py-4 font-medium text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800">
                    {filteredContent.map((item) => (
                      <tr key={item.id} className="hover:bg-neutral-800/50 transition-colors group">
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="font-semibold text-neutral-400 line-through">{item.title}</span>
                            <div className="flex items-center gap-2 text-neutral-500 text-xs mt-1">
                              <span>{item.author}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-neutral-400 text-xs uppercase">
                          {item.module}
                        </td>
                        <td className="px-6 py-4 text-neutral-400 text-xs">
                          {item.date}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button 
                            className="text-emerald-500 hover:text-emerald-400 px-3 py-1.5 rounded transition-colors font-medium text-xs border border-emerald-500/20 bg-emerald-500/10 hover:bg-emerald-500/20"
                            onClick={() => dispatch(restoreContent(item.id))}
                          >
                            Restore
                          </button>
                        </td>
                      </tr>
                    ))}
                    {filteredContent.length === 0 && (
                      <tr>
                        <td colSpan={4} className="px-6 py-8 text-center text-neutral-500">
                          Trash is empty.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-12 text-center flex flex-col items-center justify-center">
            <Layout size={48} className="text-neutral-700 mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">Module Not Yet Initialized</h3>
            <p className="text-neutral-400 max-w-sm mb-6 text-sm">
              The {sidebarModules.find(m => m.id === activeModule)?.name} module requires a specific structured schema. 
              Click below to initialize the default schema for this module.
            </p>
            <button className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-sm font-medium transition-colors">
              Initialize Module Schema
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
