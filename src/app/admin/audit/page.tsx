"use client";

import { useState } from 'react';
import { Search, Filter, Download, Activity, AlertCircle } from 'lucide-react';

const DUMMY_LOGS = [
  { id: 'LOG-001', actor: 'Soon Kiat Ker', action: 'EXPORT_LEADS', resource: 'Corporate Leads (CSV)', ip: '192.168.1.45', time: '10 mins ago', status: 'Success' },
  { id: 'LOG-002', actor: 'System', action: 'WEBHOOK_FAILED', resource: 'HubSpot Sync (Lead #1042)', ip: 'N/A', time: '15 mins ago', status: 'Failed' },
  { id: 'LOG-003', actor: 'Jane Doe', action: 'STATUS_CHANGE', resource: 'Lead #1040 (Proposal Sent)', ip: '10.0.0.12', time: '2 hours ago', status: 'Success' },
  { id: 'LOG-004', actor: 'Soon Kiat Ker', action: 'PUBLISH_COURSE', resource: 'Course: AI Strategy', ip: '192.168.1.45', time: '5 hours ago', status: 'Success' },
  { id: 'LOG-005', actor: 'Jane Doe', action: 'LOGIN', resource: 'Admin Panel', ip: '10.0.0.12', time: '1 day ago', status: 'Success' },
  { id: 'LOG-006', actor: 'Unknown', action: 'LOGIN_FAILED', resource: 'Admin Panel', ip: '45.22.11.9', time: '2 days ago', status: 'Failed' },
];

export default function AuditLogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterAction, setFilterAction] = useState('');

  const filteredLogs = DUMMY_LOGS.filter(l => 
    (filterAction === '' || l.action.includes(filterAction)) &&
    (l.actor.toLowerCase().includes(searchTerm.toLowerCase()) || 
     l.resource.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Audit Log</h1>
          <p className="text-neutral-400 text-sm mt-1">Chronological record of all system events and user actions.</p>
        </div>
        <button className="whitespace-nowrap px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
          <Download size={16} /> Export Logs
        </button>
      </div>

      <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
        <div className="p-4 border-b border-neutral-800 bg-neutral-950/50 flex flex-col sm:flex-row items-center gap-4">
          <div className="relative w-full sm:w-64">
            <input 
              type="text" 
              placeholder="Search actor or resource..." 
              className="bg-neutral-950 border border-neutral-800 text-white rounded-lg py-2 pl-9 pr-4 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search size={16} className="absolute left-3 top-2.5 text-neutral-500" />
          </div>
          <select 
            className="bg-neutral-950 border border-neutral-800 text-white rounded-lg py-2 px-3 text-sm focus:outline-none focus:border-blue-500 appearance-none w-full sm:w-auto"
            value={filterAction}
            onChange={(e) => setFilterAction(e.target.value)}
          >
            <option value="">All Actions</option>
            <option value="LOGIN">Logins</option>
            <option value="EXPORT">Exports</option>
            <option value="PUBLISH">Publish Events</option>
            <option value="FAILED">Failures</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left whitespace-nowrap">
            <thead className="text-xs text-neutral-500 uppercase bg-neutral-950/50">
              <tr>
                <th className="px-6 py-4 font-medium">Event ID</th>
                <th className="px-6 py-4 font-medium">Action & Resource</th>
                <th className="px-6 py-4 font-medium">Actor</th>
                <th className="px-6 py-4 font-medium">IP Address</th>
                <th className="px-6 py-4 font-medium text-right">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800">
              {filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-neutral-800/50 transition-colors">
                  <td className="px-6 py-4 font-mono text-xs text-neutral-500">
                    {log.id}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className={`font-medium text-xs uppercase tracking-wider ${log.status === 'Failed' ? 'text-red-400' : 'text-neutral-300'}`}>
                        {log.action}
                      </span>
                      <span className="text-neutral-500 text-sm mt-0.5">{log.resource}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {log.actor === 'System' ? (
                        <Activity size={14} className="text-blue-500" />
                      ) : log.actor === 'Unknown' ? (
                        <AlertCircle size={14} className="text-amber-500" />
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-neutral-800 flex items-center justify-center text-[10px] font-bold text-white shrink-0">
                          {log.actor.charAt(0)}
                        </div>
                      )}
                      <span className="text-neutral-300">{log.actor}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono text-xs text-neutral-400">
                    {log.ip}
                  </td>
                  <td className="px-6 py-4 text-neutral-400 text-right text-xs">
                    {log.time}
                  </td>
                </tr>
              ))}
              {filteredLogs.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-neutral-500">
                    No logs found.
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
