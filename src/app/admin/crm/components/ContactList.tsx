import { Search, Mail, Phone, Building2 } from 'lucide-react';
import type { Contact } from '../page';

interface ContactListProps {
  contacts: Contact[];
  selectedContactId: string | null;
  setSelectedContactId: (id: string | null) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function ContactList({
  contacts, selectedContactId, setSelectedContactId, searchTerm, setSearchTerm
}: ContactListProps) {
  
  const filtered = contacts.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    (c.company && c.company.toLowerCase().includes(searchTerm.toLowerCase())) ||
    c.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`flex-1 flex flex-col bg-admin-surface border border-admin-border rounded-xl overflow-hidden ${selectedContactId ? 'hidden lg:flex lg:w-1/3' : 'w-full'}`}>
      <div className="p-4 border-b border-admin-border bg-admin-bg shrink-0">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search contacts..." 
            className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2 pl-9 pr-4 text-sm focus:outline-none focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search size={16} className="absolute left-3 top-2.5 text-admin-muted" />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="divide-y divide-admin-border">
          {filtered.map((contact) => (
            <div 
              key={contact.id} 
              onClick={() => setSelectedContactId(contact.id)}
              className={`p-4 hover:bg-admin-surface border-l-2 transition-colors cursor-pointer ${
                selectedContactId === contact.id ? 'bg-admin-surface border-l-blue-500' : 'border-l-transparent'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-admin-bg border border-admin-border flex items-center justify-center font-semibold text-admin-text shrink-0">
                  {contact.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <div className="flex justify-between">
                    <span className="font-semibold text-admin-text truncate">{contact.name}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-xs text-admin-muted">
                    <span className="truncate flex items-center gap-1"><Mail size={12}/> {contact.email}</span>
                  </div>
                  {(contact.company || contact.position) && (
                    <div className="flex items-center gap-2 mt-1 text-xs text-admin-muted">
                      <span className="truncate flex items-center gap-1">
                        <Building2 size={12}/> {contact.position ? `${contact.position} at ` : ''}{contact.company || ''}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="p-8 text-center text-admin-muted text-sm">No contacts found.</div>
          )}
        </div>
      </div>
    </div>
  );
}
