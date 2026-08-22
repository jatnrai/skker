'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Heart, Clock, BookOpen, Share2, CopyPlus, LayoutGrid, List, RotateCcw, User } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Dummy Data
const COURSES = [
  { 
    id: 1, 
    title: 'Executive AI Productivity Lab', 
    category: 'AI Workflow Labs', 
    level: 'Beginner', 
    language: 'English', 
    priceType: 'Paid', 
    rating: 4.9, 
    reviews: 124, 
    price: 1900, 
    originalPrice: 2800, 
    discount: 32,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80', 
    duration: '0 Hours', 
    lessons: '0 Lessons', 
    instructor: 'SKKER Admin',
    students: 0,
    snippet: 'Hands-on executive lab for using AI to improve decision quality, communication, planning, and personal operating...'
  },
  { 
    id: 2, 
    title: 'AI Workflow Automation for Leaders', 
    category: 'AI Workflow Labs', 
    level: 'Advanced', 
    language: 'English', 
    priceType: 'Paid', 
    rating: 4.8, 
    reviews: 89, 
    price: 3100, 
    originalPrice: 4200, 
    discount: 26,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80', 
    duration: '0 Hours', 
    lessons: '0 Lessons', 
    instructor: 'SKKER Admin',
    students: 0,
    snippet: 'Build practical AI-enabled workflows for leaders, operators, and teams who need better leverage without...'
  },
  { 
    id: 3, 
    title: 'Systems Thinking for Organizations', 
    category: 'Kanban Systems', 
    level: 'Beginner', 
    language: 'English', 
    priceType: 'Paid', 
    rating: 4.7, 
    reviews: 210, 
    price: 3200, 
    originalPrice: 4600, 
    discount: 30,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80', 
    duration: '07:10:00 Hours', 
    lessons: '4 Lessons', 
    instructor: 'SKKER Admin',
    students: 2,
    snippet: 'A structured training for leaders and teams who want to shift from reactive operations to intentional system...'
  },
  { 
    id: 4, 
    title: 'Digital Transformation Strategy', 
    category: 'AI & Digital Transformation', 
    level: 'Advanced', 
    language: 'English', 
    priceType: 'Paid', 
    rating: 5.0, 
    reviews: 67, 
    price: 2400, 
    originalPrice: 3000, 
    discount: 20,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80', 
    duration: '12:00:00 Hours', 
    lessons: '8 Lessons', 
    instructor: 'SKKER Admin',
    students: 45,
    snippet: 'Master the core frameworks for driving successful digital transformation across enterprise organizations...'
  },
];

const CATEGORIES = [
  { name: 'All courses', count: 6 },
  { name: 'Systems Thinking', count: 4 },
  { name: 'Kanban Systems', count: 4 },
  { name: 'AI & Digital Transformation', count: 2 },
  { name: 'AI Workflow Labs', count: 2 },
];

const PRICES = ['All', 'Free', 'Paid'];
const LEVELS = ['All', 'Beginner', 'Intermediate', 'Advanced'];
const LANGUAGES = ['All', 'English', 'Spanish', 'French'];
const RATINGS = ['All', '4.5 & up', '4.0 & up', '3.5 & up'];

export default function CoursesPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All courses');
  const [selectedPrice, setSelectedPrice] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [selectedRating, setSelectedRating] = useState('All');
  const [sortBy, setSortBy] = useState('newly_published');

  // Filter & Sort Logic
  const filteredCourses = COURSES.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCategory === 'All courses' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    return matchesSearch && matchesCat && matchesLevel;
  });

  const RadioCustom = ({ checked, label, count }: { checked: boolean, label: string, count?: number }) => (
    <div className="flex items-center justify-between w-full cursor-pointer group">
      <div className="flex items-center gap-3">
        <div className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center transition-colors ${checked ? 'border-accent' : 'border-border group-hover:border-border'}`}>
          {checked && <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" />}
        </div>
        <span className={`text-[13px] transition-colors ${checked ? 'text-heading font-semibold' : 'text-muted/80 group-hover:text-heading'}`}>
          {label}
        </span>
      </div>
      {count !== undefined && (
        <span className="text-[11px] text-muted/60">({count})</span>
      )}
    </div>
  );

  return (
    <main className="min-h-screen flex flex-col font-sans bg-section text-text">
      <Navbar />
      
      <div className="flex-grow pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto w-full">
        
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Sidebar */}
          <aside className="w-full lg:w-[280px] shrink-0">
            <div className="bg-card rounded-2xl border border-border p-6 sticky top-28 flex flex-col gap-8 shadow-xl">
              
              {/* Sidebar Search */}
              <div className="relative">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/60" />
                <input 
                  type="text" 
                  placeholder="Search by keyword" 
                  className="w-full h-[42px] bg-section border border-border rounded-xl pl-10 pr-4 text-sm text-heading placeholder:text-muted/50 outline-none focus:border-accent/50 transition-all"
                />
              </div>

              {/* Categories */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h4 className="text-[14px] font-bold text-heading">Categories</h4>
                  <span className="bg-surface text-accent text-[10px] font-bold px-1.5 py-0.5 rounded">6</span>
                </div>
                <div className="flex flex-col gap-4">
                  {CATEGORIES.map(cat => (
                    <label key={cat.name} className="block w-full">
                      <input 
                        type="radio" 
                        name="category" 
                        value={cat.name} 
                        checked={selectedCategory === cat.name} 
                        onChange={() => setSelectedCategory(cat.name)} 
                        className="sr-only" 
                      />
                      <RadioCustom checked={selectedCategory === cat.name} label={cat.name} count={cat.count} />
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h4 className="text-[14px] font-bold text-heading mb-4">Price</h4>
                <div className="flex flex-col gap-4">
                  {PRICES.map(price => (
                    <label key={price} className="block w-full">
                      <input 
                        type="radio" 
                        name="price" 
                        value={price} 
                        checked={selectedPrice === price} 
                        onChange={() => setSelectedPrice(price)} 
                        className="sr-only" 
                      />
                      <RadioCustom checked={selectedPrice === price} label={price} />
                    </label>
                  ))}
                </div>
              </div>

              {/* Level */}
              <div>
                <h4 className="text-[14px] font-bold text-heading mb-4">Level</h4>
                <div className="flex flex-col gap-4">
                  {LEVELS.map(level => (
                    <label key={level} className="block w-full">
                      <input 
                        type="radio" 
                        name="level" 
                        value={level} 
                        checked={selectedLevel === level} 
                        onChange={() => setSelectedLevel(level)} 
                        className="sr-only" 
                      />
                      <RadioCustom checked={selectedLevel === level} label={level} />
                    </label>
                  ))}
                </div>
              </div>

              {/* Language */}
              <div>
                <h4 className="text-[14px] font-bold text-heading mb-4">Language</h4>
                <div className="flex flex-col gap-4">
                  {LANGUAGES.map(lang => (
                    <label key={lang} className="block w-full">
                      <input type="radio" name="language" value={lang} checked={selectedLanguage === lang} onChange={() => setSelectedLanguage(lang)} className="sr-only" />
                      <RadioCustom checked={selectedLanguage === lang} label={lang} />
                    </label>
                  ))}
                </div>
              </div>

              {/* Ratings */}
              <div>
                <h4 className="text-[14px] font-bold text-heading mb-4">Ratings</h4>
                <div className="flex flex-col gap-4">
                  {RATINGS.map(rating => (
                    <label key={rating} className="block w-full">
                      <input type="radio" name="rating" value={rating} checked={selectedRating === rating} onChange={() => setSelectedRating(rating)} className="sr-only" />
                      <RadioCustom checked={selectedRating === rating} label={rating} />
                    </label>
                  ))}
                </div>
              </div>
              
              <button className="w-full mt-2 h-11 rounded-xl border border-border bg-section text-[13px] font-semibold text-muted/80 hover:text-heading hover:border-border transition-all flex items-center justify-center gap-2">
                Clear all filters
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0 w-full flex flex-col gap-6">
            
            {/* Top Bar */}
            <div className="bg-card border border-border p-4 rounded-2xl flex flex-col sm:flex-row gap-4 items-center justify-between shadow-sm">
              <div className="relative w-full sm:w-[320px]">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/60" />
                <input 
                  type="text" 
                  placeholder="Search courses" 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full h-10 bg-section border border-border rounded-xl pl-10 pr-4 text-sm text-heading placeholder:text-muted/50 outline-none focus:border-accent/50 transition-all"
                />
              </div>
              
              <div className="flex items-center gap-3">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="h-10 bg-section border border-border rounded-xl px-4 text-[13px] text-heading font-medium outline-none focus:border-accent/50 appearance-none min-w-[160px] cursor-pointer"
                >
                  <option value="newly_published">Newly published</option>
                  <option value="popular">Most Popular</option>
                  <option value="highest_rated">Highest Rated</option>
                </select>

                <div className="flex items-center gap-1 bg-section border border-border p-1 rounded-xl">
                  <button className="w-8 h-8 rounded-lg bg-accent text-black flex items-center justify-center shadow-[0_0_15px_rgba(0,184,219,0.3)]">
                    <LayoutGrid size={16} />
                  </button>
                  <button className="w-8 h-8 rounded-lg text-muted/60 hover:text-heading flex items-center justify-center transition-colors">
                    <List size={16} />
                  </button>
                </div>
                
                <button className="w-10 h-10 rounded-xl border border-border bg-section text-muted/60 hover:text-heading flex items-center justify-center transition-colors">
                  <RotateCcw size={16} />
                </button>
              </div>
            </div>

            {/* Results Info */}
            <div className="text-[13px] text-muted">
              Showing <span className="text-accent font-bold">{filteredCourses.length}</span> Of <span className="text-accent font-bold">{COURSES.length}</span> Results
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCourses.map(course => (
                <div key={course.id} className="group flex flex-col bg-card hover:bg-surface rounded-3xl border border-border hover:border-border-focus overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
                  
                  {/* Image Section */}
                  <div className="relative h-[200px] overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="object-cover w-full h-full opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-90" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 flex justify-between right-4">
                      <span className={`px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest rounded-full ${
                        course.level === 'Advanced' ? 'bg-[#ff6b6b] text-heading shadow-[0_0_10px_rgba(255,107,107,0.4)]' 
                        : course.level === 'Beginner' ? 'bg-[#20e2a8] text-page shadow-[0_0_10px_rgba(32,226,168,0.4)]'
                        : 'bg-[#feca57] text-page shadow-[0_0_10px_rgba(254,202,87,0.4)]'
                      }`}>
                        {course.level}
                      </span>
                      
                      <button className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-border flex items-center justify-center text-heading/70 hover:text-heading hover:bg-black/60 transition-all">
                        <Heart size={14} />
                      </button>
                    </div>

                    {/* Bottom Info Overlay */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center gap-4 text-[11px] font-bold text-heading/90">
                      <div className="flex items-center gap-1.5 drop-shadow-md">
                        <Clock size={12} className="opacity-80" /> {course.duration}
                      </div>
                      <div className="flex items-center gap-1.5 drop-shadow-md">
                        <BookOpen size={12} className="opacity-80" /> {course.lessons}
                      </div>
                      {course.students > 0 && (
                        <div className="flex items-center gap-1.5 drop-shadow-md">
                          <User size={12} className="opacity-80" /> {course.students} Students
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Category & Breadcrumb */}
                    <div className="text-[11px] font-semibold text-muted mb-2 uppercase tracking-wide flex items-center gap-1.5">
                      <span className="text-accent">{course.category}</span>
                      <span>&middot;</span>
                      <span>{course.language}</span>
                    </div>
                    
                    <h3 className="text-[17px] font-bold text-heading mb-3 leading-snug">
                      <Link href={`/user/training/courses/${course.id}`} className="hover:text-accent transition-colors">
                        {course.title}
                      </Link>
                    </h3>
                    
                    <p className="text-[13px] text-muted/80 leading-relaxed mb-5 line-clamp-2 min-h-[40px]">
                      {course.snippet}
                    </p>
                    
                    {/* Instructor & New Badge */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-7 h-7 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-accent text-[10px] font-bold shrink-0">
                        SA
                      </div>
                      <span className="text-[13px] text-muted/90 font-medium">{course.instructor}</span>
                    </div>

                    {course.isNew && (
                      <div className="mb-6">
                         <span className="px-2.5 py-1 text-[10px] font-bold text-heading/70 bg-surface border border-border rounded-full">
                           NEW
                         </span>
                      </div>
                    )}

                    <div className="mt-auto">
                      {/* Price & Action */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-extrabold text-heading">
                            ${course.price}
                          </span>
                          <span className="text-[13px] text-muted/60 line-through font-semibold relative top-[2px]">
                            ${course.originalPrice}
                          </span>
                          <span className="px-2 py-0.5 text-[10px] font-bold text-heading bg-[#ff4757] rounded-md ml-1 shadow-[0_0_10px_rgba(255,71,87,0.3)]">
                            -{course.discount}%
                          </span>
                        </div>
                        
                        <Link href={`/user/training/courses/${course.id}`} className="h-10 px-5 bg-gradient-to-r from-accent to-accent-cool text-page text-[13px] font-bold rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,184,219,0.2)] hover:shadow-[0_0_25px_rgba(0,184,219,0.4)] transition-all">
                          Enroll now
                        </Link>
                      </div>

                      {/* Bottom Actions */}
                      <div className="flex items-center gap-6 pt-5 border-t border-border">
                        <button className="flex items-center gap-2 text-[12px] font-semibold text-muted/70 hover:text-heading transition-colors">
                          <CopyPlus size={14} /> Compare
                        </button>
                        <button className="flex items-center gap-2 text-[12px] font-semibold text-muted/70 hover:text-heading transition-colors">
                          <Share2 size={14} /> Share
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
