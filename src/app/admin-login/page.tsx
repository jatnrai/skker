"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import LogoIcon from '@/Assets/Logoicon.png';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'soonkiat.ker@gmail.com' && password === 'SkkerAdmin#734403!') {
      document.cookie = "skker_admin_auth=true; path=/; max-age=86400"; // 1 day
      router.push('/admin');
      router.refresh(); // Ensure middleware picks up the new cookie
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex w-full">
      
      {/* Left Pane */}
      <div className="hidden lg:flex w-1/2 relative bg-[#09151A] overflow-hidden flex-col justify-between p-12">
        {/* Grid Background Pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #4AD8FF 1px, transparent 1px), linear-gradient(to bottom, #4AD8FF 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        {/* Subtle radial gradient over grid */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_30%_50%,transparent_0%,#09151A_70%)]"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full border border-[#4AD8FF]/30 flex items-center justify-center bg-[#09151A] overflow-hidden shadow-[0_0_15px_rgba(74,216,255,0.2)]">
              <Image src={LogoIcon} alt="SKKER Icon" className="h-6 w-6 object-contain" />
            </div>
            <span className="text-white font-bold tracking-[0.2em] text-sm ml-2">SKKER</span>
          </div>
        </div>

        <div className="relative z-10 max-w-md">
          <h1 className="text-4xl font-bold text-white leading-tight mb-4 tracking-tight">
            Run the Academy from one command center.
          </h1>
          <p className="text-[#8BA3AC] text-sm leading-relaxed">
            Courses, students, revenue, and content — everything that powers SKKER Academy, in a single administrative workspace built for clarity and speed.
          </p>
        </div>

        <div className="relative z-10">
          <Link href="/" className="text-[#4AD8FF] hover:text-white transition-colors text-xs font-medium flex items-center gap-2">
            <ArrowLeft size={14} /> Back to skker.com
          </Link>
        </div>
      </div>

      {/* Right Pane */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#050B0E] p-6 lg:p-12">
        
        <div className="w-full max-w-md">
          <div className="bg-[#0B1519] border border-[#1A2C35] rounded-2xl p-8 lg:p-10 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-2">Admin Sign In</h2>
            <p className="text-[#8BA3AC] text-sm mb-8">
              Enter your credentials to access the administration panel.
            </p>

            <form onSubmit={handleLogin} className="space-y-6">
              
              {error && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-500 text-sm px-4 py-2 rounded-lg">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <label className="text-xs font-semibold text-white block">Email address</label>
                <div className="relative">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@skker.com"
                    className="w-full bg-[#050B0E] border border-[#1A2C35] text-white rounded-lg py-2.5 px-3 pl-3 text-sm focus:outline-none focus:border-[#4AD8FF] transition-colors placeholder:text-[#415C68]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-white block">Password</label>
                <div className="relative">
                  <input 
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter your password"
                    className="w-full bg-[#050B0E] border border-[#1A2C35] text-white rounded-lg py-2.5 px-3 pr-10 text-sm focus:outline-none focus:border-[#4AD8FF] transition-colors placeholder:text-[#415C68]"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-[#415C68] hover:text-[#8BA3AC] transition-colors"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                <div className="flex justify-end pt-1">
                  <button type="button" className="text-xs text-[#4AD8FF] hover:text-white transition-colors">
                    Forgot password?
                  </button>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#00E5FF] hover:bg-[#00CBE6] text-black font-bold text-sm py-2.5 rounded-lg transition-colors mt-2"
              >
                Sign In
              </button>
            </form>

            <div className="mt-8 lg:hidden">
              <Link href="/" className="text-[#415C68] hover:text-[#8BA3AC] transition-colors text-xs font-medium flex items-center gap-2">
                <ArrowLeft size={14} /> Back to the main site
              </Link>
            </div>
          </div>
          
          <div className="mt-6 hidden lg:flex justify-start px-2">
            <Link href="/" className="text-[#415C68] hover:text-[#8BA3AC] transition-colors text-xs font-medium flex items-center gap-2">
              <ArrowLeft size={14} /> Back to the main site
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
