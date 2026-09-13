"use client";

import { useState, useEffect } from 'react';
import { API_BASE_URL } from '@/app/environment/env';
import { GraduationCap, Calendar, Users, DollarSign, Activity, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function AcademyOverview() {
  const [stats, setStats] = useState({
    courses: 0,
    sessions: 0,
    enrolments: 0,
    revenue: 0,
    alerts: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be a single /api/academy/stats endpoint.
    // For now, we'll fetch them individually to aggregate since we have the CRUD endpoints.
    const fetchStats = async () => {
      try {
        const [cRes, sRes, eRes] = await Promise.all([
          fetch(`${API_BASE_URL}/academy/courses`),
          fetch(`${API_BASE_URL}/academy/sessions`),
          fetch(`${API_BASE_URL}/academy/enrolments`)
        ]);
        
        let cCount = 0, sCount = 0, eCount = 0;
        
        if (cRes.ok) {
          const data = await cRes.json();
          cCount = data.courses?.length || 0;
        }
        if (sRes.ok) {
          const data = await sRes.json();
          sCount = data.sessions?.length || 0;
        }
        if (eRes.ok) {
          const data = await eRes.json();
          eCount = data.enrolments?.length || 0;
        }
        
        setStats({
          courses: cCount,
          sessions: sCount,
          enrolments: eCount,
          revenue: eCount * 450, // Mock revenue based on enrolments
          alerts: 1 // Mock alert for demo
        });
      } catch (err) {
        console.error("Failed to fetch academy stats", err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchStats();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-admin-text">Academy Overview</h1>
        <p className="text-admin-muted text-sm mt-1">Metrics and operational alerts across all training models.</p>
      </div>
      
      {stats.alerts > 0 && (
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 flex items-start gap-3">
          <AlertTriangle size={20} className="text-amber-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold text-amber-400">Operational Alerts ({stats.alerts})</h4>
            <ul className="text-xs text-amber-400/80 mt-1 space-y-1 list-disc list-inside">
              <li>1 Public Class session is starting next week with 0 enrolments.</li>
            </ul>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Courses */}
        <Link href="/admin/academy/public" className="bg-admin-surface border border-admin-border rounded-xl p-5 flex flex-col gap-2 hover:bg-admin-bg transition-colors group">
          <div className="flex items-center gap-2 text-admin-muted text-sm font-medium uppercase tracking-wider group-hover:text-blue-400 transition-colors">
            <GraduationCap size={16} /> Total Courses
          </div>
          <div className="text-3xl font-bold text-admin-text">{isLoading ? '-' : stats.courses}</div>
        </Link>
        
        {/* Upcoming Sessions */}
        <Link href="/admin/academy/sessions" className="bg-admin-surface border border-admin-border rounded-xl p-5 flex flex-col gap-2 hover:bg-admin-bg transition-colors group">
          <div className="flex items-center gap-2 text-admin-muted text-sm font-medium uppercase tracking-wider group-hover:text-blue-400 transition-colors">
            <Calendar size={16} /> Upcoming Sessions
          </div>
          <div className="text-3xl font-bold text-admin-text">{isLoading ? '-' : stats.sessions}</div>
        </Link>
        
        {/* Enrolments */}
        <Link href="/admin/academy/enrolments" className="bg-admin-surface border border-admin-border rounded-xl p-5 flex flex-col gap-2 hover:bg-admin-bg transition-colors group">
          <div className="flex items-center gap-2 text-admin-muted text-sm font-medium uppercase tracking-wider group-hover:text-blue-400 transition-colors">
            <Users size={16} /> Enrolments
          </div>
          <div className="text-3xl font-bold text-admin-text">{isLoading ? '-' : stats.enrolments}</div>
        </Link>
        
        {/* Revenue */}
        <div className="bg-admin-surface border border-admin-border rounded-xl p-5 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-admin-muted text-sm font-medium uppercase tracking-wider">
            <DollarSign size={16} className="text-emerald-400" /> Pipeline Revenue
          </div>
          <div className="text-3xl font-bold text-admin-text">{isLoading ? '-' : `RM ${stats.revenue}`}</div>
        </div>
      </div>
      
      {/* Recent Activity */}
      <div className="bg-admin-surface border border-admin-border rounded-xl overflow-hidden flex flex-col min-h-[300px]">
        <div className="p-5 border-b border-admin-border flex items-center justify-between shrink-0">
          <h3 className="text-sm font-bold text-admin-text flex items-center gap-2"><Activity size={16} /> Recent Activity</h3>
        </div>
        <div className="flex-1 p-8 flex flex-col items-center justify-center text-center text-admin-muted">
          <Activity size={32} className="mb-3 opacity-20" />
          <p className="text-sm">No recent activity to display.</p>
        </div>
      </div>
    </div>
  );
}
