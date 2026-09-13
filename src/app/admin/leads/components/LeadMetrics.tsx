import { Lead } from '@/store/slices/adminSlice';
import { CheckCircle2, AlertCircle, Briefcase } from 'lucide-react';

export default function LeadMetrics({ leads }: { leads: Lead[] }) {
  const newLeadsCount = leads.filter(l => l.status === 'New').length;
  const activeDealsCount = leads.filter(l => !['Won', 'Lost', 'New'].includes(l.status)).length;
  const pipelineValue = leads
    .filter(l => !['Lost'].includes(l.status))
    .reduce((sum, l) => {
      const val = parseFloat(l.expectedValue as any) || 0;
      const prob = (l.probability || 0) / 100;
      return sum + (val * prob);
    }, 0);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-admin-surface border border-admin-border rounded-xl p-5 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-admin-muted text-sm font-medium uppercase tracking-wider">
          <CheckCircle2 size={16} className="text-emerald-400" /> Total Pipeline Value
        </div>
        <div className="text-3xl font-bold text-admin-text">RM {pipelineValue.toLocaleString()}</div>
      </div>
      <div className="bg-admin-surface border border-admin-border rounded-xl p-5 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-admin-muted text-sm font-medium uppercase tracking-wider">
          <AlertCircle size={16} className="text-blue-400" /> New Leads (Unreviewed)
        </div>
        <div className="text-3xl font-bold text-admin-text">{newLeadsCount}</div>
      </div>
      <div className="bg-admin-surface border border-admin-border rounded-xl p-5 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-admin-muted text-sm font-medium uppercase tracking-wider">
          <Briefcase size={16} className="text-amber-400" /> Active Deals
        </div>
        <div className="text-3xl font-bold text-admin-text">{activeDealsCount}</div>
      </div>
    </div>
  );
}
