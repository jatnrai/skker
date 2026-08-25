"use client";

import { useState } from 'react';
import { Search, Download, Filter, Mail, Phone, Building2 } from 'lucide-react';

const DUMMY_CONTACTS = [
  { id: '1', name: 'John Smith', email: 'john@acme.com', company: 'Acme Corp', type: 'Lead', phone: '+60 12-345 6789', lastActive: 'Today' },
  { id: '2', name: 'Sarah Jen', email: 'sarah@techflow.io', company: 'TechFlow Inc', type: 'Client', phone: '+60 19-876 5432', lastActive: 'Yesterday' },
  { id: '3', name: 'Michael Tan', email: 'mike@nexus.my', company: 'Nexus Retail', type: 'Learner', phone: '-', lastActive: 'Aug 22' },
  { id: '4', name: 'Emma Wong', email: 'emma.wong@global-logistics.com', company: 'Global Logistics', type: 'Lead', phone: '+65 9123 4567', lastActive: 'Aug 20' },
  { id: '5', name: 'David Lee', email: 'david@personal.com', company: '-', type: 'Subscriber', phone: '-', lastActive: 'Aug 15' },
];

export default function CRMPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = DUMMY_CONTACTS.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Contacts / CRM</h1>
          <p className="text-neutral-400 text-sm mt-1">Master database of all individuals, leads, and learners.</p>
        </div>
        <button className="whitespace-nowrap px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
          <Download size={16} /> Export Contacts
        </button>
      </div>

      <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
        <div className="p-4 border-b border-neutral-800 bg-neutral-950/50 flex flex-col sm:flex-row items-center gap-4">
          <div className="relative w-full sm:w-64">
            <input 
              type="text" 
              placeholder="Search contacts..." 
              className="bg-neutral-950 border border-neutral-800 text-white rounded-lg py-2 pl-9 pr-4 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search size={16} className="absolute left-3 top-2.5 text-neutral-500" />
          </div>
          <select className="bg-neutral-950 border border-neutral-800 text-white rounded-lg py-2 px-3 text-sm focus:outline-none focus:border-blue-500 appearance-none w-full sm:w-auto">
            <option value="">All Types</option>
            <option value="Client">Clients</option>
            <option value="Lead">Leads</option>
            <option value="Learner">Learners</option>
            <option value="Subscriber">Subscribers</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left whitespace-nowrap">
            <thead className="text-xs text-neutral-500 uppercase bg-neutral-950/50">
              <tr>
                <th className="px-6 py-4 font-medium">Contact</th>
                <th className="px-6 py-4 font-medium">Company</th>
                <th className="px-6 py-4 font-medium">Type</th>
                <th className="px-6 py-4 font-medium text-right">Last Active</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800">
              {filtered.map((contact) => (
                <tr key={contact.id} className="hover:bg-neutral-800/50 transition-colors cursor-pointer group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center font-semibold text-white shrink-0">
                        {contact.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-white group-hover:text-blue-400 transition-colors">{contact.name}</span>
                        <div className="flex items-center gap-2 mt-0.5 text-xs text-neutral-500">
                          <span className="flex items-center gap-1"><Mail size={10} /> {contact.email}</span>
                          {contact.phone !== '-' && <span className="flex items-center gap-1 hidden sm:flex"><Phone size={10} /> {contact.phone}</span>}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-neutral-300">
                    {contact.company !== '-' ? (
                      <span className="flex items-center gap-1.5"><Building2 size={14} className="text-neutral-500" /> {contact.company}</span>
                    ) : (
                      <span className="text-neutral-600">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${
                      contact.type === 'Client' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                      contact.type === 'Lead' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                      contact.type === 'Learner' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                      'bg-neutral-800 text-neutral-400 border-neutral-700'
                    }`}>
                      {contact.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-neutral-400 text-right text-xs">
                    {contact.lastActive}
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-neutral-500">
                    No contacts found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
