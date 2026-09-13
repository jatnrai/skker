"use client";

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { 
  BookOpen, 
  Search, 
  Filter, 
  Plus, 
  MoreHorizontal,
  Users,
  Calendar as CalendarIcon,
  Video,
  MapPin,
  Clock
} from 'lucide-react';
import Link from 'next/link';

export default function AcademyAdmin() {
  const [activeTab, setActiveTab] = useState<'courses' | 'sessions'>('courses');
  
  const courses = useSelector((state: RootState) => state.admin.courses);
  const sessions = useSelector((state: RootState) => state.admin.sessions);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter(c => c.title.toLowerCase().includes(searchTerm.toLowerCase()));
  const filteredSessions = sessions.filter(s => s.course.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Academy</h1>
          <p className="text-admin-muted text-sm mt-1">Manage courses, public sessions, and enrolments.</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          {activeTab === 'courses' ? (
            <Link href="/admin/academy/new-course" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full sm:w-auto">
              <Plus size={16} />
              New Course
            </Link>
          ) : (
            <Link href="/admin/academy/new-session" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full sm:w-auto">
              <Plus size={16} />
              New Session
            </Link>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-admin-border">
        <button 
          className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'courses' ? 'border-blue-500 text-blue-500' : 'border-transparent text-admin-muted hover:text-admin-text'}`}
          onClick={() => setActiveTab('courses')}
        >
          Courses ({courses.length})
        </button>
        <button 
          className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'sessions' ? 'border-blue-500 text-blue-500' : 'border-transparent text-admin-muted hover:text-admin-text'}`}
          onClick={() => setActiveTab('sessions')}
        >
          Upcoming Sessions ({sessions.length})
        </button>
      </div>

      {/* Filters & Search */}
      <div className="bg-admin-surface border border-admin-border rounded-xl p-4 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-muted" />
          <input 
            type="text" 
            placeholder={`Search ${activeTab}...`}
            className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-admin-muted"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <button className="bg-admin-bg border border-admin-border hover:bg-admin-surface border border-admin-border px-4 py-2.5 rounded-lg transition-colors flex items-center gap-2 text-admin-muted hover:text-admin-text text-sm">
            <Filter size={16} />
            Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-admin-surface border border-admin-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          {activeTab === 'courses' ? (
            <table className="w-full text-sm text-left whitespace-nowrap">
              <thead className="text-xs text-admin-muted uppercase bg-admin-bg border-b border-admin-border">
                <tr>
                  <th className="px-6 py-4 font-medium">Course Title</th>
                  <th className="px-6 py-4 font-medium">Type</th>
                  <th className="px-6 py-4 font-medium">Price</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Stats</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-admin-border">
                {filteredCourses.map((course) => (
                  <tr key={course.id} className="hover:bg-admin-surface border border-admin-border/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-admin-surface border border-admin-border flex items-center justify-center shrink-0">
                          <BookOpen size={18} className="text-blue-500" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-semibold text-admin-text">{course.title}</span>
                          <span className="text-xs text-admin-muted">{course.id}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-admin-text">
                      {course.type}
                    </td>
                    <td className="px-6 py-4 text-admin-text font-medium">
                      {course.price}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${
                        course.status === 'Published' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-admin-surface border border-admin-border text-admin-muted border-admin-primary'
                      }`}>
                        {course.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1 text-xs text-admin-muted">
                        <span className="flex items-center gap-1"><CalendarIcon size={12} /> {course.sessions} sessions</span>
                        <span className="flex items-center gap-1"><Users size={12} /> {course.learners} learners</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-admin-muted hover:text-admin-text p-1 rounded transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
                        <MoreHorizontal size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="w-full text-sm text-left whitespace-nowrap">
              <thead className="text-xs text-admin-muted uppercase bg-admin-bg border-b border-admin-border">
                <tr>
                  <th className="px-6 py-4 font-medium">Course & Instructor</th>
                  <th className="px-6 py-4 font-medium">Date & Format</th>
                  <th className="px-6 py-4 font-medium">Capacity</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-admin-border">
                {filteredSessions.map((session) => {
                  const [enrolled, total] = session.capacity.split(' / ').map(n => parseInt(n));
                  const percentage = total > 0 ? (enrolled / total) * 100 : 0;
                  
                  return (
                    <tr key={session.id} className="hover:bg-admin-surface border border-admin-border/50 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="font-semibold text-admin-text">{session.course}</span>
                          <span className="text-xs text-admin-muted mt-1">Instructor: {session.instructor}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col gap-1">
                          <span className="text-admin-text font-medium flex items-center gap-1"><Clock size={12} className="text-admin-muted" /> {session.date}</span>
                          <span className="text-xs text-admin-muted flex items-center gap-1">
                            {session.format.includes('Virtual') ? <Video size={12} /> : <MapPin size={12} />} 
                            {session.format}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-admin-text">{session.capacity}</span>
                          <div className="w-16 h-1.5 bg-admin-surface border border-admin-border rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${session.status === 'Full' ? 'bg-red-500' : 'bg-emerald-500'}`} 
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${
                          session.status === 'Open' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'
                        }`}>
                          {session.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-admin-muted hover:text-admin-text p-1 rounded transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
                          <MoreHorizontal size={18} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
