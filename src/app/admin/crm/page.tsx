"use client";

import { useState, useEffect } from 'react';
import { Download, Plus } from 'lucide-react';
import { API_BASE_URL } from '@/app/environment/env';
import ContactList from './components/ContactList';
import ContactDetail from './components/ContactDetail';
import AddContactModal from './components/AddContactModal';

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  position?: string;
  source?: string;
  tags?: string[];
  notes?: string;
  consentNewsletter?: boolean;
  consentPrivacy?: boolean;
  status: string;
  created_at?: string;
}

export default function CRMPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContactId, setSelectedContactId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newContact, setNewContact] = useState<Partial<Contact>>({});

  const fetchContacts = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/crm/contacts`);
      if (res.ok) {
        const data = await res.json();
        setContacts(data.contacts || []);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleCreateContact = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newContact.name || !newContact.email) return;

    try {
      const payload = {
        id: `CNT-${Date.now()}`,
        ...newContact,
        source: 'Manual'
      };
      await fetch(`${API_BASE_URL}/crm/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      setIsModalOpen(false);
      setNewContact({});
      fetchContacts();
    } catch (err) {
      console.error(err);
    }
  };

  const selectedContact = contacts.find(c => c.id === selectedContactId);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-admin-text">Contacts CRM Hub</h1>
          <p className="text-admin-muted text-sm mt-1">Master database of all individuals, leads, and learners.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-admin-surface border border-admin-border hover:border-admin-primary text-admin-text px-4 py-2 rounded-lg text-sm font-medium">
            <Download size={16} /> Export CSV
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-[#00E5FF] hover:bg-[#00CBE6] text-black px-4 py-2 rounded-lg text-sm font-bold"
          >
            <Plus size={16} /> New Contact
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-220px)] min-h-[600px]">
        <ContactList 
          contacts={contacts} 
          selectedContactId={selectedContactId} 
          setSelectedContactId={setSelectedContactId}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <ContactDetail 
          contact={selectedContact} 
          setSelectedContactId={setSelectedContactId}
          fetchContacts={fetchContacts}
        />
      </div>

      <AddContactModal 
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        newContact={newContact}
        setNewContact={setNewContact}
        handleCreateContact={handleCreateContact}
      />
    </div>
  );
}
