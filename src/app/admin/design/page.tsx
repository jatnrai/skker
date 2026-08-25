"use client";

import { Palette, Type, LayoutTemplate, Save, Image as ImageIcon } from 'lucide-react';

export default function GlobalDesignPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Global Design</h1>
          <p className="text-neutral-400 text-sm mt-1">Manage global theming, colors, typography, and logos.</p>
        </div>
        <button className="whitespace-nowrap px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
          <Save size={16} /> Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column - Controls */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Brand Assets */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <h3 className="font-semibold text-white flex items-center gap-2 mb-6">
              <ImageIcon size={18} className="text-blue-500" />
              Brand Assets
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-3">Primary Logo (Light Mode)</label>
                <div className="border-2 border-dashed border-neutral-800 bg-neutral-950 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-neutral-600 transition-colors">
                  <div className="text-xl font-bold text-white tracking-tight">
                    <span className="text-blue-500">SKKER</span>
                  </div>
                  <span className="text-[10px] text-neutral-500 mt-2">Click to replace</span>
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-3">Primary Logo (Dark Mode)</label>
                <div className="border-2 border-dashed border-neutral-800 bg-neutral-950 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-neutral-600 transition-colors">
                  <div className="text-xl font-bold text-white tracking-tight">
                    <span className="text-blue-500">SKKER</span>
                  </div>
                  <span className="text-[10px] text-neutral-500 mt-2">Click to replace</span>
                </div>
              </div>
            </div>
          </div>

          {/* Color Palette */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <h3 className="font-semibold text-white flex items-center gap-2 mb-6">
              <Palette size={18} className="text-purple-500" />
              Color Palette
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-medium text-neutral-400">Primary Brand</label>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded border border-neutral-800 bg-blue-600 shadow-inner"></div>
                  <input type="text" defaultValue="#2563EB" className="bg-neutral-950 border border-neutral-800 text-white rounded text-xs px-2 py-1.5 w-full font-mono uppercase" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-neutral-400">Secondary Accent</label>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded border border-neutral-800 bg-purple-500 shadow-inner"></div>
                  <input type="text" defaultValue="#A855F7" className="bg-neutral-950 border border-neutral-800 text-white rounded text-xs px-2 py-1.5 w-full font-mono uppercase" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-neutral-400">Background (Dark)</label>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded border border-neutral-800 bg-neutral-950 shadow-inner"></div>
                  <input type="text" defaultValue="#0A0A0A" className="bg-neutral-950 border border-neutral-800 text-white rounded text-xs px-2 py-1.5 w-full font-mono uppercase" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-neutral-400">Surface (Dark)</label>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded border border-neutral-800 bg-neutral-900 shadow-inner"></div>
                  <input type="text" defaultValue="#171717" className="bg-neutral-950 border border-neutral-800 text-white rounded text-xs px-2 py-1.5 w-full font-mono uppercase" />
                </div>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <h3 className="font-semibold text-white flex items-center gap-2 mb-6">
              <Type size={18} className="text-emerald-500" />
              Typography
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider block">Headings Font</label>
                <select className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-lg py-2 px-3 text-sm focus:outline-none focus:border-blue-500 appearance-none">
                  <option>Inter (Default)</option>
                  <option>Roboto</option>
                  <option>Outfit</option>
                  <option>Playfair Display</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider block">Body Font</label>
                <select className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-lg py-2 px-3 text-sm focus:outline-none focus:border-blue-500 appearance-none">
                  <option>Inter (Default)</option>
                  <option>Roboto</option>
                  <option>Open Sans</option>
                  <option>Lora</option>
                </select>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column - Preview */}
        <div className="lg:col-span-1">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden sticky top-6">
            <div className="p-4 border-b border-neutral-800 bg-neutral-950/50 flex items-center gap-2">
              <LayoutTemplate size={16} className="text-neutral-400" />
              <h3 className="font-semibold text-white text-sm">Live Preview</h3>
            </div>
            
            <div className="p-6 bg-[#0A0A0A] space-y-6">
              {/* Preview Header */}
              <div className="flex justify-between items-center">
                <div className="text-lg font-bold text-white tracking-tight">
                  <span className="text-blue-500">SKKER</span>
                </div>
                <div className="flex gap-3">
                  <div className="w-4 h-1 bg-neutral-800 rounded"></div>
                  <div className="w-4 h-1 bg-neutral-800 rounded"></div>
                </div>
              </div>
              
              {/* Preview Content */}
              <div className="space-y-3">
                <h1 className="text-2xl font-bold text-white leading-tight">Empowering Teams with AI.</h1>
                <p className="text-sm text-neutral-400">This is how your typography and colors will look across the platform to your users.</p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-medium w-max mt-2">Primary Button</button>
              </div>

              {/* Preview Card */}
              <div className="bg-[#171717] border border-neutral-800 p-4 rounded-xl mt-6">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mb-3">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                </div>
                <h4 className="text-sm font-semibold text-white">Surface Component</h4>
                <p className="text-xs text-neutral-500 mt-1">Secondary colors applied.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
