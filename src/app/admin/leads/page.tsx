"use client";

import { useState, useEffect } from 'react';
import { Lead } from '@/store/slices/adminSlice';
import { API_BASE_URL } from '@/app/environment/env';
import { Download, Trash2, Plus } from 'lucide-react';

import LeadMetrics from './components/LeadMetrics';
import LeadList from './components/LeadList';
import LeadDetail from './components/LeadDetail';
import AddLeadModal from './components/AddLeadModal';

export default function CorporateLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);

  const fetchLeads = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/leads`);
      if (res.ok) {
        const data = await res.json();
        setLeads(data.leads || []);
      }
    } catch (err) {
      console.error("Failed to fetch leads", err);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null);
  const [selectedLeads, setSelectedLeads] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'details' | 'crm' | 'activity'>('crm');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newLead, setNewLead] = useState<Partial<Lead>>({
    company: '', contact: '', email: '', phone: '', topic: '', timeline: '', value: '', source: '', serviceType: 'Training', notes: '', expectedValue: 0, probability: 10
  });

  // Filtered Leads
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.company.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          lead.contact.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          lead.email?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === '' || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Pagination
  const totalPages = Math.ceil(filteredLeads.length / itemsPerPage);
  const paginatedLeads = filteredLeads.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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

  // CRM Update Handlers
  const handleUpdateLeadDetail = async (id: string, updates: Partial<Lead>) => {
    // Optimistic UI update
    setLeads(prev => prev.map(l => l.id === id ? { ...l, ...updates } : l));
    
    try {
      await fetch(`${API_BASE_URL}/leads/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      });
    } catch (err) {
      console.error("Failed to update lead", err);
    }
  };

  const handleStatusChange = (newStatus: string) => {
    if (selectedLeadId) {
      handleUpdateLeadDetail(selectedLeadId, { status: newStatus });
    }
  };

  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (selectedLeadId) {
      setLeads(prev => prev.map(l => l.id === selectedLeadId ? { ...l, notes: e.target.value } : l));
    }
  };
  
  const saveNotes = () => {
    if (selectedLeadId) {
      const lead = leads.find(l => l.id === selectedLeadId);
      if (lead) {
        fetch(`${API_BASE_URL}/leads/${selectedLeadId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ notes: lead.notes })
        });
      }
    }
  };

  const handleCreateLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLead.company || !newLead.contact || !newLead.topic) {
      alert("Company, Contact, and Topic/Requirements are required.");
      return;
    }
    if (!newLead.email && !newLead.phone) {
      alert("Please provide at least an email or a phone number.");
      return;
    }
    if (!newLead.source) {
      alert("Please select a Lead Source.");
      return;
    }
    
    const leadToCreate: Lead = {
      id: `LD-${Math.floor(1000 + Math.random() * 9000)}`,
      company: newLead.company,
      contact: newLead.contact,
      email: newLead.email || '',
      phone: newLead.phone || '',
      serviceType: newLead.serviceType || 'Training',
      topic: newLead.topic,
      timeline: newLead.timeline || '',
      value: newLead.value || '',
      source: newLead.source || '',
      notes: newLead.notes || '',
      status: 'New',
      pipelineStage: 'New',
      probability: newLead.probability || 10,
      expectedValue: newLead.expectedValue || 0,
      attachments: [],
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      activities: [{
        id: `act-${Date.now()}`,
        type: 'system',
        description: `Lead created manually via Admin Panel. Source: ${newLead.source}`,
        date: 'Just now'
      }]
    };

    setLeads([leadToCreate, ...leads]);
    fetch(`${API_BASE_URL}/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(leadToCreate)
    }).catch(err => console.error(err));
    setIsModalOpen(false);
    setNewLead({ company: '', contact: '', email: '', phone: '', topic: '', timeline: '', value: '', source: '', serviceType: 'Training', notes: '', expectedValue: 0, probability: 10 });
  };

  const handleExport = () => {
    if (filteredLeads.length === 0) {
      alert("No leads to export based on current filters.");
      return;
    }
    const headers = ['ID', 'Company', 'Contact', 'Email', 'Topic', 'Status', 'Date'];
    const csvContent = [
      headers.join(','),
      ...filteredLeads.map(l => 
        `"${l.id}","${l.company}","${l.contact}","${l.email}","${l.topic}","${l.status}","${l.date}"`
      )
    ].join('\\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'skker_leads_export.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const deleteSelectedLeads = async () => {
    const idsToDelete = [...selectedLeads];
    setLeads(prev => prev.filter(l => !idsToDelete.includes(l.id)));
    setSelectedLeads([]);
    setSelectedLeadId(null);
    
    try {
      await fetch(`${API_BASE_URL}/leads`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: idsToDelete })
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header & Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-admin-text">Corporate Leads</h1>
          <p className="text-admin-muted text-sm mt-1">Manage B2B training enquiries and sales pipeline.</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          {selectedLeads.length > 0 && (
            <button 
              onClick={deleteSelectedLeads}
              className="flex items-center gap-2 bg-red-500/10 text-red-400 hover:bg-red-500/20 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              <Trash2 size={16} /> Delete ({selectedLeads.length})
            </button>
          )}
          <button 
            onClick={handleExport}
            className="flex items-center gap-2 bg-admin-surface border border-admin-border hover:bg-admin-surface hover:border-admin-primary text-admin-text px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <Download size={16} /> Export CSV
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-[#00E5FF] hover:bg-[#00CBE6] text-black px-4 py-2 rounded-lg text-sm font-bold transition-colors"
          >
            <Plus size={16} /> New Lead
          </button>
        </div>
      </div>

      <LeadMetrics leads={leads} />

      {/* Split Pane Container */}
      <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-280px)] min-h-[600px]">
        <LeadList 
          filteredLeads={filteredLeads}
          paginatedLeads={paginatedLeads}
          selectedLeads={selectedLeads}
          selectedLeadId={selectedLeadId}
          toggleSelectAll={toggleSelectAll}
          toggleSelectLead={toggleSelectLead}
          setSelectedLeadId={setSelectedLeadId}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
        />

        <LeadDetail 
          selectedLead={selectedLead}
          selectedLeadId={selectedLeadId}
          setSelectedLeadId={setSelectedLeadId}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          handleStatusChange={handleStatusChange}
          handleUpdateLeadDetail={handleUpdateLeadDetail}
          handleNotesChange={handleNotesChange}
          saveNotes={saveNotes}
        />
      </div>

      <AddLeadModal 
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        newLead={newLead}
        setNewLead={setNewLead}
        handleCreateLead={handleCreateLead}
      />
    </div>
  );
}
