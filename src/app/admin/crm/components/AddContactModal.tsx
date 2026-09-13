import { X } from 'lucide-react';
import type { Contact } from '../page';

interface AddContactModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (val: boolean) => void;
  newContact: Partial<Contact>;
  setNewContact: (val: Partial<Contact>) => void;
  handleCreateContact: (e: React.FormEvent) => void;
}

export default function AddContactModal({
  isModalOpen, setIsModalOpen, newContact, setNewContact, handleCreateContact
}: AddContactModalProps) {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-[#0B1519] border border-[#1A2C35] rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between p-6 border-b border-[#1A2C35]">
          <div>
            <h3 className="text-xl font-bold text-white">Add New Contact</h3>
            <p className="text-[#8BA3AC] text-sm mt-1">Manually enter a new person into the CRM.</p>
          </div>
          <button onClick={() => setIsModalOpen(false)} className="text-[#415C68] hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto flex-1">
          <form id="add-contact-form" onSubmit={handleCreateContact} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-semibold text-white block">Full Name *</label>
                <input 
                  required type="text" 
                  value={newContact.name || ''}
                  onChange={(e) => setNewContact({...newContact, name: e.target.value})}
                  className="w-full bg-[#050B0E] border border-[#1A2C35] text-white rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-[#4AD8FF]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-white block">Email Address *</label>
                <input 
                  required type="email" 
                  value={newContact.email || ''}
                  onChange={(e) => setNewContact({...newContact, email: e.target.value})}
                  className="w-full bg-[#050B0E] border border-[#1A2C35] text-white rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-[#4AD8FF]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-white block">Phone</label>
                <input 
                  type="tel" 
                  value={newContact.phone || ''}
                  onChange={(e) => setNewContact({...newContact, phone: e.target.value})}
                  className="w-full bg-[#050B0E] border border-[#1A2C35] text-white rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-[#4AD8FF]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-white block">Company</label>
                <input 
                  type="text" 
                  value={newContact.company || ''}
                  onChange={(e) => setNewContact({...newContact, company: e.target.value})}
                  className="w-full bg-[#050B0E] border border-[#1A2C35] text-white rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-[#4AD8FF]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-white block">Position</label>
                <input 
                  type="text" 
                  value={newContact.position || ''}
                  onChange={(e) => setNewContact({...newContact, position: e.target.value})}
                  className="w-full bg-[#050B0E] border border-[#1A2C35] text-white rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-[#4AD8FF]"
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={newContact.consentNewsletter || false} onChange={e => setNewContact({...newContact, consentNewsletter: e.target.checked})} />
                  <span className="text-sm text-white">Subscribe to Newsletter</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={newContact.consentPrivacy || false} onChange={e => setNewContact({...newContact, consentPrivacy: e.target.checked})} />
                  <span className="text-sm text-white">Accepted Privacy Policy</span>
                </label>
              </div>
            </div>
          </form>
        </div>

        <div className="p-6 border-t border-[#1A2C35] bg-[#09151A] flex justify-end gap-3 shrink-0">
          <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2.5 rounded-lg text-sm text-[#8BA3AC] hover:text-white">Cancel</button>
          <button type="submit" form="add-contact-form" className="bg-[#00E5FF] hover:bg-[#00CBE6] text-black font-bold text-sm px-6 py-2.5 rounded-lg">Add Contact</button>
        </div>
      </div>
    </div>
  );
}
