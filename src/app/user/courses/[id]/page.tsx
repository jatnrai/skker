'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Play, Star, Clock, User, Globe, Calendar, CheckCircle2, ChevronRight, Share2, Heart, Shield, FileText, MonitorPlay } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useParams } from 'next/navigation';

export default function CourseDetailsPage() {
  const params = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Dummy course data based on ID
  const course = {
    id: params.id || 5,
    title: 'AI Workflow Automation for Leaders',
    shortDescription: 'Build practical AI-enabled workflows for leaders, operators, and teams who need better leverage without writing code. Shift from reactive operations to intentional system design.',
    category: 'AI Workflow Labs',
    instructor: 'SKKER Admin',
    rating: 4.8,
    reviews: 89,
    students: 1240,
    duration: '10 Hours',
    language: 'English',
    lastUpdated: 'Mon, 15-Aug-2026',
    price: 3100,
    originalPrice: 4200,
    discount: 26,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    features: [
      '10 hours on-demand video',
      '14 practical assignments',
      'Full lifetime access',
      'Access on mobile and TV',
      'Certificate of completion'
    ],
    overview: 'In this intensive, hands-on lab, you will learn how to transition your organization from legacy, manual workflows into AI-augmented systems. We will cover prompt engineering at an executive level, setting up automated data pipelines using no-code tools, and establishing governance for your team. You will leave with a completely new operating rhythm.',
    curriculum: [
      { section: 'Section 1: The AI Context', lessons: ['Welcome to the Lab', 'Why AI matters for operations', 'Identifying bottlenecks'] },
      { section: 'Section 2: Prompt Engineering for Leaders', lessons: ['Beyond basic prompts', 'Structuring complex queries', 'Building prompt libraries'] },
      { section: 'Section 3: No-Code Automation', lessons: ['Connecting tools', 'Trigger-based workflows', 'Handling edge cases'] }
    ]
  };

  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#060e15] text-[#e6edf3]">
      <Navbar />
      
      {/* Dark Banner Background */}
      <div className="w-full bg-[#0b1622] border-b border-white/5 pt-32 pb-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[13px] font-semibold text-muted/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/user/courses" className="hover:text-white transition-colors">Courses</Link>
            <ChevronRight size={14} />
            <span className="text-white">Details</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                {course.title}
              </h1>
              <p className="text-[17px] text-muted/90 leading-relaxed max-w-2xl">
                {course.shortDescription}
              </p>
              
              {/* Meta Tags */}
              <div className="flex flex-wrap items-center gap-6 mt-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-accent text-[11px] font-bold">
                    SA
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-muted/70 uppercase font-bold tracking-wider">Created By</span>
                    <span className="text-[13px] font-semibold text-white">{course.instructor}</span>
                  </div>
                </div>

                <div className="w-px h-8 bg-white/10 hidden sm:block" />

                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} className="text-white/20" />
                  </div>
                  <span className="text-[13px] font-semibold text-muted/90">({course.reviews} Reviews)</span>
                </div>

                <div className="flex items-center gap-2 text-[13px] font-semibold text-muted/90">
                  <Clock size={16} className="text-accent" /> {course.duration}
                </div>

                <div className="flex items-center gap-2 text-[13px] font-semibold text-muted/90">
                  <User size={16} className="text-accent" /> {course.students.toLocaleString()} Enrolled
                </div>

                <div className="flex items-center gap-2 text-[13px] font-semibold text-muted/90">
                  <Globe size={16} className="text-accent" /> {course.language}
                </div>

                <div className="flex items-center gap-2 text-[13px] font-semibold text-muted/90">
                  <Calendar size={16} className="text-accent" /> Last Updated: {course.lastUpdated}
                </div>
              </div>
            </div>

            {/* Right Sidebar Placeholder (Visual spacing for layout) */}
            <div className="hidden lg:block lg:col-span-1" />
          </div>
        </div>
      </div>

      <div className="flex-grow pt-8 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 flex flex-col">
            
            {/* Tabs */}
            <div className="flex items-center gap-8 border-b border-white/5 mb-8">
              {['overview', 'curriculum', 'instructor', 'reviews'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-[15px] font-bold capitalize transition-all relative ${
                    activeTab === tab ? 'text-accent' : 'text-muted/70 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {tab === 'overview' && <FileText size={18} />}
                    {tab === 'curriculum' && <MonitorPlay size={18} />}
                    {tab === 'instructor' && <User size={18} />}
                    {tab === 'reviews' && <Star size={18} />}
                    {tab}
                  </div>
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-accent rounded-t-full shadow-[0_0_10px_rgba(0,184,219,0.5)]" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              
              {/* OVERVIEW TAB */}
              {activeTab === 'overview' && (
                <div className="animate-in fade-in duration-300">
                  <h3 className="text-2xl font-bold text-white mb-6">Course Description</h3>
                  <p className="text-[15px] text-muted/90 leading-relaxed mb-8">
                    {course.overview}
                  </p>
                  
                  <div className="bg-[#0b1622] border border-white/5 p-8 rounded-3xl">
                    <h4 className="text-[17px] font-bold text-white mb-6">What you'll learn</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {course.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-[14px] font-medium text-muted/90">
                          <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* CURRICULUM TAB */}
              {activeTab === 'curriculum' && (
                <div className="animate-in fade-in duration-300">
                  <h3 className="text-2xl font-bold text-white mb-6">Curriculum</h3>
                  <div className="flex flex-col gap-4">
                    {course.curriculum.map((section, i) => (
                      <div key={i} className="bg-[#0b1622] border border-white/5 rounded-2xl overflow-hidden">
                        <div className="p-5 border-b border-white/5 bg-white/[0.02]">
                          <h4 className="text-[16px] font-bold text-white">{section.section}</h4>
                        </div>
                        <div className="p-2">
                          {section.lessons.map((lesson, j) => (
                            <div key={j} className="flex items-center justify-between p-3 hover:bg-white/5 rounded-xl transition-colors cursor-pointer group">
                              <div className="flex items-center gap-3 text-[14px] font-medium text-muted/90 group-hover:text-white">
                                <Play size={14} className="text-accent" />
                                {lesson}
                              </div>
                              <span className="text-[12px] font-semibold text-muted/60 bg-white/5 px-2 py-1 rounded-md group-hover:bg-accent/10 group-hover:text-accent">Preview</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* INSTRUCTOR TAB */}
              {activeTab === 'instructor' && (
                <div className="animate-in fade-in duration-300">
                  <h3 className="text-2xl font-bold text-white mb-6">About the Instructor</h3>
                  <div className="flex flex-col sm:flex-row gap-8 items-start">
                    <div className="w-32 h-32 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-3xl font-bold shrink-0">
                      SA
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{course.instructor}</h4>
                      <p className="text-[14px] font-mono text-accent mb-4">Lead AI Architect & Strategist</p>
                      <p className="text-[15px] text-muted/90 leading-relaxed mb-4">
                        With over a decade of experience in systems thinking and product management, SKKER Admin has helped Fortune 500 companies restructure their operations using cutting-edge AI pipelines and Kanban systems.
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-[13px] font-semibold text-white">
                          <Star size={16} className="text-yellow-400" fill="currentColor" /> 4.9 Instructor Rating
                        </div>
                        <div className="flex items-center gap-2 text-[13px] font-semibold text-white">
                          <User size={16} className="text-accent" /> 24,000+ Students
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* REVIEWS TAB */}
              {activeTab === 'reviews' && (
                <div className="animate-in fade-in duration-300">
                  <h3 className="text-2xl font-bold text-white mb-6">Student Feedback</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
                     <div className="md:col-span-4 bg-[#0b1622] border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
                       <div className="text-6xl font-black text-white mb-2">{course.rating}</div>
                       <div className="flex text-yellow-400 mb-2">
                          <Star size={20} fill="currentColor" />
                          <Star size={20} fill="currentColor" />
                          <Star size={20} fill="currentColor" />
                          <Star size={20} fill="currentColor" />
                          <Star size={20} className="text-white/20" />
                        </div>
                        <div className="text-[14px] font-bold text-muted/80">Course Rating</div>
                     </div>
                     <div className="md:col-span-8 flex flex-col justify-center gap-3">
                        {[5, 4, 3, 2, 1].map((star) => (
                           <div key={star} className="flex items-center gap-4">
                             <div className="flex items-center gap-1 w-12 text-[13px] font-bold text-white">
                                {star} <Star size={12} className="text-yellow-400" fill="currentColor" />
                             </div>
                             <div className="flex-1 h-3 bg-white/5 rounded-full overflow-hidden">
                               <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 5 : 0}%` }} />
                             </div>
                             <div className="w-10 text-[12px] font-semibold text-muted text-right">
                               {star === 5 ? '70%' : star === 4 ? '20%' : star === 3 ? '5%' : '0%'}
                             </div>
                           </div>
                        ))}
                     </div>
                  </div>
                  
                  <div className="space-y-6">
                    {[1, 2, 3].map((_, i) => (
                      <div key={i} className="border-b border-white/5 pb-6">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[13px] font-bold text-white">
                            U{i+1}
                          </div>
                          <div>
                            <div className="text-[14px] font-bold text-white">User {i+1}</div>
                            <div className="flex text-yellow-400">
                              <Star size={12} fill="currentColor" />
                              <Star size={12} fill="currentColor" />
                              <Star size={12} fill="currentColor" />
                              <Star size={12} fill="currentColor" />
                              <Star size={12} fill="currentColor" />
                            </div>
                          </div>
                        </div>
                        <p className="text-[14px] text-muted/90">"This course completely transformed how our leadership team operates. The workflows provided were instantly actionable."</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Sticky Right Sidebar (Purchase Card) */}
          <div className="lg:col-span-1">
            <div className="bg-[#0b1622] rounded-3xl border border-white/5 shadow-2xl sticky top-28 overflow-hidden lg:-mt-64 relative z-20">
              
              {/* Video Preview Placeholder */}
              <div className="relative aspect-video bg-black cursor-pointer group">
                <img src={course.image} alt={course.title} className="object-cover w-full h-full opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                   <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center text-white shadow-[0_0_30px_rgba(0,184,219,0.5)] mb-3 group-hover:scale-110 transition-transform">
                      <Play size={24} className="ml-1" />
                   </div>
                   <span className="text-[14px] font-bold text-white tracking-widest uppercase">Preview this course</span>
                </div>
              </div>

              <div className="p-8">
                {/* Pricing */}
                <div className="flex items-end gap-3 mb-6">
                  <span className="text-4xl font-extrabold text-white">
                    ${course.price}
                  </span>
                  <span className="text-[18px] text-muted/60 line-through font-semibold mb-1">
                    ${course.originalPrice}
                  </span>
                  <span className="text-[14px] font-bold text-[#ff4757] mb-1.5 ml-1">
                    {course.discount}% off
                  </span>
                </div>

                {/* CTAs */}
                <div className="flex flex-col gap-3 mb-6">
                  <button className="w-full h-14 bg-gradient-to-r from-accent to-accent-cool text-[#04121d] text-[15px] font-extrabold rounded-xl shadow-[0_0_20px_rgba(0,184,219,0.3)] hover:shadow-[0_0_30px_rgba(0,184,219,0.5)] transition-all hover:-translate-y-0.5">
                    Enroll now
                  </button>
                  <button className="w-full h-14 bg-white/5 border border-white/10 text-white text-[15px] font-bold rounded-xl hover:bg-white/10 transition-colors">
                    Add to cart
                  </button>
                </div>
                
                <p className="text-center text-[12px] text-muted/60 font-medium mb-8">
                  30-Day Money-Back Guarantee
                </p>

                {/* Includes */}
                <h4 className="text-[14px] font-bold text-white mb-4">This course includes:</h4>
                <ul className="flex flex-col gap-3 mb-8">
                  <li className="flex items-center gap-3 text-[13px] font-semibold text-muted/90"><MonitorPlay size={16} className="text-accent" /> {course.duration} on-demand video</li>
                  <li className="flex items-center gap-3 text-[13px] font-semibold text-muted/90"><FileText size={16} className="text-accent" /> 14 articles & resources</li>
                  <li className="flex items-center gap-3 text-[13px] font-semibold text-muted/90"><Shield size={16} className="text-accent" /> Full lifetime access</li>
                </ul>
                
                {/* Meta Actions */}
                <div className="flex items-center justify-between border-t border-white/5 pt-6">
                  <button className="flex items-center gap-2 text-[13px] font-semibold text-white hover:text-accent transition-colors"><Share2 size={16} /> Share</button>
                  <button className="flex items-center gap-2 text-[13px] font-semibold text-white hover:text-accent transition-colors"><Heart size={16} /> Wishlist</button>
                </div>

              </div>
            </div>
          </div>
          
        </div>
      </div>

      <Footer />
    </main>
  );
}
