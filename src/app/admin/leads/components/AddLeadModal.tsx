import { Lead } from '@/store/slices/adminSlice';
import { X } from 'lucide-react';

interface AddLeadModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (val: boolean) => void;
  newLead: Partial<Lead>;
  setNewLead: (val: Partial<Lead>) => void;
  handleCreateLead: (e: React.FormEvent) => void;
}

export default function AddLeadModal({
  isModalOpen,
  setIsModalOpen,
  newLead,
  setNewLead,
  handleCreateLead
}: AddLeadModalProps) {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-[#0B1519] border border-[#1A2C35] rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between p-6 border-b border-[#1A2C35]">
          <div>
            <h3 className="text-xl font-bold text-white">Create New Lead</h3>
            <p className="text-[#8BA3AC] text-sm mt-1">Manually enter a new corporate lead into the pipeline.</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(false)}
            className="text-[#415C68] hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto flex-1">
          <form id="add-lead-form" onSubmit={handleCreateLead} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-semibold text-white block">Company Name *</label>
                <input 
                  required
                  type="text" 
                  value={newLead.company}
                  onChange={(e) => setNewLead({...newLead, company: e.target.value})}
                  className="w-full bg-[#050B0E] border border-[#1A2C35] text-white rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-[#4AD8FF] transition-colors placeholder:text-[#415C68]"
                  placeholder="e.g. Acme Corp"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-white block">Contact Person *</label>
                <input 
                  required
                  type="text" 
                  value={newLead.contact}
                  onChange={(e) => setNewLead({...newLead, contact: e.target.value})}
                  className="w-full bg-[#050B0E] border border-[#1A2C35] text-white rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-[#4AD8FF] transition-colors placeholder:text-[#415C68]"
                  placeholder="e.g. Jane Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-white block">Email</label>
                <input 
                  type="email" 
                  value={newLead.email}
                  onChange={(e) => setNewLead({...newLead, email: e.target.value})}
                  className="w-full bg-[#050B0E] border border-[#1A2C35] text-white rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-[#4AD8FF] transition-colors placeholder:text-[#415C68]"
                  placeholder="e.g. jane@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-white block">Phone</label>
                <input 
                  type="tel" 
                  value={newLead.phone}
                  onChange={(e) => setNewLead({...newLead, phone: e.target.value})}
                  className="w-full bg-[#050B0E] border border-[#1A2C35] text-white rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-[#4AD8FF] transition-colors placeholder:text-[#415C68]"
                  placeholder="e.g. +60 123 4567"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-semibold text-white block">Service Type *</label>
                <select
                  value={newLead.serviceType}
                  onChange={(e) => setNewLead({...newLead, serviceType: e.target.value})}
                  className="w-full bg-[#050B0E] border border-[#1A2C35] text-white rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-[#4AD8FF] transition-colors appearance-none"
                >
                  <option value="Training">Training</option>
                  <option value="Advisory">Advisory</option>
                  <option value="Coaching">Coaching</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-white block">Topic / Requirements *</label>
                <input 
                  required
                  type="text" 
                  value={newLead.topic}
                  onChange={(e) => setNewLead({...newLead, topic: e.target.value})}
                  className="w-full bg-[#050B0E] border border-[#1A2C35] text-white rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-[#4AD8FF] transition-colors placeholder:text-[#415C68]"
                  placeholder="e.g. Agile Transformation"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-white block">Lead Source *</label>
                <select
                  required
                  value={newLead.source}
                  onChange={(e) => setNewLead({...newLead, source: e.target.value})}
                  className="w-full bg-[#050B0E] border border-[#1A2C35] text-white rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-[#4AD8FF] transition-colors appearance-none"
                >
                  <option value="" disabled>Select Source</option>
                  <option value="Website form">Website form</option>
                  <option value="Referral">Referral</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Email">Email</option>
                  <option value="Phone">Phone</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-semibold text-white block">Timeline / Date</label>
                <input 
                  type="text" 
                  value={newLead.timeline}
                  onChange={(e) => setNewLead({...newLead, timeline: e.target.value})}
                  className="w-full bg-[#050B0E] border border-[#1A2C35] text-white rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-[#4AD8FF] transition-colors placeholder:text-[#415C68]"
                  placeholder="e.g. Q3 2026 or Not decided"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-semibold text-white block">Estimated Range (Optional)</label>
                <input 
                  type="text" 
                  value={newLead.value}
                  onChange={(e) => setNewLead({...newLead, value: e.target.value})}
                  className="w-full bg-[#050B0E] border border-[#1A2C35] text-white rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-[#4AD8FF] transition-colors placeholder:text-[#415C68]"
                  placeholder="e.g. RM 15k - RM 30k"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-white block">Expected Pipeline Value (RM)</label>
                <input 
                  type="number" 
                  value={newLead.expectedValue || ''}
                  onChange={(e) => setNewLead({...newLead, expectedValue: parseFloat(e.target.value) || 0})}
                  className="w-full bg-[#050B0E] border border-[#1A2C35] text-white rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-[#4AD8FF] transition-colors placeholder:text-[#415C68]"
                  placeholder="e.g. 15000"
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-semibold text-white block">Notes</label>
                <textarea 
                  rows={3}
                  value={newLead.notes || ''}
                  onChange={(e) => setNewLead({...newLead, notes: e.target.value})}
                  className="w-full bg-[#050B0E] border border-[#1A2C35] text-white rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-[#4AD8FF] transition-colors placeholder:text-[#415C68] resize-none"
                  placeholder="Initial discussion notes, client requirements..."
                />
              </div>

            </div>
          </form>
        </div>

        <div className="p-6 border-t border-[#1A2C35] bg-[#09151A] flex justify-end gap-3 shrink-0">
          <button 
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="px-4 py-2.5 rounded-lg text-sm font-medium text-[#8BA3AC] hover:text-white hover:bg-[#1A2C35] transition-colors"
          >
            Cancel
          </button>
          <button 
            type="submit"
            form="add-lead-form"
            className="bg-[#00E5FF] hover:bg-[#00CBE6] text-black font-bold text-sm px-6 py-2.5 rounded-lg transition-colors"
          >
            Add Lead
          </button>
        </div>
      </div>
    </div>
  );
}
