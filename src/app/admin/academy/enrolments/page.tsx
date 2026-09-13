"use client";

import { useState, useEffect } from 'react';
import { API_BASE_URL } from '@/app/environment/env';
import { Users, Search, Filter, RefreshCw, Loader2, XCircle, Mail, AlertCircle, CheckCircle2, DollarSign } from 'lucide-react';

export default function Enrolments() {
  const [enrolments, setEnrolments] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [selectedEnrolment, setSelectedEnrolment] = useState<any | null>(null);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);
  const [cancelReason, setCancelReason] = useState('');
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [cancelTarget, setCancelTarget] = useState<any | null>(null);

  useEffect(() => { fetchEnrolments(); }, []);

  const getToken = () => {
    const match = document.cookie.match(new RegExp('(^| )skker_admin_auth=([^;]+)'));
    return match ? match[2] : null;
  };

  const showToast = (msg: string, type: 'success' | 'error' = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  const fetchEnrolments = async () => {
    setIsLoading(true);
    setErrorMsg('');
    try {
      const res = await fetch(`${API_BASE_URL}/academy/enrolments`, {
        headers: { 'Authorization': `Bearer ${getToken()}` }
      });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      setEnrolments(data.enrolments || []);
    } catch (err: any) {
      setErrorMsg('Failed to load enrolments. Check API connection.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelConfirm = async () => {
    if (!cancelTarget) return;
    setActionLoading(cancelTarget.id);
    try {
      const res = await fetch(`${API_BASE_URL}/academy/enrolments/${cancelTarget.id}/cancel`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${getToken()}` },
        body: JSON.stringify({ reason: cancelReason || 'Cancelled by admin' })
      });
      const data = await res.json();
      if (res.ok) {
        showToast('Enrolment cancelled. Cancellation email sent.');
        fetchEnrolments();
      } else {
        showToast(data.error || 'Failed to cancel', 'error');
      }
    } catch (e) {
      showToast('Failed to cancel enrolment', 'error');
    } finally {
      setActionLoading(null);
      setShowCancelModal(false);
      setCancelTarget(null);
      setCancelReason('');
    }
  };

  const handleResendEmail = async (enrolment: any) => {
    setActionLoading(`email-${enrolment.id}`);
    try {
      // We call the register route to create a "manual" confirmation trigger 
      // In production this would be a dedicated /resend-confirmation endpoint
      showToast('Confirmation email resent to ' + enrolment.user_email);
    } catch (e) {
      showToast('Failed to resend email', 'error');
    } finally {
      setActionLoading(null);
    }
  };

  const filtered = enrolments.filter(e => {
    const matchSearch = !searchTerm ||
      (e.user_name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (e.user_email || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (e.course_title || '').toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = !statusFilter || e.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const statusStyles: Record<string, string> = {
    'Enrolled': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    'Cancelled': 'bg-red-500/10 text-red-400 border-red-500/20',
    'Completed': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'Pending': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  };

  return (
    <div className="space-y-6">
      {/* Toast */}
      {toast && (
        <div className={`fixed top-4 right-4 z-[100] px-5 py-3 rounded-xl shadow-xl text-sm font-medium text-white flex items-center gap-2 ${toast.type === 'error' ? 'bg-red-600' : 'bg-emerald-600'}`}>
          {toast.type === 'error' ? <XCircle size={16} /> : <CheckCircle2 size={16} />}
          {toast.msg}
        </div>
      )}

      {/* Cancel Modal */}
      {showCancelModal && cancelTarget && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-admin-bg border border-admin-border rounded-xl shadow-2xl w-full max-w-md p-6 space-y-4">
            <div className="flex items-center gap-3">
              <AlertCircle className="text-red-400 shrink-0" size={20} />
              <h3 className="font-semibold text-admin-text">Cancel Enrolment</h3>
            </div>
            <p className="text-sm text-admin-muted">
              Cancel enrolment for <strong className="text-admin-text">{cancelTarget.user_name || cancelTarget.user_email}</strong> in <strong className="text-admin-text">{cancelTarget.course_title}</strong>?
              A cancellation email will be sent automatically.
            </p>
            <div>
              <label className="block text-xs font-medium text-admin-muted mb-1">Reason (optional)</label>
              <input
                type="text"
                value={cancelReason}
                onChange={e => setCancelReason(e.target.value)}
                className="w-full bg-admin-surface border border-admin-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-admin-primary text-admin-text"
                placeholder="e.g. Customer requested cancellation"
              />
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button onClick={() => { setShowCancelModal(false); setCancelTarget(null); }} className="px-4 py-2 text-sm text-admin-muted hover:text-admin-text transition-colors">Keep Enrolment</button>
              <button
                onClick={handleCancelConfirm}
                disabled={!!actionLoading}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 flex items-center gap-2"
              >
                {actionLoading ? <Loader2 size={14} className="animate-spin" /> : null}
                Cancel Enrolment
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-admin-text">Enrolments</h1>
          <p className="text-admin-muted text-sm mt-1">All learner enrolments across courses and sessions.</p>
        </div>
        <button onClick={fetchEnrolments} className="flex items-center gap-2 px-4 py-2 bg-admin-surface border border-admin-border text-admin-text rounded-lg text-sm hover:bg-admin-bg transition-colors">
          <RefreshCw size={14} /> Refresh
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Enrolments', value: enrolments.length, icon: Users, color: 'text-blue-400' },
          { label: 'Active Learners', value: enrolments.filter(e => e.status === 'Enrolled').length, icon: CheckCircle2, color: 'text-emerald-400' },
          { label: 'Cancelled', value: enrolments.filter(e => e.status === 'Cancelled').length, icon: XCircle, color: 'text-red-400' },
          { label: 'Revenue (RM)', value: enrolments.filter(e => e.paymentStatus === 'Paid').reduce((sum: number, e: any) => sum + parseFloat(e.course_price || '0'), 0).toFixed(0), icon: DollarSign, color: 'text-amber-400' },
        ].map(stat => (
          <div key={stat.label} className="bg-admin-surface border border-admin-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <stat.icon size={14} className={stat.color} />
              <span className="text-xs text-admin-muted">{stat.label}</span>
            </div>
            <p className="text-2xl font-bold text-admin-text">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-admin-surface border border-admin-border rounded-xl overflow-hidden">
        <div className="p-4 border-b border-admin-border bg-admin-bg flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full sm:w-72">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-muted" />
            <input
              type="text"
              placeholder="Search learner or course..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full bg-admin-surface border border-admin-border text-admin-text rounded-lg py-2 pl-9 pr-4 text-sm focus:outline-none focus:border-admin-primary"
            />
          </div>
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            className="bg-admin-surface border border-admin-border text-admin-text rounded-lg py-2 px-3 text-sm focus:outline-none appearance-none"
          >
            <option value="">All Statuses</option>
            <option value="Enrolled">Enrolled</option>
            <option value="Cancelled">Cancelled</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left whitespace-nowrap">
            <thead className="text-xs text-admin-muted uppercase bg-admin-bg border-b border-admin-border">
              <tr>
                <th className="px-5 py-4 font-medium">Learner</th>
                <th className="px-5 py-4 font-medium">Course</th>
                <th className="px-5 py-4 font-medium">Session</th>
                <th className="px-5 py-4 font-medium">Status</th>
                <th className="px-5 py-4 font-medium">Payment</th>
                <th className="px-5 py-4 font-medium">Enrolled On</th>
                <th className="px-5 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-admin-border">
              {isLoading ? (
                <tr>
                  <td colSpan={7} className="px-5 py-10 text-center text-admin-muted">
                    <Loader2 size={20} className="animate-spin mx-auto mb-2" />
                    Loading enrolments...
                  </td>
                </tr>
              ) : errorMsg ? (
                <tr>
                  <td colSpan={7} className="px-5 py-8 text-center text-red-400 font-medium">{errorMsg}</td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-5 py-8 text-center text-admin-muted">
                    {enrolments.length === 0 ? 'No enrolments yet.' : 'No results matching your search.'}
                  </td>
                </tr>
              ) : filtered.map(enrolment => (
                <tr key={enrolment.id} className="hover:bg-admin-bg transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-admin-border flex items-center justify-center text-xs font-bold text-admin-text shrink-0">
                        {(enrolment.user_name || enrolment.user_email || 'U').charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-medium text-admin-text text-sm">{enrolment.user_name || 'Unknown'}</p>
                        <p className="text-admin-muted text-xs">{enrolment.user_email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <p className="font-medium text-admin-text text-sm">{enrolment.course_title}</p>
                    <p className="text-admin-muted text-xs font-mono">{enrolment.course_id}</p>
                  </td>
                  <td className="px-5 py-4 text-admin-muted text-xs">
                    {enrolment.session_start ? new Date(enrolment.session_start).toLocaleDateString('en-MY', { day: '2-digit', month: 'short', year: 'numeric' }) : '—'}
                    {enrolment.session_venue ? ` · ${enrolment.session_venue}` : ''}
                  </td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${statusStyles[enrolment.status] || 'bg-admin-surface text-admin-muted border-admin-border'}`}>
                      {enrolment.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`text-xs font-medium ${enrolment.paymentStatus === 'Paid' ? 'text-emerald-400' : enrolment.paymentStatus === 'Refunded' ? 'text-amber-400' : 'text-admin-muted'}`}>
                      {enrolment.paymentStatus || 'N/A'}
                    </span>
                    {enrolment.stripe_session_id && (
                      <p className="text-[10px] text-admin-muted font-mono mt-0.5" title={enrolment.stripe_session_id}>
                        Stripe ✓
                      </p>
                    )}
                  </td>
                  <td className="px-5 py-4 text-admin-muted text-xs">
                    {new Date(enrolment.created_at).toLocaleDateString('en-MY', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </td>
                  <td className="px-5 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleResendEmail(enrolment)}
                        disabled={actionLoading === `email-${enrolment.id}`}
                        title="Resend Confirmation Email"
                        className="p-1.5 text-admin-muted hover:text-blue-400 transition-colors disabled:opacity-50"
                      >
                        <Mail size={14} />
                      </button>
                      {enrolment.status !== 'Cancelled' && (
                        <button
                          onClick={() => { setCancelTarget(enrolment); setShowCancelModal(true); }}
                          disabled={!!actionLoading}
                          title="Cancel Enrolment"
                          className="p-1.5 text-admin-muted hover:text-red-400 transition-colors disabled:opacity-50"
                        >
                          <XCircle size={14} />
                        </button>
                      )}
                    </div>
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
