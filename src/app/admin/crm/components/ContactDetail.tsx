import { useState, useEffect } from 'react';
import { User, Mail, Phone, Building2, Tag, BookOpen, Clock, X, Shield, RefreshCw } from 'lucide-react';
import type { Contact } from '../page';
import { API_BASE_URL } from '@/app/environment/env';

interface ContactDetailProps {
  contact: Contact | undefined;
  setSelectedContactId: (id: string | null) => void;
  fetchContacts: () => void;
}

export default function ContactDetail({ contact, setSelectedContactId, fetchContacts }: ContactDetailProps) {
  const [activeTab, setActiveTab] = useState<'info' | 'activity'>('info');
  const [activities, setActivities] = useState<any[]>([]);

  useEffect(() => {
    if (contact && activeTab === 'activity') {
      fetch(`${API_BASE_URL}/crm/contacts/${contact.id}/activities`)
        .then(res => res.json())
        .then(data => setActivities(data.activities || []))
        .catch(err => console.error(err));
    }
  }, [contact, activeTab]);

  const updateContactField = async (field: string, value: any) => {
    if (!contact) return;
    try {
      await fetch(`${API_BASE_URL}/crm/contacts/${contact.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ [field]: value })
      });
      fetchContacts();
    } catch (e) {
      console.error(e);
    }
  };

  if (!contact) {
    return (
      <div className="hidden lg:flex flex-1 bg-admin-surface border border-admin-border rounded-xl flex-col items-center justify-center text-admin-muted">
        <User size={48} className="mb-4 opacity-20" />
        <p>Select a contact to view details</p>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-admin-surface border border-admin-border rounded-xl overflow-hidden flex flex-col">
      <div className="p-6 border-b border-admin-border shrink-0 flex justify-between items-start">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-admin-bg border border-admin-border flex items-center justify-center text-2xl font-semibold text-admin-text">
            {contact.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 className="text-xl font-bold text-admin-text">{contact.name}</h2>
            <p className="text-sm text-admin-muted">{contact.position} {contact.company ? `@ ${contact.company}` : ''}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className={`inline-flex items-center gap-1 text-[11px] font-medium px-2 py-1 rounded border ${contact.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
                {contact.status}
              </span>
              {contact.tags?.map(t => (
                <span key={t} className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-1 bg-admin-bg border border-admin-border text-admin-text rounded">
                  <Tag size={10} /> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
        <button 
          onClick={() => setSelectedContactId(null)}
          className="lg:hidden p-2 text-admin-muted hover:text-admin-text bg-admin-bg border border-admin-border rounded-lg"
        >
          <X size={16} />
        </button>
      </div>

      <div className="flex border-b border-admin-border px-6 shrink-0 bg-admin-bg/30">
        {[
          { id: 'info', label: 'Contact Info', icon: BookOpen },
          { id: 'activity', label: 'Activity & History', icon: Clock }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === tab.id ? 'border-blue-500 text-blue-400' : 'border-transparent text-admin-muted hover:text-neutral-200 hover:border-admin-primary'}`}
          >
            <tab.icon size={16} /> {tab.label}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-6 bg-admin-bg/20">
        {activeTab === 'info' && (
          <div className="max-w-2xl flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-admin-muted uppercase">Email Address</label>
                <div className="flex items-center gap-2 text-sm">
                  <Mail size={14} className="text-admin-muted" /> <a href={`mailto:${contact.email}`} className="text-blue-400 hover:underline">{contact.email}</a>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-admin-muted uppercase">Phone</label>
                <div className="flex items-center gap-2 text-sm">
                  <Phone size={14} className="text-admin-muted" /> {contact.phone || '-'}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-admin-muted uppercase">Source</label>
                <div className="text-sm text-admin-text">{contact.source || 'Manual'}</div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-admin-muted uppercase">Privacy Consent</label>
                <div className="flex items-center gap-2 text-sm">
                  <Shield size={14} className={contact.consentPrivacy ? "text-emerald-400" : "text-admin-muted"} /> 
                  {contact.consentPrivacy ? 'Accepted' : 'Not Recorded'}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-admin-muted uppercase">Newsletter Subscription</label>
                <div className="flex items-center gap-2 text-sm">
                  <Mail size={14} className={contact.consentNewsletter ? "text-emerald-400" : "text-admin-muted"} /> 
                  {contact.consentNewsletter ? 'Subscribed' : 'Unsubscribed'}
                </div>
              </div>
            </div>

            <hr className="border-admin-border" />

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-admin-muted uppercase">Internal Notes</label>
              <textarea
                className="w-full bg-admin-surface border border-admin-primary text-admin-text rounded-lg p-3 text-sm focus:outline-none focus:border-blue-500 resize-none"
                rows={4}
                defaultValue={contact.notes || ''}
                onBlur={(e) => updateContactField('notes', e.target.value)}
                placeholder="Add private notes about this contact..."
              />
            </div>
            
            <div className="pt-4 border-t border-admin-border flex gap-4">
               <button className="text-sm font-medium text-admin-text bg-admin-surface border border-admin-border hover:bg-admin-bg px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                  <RefreshCw size={14} /> Merge Duplicate
               </button>
            </div>
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="max-w-2xl relative border-l-2 border-admin-border ml-3 space-y-8 pb-8">
            {activities.length > 0 ? activities.map(act => (
              <div key={act.id} className="relative pl-8">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-admin-bg bg-neutral-500" />
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-mono text-admin-muted">{new Date(act.date).toLocaleString()}</span>
                  <p className="text-sm text-neutral-200 leading-relaxed bg-admin-surface p-3 rounded-lg border border-admin-border shadow-sm inline-block w-fit">
                    {act.description}
                  </p>
                </div>
              </div>
            )) : (
              <div className="pl-8 text-sm text-admin-muted">No activity found.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
