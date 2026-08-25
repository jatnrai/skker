"use client";

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { deleteLead, updateLeadStatus, updateLeadDetail, addLeadActivity, Lead } from '@/store/slices/adminSlice';
import { 
  Briefcase, Search, Filter, Download, MoreHorizontal, Mail, Phone,
  Building, Clock, CheckCircle2, AlertCircle, BookOpen, Trash2, X,
  User, Tag, Calendar, MessageSquare, Plus, CheckSquare
} from 'lucide-react';

const statusStyles: Record<string, { bg: string, text: string, border: string }> = {
  'New': { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
  'Qualified': { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20' },
  'Proposal Sent': { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20' },
  'Negotiation': { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/20' },
  'Won': { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20' },
  'Lost': { bg: 'bg-neutral-800', text: 'text-neutral-400', border: 'border-neutral-700' },
};

export default function CorporateLeads() {
  const dispatch = useDispatch();
  const leads = useSelector((state: RootState) => state.admin.leads);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null);
  const [selectedLeads, setSelectedLeads] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'details' | 'crm' | 'activity'>('crm');

  // Filtered Leads
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.company.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          lead.contact.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          lead.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === '' || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const selectedLead = leads.find(l => l.id === selectedLeadId);

  // Bulk Selection
  const toggleSelectAll = () => {
    if (selectedLeads.length === filteredLeads.length) {
      setSelectedLeads([]);
    } else {
      setSelectedLeads(filteredLeads.map(l => l.id));
    }
  };

  const toggleSelectLead = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (selectedLeads.includes(id)) {
      setSelectedLeads(selectedLeads.filter(lId => lId !== id));
    } else {
      setSelectedLeads([...selectedLeads, id]);
    }
  };

  // Metrics
  const newLeadsCount = leads.filter(l => l.status === 'New').length;
  const activeDealsCount = leads.filter(l => !['Won', 'Lost', 'New'].includes(l.status)).length;
  const pipelineValue = leads.filter(l => !['Lost'].includes(l.status)).length * 45000; // Mock calculation

  // CRM Update Handlers
  const handleStatusChange = (newStatus: string) => {
    if (selectedLeadId) {
      dispatch(updateLeadStatus({ id: selectedLeadId, status: newStatus }));
    }
  };

  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (selectedLeadId) {
      dispatch(updateLeadDetail({ id: selectedLeadId, updates: { notes: e.target.value } }));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header & Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-white">Corporate Leads</h1>
          <p className="text-neutral-400 text-sm mt-1">Manage B2B training enquiries and sales pipeline.</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          {selectedLeads.length > 0 && (
            <button 
              onClick={() => {
                selectedLeads.forEach(id => dispatch(deleteLead(id)));
                setSelectedLeads([]);
              }}
              className="flex items-center gap-2 bg-red-500/10 text-red-400 hover:bg-red-500/20 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              <Trash2 size={16} /> Delete ({selectedLeads.length})
            </button>
          )}
          <button className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            <Download size={16} /> Export CSV
          </button>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-neutral-400 text-sm font-medium uppercase tracking-wider">
            <CheckCircle2 size={16} className="text-emerald-400" /> Total Pipeline Value
          </div>
          <div className="text-3xl font-bold text-white">RM {pipelineValue.toLocaleString()}</div>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-neutral-400 text-sm font-medium uppercase tracking-wider">
            <AlertCircle size={16} className="text-blue-400" /> New Leads (Unreviewed)
          </div>
          <div className="text-3xl font-bold text-white">{newLeadsCount}</div>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-neutral-400 text-sm font-medium uppercase tracking-wider">
            <Briefcase size={16} className="text-amber-400" /> Active Deals
          </div>
          <div className="text-3xl font-bold text-white">{activeDealsCount}</div>
        </div>
      </div>

      {/* Split Pane Container */}
      <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-280px)] min-h-[600px]">
        
        {/* Left Pane: List View */}
        <div className={`flex-1 flex flex-col bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden ${selectedLeadId ? 'hidden lg:flex lg:w-1/3' : 'w-full'}`}>
          {/* Filters & Search */}
          <div className="p-4 border-b border-neutral-800 flex flex-col gap-3 shrink-0">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
              <input 
                type="text" 
                placeholder="Search company, contact..." 
                className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-lg py-2 pl-9 pr-4 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-neutral-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select 
              className="bg-neutral-950 border border-neutral-800 text-white rounded-lg py-2 px-3 text-sm focus:outline-none focus:border-blue-500 appearance-none w-full"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">All Statuses</option>
              {Object.keys(statusStyles).map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto">
            <div className="flex items-center px-4 py-2 border-b border-neutral-800 bg-neutral-950/50 sticky top-0 z-10">
              <input 
                type="checkbox" 
                className="w-4 h-4 rounded border-neutral-700 bg-neutral-800 text-blue-500 focus:ring-blue-500/20"
                checked={selectedLeads.length === filteredLeads.length && filteredLeads.length > 0}
                onChange={toggleSelectAll}
              />
              <span className="text-xs text-neutral-400 font-medium ml-3 uppercase tracking-wider">Select All</span>
            </div>
            
            <div className="divide-y divide-neutral-800/50">
              {filteredLeads.map((lead) => {
                const sStyle = statusStyles[lead.status] || statusStyles['Lost'];
                return (
                  <div 
                    key={lead.id} 
                    onClick={() => setSelectedLeadId(lead.id)}
                    className={`p-4 cursor-pointer hover:bg-neutral-800/50 transition-colors flex items-start gap-3 ${selectedLeadId === lead.id ? 'bg-neutral-800/80 border-l-2 border-l-blue-500' : 'border-l-2 border-l-transparent'}`}
                  >
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 rounded border-neutral-700 bg-neutral-800 text-blue-500 focus:ring-blue-500/20 mt-1 shrink-0"
                      checked={selectedLeads.includes(lead.id)}
                      onClick={(e) => toggleSelectLead(e, lead.id)}
                      readOnly
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-sm font-semibold text-white truncate">{lead.company}</h4>
                        <span className={`shrink-0 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border uppercase tracking-wider ${sStyle.bg} ${sStyle.text} ${sStyle.border}`}>
                          {lead.status}
                        </span>
                      </div>
                      <div className="text-xs text-neutral-400 flex items-center gap-1.5 truncate">
                        <User size={12} /> {lead.contact}
                      </div>
                      <div className="text-xs text-neutral-500 mt-2 flex items-center justify-between">
                        <span className="truncate">{lead.topic}</span>
                        <span className="shrink-0">{lead.date.split(',')[0]}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
              {filteredLeads.length === 0 && (
                <div className="p-8 text-center text-neutral-500 text-sm">
                  No leads found.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Pane: Lead Detail */}
        <div className={`flex-1 bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden flex flex-col ${!selectedLeadId ? 'hidden lg:flex items-center justify-center' : 'flex'}`}>
          {!selectedLead ? (
            <div className="text-center text-neutral-500 flex flex-col items-center">
              <Briefcase size={48} className="mb-4 opacity-20" />
              <p>Select a lead from the list to view details</p>
            </div>
          ) : (
            <>
              {/* Detail Header */}
              <div className="p-6 border-b border-neutral-800 shrink-0">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h2 className="text-xl font-bold text-white">{selectedLead.company}</h2>
                      <span className="text-xs font-mono text-neutral-500 bg-neutral-950 px-2 py-1 rounded">{selectedLead.id}</span>
                    </div>
                    <p className="text-sm text-neutral-400 flex items-center gap-4">
                      <span className="flex items-center gap-1"><User size={14} /> {selectedLead.contact} ({selectedLead.jobTitle || 'No Title'})</span>
                    </p>
                  </div>
                  <button 
                    onClick={() => setSelectedLeadId(null)}
                    className="lg:hidden p-2 text-neutral-400 hover:text-white bg-neutral-800 rounded-lg"
                  >
                    <X size={18} />
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedLead.tags?.map(t => (
                    <span key={t} className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-1 bg-neutral-800 text-neutral-300 rounded border border-neutral-700">
                      <Tag size={10} /> {t}
                    </span>
                  ))}
                  <button className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-1 bg-neutral-950 border border-neutral-800 border-dashed text-neutral-500 hover:text-neutral-300 rounded transition-colors">
                    <Plus size={10} /> Add Tag
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-neutral-800 px-6 shrink-0 bg-neutral-950/30">
                {[
                  { id: 'crm', label: 'CRM & Notes', icon: Briefcase },
                  { id: 'details', label: 'Enquiry Details', icon: BookOpen },
                  { id: 'activity', label: 'Activity Log', icon: Clock }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === tab.id 
                        ? 'border-blue-500 text-blue-400' 
                        : 'border-transparent text-neutral-400 hover:text-neutral-200 hover:border-neutral-700'
                    }`}
                  >
                    <tab.icon size={16} />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="flex-1 overflow-y-auto p-6 bg-neutral-950/20">
                {activeTab === 'crm' && (
                  <div className="max-w-2xl flex flex-col gap-8">
                    {/* CRM Form */}
                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Pipeline Status</label>
                        <select 
                          value={selectedLead.status}
                          onChange={(e) => handleStatusChange(e.target.value)}
                          className="bg-neutral-900 border border-neutral-700 text-white rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500"
                        >
                          {Object.keys(statusStyles).map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Assignee</label>
                        <select 
                          value={selectedLead.assignee || 'Unassigned'}
                          onChange={(e) => dispatch(updateLeadDetail({ id: selectedLead.id, updates: { assignee: e.target.value } }))}
                          className="bg-neutral-900 border border-neutral-700 text-white rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500"
                        >
                          <option>Unassigned</option>
                          <option>Soon Kiat Ker</option>
                          <option>Sales Team</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Estimated Value</label>
                        <input 
                          type="text" 
                          value={selectedLead.value}
                          onChange={(e) => dispatch(updateLeadDetail({ id: selectedLead.id, updates: { value: e.target.value } }))}
                          className="bg-neutral-900 border border-neutral-700 text-white rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Follow-up Date</label>
                        <input 
                          type="text" 
                          value={selectedLead.followUpDate || ''}
                          onChange={(e) => dispatch(updateLeadDetail({ id: selectedLead.id, updates: { followUpDate: e.target.value } }))}
                          placeholder="e.g. Aug 28, 2026"
                          className="bg-neutral-900 border border-neutral-700 text-white rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <hr className="border-neutral-800" />

                    {/* Internal Notes */}
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider flex items-center gap-2">
                          <MessageSquare size={14} /> Internal Notes
                        </label>
                        <span className="text-[10px] text-neutral-600 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">Hidden from client</span>
                      </div>
                      <textarea 
                        rows={6}
                        value={selectedLead.notes || ''}
                        onChange={handleNotesChange}
                        placeholder="Add preparation notes, qualification thoughts, or next steps..."
                        className="bg-neutral-900 border border-neutral-700 text-white rounded-lg p-4 text-sm focus:outline-none focus:border-blue-500 resize-none w-full"
                      />
                    </div>
                  </div>
                )}

                {activeTab === 'details' && (
                  <div className="max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Contact Name</span>
                      <span className="text-sm text-white font-medium">{selectedLead.contact}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Email</span>
                      <a href={`mailto:${selectedLead.email}`} className="text-sm text-blue-400 hover:underline">{selectedLead.email}</a>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Phone</span>
                      <span className="text-sm text-white">{selectedLead.phone || '-'}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Job Title</span>
                      <span className="text-sm text-white">{selectedLead.jobTitle || '-'}</span>
                    </div>
                    
                    <div className="col-span-1 sm:col-span-2 pt-4 border-t border-neutral-800/50"></div>
                    
                    <div className="flex flex-col gap-1 sm:col-span-2">
                      <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Training Topic</span>
                      <span className="text-sm text-white font-medium bg-neutral-900 px-3 py-2 rounded-lg border border-neutral-800 mt-1 inline-block">{selectedLead.topic}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Expected Timeline</span>
                      <span className="text-sm text-white flex items-center gap-1.5"><Clock size={14} className="text-neutral-500"/> {selectedLead.timeline}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Budget</span>
                      <span className="text-sm text-emerald-400 font-medium">{selectedLead.value}</span>
                    </div>
                  </div>
                )}

                {activeTab === 'activity' && (
                  <div className="max-w-2xl">
                    <div className="relative border-l-2 border-neutral-800 ml-3 space-y-8 pb-8">
                      {selectedLead.activities?.map((act) => (
                        <div key={act.id} className="relative pl-8">
                          <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-neutral-900 ${
                            act.type === 'system' ? 'bg-neutral-500' :
                            act.type === 'email' ? 'bg-blue-500' :
                            act.type === 'status_change' ? 'bg-amber-500' : 'bg-purple-500'
                          }`} />
                          <div className="flex flex-col gap-1">
                            <span className="text-xs font-mono text-neutral-500">{act.date}</span>
                            <p className="text-sm text-neutral-200 leading-relaxed bg-neutral-900 p-3 rounded-lg border border-neutral-800 shadow-sm inline-block w-fit max-w-full">
                              {act.description}
                            </p>
                          </div>
                        </div>
                      ))}
                      {!selectedLead.activities?.length && (
                        <div className="pl-8 text-sm text-neutral-500">No activity recorded yet.</div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
