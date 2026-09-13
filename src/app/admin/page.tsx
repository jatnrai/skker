"use client";

import { 
  Users, 
  TrendingUp, 
  Calendar, 
  AlertCircle, 
  Activity, 
  BookOpen, 
  CreditCard,
  ArrowRight,
  Briefcase,
  Video
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export default function AdminDashboard() {
  const { leads, courses, sessions, bookings } = useSelector((state: RootState) => state.admin);

  const newLeadsCount = leads.filter(l => l.status === 'New').length;
  const activeProposals = leads.filter(l => l.status === 'Proposal Sent' || l.status === 'Negotiation').length;
  
  const totalLearners = courses.reduce((sum, c) => sum + c.learners, 0);
  const activeCohorts = sessions.filter(s => s.status === 'Open').length;
  const publishedCourses = courses.filter(c => c.status === 'Published').length;
  const draftCourses = courses.filter(c => c.status === 'Draft').length;

  const paidBookings = bookings.filter(b => b.payment === 'Paid').length;
  const pendingBookings = bookings.filter(b => b.payment === 'Pending').length;

  const router = useRouter();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-admin-text">Dashboard</h1>
          <p className="text-admin-muted text-sm mt-1">Overview of your operations and recent activity.</p>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
          <Link href="/admin/content" className="whitespace-nowrap px-3 py-1.5 bg-admin-primary hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors">
            + New Content
          </Link>
          <Link href="/admin/academy/new-session" className="whitespace-nowrap px-3 py-1.5 bg-admin-surface border border-admin-border hover:bg-admin-border text-admin-text rounded-lg text-sm font-medium transition-colors">
            + New Session
          </Link>
          <Link href="/admin/leads?status=New" className="whitespace-nowrap px-3 py-1.5 bg-admin-surface border border-admin-border hover:bg-admin-border text-admin-text rounded-lg text-sm font-medium transition-colors">
            View Leads
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* New corporate enquiries */}
        <div className="bg-admin-surface border border-admin-border rounded-xl p-5 hover:border-admin-primary transition-colors">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-admin-muted">New Enquiries</p>
              <h3 className="text-3xl font-bold mt-2 text-admin-text">{newLeadsCount}</h3>
            </div>
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Users className="text-blue-500" size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-emerald-500 font-medium flex items-center">
              <TrendingUp size={14} className="mr-1" />
              +3 (7d)
            </span>
            <span className="text-admin-muted ml-2">45 in 30d</span>
          </div>
          <Link href="/admin/leads?status=New" className="mt-4 text-xs text-blue-500 hover:text-blue-400 font-medium block">
            View New Leads &rarr;
          </Link>
        </div>

        {/* Lead pipeline */}
        <div className="bg-admin-surface border border-admin-border rounded-xl p-5 hover:border-admin-primary transition-colors">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-admin-muted">Pipeline Value</p>
              <h3 className="text-3xl font-bold mt-2 text-admin-text">RM 45k</h3>
            </div>
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <TrendingUp className="text-purple-500" size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="text-admin-text font-medium">{activeProposals} active</span>
            <span className="text-red-400 font-medium bg-red-500/10 px-2 py-0.5 rounded">2 overdue</span>
          </div>
        </div>

        {/* Course health */}
        <div className="bg-admin-surface border border-admin-border rounded-xl p-5 hover:border-admin-primary transition-colors">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-admin-muted">Course Health</p>
              <h3 className="text-3xl font-bold mt-2 text-admin-text">{courses.length}</h3>
            </div>
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <BookOpen className="text-emerald-500" size={20} />
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-1 text-xs">
            <div className="flex justify-between text-admin-muted">
              <span>Total Learners</span>
              <span className="text-admin-text">{totalLearners}</span>
            </div>
            <div className="flex justify-between text-admin-muted">
              <span>Active Cohorts</span>
              <span className="text-admin-text">{activeCohorts}</span>
            </div>
            <div className="flex justify-between text-admin-muted">
              <span>Courses</span>
              <span className="text-admin-text">{publishedCourses} Published / {draftCourses} Draft</span>
            </div>
          </div>
        </div>

        {/* Recent bookings count */}
        <div className="bg-admin-surface border border-admin-border rounded-xl p-5 hover:border-admin-primary transition-colors">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-admin-muted">Total Bookings</p>
              <h3 className="text-3xl font-bold mt-2 text-admin-text">{bookings.length}</h3>
            </div>
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <CreditCard className="text-amber-500" size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-sm">
             <span className="text-emerald-400 font-medium">{paidBookings} Paid</span>
             <span className="text-amber-400 font-medium">{pendingBookings} Pending</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Main Feed - Left 2 columns */}
        <div className="xl:col-span-2 space-y-6">
          
          {/* Upcoming Sessions & Recent Bookings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Upcoming Sessions */}
            <div className="bg-admin-surface border border-admin-border rounded-xl overflow-hidden flex flex-col">
              <div className="p-5 border-b border-admin-border flex justify-between items-center">
                <h3 className="font-semibold flex items-center gap-2 text-admin-text">
                  <Calendar size={18} className="text-emerald-500" />
                  Upcoming Sessions
                </h3>
                <Link href="/admin/academy" className="text-sm text-emerald-500 hover:text-emerald-400 flex items-center transition-colors">
                  View all <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
              <div className="p-5 flex flex-col gap-4 flex-1">
                {sessions.slice(0, 2).map((s) => (
                  <div key={s.id} className="flex items-start justify-between p-4 rounded-lg border border-admin-border bg-admin-bg">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-admin-surface border border-admin-border flex flex-col items-center justify-center shrink-0">
                        <span className="text-xs font-medium text-admin-muted uppercase">
                          {s.date.substring(0, 3)}
                        </span>
                        <span className="text-lg font-bold text-admin-text leading-none mt-0.5">
                          {s.date.split(' ')[1] || '01'}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-medium text-admin-text line-clamp-1">{s.course}</h4>
                        <div className={`mt-2 text-xs font-medium inline-block px-2 py-0.5 rounded-full ${s.status === 'Full' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'}`}>
                          {s.status}
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-sm font-medium text-emerald-400">{s.capacity}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Bookings */}
            <div className="bg-admin-surface border border-admin-border rounded-xl overflow-hidden flex flex-col">
              <div className="p-5 border-b border-admin-border flex justify-between items-center">
                <h3 className="font-semibold flex items-center gap-2 text-admin-text">
                  <Video size={18} className="text-blue-500" />
                  Recent Bookings
                </h3>
                <Link href="/admin/bookings" className="text-sm text-blue-500 hover:text-blue-400 flex items-center transition-colors">
                  View all <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
              <div className="p-5 flex flex-col gap-4 flex-1">
                {bookings.slice(0, 2).map((b) => (
                  <div key={b.id} className="flex items-start justify-between p-4 rounded-lg border border-admin-border bg-admin-bg">
                    <div>
                      <h4 className="font-medium text-admin-text">{b.client}</h4>
                      <p className="text-sm text-admin-muted mt-0.5">{b.service}</p>
                      <div className="mt-2 text-xs text-admin-muted flex gap-2">
                         <span className={b.payment === 'Paid' ? 'text-emerald-400' : 'text-amber-400'}>{b.payment}</span> • <span>{b.date}</span>
                      </div>
                    </div>
                    <button className="text-xs bg-admin-surface border border-admin-border hover:bg-admin-border text-admin-text px-2 py-1 rounded">Link &rarr;</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Lead Pipeline */}
          <div className="bg-admin-surface border border-admin-border rounded-xl overflow-hidden">
            <div className="p-5 border-b border-admin-border flex justify-between items-center">
              <h3 className="font-semibold flex items-center gap-2 text-admin-text">
                <Briefcase size={18} className="text-blue-500" />
                Latest Corporate Leads
              </h3>
              <Link href="/admin/leads" className="text-sm text-blue-500 hover:text-blue-400 flex items-center transition-colors">
                View all <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left whitespace-nowrap">
                <thead className="text-xs text-admin-muted uppercase bg-admin-bg border-b border-admin-border">
                  <tr>
                    <th className="px-5 py-3 font-medium">Company</th>
                    <th className="px-5 py-3 font-medium">Topic</th>
                    <th className="px-5 py-3 font-medium">Status</th>
                    <th className="px-5 py-3 font-medium text-right">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-admin-border">
                  {leads.slice(0, 3).map(l => (
                    <tr 
                      key={l.id} 
                      onClick={() => router.push(`/admin/leads?id=${l.id}`)}
                      className="hover:bg-admin-bg transition-colors cursor-pointer group"
                    >
                      <td className="px-5 py-3 font-medium text-admin-text group-hover:text-blue-500 transition-colors">{l.company}</td>
                      <td className="px-5 py-3 text-admin-text">{l.topic}</td>
                      <td className="px-5 py-3">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20`}>
                          {l.status}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-admin-muted text-right">{l.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar Feed - Right Column */}
        <div className="space-y-6">
          
          {/* Operational Alerts */}
          <div className="bg-admin-surface border border-admin-border rounded-xl overflow-hidden">
            <div className="p-5 border-b border-admin-border">
              <h3 className="font-semibold flex items-center gap-2 text-admin-text">
                <AlertCircle size={18} className="text-red-500" />
                Operational Alerts
              </h3>
            </div>
            <div className="p-5 flex flex-col gap-4">
              <div className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0"></div>
                <div>
                  <p className="text-sm text-admin-text font-medium">Failed Webhook</p>
                  <p className="text-xs text-admin-muted mt-0.5">CRM sync failed for Lead #1042. Retrying in 5 mins.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0"></div>
                <div>
                  <p className="text-sm text-admin-text font-medium">Expired Integration</p>
                  <p className="text-xs text-admin-muted mt-0.5">Zoom OAuth token expires in 2 days. Re-authenticate.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0"></div>
                <div>
                  <p className="text-sm text-admin-text font-medium">Failed Email</p>
                  <p className="text-xs text-admin-muted mt-0.5">Booking confirmation BK-4091 bounced.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Log */}
          <div className="bg-admin-surface border border-admin-border rounded-xl overflow-hidden">
            <div className="p-5 border-b border-admin-border">
              <h3 className="font-semibold flex items-center gap-2 text-admin-text">
                <Activity size={18} className="text-admin-muted" />
                Recent Admin Activity
              </h3>
            </div>
            <div className="p-5">
              <div className="relative pl-4 border-l border-admin-border space-y-6 pb-2">
                <div className="relative">
                  <div className="absolute -left-[21px] w-2.5 h-2.5 rounded-full bg-admin-muted border-2 border-admin-bg"></div>
                  <p className="text-sm text-admin-text">Soon Kiat Ker <span className="text-admin-muted">exported lead list</span></p>
                  <p className="text-xs text-admin-muted mt-1">10 minutes ago</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[21px] w-2.5 h-2.5 rounded-full bg-admin-muted border-2 border-admin-bg"></div>
                  <p className="text-sm text-admin-text">Soon Kiat Ker <span className="text-admin-muted">published course</span> "AI Strategy"</p>
                  <p className="text-xs text-admin-muted mt-1">2 hours ago</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[21px] w-2.5 h-2.5 rounded-full bg-admin-muted border-2 border-admin-bg"></div>
                  <p className="text-sm text-admin-text">System <span className="text-admin-muted">created booking for</span> Jane Doe</p>
                  <p className="text-xs text-admin-muted mt-1">Yesterday, 4:30 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}


