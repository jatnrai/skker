"use client";

import { useState, useEffect } from 'react';
import { API_BASE_URL } from '@/app/environment/env';
import { Search, Plus, Calendar, Clock, MapPin, Users, MoreVertical, Edit, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function SessionsList() {
  const [sessions, setSessions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  async function fetchSessions() {
    try {
      const res = await fetch(`${API_BASE_URL}/academy/sessions`);
      if (res.ok) {
        const data = await res.json();
        setSessions(data.sessions || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchSessions();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-admin-text">Sessions & Calendar</h1>
          <p className="text-admin-muted text-sm mt-1">Manage scheduled delivery of all course types.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link 
            href="/admin/academy/sessions/new"
            className="flex items-center gap-2 bg-[#00E5FF] hover:bg-[#00CBE6] text-black px-4 py-2 rounded-lg text-sm font-bold transition-colors"
          >
            <Plus size={16} /> Schedule Session
          </Link>
        </div>
      </div>
      
      <div className="bg-admin-surface border border-admin-border rounded-xl overflow-hidden flex flex-col min-h-[400px]">
        <div className="p-4 border-b border-admin-border flex items-center justify-between shrink-0">
          <div className="relative w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-muted" />
            <input 
              type="text" 
              placeholder="Search sessions..." 
              className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2 pl-9 pr-4 text-sm focus:outline-none focus:border-blue-500 transition-all placeholder:text-admin-muted"
            />
          </div>
          <div className="flex gap-2">
            <select className="bg-admin-bg border border-admin-border text-admin-text text-sm rounded-lg px-3 py-2">
              <option>All Formats</option>
              <option>Virtual</option>
              <option>In-Person</option>
            </select>
          </div>
        </div>
        
        <div className="flex-1 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-admin-bg/50 border-b border-admin-border text-xs font-semibold text-admin-muted uppercase tracking-wider">
                <th className="p-4">Course & Type</th>
                <th className="p-4">Schedule</th>
                <th className="p-4">Location</th>
                <th className="p-4">Capacity</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-admin-border/50">
              {isLoading ? (
                <tr><td colSpan={6} className="p-8 text-center text-admin-muted">Loading...</td></tr>
              ) : sessions.length === 0 ? (
                <tr><td colSpan={6} className="p-8 text-center text-admin-muted">No sessions scheduled.</td></tr>
              ) : sessions.map(session => (
                <tr key={session.id} className="hover:bg-admin-bg/20 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-admin-bg border border-admin-border flex items-center justify-center shrink-0">
                        <Calendar size={16} className="text-admin-muted" />
                      </div>
                      <div>
                        <p className="font-semibold text-admin-text text-sm">{session.course_title}</p>
                        <p className="text-xs text-admin-muted mt-0.5">{session.trainingType} • {session.instructor || 'Unassigned'}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2 text-sm text-admin-text mb-1">
                      <Calendar size={12} className="text-admin-muted" />
                      {session.startDate ? new Date(session.startDate).toLocaleDateString() : 'TBD'}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-admin-muted">
                      <Clock size={12} />
                      {session.startDate ? new Date(session.startDate).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : 'TBD'}
                    </div>
                  </td>
                  <td className="p-4 text-sm text-admin-text">
                    <div className="flex items-center gap-2">
                      <MapPin size={12} className="text-admin-muted" />
                      {session.deliveryFormat}
                    </div>
                  </td>
                  <td className="p-4 text-sm">
                    <div className="flex items-center gap-2 text-admin-text">
                      <Users size={14} className="text-admin-muted" />
                      <span className="font-medium">0</span> / {session.capacity}
                    </div>
                    {session.registrationStatus === 'Full' && (
                      <span className="text-[10px] text-amber-400 font-bold uppercase mt-1 block">Waitlist Active</span>
                    )}
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border uppercase tracking-wider
                      ${session.status === 'Scheduled' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 
                      session.status === 'In-Progress' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                      'bg-admin-bg text-admin-muted border-admin-border'}`}
                    >
                      {session.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="p-1.5 text-admin-muted hover:text-white bg-admin-bg border border-admin-border rounded hover:border-admin-primary transition-colors">
                      <MoreVertical size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
