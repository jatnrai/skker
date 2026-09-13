"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { API_BASE_URL } from '@/app/environment/env';
import { Save, ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function NewSession() {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [courses, setCourses] = useState<any[]>([]);
  
  const [formData, setFormData] = useState({
    course_id: '',
    instructor: '',
    startDate: '',
    endDate: '',
    timezone: 'Asia/Kuala_Lumpur',
    deliveryFormat: 'Virtual',
    venue: '',
    meetingLink: '',
    capacity: '20',
    registrationDeadline: '',
    priceOverride: '',
    registrationStatus: 'Open',
    status: 'Scheduled',
    enableWaitlist: false
  });

  useEffect(() => {
    fetch(`${API_BASE_URL}/academy/courses`)
      .then(r => r.json())
      .then(d => setCourses(d.courses || []))
      .catch(console.error);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const payload = {
        id: `SES-${Date.now()}`,
        ...formData
      };
      
      const res = await fetch(`${API_BASE_URL}/academy/sessions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (!res.ok) throw new Error("Failed to save session");
      router.push('/admin/academy/sessions');
    } catch (err: any) {
      console.error(err);
      alert("Failed to create session.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <Link href="/admin/academy/sessions" className="text-admin-muted hover:text-admin-text transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-admin-text">Schedule New Session</h1>
            <p className="text-admin-muted text-sm mt-1">Configure logistics, delivery, and capacity for a training delivery.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button 
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 text-admin-text bg-admin-surface border border-admin-border rounded-lg text-sm font-medium hover:bg-admin-bg transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={handleSubmit}
            disabled={isSaving}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
          >
            {isSaving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />} 
            Save Session
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-admin-surface border border-admin-border rounded-xl p-6 space-y-5">
            <h3 className="text-sm font-bold text-admin-text uppercase tracking-wider">Logistics & Timing</h3>
            
            <div className="space-y-2">
              <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider">Linked Course *</label>
              <select
                required
                name="course_id"
                value={formData.course_id}
                onChange={handleChange}
                className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500 appearance-none"
              >
                <option value="" disabled>Select a parent course...</option>
                {courses.map(c => (
                  <option key={c.id} value={c.id}>{c.title} ({c.trainingType})</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider">Start Date & Time</label>
                <input 
                  type="datetime-local"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500 [color-scheme:dark]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider">End Date & Time</label>
                <input 
                  type="datetime-local"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500 [color-scheme:dark]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider">Timezone</label>
                <input 
                  name="timezone"
                  value={formData.timezone}
                  onChange={handleChange}
                  className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider">Assigned Instructor</label>
                <input 
                  name="instructor"
                  value={formData.instructor}
                  onChange={handleChange}
                  className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500"
                  placeholder="e.g. John Doe"
                />
              </div>
            </div>
          </div>

          <div className="bg-admin-surface border border-admin-border rounded-xl p-6 space-y-5">
            <h3 className="text-sm font-bold text-admin-text uppercase tracking-wider">Location & Delivery</h3>
            
            <div className="space-y-2">
              <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider">Delivery Format</label>
              <select
                name="deliveryFormat"
                value={formData.deliveryFormat}
                onChange={handleChange}
                className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500 appearance-none"
              >
                <option value="Virtual">Virtual / Remote</option>
                <option value="In-Person">In-Person</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            {formData.deliveryFormat !== 'Virtual' && (
              <div className="space-y-2">
                <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider">Physical Venue</label>
                <input 
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500"
                  placeholder="e.g. 123 Main St, Tech Hub"
                />
              </div>
            )}

            {formData.deliveryFormat !== 'In-Person' && (
              <div className="space-y-2">
                <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider">Meeting Link</label>
                <input 
                  name="meetingLink"
                  value={formData.meetingLink}
                  onChange={handleChange}
                  className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500"
                  placeholder="e.g. https://zoom.us/j/..."
                />
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-admin-surface border border-admin-border rounded-xl p-6 space-y-5">
            <h3 className="text-sm font-bold text-admin-text uppercase tracking-wider">Registration & Capacity</h3>
            
            <div className="space-y-2">
              <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider">Registration Status</label>
              <select
                name="registrationStatus"
                value={formData.registrationStatus}
                onChange={handleChange}
                className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500 appearance-none"
              >
                <option value="Open">Open</option>
                <option value="Closed">Closed</option>
                <option value="Full">Full</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider">Capacity</label>
                <input 
                  type="number"
                  name="capacity"
                  value={formData.capacity}
                  onChange={handleChange}
                  className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="space-y-2 flex flex-col justify-end">
                <label className="flex items-center gap-3 cursor-pointer py-2">
                  <input 
                    type="checkbox"
                    name="enableWaitlist"
                    checked={formData.enableWaitlist}
                    onChange={handleChange}
                    className="w-4 h-4 rounded border-admin-border bg-admin-bg text-blue-500 focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-admin-text">Waitlist</span>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider">Reg. Deadline</label>
              <input 
                type="datetime-local"
                name="registrationDeadline"
                value={formData.registrationDeadline}
                onChange={handleChange}
                className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500 [color-scheme:dark]"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-semibold text-admin-muted uppercase tracking-wider">Price Override</label>
              <input 
                type="number"
                name="priceOverride"
                value={formData.priceOverride}
                onChange={handleChange}
                className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500"
                placeholder="Leave blank to use base course price"
              />
            </div>
          </div>
          
          <div className="bg-admin-surface border border-admin-border rounded-xl p-6 space-y-5">
            <h3 className="text-sm font-bold text-admin-text uppercase tracking-wider">Session Status</h3>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-blue-500 appearance-none"
            >
              <option value="Scheduled">Scheduled</option>
              <option value="In-Progress">In-Progress</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
