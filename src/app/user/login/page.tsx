'use client';

import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { API_BASE_URL } from '../../environment/env';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Login failed');
      }

      // Store token
      localStorage.setItem('skker_auth_token', data.token);
      localStorage.setItem('skker_user', JSON.stringify(data.user));

      // Redirect to home
      router.push('/');
    } catch (err: any) {
      setError(err.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-page text-text selection:bg-accent/30 flex flex-col">
      <Navbar />

      <div className="flex-grow flex items-center justify-center pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full items-center">
          
          {/* Left Column - Illustration */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="absolute inset-0 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
            <img 
              src="/assets/images/login-security.gif" 
              alt="Login Security Illustration" 
              className="w-full max-w-[500px] object-contain drop-shadow-2xl relative z-10"
            />
          </div>

          {/* Right Column - Form Card */}
          <div className="w-full max-w-[500px] mx-auto lg:mx-0">
            <div className="bg-card border border-border p-8 sm:p-12 rounded-[32px] shadow-2xl relative overflow-hidden">
              
              <div className="mb-8">
                <div className="inline-block px-3 py-1.5 bg-surface border border-border text-accent font-mono text-[9px] font-bold tracking-[0.15em] uppercase rounded-full mb-6">
                  SKKER Academy
                </div>
                
                <h1 className="text-[32px] sm:text-[42px] font-serif font-bold text-heading leading-[1.1] mb-4">
                  Enter SKKER Academy<span className="text-accent">.</span>
                </h1>
                
                <p className="text-[14px] text-muted leading-relaxed mb-6 font-sans">
                  Access your programs, courses, and learning workspace with the credentials linked to your SKKER account.
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-surface border border-border rounded-full text-[10px] font-bold text-muted uppercase tracking-[0.05em]">Courses</span>
                  <span className="px-3 py-1.5 bg-surface border border-border rounded-full text-[10px] font-bold text-muted uppercase tracking-[0.05em]">Blog / Articles</span>
                  <span className="px-3 py-1.5 bg-surface border border-border rounded-full text-[10px] font-bold text-muted uppercase tracking-[0.05em]">Leadership</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                
                {error && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 flex items-start gap-2">
                    <AlertCircle size={16} className="text-red-500 mt-0.5 shrink-0" />
                    <p className="text-sm text-red-500">{error}</p>
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold text-heading">Your email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail size={16} className="text-muted/60" />
                    </div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-11 pr-4 py-3 bg-surface border border-border rounded-xl focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all text-[14px] text-heading placeholder:text-muted/50"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold text-heading">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock size={16} className="text-muted/60" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your valid password"
                      className="w-full pl-11 pr-12 py-3 bg-surface border border-border rounded-xl focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all text-[14px] text-heading placeholder:text-muted/50"
                    />
                    <button 
                      type="button" 
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-muted/60 hover:text-heading transition-colors"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  <div className="flex justify-end mt-1">
                    <a href="#" className="text-[12px] text-muted hover:text-accent transition-colors">Forgot password?</a>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-accent text-page font-bold text-[14px] rounded-xl shadow-[0_0_20px_rgba(0,184,219,0.2)] hover:shadow-[0_0_30px_rgba(0,184,219,0.4)] transition-all hover:-translate-y-0.5 mt-2 disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {loading ? 'Authenticating...' : 'Access academy'}
                </button>

                <div className="text-center mt-4">
                  <p className="text-[13px] text-muted">
                    Need an account?{' '}
                    <Link href="/user/register" className="text-accent font-semibold hover:text-accent-cool transition-colors">
                      Create one
                    </Link>
                  </p>
                </div>

                <div className="relative flex items-center py-4">
                  <div className="flex-grow border-t border-border"></div>
                  <span className="flex-shrink-0 mx-4 text-heading text-[13px] font-semibold">Or</span>
                  <div className="flex-grow border-t border-border"></div>
                </div>

                <div className="text-center">
                   <p className="text-[11px] text-muted/60 leading-relaxed font-sans font-medium">
                     Secure access to the SKKER learning layer and client programs.
                   </p>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
