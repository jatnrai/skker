import { Lead } from '@/store/slices/adminSlice';
import { Search, User } from 'lucide-react';
import { statusStyles } from './constants';

interface LeadListProps {
  filteredLeads: Lead[];
  paginatedLeads: Lead[];
  selectedLeads: string[];
  selectedLeadId: string | null;
  toggleSelectAll: () => void;
  toggleSelectLead: (e: React.MouseEvent, id: string) => void;
  setSelectedLeadId: (id: string | null) => void;
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  statusFilter: string;
  setStatusFilter: (val: string) => void;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  itemsPerPage: number;
}

export default function LeadList({
  filteredLeads, paginatedLeads, selectedLeads, selectedLeadId, 
  toggleSelectAll, toggleSelectLead, setSelectedLeadId, 
  searchTerm, setSearchTerm, statusFilter, setStatusFilter, 
  currentPage, setCurrentPage, totalPages, itemsPerPage
}: LeadListProps) {
  return (
    <div className={`flex-1 flex flex-col bg-admin-surface border border-admin-border rounded-xl overflow-hidden ${selectedLeadId ? 'hidden lg:flex lg:w-1/3' : 'w-full'}`}>
      {/* Filters & Search */}
      <div className="p-4 border-b border-admin-border flex flex-col gap-3 shrink-0">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-muted" />
          <input 
            type="text" 
            placeholder="Search company, contact..." 
            className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2 pl-9 pr-4 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-admin-muted"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
        <select 
          className="bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2 px-3 text-sm focus:outline-none focus:border-blue-500 appearance-none w-full"
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="">All Statuses</option>
          {Object.keys(statusStyles).map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex items-center px-4 py-2 border-b border-admin-border bg-admin-bg sticky top-0 z-10">
          <input 
            type="checkbox" 
            className="w-4 h-4 rounded border-admin-primary bg-admin-surface border border-admin-border text-blue-500 focus:ring-blue-500/20"
            checked={selectedLeads.length === filteredLeads.length && filteredLeads.length > 0}
            onChange={toggleSelectAll}
          />
          <span className="text-xs text-admin-muted font-medium ml-3 uppercase tracking-wider">Select All</span>
        </div>
        
        <div className="divide-y divide-admin-border/50">
          {paginatedLeads.map((lead) => {
            const sStyle = statusStyles[lead.status] || statusStyles['Lost'];
            return (
              <div 
                key={lead.id} 
                onClick={() => setSelectedLeadId(lead.id)}
                className={`p-4 cursor-pointer hover:bg-admin-surface border border-admin-border/50 transition-colors flex items-start gap-3 ${selectedLeadId === lead.id ? 'bg-admin-surface border border-admin-border/80 border-l-2 border-l-blue-500' : 'border-l-2 border-l-transparent'}`}
              >
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded border-admin-primary bg-admin-surface border border-admin-border text-blue-500 focus:ring-blue-500/20 mt-1 shrink-0"
                  checked={selectedLeads.includes(lead.id)}
                  onClick={(e) => toggleSelectLead(e, lead.id)}
                  readOnly
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-sm font-semibold text-admin-text truncate">{lead.company}</h4>
                    <span className={`shrink-0 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border uppercase tracking-wider ${sStyle.bg} ${sStyle.text} ${sStyle.border}`}>
                      {lead.status}
                    </span>
                  </div>
                  <div className="text-xs text-admin-muted flex items-center gap-1.5 truncate">
                    <User size={12} /> {lead.contact}
                  </div>
                  <div className="text-xs text-admin-muted mt-2 flex items-center justify-between">
                    <span className="truncate">{lead.topic}</span>
                    <span className="shrink-0">{lead.date?.split(',')[0]}</span>
                  </div>
                </div>
              </div>
            );
          })}
          {paginatedLeads.length === 0 && (
            <div className="p-8 text-center text-admin-muted text-sm">
              No leads found.
            </div>
          )}
        </div>
      </div>
      
      {/* Pagination Controls */}
      {filteredLeads.length > 0 && (
        <div className="p-3 border-t border-admin-border flex items-center justify-between bg-admin-bg shrink-0">
          <span className="text-xs text-admin-muted font-medium">
            Showing {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, filteredLeads.length)} of {filteredLeads.length}
          </span>
          <div className="flex gap-1">
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-2 py-1 bg-admin-surface border border-admin-border rounded text-xs text-admin-text disabled:opacity-50 disabled:cursor-not-allowed hover:bg-admin-surface hover:border-admin-border"
            >
              Prev
            </button>
            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-2 py-1 bg-admin-surface border border-admin-border rounded text-xs text-admin-text disabled:opacity-50 disabled:cursor-not-allowed hover:bg-admin-surface hover:border-admin-border"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
