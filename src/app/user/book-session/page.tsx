'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

export default function BookSessionPage() {
  const [selectedType, setSelectedType] = useState('mentoring');
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Dummy Calendar Data
  const currentMonth = "August 2026";
  const daysOfWeek = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  const blanks = Array.from({ length: 6 }); // Sun to Fri are blank
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const availableDates = [27, 28, 29, 30, 31];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '01:00 PM', '02:00 PM', '03:30 PM',
    '05:00 PM'
  ];

  const coachingTypes = [
    {
      id: 'mentoring',
      num: '01',
      title: 'Mentoring',
      desc: 'A thinking partner for direction, leverage, career architecture, and stronger operating habits.',
      price: 'USD 100.00'
    },
    {
      id: 'personal_coaching',
      num: '02',
      title: 'Personal Coaching',
      desc: 'Focused coaching for clarity, decision quality, execution rhythm, and personal leadership context.',
      price: 'USD 100.00',
      popular: true
    },
    {
      id: 'business_coaching',
      num: '03',
      title: 'Business Coaching',
      desc: 'Operating model clarity, delivery rhythm, stakeholder alignment, and practical execution systems.',
      price: 'USD 100.00'
    }
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedSlot) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <main className="min-h-screen font-sans relative bg-[radial-gradient(circle_at_12%_0%,rgba(0,184,219,0.12),transparent_32%),linear-gradient(180deg,#f6fbff_0%,#edf5fb_100%)] dark:bg-[#040C14] dark:bg-none text-[#07121b] dark:text-[#f4fbff]">
      <Navbar />

      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1080px] mx-auto w-full relative z-10">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center text-center py-24 bg-white/95 dark:bg-white/[0.04] border border-[#07121b]/10 dark:border-white/[0.1] rounded-[22px] shadow-lg mt-10">
            <div className="w-20 h-20 bg-[#00b8db]/10 border border-[#00b8db]/20 rounded-full flex items-center justify-center mb-6">
              <Check className="w-10 h-10 text-[#00b8db]" />
            </div>
            <h3 className="text-[32px] font-sans font-bold text-[#07121b] dark:text-[#f4fbff] mb-4">Booking Confirmed</h3>
            <p className="text-[16px] text-[#43566a] dark:text-[#e2f0f8]/70 max-w-[450px] mb-10 leading-relaxed">
              Your {coachingTypes.find(t => t.id === selectedType)?.title} session for {currentMonth.split(' ')[0]} {selectedDate} at {selectedSlot} has been successfully booked. You&apos;ll receive a confirmation email shortly.
            </p>
            <button
              onClick={() => {
                setIsSuccess(false);
                setSelectedDate(null);
                setSelectedSlot(null);
              }}
              className="px-8 py-4 bg-gradient-to-br from-[#007fa3] to-[#00b8db] text-white rounded-full font-sans text-[14px] font-bold tracking-[0.04em] shadow-[0_12px_28px_rgba(0,184,219,0.28)] hover:shadow-[0_18px_36px_rgba(0,184,219,0.42)] transition-all"
            >
              Book Another Session
            </button>
          </div>
        ) : (
          <>
            {/* Header Area */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8 mt-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-[5px] rounded-full border border-[#00b8db]/20 bg-[#00b8db]/10 mb-4">
                  <div className="w-[5px] h-[5px] rounded-full bg-[#00b8db] animate-pulse" />
                  <span className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase text-[#00b8db]">Session Booking</span>
                </div>

                <h1 className="text-[36px] sm:text-[42px] font-serif font-bold text-[#07121b] dark:text-[#f4fbff] leading-[1.2] mb-1.5">
                  Book a <em className="text-transparent dark:text-[#75efff] dark:[-webkit-text-fill-color:#75efff] bg-clip-text bg-gradient-to-br from-[#007fa3] to-[#00b8db] dark:bg-none not-italic dark:shadow-[#00b8db]/30 dark:[text-shadow:0_0_22px_rgba(0,184,219,0.34)] font-serif">Session</em>
                </h1>

                <p className="text-[14px] text-[#43566a] dark:text-[#e2f0f8]/70 font-sans m-0">
                  Choose your coaching type, pick an available slot, then continue to payment when required.
                </p>
              </div>

              <div className="flex gap-2.5 mt-2">
                <Link href="#" className="px-5 py-2 rounded-full border border-black/10 dark:border-white/[0.14] bg-white dark:bg-white/[0.04] text-[#07121b] dark:text-[#f4fbff] text-[13px] font-semibold hover:border-[#00b8db] dark:hover:border-[#00b8db] hover:text-[#00b8db] dark:hover:text-[#00b8db] shadow-[0_10px_26px_rgba(7,18,27,0.06)] dark:shadow-none transition-colors">
                  Packages
                </Link>
                <Link href="#" className="px-5 py-2 rounded-full border border-black/10 dark:border-white/[0.14] bg-white dark:bg-white/[0.04] text-[#07121b] dark:text-[#f4fbff] text-[13px] font-semibold hover:border-[#00b8db] dark:hover:border-[#00b8db] hover:text-[#00b8db] dark:hover:text-[#00b8db] shadow-[0_10px_26px_rgba(7,18,27,0.06)] dark:shadow-none transition-colors">
                  My Sessions
                </Link>
              </div>
            </div>

            {/* Status Alert */}
            <div className="flex items-start gap-3 p-3.5 px-4.5 rounded-[14px] bg-[linear-gradient(160deg,rgba(0,184,219,0.08),rgba(255,255,255,0)_48%),rgba(255,255,255,0.94)] dark:bg-white/[0.04] border border-[#07121b]/10 dark:border-white/[0.1] shadow-[0_18px_44px_rgba(15,35,50,0.08)] dark:shadow-none mb-7">
              <span className="text-[#43566a] dark:text-[#e2f0f8]/70 mt-[2px] text-[16px] leading-none">◇</span>
              <p className="text-[14px] text-[#43566a] dark:text-[#e2f0f8]/70 leading-[1.5]">
                <strong className="text-[#07121b] dark:text-white font-bold">No payment required.</strong> Simply pick a slot and confirm.
              </p>
            </div>

            {/* Coaching Types Selector */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-8">
              {coachingTypes.map((type) => {
                const isActive = selectedType === type.id;
                return (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`relative flex flex-col text-left p-[18px] rounded-[20px] border transition-all text-[#07121b] dark:text-[#f4fbff] min-h-[154px] lg:min-h-[190px] outline-none shadow-[0_18px_44px_rgba(15,35,50,0.08)] dark:shadow-none ${isActive
                        ? 'border-[#00b8db]/55 dark:border-[#00b8db]/55 bg-[linear-gradient(160deg,rgba(0,184,219,0.08),rgba(255,255,255,0)_48%),rgba(255,255,255,0.94)] dark:bg-[linear-gradient(160deg,rgba(0,184,219,0.09),transparent_50%),rgba(255,255,255,0.04)] shadow-[0_14px_36px_rgba(0,184,219,0.13)] -translate-y-0.5'
                        : 'border-[#07121b]/10 dark:border-white/[0.12] bg-[linear-gradient(160deg,rgba(0,184,219,0.08),rgba(255,255,255,0)_48%),rgba(255,255,255,0.94)] dark:bg-[linear-gradient(160deg,rgba(0,184,219,0.09),transparent_50%),rgba(255,255,255,0.04)] hover:-translate-y-0.5 hover:border-[#00b8db]/55 dark:hover:border-[#00b8db]/55 hover:shadow-[0_14px_36px_rgba(0,184,219,0.13)]'
                      }`}
                  >
                    {isActive && (
                      <div className="absolute inset-[10px] rounded-[16px] border border-[#00b8db]/70 shadow-[0_0_0_3px_rgba(0,184,219,0.18)] pointer-events-none" />
                    )}
                    {type.popular && (
                      <span className="absolute top-3 right-3 px-2 py-1 rounded-full bg-[#00b8db]/15 text-[#00b8db] text-[10px] font-black tracking-normal z-10">
                        Popular
                      </span>
                    )}
                    <span className="font-mono text-[10px] font-extrabold tracking-[0.16em] uppercase text-[#00b8db] mb-2 z-10">
                      {type.num}
                    </span>
                    <strong className="text-[1.05rem] font-extrabold text-[#07121b] dark:text-[#f4fbff] mb-2 z-10">{type.title}</strong>
                    <p className="text-[0.84rem] text-[#43566a] dark:text-[#e2f0f8]/70 leading-[1.6] z-10">{type.desc}</p>

                    <div className="mt-auto inline-flex px-2.5 py-1.5 rounded-full border border-[#007fa3]/20 dark:border-[#00b8db]/30 bg-[#00b8db]/10 text-[#07121b] dark:text-[#f4fbff] text-[0.82rem] font-extrabold w-fit z-10">
                      {type.price}
                    </div>
                  </button>
                )
              })}
            </div>

            <form onSubmit={handleBooking}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[22px]">

                {/* Left: Calendar Card */}
                <div className="bg-[linear-gradient(160deg,rgba(0,184,219,0.08),rgba(255,255,255,0)_48%),rgba(255,255,255,0.94)] dark:bg-white/[0.04] backdrop-blur-md border border-[#07121b]/10 dark:border-white/[0.1] rounded-[22px] p-5 sm:p-7 shadow-[0_18px_44px_rgba(15,35,50,0.08)] dark:shadow-none">
                  <span className="block font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-[#43566a] dark:text-[#e2f0f8]/70 mb-[18px]">
                    Choose a Date
                  </span>

                  {/* Calendar Nav */}
                  <div className="flex items-center justify-between mb-4">
                    <button type="button" className="w-[30px] h-[30px] rounded-full border border-[#07121b]/15 dark:border-white/[0.1] bg-[#f8fbff] dark:bg-white/5 flex items-center justify-center hover:border-[#00b8db] hover:text-[#00b8db] transition-colors disabled:opacity-25 disabled:cursor-not-allowed text-[#07121b] dark:text-[#f4fbff]" disabled>
                      <ChevronLeft size={16} />
                    </button>
                    <strong className="text-[15px] font-serif font-bold text-[#07121b] dark:text-[#f4fbff]">{currentMonth}</strong>
                    <button type="button" className="w-[30px] h-[30px] rounded-full border border-[#07121b]/15 dark:border-white/[0.1] bg-[#f8fbff] dark:bg-white/5 flex items-center justify-center hover:border-[#00b8db] hover:text-[#00b8db] transition-colors text-[#07121b] dark:text-[#f4fbff]">
                      <ChevronRight size={16} />
                    </button>
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1.5">
                    {daysOfWeek.map((day, i) => (
                      <div key={i} className="text-center font-mono text-[10px] font-bold tracking-[0.1em] text-[#43566a] dark:text-[#e2f0f8]/70 uppercase pb-2">
                        {day}
                      </div>
                    ))}

                    {blanks.map((_, i) => (
                      <div key={`blank-${i}`} className="aspect-square min-w-[34px] min-h-[34px]" />
                    ))}

                    {days.map(day => {
                      const isAvailable = availableDates.includes(day);
                      const isSelected = selectedDate === day;
                      return (
                        <button
                          key={day}
                          type="button"
                          disabled={!isAvailable}
                          onClick={() => { setSelectedDate(day); setSelectedSlot(null); }}
                          className={`relative aspect-square min-w-[34px] min-h-[34px] flex items-center justify-center rounded-full text-[13px] font-medium transition-colors border border-transparent outline-none ${isSelected
                              ? 'bg-[#007fa3] dark:bg-[#00b8db] text-white shadow-[0_4px_18px_rgba(0,184,219,0.4)]'
                              : isAvailable
                                ? 'text-[#07121b] dark:text-[#f4fbff] hover:bg-[#00b8db]/15 hover:border-[#00a7cc] hover:text-[#006f8f] dark:hover:border-transparent dark:hover:text-[#f4fbff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00b8db]/40'
                                : 'text-[#43566a] dark:text-[#e2f0f8]/70 bg-black/5 dark:bg-[#7f8f9f]/5 opacity-[0.22] cursor-not-allowed line-through'
                            }`}
                        >
                          {day}
                          {isAvailable && !isSelected && (
                            <div className="absolute bottom-[5px] w-1 h-1 rounded-full bg-[#00b8db] opacity-90" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Right Column: Slots & Form */}
                <div className="bg-[linear-gradient(160deg,rgba(0,184,219,0.08),rgba(255,255,255,0)_48%),rgba(255,255,255,0.94)] dark:bg-white/[0.04] backdrop-blur-md border border-[#07121b]/10 dark:border-white/[0.1] rounded-[22px] p-5 sm:p-7 flex flex-col shadow-[0_18px_44px_rgba(15,35,50,0.08)] dark:shadow-none">
                  <span className="block font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-[#43566a] dark:text-[#e2f0f8]/70 mb-[18px]">
                    Available Times
                  </span>

                  {!selectedDate ? (
                    <div className="text-[14px] text-[#43566a] dark:text-[#e2f0f8]/70 text-center py-6">
                      ← Select a date to see available times.
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {timeSlots.map((slot, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={`min-h-[44px] flex items-center justify-center rounded-xl text-[13px] font-semibold transition-all border outline-none focus-visible:outline-[3px] focus-visible:outline-[#00b8db]/35 focus-visible:outline-offset-[3px] ${selectedSlot === slot
                              ? 'bg-[#00b8db]/15 border-[#00a7cc] dark:border-[#00b8db] text-[#006f8f] dark:text-[#00b8db] shadow-[inset_0_0_0_1px_#00b8db,0_10px_22px_rgba(0,184,219,0.13)]'
                              : 'bg-[#f8fbff] dark:bg-white/[0.04] border-[#07121b]/15 dark:border-white/[0.1] text-[#07121b] dark:text-[#f4fbff] hover:bg-[#00b8db]/10 hover:border-[#00a7cc] hover:text-[#006f8f] dark:hover:border-[#00b8db] dark:hover:text-[#00b8db]'
                            }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  )}

                  <hr className="border-t border-[#07121b]/5 dark:border-white/[0.08] my-[18px]" />

                  <div className="flex flex-col gap-2">
                    <label className="block font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-[#43566a] dark:text-[#e2f0f8]/70 mb-2">
                      Session Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="What would you like to focus on?"
                      className="w-full bg-[#f8fbff] dark:bg-white/[0.04] border border-[#07121b]/15 dark:border-white/[0.1] rounded-xl px-[14px] py-[12px] text-[14px] text-[#07121b] dark:text-[#f4fbff] placeholder:text-[#718194] dark:placeholder:text-[#e2f0f8]/70 focus:outline-none focus:border-[#00b8db] transition-colors resize-y min-h-[78px]"
                    />
                  </div>

                  <div className="flex items-center flex-wrap gap-[14px] mt-5">
                    <button
                      type="submit"
                      disabled={!selectedDate || !selectedSlot || isSubmitting}
                      className="inline-flex items-center justify-center px-7 min-h-[50px] bg-gradient-to-br from-[#007fa3] to-[#00b8db] text-white rounded-full font-sans text-[14px] font-bold tracking-[0.04em] shadow-[0_12px_28px_rgba(0,184,219,0.28)] hover:shadow-[0_18px_36px_rgba(0,184,219,0.42)] hover:-translate-y-0.5 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none disabled:hover:translate-y-0"
                    >
                      {isSubmitting ? 'Processing...' : 'Confirm Booking'}
                    </button>
                    {!selectedDate || !selectedSlot ? (
                      <span className="text-[13px] text-[#43566a] dark:text-[#e2f0f8]/70 m-0">Select a date and time to continue.</span>
                    ) : (
                      <span className="text-[13px] text-[#00b8db] m-0 font-medium">Ready to confirm</span>
                    )}
                  </div>

                </div>
              </div>
            </form>
          </>
        )}
      </div>

      <Footer />
    </main>
  );
}
