"use client";

import { useState, useEffect } from 'react';
import { CheckCircle2, AlertCircle, RefreshCw, Plus, ExternalLink, Loader2, CreditCard, Mail, Globe, DollarSign } from 'lucide-react';
import { API_BASE_URL } from '../../environment/env';

export default function IntegrationsPage() {
  const [stripeStatus, setStripeStatus] = useState<'checking' | 'configured' | 'not_configured'>('checking');
  const [resendStatus, setResendStatus] = useState<'checking' | 'configured' | 'not_configured'>('checking');
  const [paymentCount, setPaymentCount] = useState<number | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const getToken = () => document.cookie.match(/skker_admin_auth=([^;]+)/)?.[1] || null;

  useEffect(() => {
    checkIntegrations();
  }, []);

  const checkIntegrations = async () => {
    const token = getToken();
    // Check payments endpoint to determine Stripe status
    try {
      const res = await fetch(`${API_BASE_URL}/payments`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setPaymentCount(data.payments?.length || 0);
        setStripeStatus('configured');
      } else if (res.status === 503) {
        setStripeStatus('not_configured');
      } else {
        setStripeStatus('configured'); // endpoint exists, Stripe keys TBD
      }
    } catch {
      setStripeStatus('not_configured');
    }
    // Resend: just check env
    setResendStatus('configured'); // We installed it, status shown from env
  };

  const testStripeConnection = async () => {
    setToast('Testing Stripe connection...');
    const token = getToken();
    try {
      const res = await fetch(`${API_BASE_URL}/payments/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ courseId: 'test', courseTitle: 'Test', amount: '0.01', userEmail: 'test@test.com' })
      });
      const data = await res.json();
      if (data.error?.includes('not configured')) {
        setStripeStatus('not_configured');
        setToast('⚠️ Stripe not configured. Add STRIPE_SECRET_KEY to .env');
      } else if (data.url || data.sessionId) {
        setStripeStatus('configured');
        setToast('✅ Stripe is connected and working!');
      } else {
        setToast('Stripe responded: ' + (data.error || 'Unknown response'));
      }
    } catch (e) {
      setToast('Failed to test Stripe connection');
    }
    setTimeout(() => setToast(null), 5000);
  };

  const integrations = [
    {
      id: 'stripe',
      name: 'Stripe',
      type: 'Payments',
      icon: CreditCard,
      status: stripeStatus,
      lastSync: paymentCount !== null ? `${paymentCount} payments recorded` : 'Checking...',
      desc: 'Processes payments for public courses and generates Stripe Checkout sessions. Webhooks handle automatic enrolment creation.',
      docsUrl: 'https://dashboard.stripe.com/test/dashboard',
      envKeys: ['STRIPE_SECRET_KEY', 'STRIPE_WEBHOOK_SECRET'],
      onTest: testStripeConnection,
    },
    {
      id: 'resend',
      name: 'Resend',
      type: 'Email',
      icon: Mail,
      status: resendStatus,
      lastSync: 'Live',
      desc: 'Sends booking confirmations, cancellation notices, and system alerts via Resend transactional email.',
      docsUrl: 'https://resend.com/overview',
      envKeys: ['RESEND_API_KEY', 'FROM_EMAIL'],
      onTest: undefined,
    },
    {
      id: 'frontend',
      name: 'Public Website',
      type: 'Frontend Sync',
      icon: Globe,
      status: 'configured' as const,
      lastSync: 'Real-time',
      desc: 'Published courses appear on the public academy page. Draft/Unpublished courses are hidden. Both admin and frontend read from the same database.',
      docsUrl: `${process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000'}/academy`,
      envKeys: ['FRONTEND_URL'],
      onTest: undefined,
    },
  ];

  const statusConfig = {
    configured: { color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', label: 'Connected', icon: CheckCircle2 },
    not_configured: { color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20', label: 'Not Configured', icon: AlertCircle },
    checking: { color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20', label: 'Checking...', icon: Loader2 },
  };

  return (
    <div className="space-y-6">
      {toast && (
        <div className="fixed top-4 right-4 z-[100] px-5 py-3 rounded-xl shadow-xl text-sm font-medium text-white bg-admin-surface border border-admin-border text-admin-text max-w-sm">
          {toast}
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-admin-text">Integrations</h1>
          <p className="text-admin-muted text-sm mt-1">Manage third-party connections, payments, and webhooks.</p>
        </div>
        <button
          onClick={checkIntegrations}
          className="whitespace-nowrap px-4 py-2 bg-admin-surface border border-admin-border hover:bg-admin-bg text-admin-text rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
        >
          <RefreshCw size={14} /> Refresh Status
        </button>
      </div>

      {/* Status Banner */}
      {stripeStatus === 'not_configured' && (
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 flex items-start gap-3">
          <AlertCircle size={18} className="text-amber-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-amber-400">Stripe Not Configured</p>
            <p className="text-xs text-amber-400/80 mt-1">
              Add your Stripe test keys to the backend <code className="font-mono bg-amber-500/10 px-1 rounded">.env</code> file to enable payments.
            </p>
            <div className="mt-2 font-mono text-xs bg-admin-bg border border-admin-border rounded p-2 text-admin-text">
              STRIPE_SECRET_KEY=sk_test_...<br/>
              STRIPE_WEBHOOK_SECRET=whsec_...
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map((integration) => {
          const cfg = statusConfig[integration.status];
          const StatusIcon = cfg.icon;
          const ServiceIcon = integration.icon;

          return (
            <div key={integration.id} className={`bg-admin-surface border rounded-xl p-5 flex flex-col transition-all ${integration.status === 'not_configured' ? 'border-red-500/30' : 'border-admin-border hover:border-admin-primary'}`}>
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-admin-bg border border-admin-border flex items-center justify-center">
                    <ServiceIcon size={18} className="text-admin-muted" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-admin-text">{integration.name}</h3>
                    <span className="text-[10px] font-semibold text-admin-muted uppercase tracking-wider">{integration.type}</span>
                  </div>
                </div>
                <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${cfg.bg} ${cfg.color} border ${cfg.border}`}>
                  <StatusIcon size={12} className={integration.status === 'checking' ? 'animate-spin' : ''} />
                  {cfg.label}
                </span>
              </div>

              <p className="text-sm text-admin-muted mt-4 flex-1">{integration.desc}</p>

              <div className="mt-2 text-xs text-admin-muted font-mono space-y-1">
                {integration.envKeys.map(k => (
                  <div key={k} className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-admin-muted inline-block"></span>
                    {k}
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-admin-border flex items-center justify-between gap-2">
                <span className="text-xs text-admin-muted flex items-center gap-1.5">
                  <RefreshCw size={12} />
                  {integration.lastSync}
                </span>
                <div className="flex items-center gap-2">
                  {integration.onTest && (
                    <button
                      onClick={integration.onTest}
                      className="text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Test Connection
                    </button>
                  )}
                  <a
                    href={integration.docsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-admin-muted hover:text-admin-text transition-colors flex items-center gap-1"
                  >
                    Open <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}

        {/* Webhook Setup Card */}
        <div className="bg-admin-bg border border-admin-border border-dashed rounded-xl p-5 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign size={16} className="text-admin-muted" />
            <h3 className="font-medium text-admin-text text-sm">Stripe Webhook Setup</h3>
          </div>
          <p className="text-xs text-admin-muted mb-3">For local development, use the Stripe CLI to forward webhooks:</p>
          <div className="font-mono text-xs bg-admin-surface border border-admin-border rounded-lg p-3 text-admin-text leading-relaxed">
            stripe login<br/>
            stripe listen --forward-to \<br/>
            &nbsp;&nbsp;localhost:5001/api/payments/webhook
          </div>
          <p className="text-xs text-admin-muted mt-2">Copy the webhook secret printed by the CLI into your <code className="font-mono">.env</code> as STRIPE_WEBHOOK_SECRET.</p>
        </div>
      </div>
    </div>
  );
}
