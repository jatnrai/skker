import { Lead } from '@/store/slices/adminSlice';
import { Briefcase, User, Tag, Plus, BookOpen, Clock, X, MessageSquare, Paperclip, FileText } from 'lucide-react';
import { statusStyles } from './constants';

interface LeadDetailProps {
  selectedLead: Lead | undefined;
  selectedLeadId: string | null;
  setSelectedLeadId: (id: string | null) => void;
  activeTab: 'details' | 'crm' | 'activity';
  setActiveTab: (tab: 'details' | 'crm' | 'activity') => void;
  handleStatusChange: (status: string) => void;
  handleUpdateLeadDetail: (id: string, updates: Partial<Lead>) => void;
  handleNotesChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  saveNotes: () => void;
}

export default function LeadDetail({
  selectedLead, selectedLeadId, setSelectedLeadId, 
  activeTab, setActiveTab, handleStatusChange, 
  handleUpdateLeadDetail, handleNotesChange, saveNotes
}: LeadDetailProps) {
  return (
    <div className={`flex-1 bg-admin-surface border border-admin-border rounded-xl overflow-hidden flex flex-col ${!selectedLeadId ? 'hidden lg:flex items-center justify-center' : 'flex'}`}>
      {!selectedLead ? (
        <div className="text-center text-admin-muted flex flex-col items-center justify-center h-full w-full">
          <Briefcase size={48} className="mb-4 opacity-20" />
          <p>Select a lead from the list to view details</p>
        </div>
      ) : (
        <>
          {/* Detail Header */}
          <div className="p-6 border-b border-admin-border shrink-0">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="text-xl font-bold text-admin-text">{selectedLead.company}</h2>
                  <span className="text-xs font-mono text-admin-muted bg-admin-bg px-2 py-1 rounded">{selectedLead.id}</span>
                </div>
                <p className="text-sm text-admin-muted flex items-center gap-4">
                  <span className="flex items-center gap-1"><User size={14} /> {selectedLead.contact} ({selectedLead.jobTitle || 'No Title'})</span>
                </p>
              </div>
              <button 
                onClick={() => setSelectedLeadId(null)}
                className="lg:hidden px-3 py-2 text-admin-muted hover:text-admin-text bg-admin-surface border border-admin-border rounded-lg flex items-center gap-1.5 text-sm font-medium"
              >
                <X size={16} /> Back
              </button>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedLead.tags?.map(t => (
                <span key={t} className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-1 bg-admin-surface border border-admin-border text-admin-text rounded">
                  <Tag size={10} /> {t}
                </span>
              ))}
              <button className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-1 bg-admin-bg border border-admin-border border-dashed text-admin-muted hover:text-admin-text rounded transition-colors">
                <Plus size={10} /> Add Tag
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-admin-border px-6 shrink-0 bg-admin-bg/30 overflow-x-auto whitespace-nowrap no-scrollbar">
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
                    : 'border-transparent text-admin-muted hover:text-neutral-200 hover:border-admin-primary'
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-admin-bg/20">
            {activeTab === 'crm' && (
              <div className="max-w-2xl flex flex-col gap-8">
                {/* CRM Form */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-admin-muted uppercase tracking-wider">Pipeline Status</label>
                    <select 
                      value={selectedLead.status}
                      onChange={(e) => handleStatusChange(e.target.value)}
                      className="bg-admin-surface border border-admin-primary text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500"
                    >
                      {Object.keys(statusStyles).map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-admin-muted uppercase tracking-wider">Assignee</label>
                    <select 
                      value={selectedLead.assignee || 'Unassigned'}
                      onChange={(e) => handleUpdateLeadDetail(selectedLead.id, { assignee: e.target.value })}
                      className="bg-admin-surface border border-admin-primary text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500"
                    >
                      <option>Unassigned</option>
                      <option>Soon Kiat Ker</option>
                      <option>Sales Team</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-admin-muted uppercase tracking-wider">Probability (%)</label>
                    <input 
                      type="number" 
                      min="0" max="100"
                      value={selectedLead.probability || 0}
                      onChange={(e) => handleUpdateLeadDetail(selectedLead.id, { probability: parseInt(e.target.value) || 0 })}
                      className="bg-admin-surface border border-admin-primary text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-admin-muted uppercase tracking-wider">Expected Value (RM)</label>
                    <input 
                      type="number" 
                      value={selectedLead.expectedValue || 0}
                      onChange={(e) => handleUpdateLeadDetail(selectedLead.id, { expectedValue: parseFloat(e.target.value) || 0 })}
                      className="bg-admin-surface border border-admin-primary text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-admin-muted uppercase tracking-wider">Follow-up Date</label>
                    <input 
                      type="text" 
                      value={selectedLead.followUpDate || ''}
                      onChange={(e) => handleUpdateLeadDetail(selectedLead.id, { followUpDate: e.target.value })}
                      placeholder="e.g. Aug 28, 2026"
                      className="bg-admin-surface border border-admin-primary text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-admin-muted uppercase tracking-wider">Next Action</label>
                    <input 
                      type="text" 
                      value={selectedLead.nextAction || ''}
                      onChange={(e) => handleUpdateLeadDetail(selectedLead.id, { nextAction: e.target.value })}
                      placeholder="e.g. Call to discuss proposal"
                      className="bg-admin-surface border border-admin-primary text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  {selectedLead.status === 'Lost' && (
                    <div className="flex flex-col gap-2 sm:col-span-2">
                      <label className="text-xs font-bold text-admin-muted uppercase tracking-wider">Loss Reason</label>
                      <input 
                        type="text" 
                        value={selectedLead.lossReason || ''}
                        onChange={(e) => handleUpdateLeadDetail(selectedLead.id, { lossReason: e.target.value })}
                        placeholder="e.g. Budget constraints, Chose competitor"
                        className="bg-admin-surface border border-red-500/50 text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-red-500"
                      />
                    </div>
                  )}
                </div>

                <hr className="border-admin-border" />

                {/* Attachments & Documents */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-admin-muted uppercase tracking-wider flex items-center gap-2">
                      <Paperclip size={14} /> Attachments & Proposals
                    </label>
                    <button className="text-[11px] font-medium text-blue-400 hover:text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20 flex items-center gap-1">
                      <Plus size={12} /> Add File
                    </button>
                  </div>
                  <div className="bg-admin-bg border border-admin-border rounded-lg p-4 flex flex-col gap-2">
                    {selectedLead.attachments && selectedLead.attachments.length > 0 ? (
                      selectedLead.attachments.map((file, i) => (
                        <div key={i} className="flex items-center gap-3 p-2 hover:bg-admin-surface rounded-lg transition-colors cursor-pointer group">
                          <div className="w-8 h-8 rounded bg-admin-surface border border-admin-border flex items-center justify-center text-admin-muted group-hover:text-blue-400">
                            <FileText size={14} />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-admin-text line-clamp-1">{file.name || 'Document'}</p>
                            <p className="text-[10px] text-admin-muted">{file.date || 'Recently'}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-admin-muted text-center py-4">No proposals or documents attached yet.</p>
                    )}
                  </div>
                </div>

                <hr className="border-admin-border" />

                {/* Internal Notes */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-admin-muted uppercase tracking-wider flex items-center gap-2">
                      <MessageSquare size={14} /> Internal Notes
                    </label>
                    <span className="text-[10px] text-neutral-600 bg-admin-surface px-2 py-0.5 rounded border border-admin-border">Hidden from client</span>
                  </div>
                  <textarea 
                    rows={6}
                    value={selectedLead.notes || ''}
                    onChange={handleNotesChange}
                    onBlur={saveNotes}
                    placeholder="Add preparation notes, qualification thoughts, or next steps..."
                    className="bg-admin-surface border border-admin-primary text-admin-text rounded-lg p-4 text-sm focus:outline-none focus:border-blue-500 resize-none w-full"
                  />
                </div>

                {selectedLead.status === 'Won' && (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6 flex flex-col items-center justify-center text-center gap-3">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 mb-2">
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <h4 className="text-emerald-400 font-bold mb-1">Lead Successfully Won!</h4>
                      <p className="text-xs text-admin-muted">You can now convert this lead into an official Corporate Training engagement in the Academy.</p>
                    </div>
                    <button 
                      onClick={async () => {
                        const payload = {
                          id: `CRS-${Date.now()}`,
                          title: `${selectedLead.company} - ${selectedLead.topic}`,
                          slug: `${selectedLead.company.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Date.now()}`,
                          summary: `Corporate training engagement for ${selectedLead.contact}.`,
                          category: 'Corporate',
                          trainingType: 'Corporate',
                          price: selectedLead.value ? selectedLead.value.replace(/[^0-9]/g, '') : '0',
                          visibility: 'Published',
                          accessLevel: 'Private'
                        };
                        try {
                          await fetch('http://localhost:5001/api/academy/courses', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(payload)
                          });
                          alert('Converted successfully! View it in Academy -> Corporate Training.');
                        } catch(e) {
                          alert('Error converting lead.');
                        }
                      }}
                      className="mt-2 bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-sm px-6 py-2.5 rounded-lg transition-colors"
                    >
                      Convert to Engagement
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'details' && (
              <div className="max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-admin-muted uppercase tracking-wider">Contact Name</span>
                  <span className="text-sm text-admin-text font-medium">{selectedLead.contact}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-admin-muted uppercase tracking-wider">Email</span>
                  <a href={`mailto:${selectedLead.email}`} className="text-sm text-blue-400 hover:underline">{selectedLead.email}</a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-admin-muted uppercase tracking-wider">Phone</span>
                  <span className="text-sm text-admin-text">{selectedLead.phone || '-'}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-admin-muted uppercase tracking-wider">Job Title</span>
                  <span className="text-sm text-admin-text">{selectedLead.jobTitle || '-'}</span>
                </div>
                
                <div className="col-span-1 sm:col-span-2 pt-4 border-t border-admin-border/50"></div>
                
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-admin-muted uppercase tracking-wider">Service Type</span>
                  <span className="text-sm text-admin-text">{selectedLead.serviceType || 'Not specified'}</span>
                </div>
                <div className="flex flex-col gap-1 sm:col-span-2">
                  <span className="text-xs font-medium text-admin-muted uppercase tracking-wider">Topic/Requirements</span>
                  <span className="text-sm text-admin-text font-medium bg-admin-surface px-3 py-2 rounded-lg border border-admin-border mt-1 inline-block">{selectedLead.topic}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-admin-muted uppercase tracking-wider">Expected Timeline</span>
                  <span className="text-sm text-admin-text flex items-center gap-1.5"><Clock size={14} className="text-admin-muted"/> {selectedLead.timeline}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-admin-muted uppercase tracking-wider">Budget</span>
                  <span className="text-sm text-emerald-400 font-medium">{selectedLead.value}</span>
                </div>
              </div>
            )}

            {activeTab === 'activity' && (
              <div className="max-w-2xl">
                <div className="relative border-l-2 border-admin-border ml-3 space-y-8 pb-8">
                  {selectedLead.activities?.map((act) => (
                    <div key={act.id} className="relative pl-8">
                      <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-admin-bg ${
                        act.type === 'system' ? 'bg-neutral-500' :
                        act.type === 'email' ? 'bg-blue-500' :
                        act.type === 'status_change' ? 'bg-amber-500' : 'bg-purple-500'
                      }`} />
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-mono text-admin-muted">{act.date}</span>
                        <p className="text-sm text-neutral-200 leading-relaxed bg-admin-surface p-3 rounded-lg border border-admin-border shadow-sm inline-block w-fit max-w-full">
                          {act.description}
                        </p>
                      </div>
                    </div>
                  ))}
                  {!selectedLead.activities?.length && (
                    <div className="pl-8 text-sm text-admin-muted">No activity recorded yet.</div>
                  )}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
