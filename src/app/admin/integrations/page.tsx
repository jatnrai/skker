"use client";

import { CheckCircle2, AlertCircle, RefreshCw, Plus, ExternalLink } from 'lucide-react';

const INTEGRATIONS = [
  { id: 'google', name: 'Google Workspace', type: 'SSO & Calendar', status: 'Connected', lastSync: '10 mins ago', desc: 'Syncs upcoming bookings to your Google Calendar and enables Google Meet link generation.' },
  { id: 'stripe', name: 'Stripe', type: 'Payments', status: 'Connected', lastSync: 'Live', desc: 'Processes payments for public courses and generates invoices.' },
  { id: 'hubspot', name: 'HubSpot', type: 'CRM', status: 'Failed', lastSync: '15 mins ago', desc: 'Syncs corporate leads to HubSpot CRM. Requires re-authentication.' },
  { id: 'resend', name: 'Resend', type: 'Email', status: 'Connected', lastSync: 'Live', desc: 'Transactional email provider for booking confirmations and system alerts.' },
];

export default function IntegrationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Integrations</h1>
          <p className="text-admin-muted text-sm mt-1">Manage third-party connections and API webhooks.</p>
        </div>
        <button className="whitespace-nowrap px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
          <Plus size={16} /> Add Integration
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INTEGRATIONS.map((integration) => (
          <div key={integration.id} className="bg-admin-surface border border-admin-border rounded-xl p-5 flex flex-col h-full hover:border-admin-primary transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-admin-text">{integration.name}</h3>
                <span className="text-xs font-medium text-admin-muted uppercase tracking-wider">{integration.type}</span>
              </div>
              <div className={`p-1.5 rounded-full ${integration.status === 'Connected' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'}`}>
                {integration.status === 'Connected' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
              </div>
            </div>
            
            <p className="text-sm text-admin-muted mt-4 flex-1">
              {integration.desc}
            </p>
            
            <div className="mt-6 pt-4 border-t border-admin-border flex items-center justify-between">
              <span className="text-xs text-admin-muted flex items-center gap-1.5">
                <RefreshCw size={12} className={integration.status === 'Connected' ? 'text-admin-muted' : 'text-red-400'} />
                {integration.lastSync}
              </span>
              <button className="text-xs font-medium text-blue-500 hover:text-blue-400 transition-colors flex items-center gap-1">
                Configure <ExternalLink size={12} />
              </button>
            </div>
          </div>
        ))}
        
        {/* Empty State / Add New Card */}
        <button className="bg-admin-bg border border-admin-border border-dashed rounded-xl p-5 flex flex-col items-center justify-center h-full hover:border-admin-muted hover:bg-admin-surface transition-colors min-h-[200px] group">
          <div className="w-10 h-10 rounded-full bg-admin-surface group-hover:bg-admin-surface border border-admin-border flex items-center justify-center text-admin-muted transition-colors mb-3">
            <Plus size={20} />
          </div>
          <h3 className="font-medium text-admin-text">Explore Integrations</h3>
          <p className="text-xs text-admin-muted mt-1">Connect more tools</p>
        </button>
      </div>
    </div>
  );
}
