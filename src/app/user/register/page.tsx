'use client';

import Link from 'next/link';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isInstructor, setIsInstructor] = useState(false);

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
              alt="Security Illustration" 
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
                  Create your SKKER account<span className="text-accent">.</span>
                </h1>
                
                <p className="text-[14px] text-muted leading-relaxed mb-6 font-sans">
                  Join the learning layer of SKKER to access programs, articles, and future cohort experiences.
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-surface border border-border rounded-full text-[10px] font-bold text-muted uppercase tracking-[0.05em]">Courses</span>
                  <span className="px-3 py-1.5 bg-surface border border-border rounded-full text-[10px] font-bold text-muted uppercase tracking-[0.05em]">Community</span>
                  <span className="px-3 py-1.5 bg-surface border border-border rounded-full text-[10px] font-bold text-muted uppercase tracking-[0.05em]">Systems Thinking</span>
                </div>
              </div>

              <form className="flex flex-col gap-5">
                
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold text-heading">First name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User size={16} className="text-muted/60" />
                    </div>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      className="w-full pl-11 pr-4 py-3 bg-surface border border-border rounded-xl focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all text-[14px] text-heading placeholder:text-muted/50"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold text-heading">Last name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User size={16} className="text-muted/60" />
                    </div>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      className="w-full pl-11 pr-4 py-3 bg-surface border border-border rounded-xl focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all text-[14px] text-heading placeholder:text-muted/50"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold text-heading">Your email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail size={16} className="text-muted/60" />
                    </div>
                    <input
                      type="email"
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
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <input
                    type="checkbox"
                    id="instructor"
                    checked={isInstructor}
                    onChange={(e) => setIsInstructor(e.target.checked)}
                    className="w-4 h-4 rounded border-border bg-surface text-accent focus:ring-accent/50 focus:ring-offset-0"
                  />
                  <label htmlFor="instructor" className="text-[13px] text-muted cursor-pointer hover:text-heading transition-colors">
                    Apply to become an instructor
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-accent text-page font-bold text-[14px] rounded-xl shadow-[0_0_20px_rgba(0,184,219,0.2)] hover:shadow-[0_0_30px_rgba(0,184,219,0.4)] transition-all hover:-translate-y-0.5 mt-2"
                >
                  Create account
                </button>

                <div className="text-center mt-4">
                  <p className="text-[13px] text-muted">
                    Already have an account?{' '}
                    <Link href="/user/login" className="text-accent font-semibold hover:text-accent-cool transition-colors">
                      Log in
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
                     Your account unlocks programs, articles, and future cohort access.
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
