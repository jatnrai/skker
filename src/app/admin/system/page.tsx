"use client";

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { retryJob, updateRetentionRule } from '@/store/slices/adminSlice';
import { 
  Settings, Link as LinkIcon, Activity, Database, Key, ShieldCheck, 
  RotateCcw, AlertTriangle, CheckCircle2, HardDrive, Trash2
} from 'lucide-react';

export default function SystemOperations() {
  const dispatch = useDispatch();
  const system = useSelector((state: RootState) => state.admin.system);
  
  const [activeTab, setActiveTab] = useState<'integrations' | 'jobs' | 'data'>('integrations');
  const [isBackingUp, setIsBackingUp] = useState(false);

  const handleRetry = (id: string) => {
    dispatch(retryJob(id));
  };

  const handleBackup = () => {
    setIsBackingUp(true);
    setTimeout(() => {
      setIsBackingUp(false);
      alert('Backup completed successfully.');
    }, 2000);
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-white flex items-center gap-3">
            <Settings size={24} className="text-neutral-400" />
            System Operations
          </h1>
          <p className="text-neutral-400 text-sm mt-1">Manage integrations, background tasks, and data compliance.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-neutral-800">
        {[
          { id: 'integrations', label: 'Integrations', icon: LinkIcon },
          { id: 'jobs', label: 'Background Jobs', icon: Activity },
          { id: 'data', label: 'Data & Backups', icon: Database }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors border-b-2 ${
              activeTab === tab.id 
                ? 'border-blue-500 text-blue-400 bg-blue-500/5' 
                : 'border-transparent text-neutral-400 hover:text-neutral-200 hover:border-neutral-700'
            }`}
          >
            <tab.icon size={16} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        
        {/* Integrations */}
        {activeTab === 'integrations' && (
          <div className="space-y-6">
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Key size={18} className="text-neutral-400"/>
                Connected Services
              </h3>
              <p className="text-sm text-neutral-400 mb-6">
                Manage API keys and webhooks. All services follow least-privilege principles.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {system.integrations.map(integration => (
                  <div key={integration.id} className="bg-neutral-950 border border-neutral-800 rounded-lg p-5 flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-white">{integration.name}</h4>
                        <span className="text-xs text-neutral-500">{integration.provider}</span>
                      </div>
                      <div className={`p-1.5 rounded-full ${
                        integration.status === 'Connected' ? 'bg-emerald-500/10 text-emerald-400' :
                        integration.status === 'Error' ? 'bg-red-500/10 text-red-400' :
                        'bg-neutral-800 text-neutral-400'
                      }`}>
                        {integration.status === 'Connected' ? <CheckCircle2 size={16} /> :
                         integration.status === 'Error' ? <AlertTriangle size={16} /> :
                         <Settings size={16} />}
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-neutral-800/50">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-neutral-500">Status</span>
                        <span className={integration.status === 'Error' ? 'text-red-400' : 'text-neutral-300'}>{integration.status}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-neutral-500">Last Sync</span>
                        <span className="text-neutral-300">{integration.lastSync}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <ShieldCheck size={18} className="text-neutral-400"/>
                Webhook Security
              </h3>
              <div className="flex items-center justify-between p-4 bg-neutral-950 border border-neutral-800 rounded-lg">
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Enforce Signature Verification</h4>
                  <p className="text-xs text-neutral-400">Reject incoming webhooks lacking a valid cryptographic signature.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked readOnly />
                  <div className="w-11 h-6 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Background Jobs */}
        {activeTab === 'jobs' && (
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
            <div className="p-6 border-b border-neutral-800">
              <h3 className="text-lg font-bold text-white mb-1">Job Queue & Errors</h3>
              <p className="text-sm text-neutral-400">Monitor automated tasks like email delivery, CRM syncs, and reporting.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-neutral-400 uppercase bg-neutral-950 border-b border-neutral-800">
                  <tr>
                    <th className="px-6 py-4 font-medium">Job ID & Name</th>
                    <th className="px-6 py-4 font-medium">Timestamp</th>
                    <th className="px-6 py-4 font-medium">Status / Error</th>
                    <th className="px-6 py-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800">
                  {system.jobs.map(job => (
                    <tr key={job.id} className="hover:bg-neutral-800/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="font-semibold text-white">{job.name}</span>
                          <span className="text-xs text-neutral-500 font-mono mt-1">{job.id}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-neutral-400">
                        {job.date}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col gap-1">
                          <span className={`inline-flex items-center w-fit px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                            job.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                            job.status === 'Failed' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                            'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                          }`}>
                            {job.status}
                          </span>
                          {job.error && (
                            <span className="text-xs text-red-400 mt-1">{job.error}</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        {job.status === 'Failed' && (
                          <button 
                            onClick={() => handleRetry(job.id)}
                            className="inline-flex items-center gap-1.5 text-xs font-medium bg-neutral-800 hover:bg-neutral-700 text-white px-3 py-1.5 rounded transition-colors border border-neutral-700"
                          >
                            <RotateCcw size={12} /> Retry
                          </button>
                        )}
                        {job.status === 'Pending' && (
                          <span className="text-xs text-neutral-500 italic">Retrying...</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Data & Backups */}
        {activeTab === 'data' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Retention Rules */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Retention Rules</h3>
              <p className="text-sm text-neutral-400 mb-6">Configure how long data is stored before automated pruning.</p>
              
              <div className="space-y-4">
                {system.retentionRules.map(rule => (
                  <div key={rule.id} className="flex items-center justify-between p-4 bg-neutral-950 border border-neutral-800 rounded-lg">
                    <span className="text-sm font-medium text-white">{rule.entity}</span>
                    <select 
                      value={rule.duration}
                      onChange={(e) => dispatch(updateRetentionRule({ id: rule.id, duration: e.target.value }))}
                      className="bg-neutral-900 border border-neutral-700 text-white rounded-lg py-1.5 px-3 text-sm focus:outline-none focus:border-blue-500 w-32"
                    >
                      <option>30 Days</option>
                      <option>90 Days</option>
                      <option>1 Year</option>
                      <option>3 Years</option>
                      <option>Indefinite</option>
                    </select>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {/* Backups */}
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <HardDrive size={18} className="text-neutral-400"/> Database Backups
                </h3>
                <p className="text-sm text-neutral-400 mb-6">
                  Automated backups run daily at 02:00 UTC and are stored externally.
                </p>
                <div className="flex items-center justify-between p-4 bg-neutral-950 border border-neutral-800 rounded-lg">
                  <div>
                    <div className="text-sm font-bold text-white">Latest Backup</div>
                    <div className="text-xs text-neutral-500 mt-1">Today, 02:00 AM — db_backup_20260825.sql.gz (14.2 MB)</div>
                  </div>
                  <button 
                    onClick={handleBackup}
                    disabled={isBackingUp}
                    className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shrink-0"
                  >
                    {isBackingUp ? 'Running...' : 'Run Backup Now'}
                  </button>
                </div>
              </div>

              {/* Privacy */}
              <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                  <Trash2 size={18} /> Privacy & Compliance
                </h3>
                <p className="text-sm text-neutral-400 mb-4">
                  Execute "Right to be Forgotten" requests. This will permanently redact personal data across leads, bookings, and logs.
                </p>
                <div className="flex gap-2">
                  <input type="email" placeholder="user@domain.com" className="bg-neutral-950 border border-neutral-800 text-white rounded-lg py-2 px-3 text-sm focus:outline-none focus:border-red-500 w-full" />
                  <button className="bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 px-4 py-2 rounded-lg text-sm font-medium transition-colors shrink-0">
                    Execute Purge
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
