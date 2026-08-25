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

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-neutral-400 text-sm mt-1">Overview of your operations and recent activity.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* New corporate enquiries */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-colors">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-neutral-400">New Enquiries</p>
              <h3 className="text-3xl font-bold mt-2">{newLeadsCount}</h3>
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
            <span className="text-neutral-500 ml-2">45 in 30d</span>
          </div>
          <Link href="/admin/leads?status=New" className="mt-4 text-xs text-blue-500 hover:text-blue-400 font-medium block">
            View New Leads &rarr;
          </Link>
        </div>

        {/* Lead pipeline */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-colors">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-neutral-400">Pipeline Value</p>
              <h3 className="text-3xl font-bold mt-2">RM 45k</h3>
            </div>
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <TrendingUp className="text-purple-500" size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="text-neutral-300 font-medium">{activeProposals} active</span>
            <span className="text-red-400 font-medium bg-red-500/10 px-2 py-0.5 rounded">2 overdue</span>
          </div>
        </div>

        {/* Course health */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-colors">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-neutral-400">Course Health</p>
              <h3 className="text-3xl font-bold mt-2">{courses.length}</h3>
            </div>
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <BookOpen className="text-emerald-500" size={20} />
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-1 text-xs">
            <div className="flex justify-between text-neutral-400">
              <span>Total Learners</span>
              <span className="text-white">{totalLearners}</span>
            </div>
            <div className="flex justify-between text-neutral-400">
              <span>Active Cohorts</span>
              <span className="text-white">{activeCohorts}</span>
            </div>
            <div className="flex justify-between text-neutral-400">
              <span>Courses</span>
              <span className="text-white">{publishedCourses} Published / {draftCourses} Draft</span>
            </div>
          </div>
        </div>

        {/* Recent bookings count */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-colors">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-neutral-400">Total Bookings</p>
              <h3 className="text-3xl font-bold mt-2">{bookings.length}</h3>
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
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden flex flex-col">
              <div className="p-5 border-b border-neutral-800 flex justify-between items-center">
                <h3 className="font-semibold flex items-center gap-2">
                  <Calendar size={18} className="text-emerald-500" />
                  Upcoming Sessions
                </h3>
              </div>
              <div className="p-5 flex flex-col gap-4 flex-1">
                {sessions.slice(0, 2).map((s) => (
                  <div key={s.id} className="flex items-start justify-between p-4 rounded-lg border border-neutral-800 bg-neutral-950/50">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-neutral-800 flex flex-col items-center justify-center shrink-0">
                        <span className="text-xs font-medium text-neutral-400 uppercase">
                          {s.date.substring(0, 3)}
                        </span>
                        <span className="text-lg font-bold text-white leading-none mt-0.5">
                          {s.date.split(' ')[1] || '01'}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white line-clamp-1">{s.course}</h4>
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
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden flex flex-col">
              <div className="p-5 border-b border-neutral-800 flex justify-between items-center">
                <h3 className="font-semibold flex items-center gap-2">
                  <Video size={18} className="text-blue-500" />
                  Recent Bookings
                </h3>
              </div>
              <div className="p-5 flex flex-col gap-4 flex-1">
                {bookings.slice(0, 2).map((b) => (
                  <div key={b.id} className="flex items-start justify-between p-4 rounded-lg border border-neutral-800 bg-neutral-950/50">
                    <div>
                      <h4 className="font-medium text-white">{b.client}</h4>
                      <p className="text-sm text-neutral-400 mt-0.5">{b.service}</p>
                      <div className="mt-2 text-xs text-neutral-500 flex gap-2">
                         <span className={b.payment === 'Paid' ? 'text-emerald-400' : 'text-amber-400'}>{b.payment}</span> • <span>{b.date}</span>
                      </div>
                    </div>
                    <button className="text-xs bg-neutral-800 hover:bg-neutral-700 text-white px-2 py-1 rounded">Link &rarr;</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Lead Pipeline */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
            <div className="p-5 border-b border-neutral-800 flex justify-between items-center">
              <h3 className="font-semibold flex items-center gap-2">
                <Briefcase size={18} className="text-blue-500" />
                Latest Corporate Leads
              </h3>
              <Link href="/admin/leads" className="text-sm text-blue-500 hover:text-blue-400 flex items-center transition-colors">
                View all <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-neutral-500 uppercase bg-neutral-950/50">
                  <tr>
                    <th className="px-5 py-3 font-medium">Company</th>
                    <th className="px-5 py-3 font-medium">Topic</th>
                    <th className="px-5 py-3 font-medium">Status</th>
                    <th className="px-5 py-3 font-medium text-right">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800">
                  {leads.slice(0, 3).map(l => (
                    <tr key={l.id} className="hover:bg-neutral-800/50 transition-colors">
                      <td className="px-5 py-3 font-medium text-white">{l.company}</td>
                      <td className="px-5 py-3 text-neutral-300">{l.topic}</td>
                      <td className="px-5 py-3">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20`}>
                          {l.status}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-neutral-400 text-right">{l.date}</td>
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
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
            <div className="p-5 border-b border-neutral-800">
              <h3 className="font-semibold flex items-center gap-2">
                <AlertCircle size={18} className="text-red-500" />
                Operational Alerts
              </h3>
            </div>
            <div className="p-5 flex flex-col gap-4">
              <div className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0"></div>
                <div>
                  <p className="text-sm text-white font-medium">Failed Webhook</p>
                  <p className="text-xs text-neutral-400 mt-0.5">CRM sync failed for Lead #1042. Retrying in 5 mins.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0"></div>
                <div>
                  <p className="text-sm text-white font-medium">Expired Integration</p>
                  <p className="text-xs text-neutral-400 mt-0.5">Zoom OAuth token expires in 2 days. Re-authenticate.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0"></div>
                <div>
                  <p className="text-sm text-white font-medium">Failed Email</p>
                  <p className="text-xs text-neutral-400 mt-0.5">Booking confirmation BK-4091 bounced.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Log */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
            <div className="p-5 border-b border-neutral-800">
              <h3 className="font-semibold flex items-center gap-2">
                <Activity size={18} className="text-neutral-400" />
                Recent Admin Activity
              </h3>
            </div>
            <div className="p-5">
              <div className="relative pl-4 border-l border-neutral-800 space-y-6 pb-2">
                <div className="relative">
                  <div className="absolute -left-[21px] w-2.5 h-2.5 rounded-full bg-neutral-700 border-2 border-neutral-900"></div>
                  <p className="text-sm text-white">Soon Kiat Ker <span className="text-neutral-400">exported lead list</span></p>
                  <p className="text-xs text-neutral-500 mt-1">10 minutes ago</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[21px] w-2.5 h-2.5 rounded-full bg-neutral-700 border-2 border-neutral-900"></div>
                  <p className="text-sm text-white">Soon Kiat Ker <span className="text-neutral-400">published course</span> "AI Strategy"</p>
                  <p className="text-xs text-neutral-500 mt-1">2 hours ago</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[21px] w-2.5 h-2.5 rounded-full bg-neutral-700 border-2 border-neutral-900"></div>
                  <p className="text-sm text-white">System <span className="text-neutral-400">created booking for</span> Jane Doe</p>
                  <p className="text-xs text-neutral-500 mt-1">Yesterday, 4:30 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}


