"use client";

import { useState, useEffect } from 'react';
import { API_BASE_URL } from '@/app/environment/env';
import { Search, Plus, Calendar, Users, Eye, Edit, Trash2 } from 'lucide-react';
import Link from 'next/link';
import CourseActionMenu from '../components/CourseActionMenu';

export default function PublicClasses() {
  const [courses, setCourses] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetchCourses();
  }, []);
  
  async function fetchCourses() {
    try {
      const res = await fetch(`${API_BASE_URL}/academy/courses`);
      if (res.ok) {
        const data = await res.json();
        // Filter only Public Classes for this view
        setCourses(data.courses?.filter((c: any) => c.trainingType === 'Public Class') || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteCourse = async (id: string) => {
    if (!confirm("Are you sure you want to delete this course?")) return;
    
    try {
      await fetch(`${API_BASE_URL}/academy/courses/${id}`, { method: 'DELETE' });
      setCourses(prev => prev.filter(c => c.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-admin-text">Public Classes</h1>
          <p className="text-admin-muted text-sm mt-1">Manage scheduled classes open to individual registration.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link 
            href="/admin/academy/new-course"
            className="flex items-center gap-2 bg-[#00E5FF] hover:bg-[#00CBE6] text-black px-4 py-2 rounded-lg text-sm font-bold transition-colors"
          >
            <Plus size={16} /> New Public Class
          </Link>
        </div>
      </div>
      
      <div className="bg-admin-surface border border-admin-border rounded-xl overflow-hidden flex flex-col min-h-[400px]">
        <div className="p-4 border-b border-admin-border flex items-center justify-between shrink-0">
          <div className="relative w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-muted" />
            <input 
              type="text" 
              placeholder="Search classes..." 
              className="w-full bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2 pl-9 pr-4 text-sm focus:outline-none focus:border-blue-500 transition-all placeholder:text-admin-muted"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-admin-bg/50 border-b border-admin-border text-xs font-semibold text-admin-muted uppercase tracking-wider">
                <th className="p-4">Course Details</th>
                <th className="p-4">Category</th>
                <th className="p-4">Price</th>
                <th className="p-4">Visibility</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-admin-border/50">
              {isLoading ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-admin-muted">Loading courses...</td>
                </tr>
              ) : courses.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-admin-muted">No public classes found. Create one to get started.</td>
                </tr>
              ) : courses.map(course => (
                <tr key={course.id} className="hover:bg-admin-bg/20 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-admin-bg border border-admin-border flex items-center justify-center shrink-0">
                        <Calendar size={16} className="text-admin-muted" />
                      </div>
                      <div>
                        <p className="font-semibold text-admin-text text-sm">{course.title}</p>
                        <p className="text-xs text-admin-muted font-mono mt-0.5">{course.slug}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-admin-text">
                    <span className="bg-admin-bg px-2 py-1 rounded text-xs border border-admin-border">{course.category || 'Uncategorized'}</span>
                  </td>
                  <td className="p-4 text-sm text-admin-text font-medium">
                    {course.price === '0' || !course.price ? 'Free' : `RM ${course.price}`}
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border uppercase tracking-wider
                      ${course.visibility === 'Published' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
                      'bg-amber-500/10 text-amber-400 border-amber-500/20'}`}
                    >
                      {course.visibility}
                    </span>
                  </td>
                  <td className="p-4 text-right flex justify-end">
                    <CourseActionMenu course={course} onRefresh={fetchCourses} />
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
