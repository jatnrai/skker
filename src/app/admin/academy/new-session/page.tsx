"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { ArrowLeft, Check, Copy, Calendar as CalendarIcon, Video, AlertCircle } from 'lucide-react';
import { addSession } from '@/store/slices/adminSlice';

export default function NewSession() {
  const router = useRouter();
  const dispatch = useDispatch();
  const courses = useSelector((state: RootState) => state.admin.courses);

  const [course, setCourse] = useState(courses[0]?.title || '');
  const [date, setDate] = useState('');
  const [format, setFormat] = useState('Virtual');
  const [capacity, setCapacity] = useState('30');

  const handleOpenRegistration = () => {
    if (!course) return;
    dispatch(addSession({
      id: `SES-${Math.floor(Math.random() * 1000)}`,
      course,
      date: date || 'TBD',
      format,
      instructor: 'Soon Kiat Ker',
      capacity: `0 / ${capacity}`,
      status: 'Open'
    }));
    router.push('/admin/academy');
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/academy" className="p-2 hover:bg-neutral-800 rounded-lg transition-colors text-neutral-400 hover:text-white">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Schedule Session</h1>
            <p className="text-neutral-400 text-sm mt-1">Create a new public cohort or private training session.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={handleOpenRegistration}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-medium transition-colors"
          >
            <Check size={16} /> Open for Registration
          </button>
        </div>
      </div>

      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-8">
        
        {/* Course Selection */}
        <div className="space-y-4 border-b border-neutral-800 pb-8">
          <h3 className="text-lg font-semibold">Course Details</h3>
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1.5">Select Course</label>
            <select 
              className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              {courses.map(c => (
                <option key={c.id} value={c.title}>{c.title}</option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1.5">Instructor</label>
              <select className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500">
                <option>Soon Kiat Ker</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1.5">Status</label>
              <select className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500">
                <option>Draft</option>
                <option>Open</option>
                <option>Full</option>
                <option>Closed</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>
            </div>
          </div>
        </div>

        {/* Schedule & Logistics */}
        <div className="space-y-4 border-b border-neutral-800 pb-8">
          <h3 className="text-lg font-semibold">Schedule & Logistics</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1.5">Start Date & Time</label>
              <input 
                type="date" 
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1.5">End Date & Time</label>
              <input type="date" className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1.5">Timezone</label>
              <select className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500">
                <option>Asia/Kuala_Lumpur (MYT)</option>
                <option>Asia/Singapore (SGT)</option>
                <option>Europe/London (GMT)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1.5">Format</label>
              <select 
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500"
                value={format}
                onChange={(e) => setFormat(e.target.value)}
              >
                <option value="Virtual">Virtual (Google Meet)</option>
                <option value="Virtual">Virtual (Zoom)</option>
                <option value="On-site">On-site</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-neutral-300 mb-1.5">Venue / Meeting Details</label>
            <textarea className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500 h-20" placeholder="e.g. Google Meet link or physical address..."></textarea>
            <div className="flex gap-2 items-center mt-2 text-xs text-neutral-500">
              <AlertCircle size={12} />
              These details are only revealed to participants after successful enrollment.
            </div>
          </div>
        </div>

        {/* Enrollment Rules */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Enrollment Limits</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1.5">Capacity</label>
              <input 
                type="number" 
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500" 
                placeholder="e.g. 30"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1.5">Waitlist Limit</label>
              <input type="number" className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500" placeholder="e.g. 10" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1.5">Registration Deadline</label>
              <input type="date" className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
