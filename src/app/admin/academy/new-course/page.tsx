"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { ArrowLeft, Save, HelpCircle } from 'lucide-react';
import { addCourse } from '@/store/slices/adminSlice';

export default function NewCourse() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [type, setType] = useState('Public');
  const [price, setPrice] = useState('');

  const handlePublish = () => {
    if (!title) return;
    dispatch(addCourse({
      id: `CRS-${Math.floor(Math.random() * 1000)}`,
      title,
      type,
      status: 'Published',
      sessions: 0,
      learners: 0,
      price: `RM ${price || '0'}`
    }));
    router.push('/admin/academy');
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/academy" className="p-2 hover:bg-neutral-800 rounded-lg transition-colors text-neutral-400 hover:text-white">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Create New Course</h1>
            <p className="text-neutral-400 text-sm mt-1">Configure curriculum, pricing, and visibility settings.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 rounded-lg text-sm font-medium transition-colors">
            Save Draft
          </button>
          <button 
            onClick={handlePublish}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors"
          >
            <Save size={16} /> Publish Course
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* General Info */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-6">
            <h3 className="text-lg font-semibold border-b border-neutral-800 pb-4">General Information</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1.5">Course Title</label>
                <input 
                  type="text" 
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" 
                  placeholder="e.g. AI Strategy for Executives"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1.5">URL Slug</label>
                <div className="flex bg-neutral-950 border border-neutral-800 rounded-lg overflow-hidden focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                  <span className="bg-neutral-900 px-4 py-2.5 text-sm text-neutral-500 border-r border-neutral-800">skker.com/courses/</span>
                  <input type="text" className="w-full bg-transparent px-4 py-2.5 text-sm outline-none" placeholder="ai-strategy" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1.5">Short Summary</label>
                <textarea className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm h-20 resize-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="A brief 1-2 sentence description for cards and previews..."></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1.5">Full Description</label>
                <div className="border border-neutral-800 rounded-lg overflow-hidden bg-neutral-950 h-64">
                  {/* Dummy Rich Text Toolbar */}
                  <div className="bg-neutral-900 border-b border-neutral-800 p-2 flex gap-2">
                    <div className="w-6 h-6 bg-neutral-800 rounded"></div>
                    <div className="w-6 h-6 bg-neutral-800 rounded"></div>
                    <div className="w-6 h-6 bg-neutral-800 rounded"></div>
                  </div>
                  <textarea className="w-full h-full bg-transparent p-4 text-sm resize-none outline-none" placeholder="Detailed course description..."></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Curriculum & Details */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-6">
            <h3 className="text-lg font-semibold border-b border-neutral-800 pb-4">Curriculum & Details</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1.5">Learning Outcomes (One per line)</label>
                <textarea className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm h-32 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="- Understand AI principles..."></textarea>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-1.5">Target Audience</label>
                  <input type="text" className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500" placeholder="e.g. C-Level, VP" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-1.5">Prerequisites</label>
                  <input type="text" className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500" placeholder="e.g. None" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-1.5">Duration</label>
                  <input type="text" className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500" placeholder="e.g. 2 Days / 16 Hours" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-1.5">Language</label>
                  <select className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500">
                    <option>English</option>
                    <option>Malay</option>
                    <option>Mandarin</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar settings */}
        <div className="space-y-8">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-6">
            <h3 className="text-sm font-semibold uppercase text-neutral-500 tracking-wider">Settings</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1.5">Visibility Mode</label>
                <select 
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="Public">Public</option>
                  <option value="Private">Private / Invite-Only</option>
                  <option value="Corporate Only">Corporate-Only</option>
                  <option value="Cohort Based">Cohort Based</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1.5">Category</label>
                <select className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500">
                  <option>Product Management</option>
                  <option>AI & Strategy</option>
                  <option>Agile & Kanban</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1.5">Delivery Mode</label>
                <select className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500">
                  <option>Hybrid</option>
                  <option>Virtual</option>
                  <option>On-site</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1.5">Instructor</label>
                <select className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500">
                  <option>Soon Kiat Ker</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-6">
            <h3 className="text-sm font-semibold uppercase text-neutral-500 tracking-wider">Pricing</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-1.5">Currency</label>
                  <select className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500">
                    <option>MYR (RM)</option>
                    <option>USD ($)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-1.5">Price</label>
                  <input 
                    type="number" 
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500" 
                    placeholder="0.00"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1.5">Discount Price (Optional)</label>
                <input type="number" className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500" placeholder="0.00" />
              </div>
              
              <div>
                <label className="flex items-center justify-between text-sm font-medium text-neutral-300 mb-1.5">
                  Tax Note <HelpCircle size={14} className="text-neutral-500" />
                </label>
                <input type="text" className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500" placeholder="e.g. Exclusive of 8% SST" />
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-6">
            <h3 className="text-sm font-semibold uppercase text-neutral-500 tracking-wider">Media & Assets</h3>
            <div className="border-2 border-dashed border-neutral-800 rounded-xl p-8 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-neutral-800 rounded-full mb-3 flex items-center justify-center">
                <span className="text-xl">+</span>
              </div>
              <p className="text-sm font-medium">Upload Course Image</p>
              <p className="text-xs text-neutral-500 mt-1">1920x1080px (16:9) recommended</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
