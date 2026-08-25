"use client";

import { Upload, Image as ImageIcon, FileText, Search, Trash2, Download } from 'lucide-react';
import Image from 'next/image';

const DUMMY_MEDIA = [
  { id: '1', name: 'skker_logo_light.png', type: 'image/png', size: '1.2 MB', url: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=400&q=80', date: 'Today' },
  { id: '2', name: 'ai_strategy_cover.jpg', type: 'image/jpeg', size: '2.4 MB', url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80', date: 'Yesterday' },
  { id: '3', name: 'kanban_framework_pdf', type: 'application/pdf', size: '4.8 MB', url: '', date: 'Aug 22' },
  { id: '4', name: 'team_workshop_2026.jpg', type: 'image/jpeg', size: '3.1 MB', url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80', date: 'Aug 20' },
  { id: '5', name: 'corporate_deck_v2.pdf', type: 'application/pdf', size: '12.5 MB', url: '', date: 'Aug 15' },
];

export default function MediaPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Media Library</h1>
          <p className="text-neutral-400 text-sm mt-1">Manage global images, documents, and course assets.</p>
        </div>
      </div>

      {/* Upload Zone */}
      <div className="border-2 border-dashed border-neutral-800 rounded-xl bg-neutral-900/50 p-10 flex flex-col items-center justify-center text-center hover:bg-neutral-900 hover:border-neutral-700 transition-colors cursor-pointer group">
        <div className="w-16 h-16 rounded-full bg-neutral-950 flex items-center justify-center text-neutral-400 group-hover:text-blue-500 group-hover:scale-110 transition-all mb-4 shadow-lg shadow-black/50">
          <Upload size={28} />
        </div>
        <h3 className="font-semibold text-white">Click or drag files to upload</h3>
        <p className="text-xs text-neutral-500 mt-2 max-w-sm">Supports JPG, PNG, WEBP, and PDF. Maximum file size 10MB.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-64">
          <input 
            type="text" 
            placeholder="Search media..." 
            className="bg-neutral-950 border border-neutral-800 text-white rounded-lg py-2 pl-9 pr-4 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-full"
          />
          <Search size={16} className="absolute left-3 top-2.5 text-neutral-500" />
        </div>
        <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
          <button className="whitespace-nowrap px-3 py-1.5 bg-neutral-800 text-white rounded-lg text-sm font-medium">All Files</button>
          <button className="whitespace-nowrap px-3 py-1.5 hover:bg-neutral-800 text-neutral-400 hover:text-white rounded-lg text-sm font-medium transition-colors">Images</button>
          <button className="whitespace-nowrap px-3 py-1.5 hover:bg-neutral-800 text-neutral-400 hover:text-white rounded-lg text-sm font-medium transition-colors">Documents</button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {DUMMY_MEDIA.map(file => (
          <div key={file.id} className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden group">
            <div className="aspect-square relative bg-neutral-950 flex items-center justify-center border-b border-neutral-800 overflow-hidden">
              {file.type.includes('image') ? (
                <Image src={file.url} alt={file.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              ) : (
                <FileText size={48} className="text-neutral-700" />
              )}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                <button className="p-2 bg-neutral-800 hover:bg-blue-600 text-white rounded-lg transition-colors shadow-lg">
                  <Download size={16} />
                </button>
                <button className="p-2 bg-neutral-800 hover:bg-red-600 text-white rounded-lg transition-colors shadow-lg">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            <div className="p-3">
              <p className="text-xs font-medium text-white truncate" title={file.name}>{file.name}</p>
              <div className="flex justify-between items-center mt-1 text-[10px] text-neutral-500">
                <span className="uppercase">{file.type.split('/')[1]}</span>
                <span>{file.size}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
