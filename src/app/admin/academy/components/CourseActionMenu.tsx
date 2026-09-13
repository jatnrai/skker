"use client";

import { useState, useRef, useEffect } from 'react';
import { MoreVertical, Eye, Edit, Copy, ExternalLink, Globe, Archive, RefreshCw, Trash2, Loader2 } from 'lucide-react';
import { API_BASE_URL } from '@/app/environment/env';
import Link from 'next/link';

interface CourseActionMenuProps {
  course: any;
  onRefresh: () => void;
}

export default function CourseActionMenu({ course, onRefresh }: CourseActionMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [loadingAction, setLoadingAction] = useState<string | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getAuthToken = () => {
    const match = document.cookie.match(new RegExp('(^| )skker_admin_auth=([^;]+)'));
    return match ? match[2] : null;
  };

  const showToast = (msg: string, type: 'success' | 'error' = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const callAction = async (action: string, label: string) => {
    setLoadingAction(action);
    try {
      const token = getAuthToken();
      const res = await fetch(`${API_BASE_URL}/academy/courses/${course.id}/${action}`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (!res.ok) {
        showToast(data.error || `Failed to ${label}`, 'error');
      } else {
        showToast(data.message || `${label} successful`, 'success');
        onRefresh();
      }
    } catch (err) {
      showToast(`Failed to ${label}`, 'error');
    } finally {
      setLoadingAction(null);
      setIsOpen(false);
    }
  };

  const duplicateCourse = async () => {
    await callAction('duplicate', 'duplicate');
  };

  const publishCourse = async () => {
    await callAction('publish', 'publish');
  };

  const unpublishCourse = async () => {
    await callAction('unpublish', 'unpublish');
  };

  const archiveCourse = async () => {
    await callAction('archive', 'archive');
  };

  const restoreCourse = async () => {
    // Restore puts back to Draft
    const token = getAuthToken();
    try {
      const res = await fetch(`${API_BASE_URL}/academy/courses/${course.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ visibility: 'Draft' })
      });
      if (res.ok) { showToast('Course restored to Draft'); onRefresh(); }
      else showToast('Failed to restore course', 'error');
    } catch (e) {
      showToast('Failed to restore course', 'error');
    }
    setIsOpen(false);
  };

  const deleteCourse = async () => {
    if (!confirm("Are you sure you want to permanently delete this course? This cannot be undone.")) return;
    const token = getAuthToken();
    try {
      const res = await fetch(`${API_BASE_URL}/academy/courses/${course.id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) { showToast('Course deleted'); onRefresh(); }
      else showToast('Failed to delete course', 'error');
    } catch (err) {
      showToast('Failed to delete course', 'error');
    }
    setIsOpen(false);
  };

  const isLoading = loadingAction !== null;

  return (
    <div className="relative" ref={menuRef}>
      {/* Toast */}
      {toast && (
        <div className={`fixed top-4 right-4 z-[100] px-4 py-3 rounded-lg shadow-xl text-sm font-medium text-white transition-all ${toast.type === 'error' ? 'bg-red-500' : 'bg-emerald-600'}`}>
          {toast.msg}
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isLoading}
        className="p-1.5 text-admin-muted hover:text-white bg-admin-bg border border-admin-border rounded hover:border-admin-primary transition-colors disabled:opacity-50"
      >
        {isLoading ? <Loader2 size={16} className="animate-spin" /> : <MoreVertical size={16} />}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 bg-admin-surface border border-admin-border rounded-lg shadow-xl z-50 py-1 overflow-hidden">
          <Link
            href={`/admin/academy/new-course?edit=${course.id}`}
            className="w-full text-left px-4 py-2 text-sm text-admin-text hover:bg-admin-bg flex items-center gap-2"
          >
            <Edit size={14} className="text-admin-muted" /> Edit Course
          </Link>

          <a
            href={`/academy/${course.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-left px-4 py-2 text-sm text-admin-text hover:bg-admin-bg flex items-center gap-2"
          >
            <ExternalLink size={14} className="text-admin-muted" /> Live Preview
          </a>

          <button onClick={duplicateCourse} className="w-full text-left px-4 py-2 text-sm text-admin-text hover:bg-admin-bg flex items-center gap-2">
            <Copy size={14} className="text-admin-muted" /> Duplicate
          </button>

          <div className="h-px bg-admin-border my-1"></div>

          {course.visibility === 'Published' ? (
            <button onClick={unpublishCourse} className="w-full text-left px-4 py-2 text-sm text-amber-400 hover:bg-admin-bg flex items-center gap-2">
              <Globe size={14} /> Unpublish (Move to Draft)
            </button>
          ) : (
            <button onClick={publishCourse} className="w-full text-left px-4 py-2 text-sm text-emerald-400 hover:bg-admin-bg flex items-center gap-2">
              <Globe size={14} /> Publish
            </button>
          )}

          {course.visibility === 'Archived' ? (
            <button onClick={restoreCourse} className="w-full text-left px-4 py-2 text-sm text-blue-400 hover:bg-admin-bg flex items-center gap-2">
              <RefreshCw size={14} /> Restore from Archive
            </button>
          ) : (
            <button onClick={archiveCourse} className="w-full text-left px-4 py-2 text-sm text-admin-muted hover:bg-admin-bg flex items-center gap-2">
              <Archive size={14} /> Archive
            </button>
          )}

          <div className="h-px bg-admin-border my-1"></div>

          <button onClick={deleteCourse} className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-admin-bg flex items-center gap-2">
            <Trash2 size={14} /> Delete Permanently
          </button>
        </div>
      )}
    </div>
  );
}
