"use client";

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { updateBookingStatus } from '@/store/slices/adminSlice';
import { 
  Calendar as CalendarIcon, 
  Search, 
  Filter, 
  Video,
  MapPin,
  Clock,
  CheckCircle2,
  XCircle,
  MoreHorizontal,
  ChevronRight,
  Settings,
  List
} from 'lucide-react';
import Link from 'next/link';

export default function BookingsAdmin() {
  const dispatch = useDispatch();
  const bookings = useSelector((state: RootState) => state.admin.bookings);

  const [activeTab, setActiveTab] = useState<'list' | 'settings'>('list');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBooking, setSelectedBooking] = useState<string | null>(null);
  
  // Idempotent Confirm Action
  const handleConfirm = (id: string) => {
    // Only confirm if it's not already confirmed
    const booking = bookings.find(b => b.id === id);
    if (booking && booking.status !== 'Confirmed') {
      dispatch(updateBookingStatus({ id, status: 'Confirmed' }));
    }
  };

  const filteredBookings = bookings.filter(b => 
    b.client.toLowerCase().includes(searchTerm.toLowerCase()) || 
    b.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 flex flex-col h-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Booking Administration</h1>
          <p className="text-neutral-400 text-sm mt-1">Manage private services, discovery calls, and availability settings.</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="bg-neutral-900 border border-neutral-800 p-1 rounded-lg flex items-center">
            <button 
              onClick={() => setActiveTab('list')}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${activeTab === 'list' ? 'bg-neutral-800 text-white' : 'text-neutral-500 hover:text-white'}`}
            >
              <List size={16} /> Bookings
            </button>
            <button 
              onClick={() => setActiveTab('settings')}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${activeTab === 'settings' ? 'bg-neutral-800 text-white' : 'text-neutral-500 hover:text-white'}`}
            >
              <Settings size={16} /> Settings & Availability
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'list' ? (
        <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-140px)]">
          {/* Main Bookings List */}
          <div className="flex-1 flex flex-col bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
            <div className="p-4 border-b border-neutral-800 flex gap-4">
              <div className="relative flex-1">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
                <input 
                  type="text" 
                  placeholder="Search client or service..." 
                  className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500 transition-all placeholder:text-neutral-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="bg-neutral-950 border border-neutral-800 hover:bg-neutral-800 px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-neutral-400 hover:text-white text-sm">
                <Filter size={16} /> Filter
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-neutral-500 uppercase bg-neutral-950/50 border-b border-neutral-800 sticky top-0 z-10">
                  <tr>
                    <th className="px-5 py-3 font-medium">Client & Service</th>
                    <th className="px-5 py-3 font-medium">Date & Time (MYT)</th>
                    <th className="px-5 py-3 font-medium">Payment</th>
                    <th className="px-5 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800">
                  {filteredBookings.map((b) => (
                    <tr 
                      key={b.id} 
                      onClick={() => setSelectedBooking(b.id)}
                      className={`hover:bg-neutral-800/80 transition-colors cursor-pointer ${selectedBooking === b.id ? 'bg-neutral-800/80' : ''}`}
                    >
                      <td className="px-5 py-4">
                        <div className="flex flex-col">
                          <span className="font-semibold text-white">{b.client}</span>
                          <span className="text-xs text-neutral-400 mt-0.5">{b.service} ({b.duration})</span>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex flex-col gap-1">
                          <span className="text-neutral-300 font-medium">{b.date}</span>
                          <span className="text-xs text-neutral-500 flex items-center gap-1">
                            {b.format.includes('Meet') ? <Video size={10} /> : <MapPin size={10} />}
                            {b.format}
                          </span>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`text-xs font-medium ${b.payment === 'Paid' ? 'text-emerald-400' : b.payment === 'Free' ? 'text-neutral-400' : 'text-amber-400'}`}>
                          {b.payment}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${
                          b.status === 'Confirmed' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
                          b.status === 'Rescheduled' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 
                          'bg-amber-500/10 text-amber-400 border-amber-500/20'
                        }`}>
                          {b.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Details Sidebar */}
          {selectedBooking ? (() => {
            const b = bookings.find(bk => bk.id === selectedBooking);
            if (!b) return null;
            return (
              <div className="w-full lg:w-96 bg-neutral-900 border border-neutral-800 rounded-xl flex flex-col shrink-0 overflow-y-auto">
                <div className="p-6 border-b border-neutral-800 flex justify-between items-start">
                  <div>
                    <h2 className="text-lg font-semibold text-white">{b.client}</h2>
                    <a href={`mailto:${b.email}`} className="text-sm text-blue-400 hover:underline">{b.email}</a>
                  </div>
                  <span className="text-xs text-neutral-500 font-mono bg-neutral-950 px-2 py-1 rounded border border-neutral-800">
                    {b.id}
                  </span>
                </div>
                
                <div className="p-6 space-y-6 flex-1">
                  <div>
                    <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Booking Details</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Service</span>
                        <span className="text-white font-medium">{b.service}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Duration</span>
                        <span className="text-white font-medium">{b.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Time (MYT)</span>
                        <span className="text-white font-medium">{b.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Time (User Local)</span>
                        <span className="text-neutral-300">{b.date.replace('Today', 'Today (Local)')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Format</span>
                        <span className="text-white flex items-center gap-1">
                          <Video size={14} className="text-blue-400" /> {b.format}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Customer Intake</h4>
                    <div className="bg-neutral-950 rounded-lg p-3 text-sm text-neutral-300 border border-neutral-800 space-y-3">
                      <div>
                        <span className="block text-xs text-neutral-500 mb-1">What is your primary goal for this call?</span>
                        <p>We are looking to implement AI strategies across our marketing department and need guidance on where to start.</p>
                      </div>
                      <div>
                        <span className="block text-xs text-neutral-500 mb-1">Current team size?</span>
                        <p>15-50 people</p>
                      </div>
                    </div>
                  </div>

                  {b.status === 'Confirmed' && (
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-sm flex gap-2 items-start text-blue-400">
                      <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Booking Confirmed</p>
                        <p className="text-xs opacity-80 mt-1">Confirmation email and Google Meet link sent. Calendar event synced.</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-4 border-t border-neutral-800 bg-neutral-950/50 space-y-2">
                  {b.status !== 'Confirmed' ? (
                    <button 
                      onClick={() => handleConfirm(b.id)}
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 rounded-lg transition-colors flex justify-center items-center gap-2"
                    >
                      <CheckCircle2 size={16} /> Confirm Booking
                    </button>
                  ) : (
                    <button disabled className="w-full bg-neutral-800 text-neutral-500 font-medium py-2 rounded-lg cursor-not-allowed flex justify-center items-center gap-2">
                      <CheckCircle2 size={16} /> Already Confirmed
                    </button>
                  )}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-neutral-300 font-medium py-2 rounded-lg transition-colors text-sm">
                      Reschedule
                    </button>
                    <button className="flex-1 bg-neutral-900 border border-neutral-800 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/20 text-neutral-300 font-medium py-2 rounded-lg transition-colors text-sm">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            );
          })() : (
            <div className="w-full lg:w-96 bg-neutral-900 border border-neutral-800 rounded-xl flex flex-col items-center justify-center p-6 text-center text-neutral-500 shrink-0">
              <CalendarIcon size={48} className="mb-4 opacity-20" />
              <p>Select a booking to view details and customer intake.</p>
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-6">
            <h3 className="text-lg font-semibold border-b border-neutral-800 pb-4">Availability Rules</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1.5">Base Timezone</label>
                <select disabled className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-neutral-500 outline-none">
                  <option>Asia/Kuala_Lumpur (MYT)</option>
                </select>
                <p className="text-xs text-neutral-500 mt-1">All bookings are stored canonically in this timezone.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-1.5">Min Lead Time</label>
                  <select className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500">
                    <option>24 Hours</option>
                    <option>48 Hours</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-1.5">Booking Horizon</label>
                  <select className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500">
                    <option>60 Days</option>
                    <option>90 Days</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1.5">Meeting Buffers (Before / After)</label>
                <select className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500">
                  <option>15 mins</option>
                  <option>30 mins</option>
                </select>
              </div>
            </div>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-6">
            <h3 className="text-lg font-semibold border-b border-neutral-800 pb-4">Service Types</h3>
            <div className="space-y-3">
              <div className="p-4 bg-neutral-950 border border-neutral-800 rounded-lg flex justify-between items-center">
                <div>
                  <h4 className="font-medium text-white">Discovery Call</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">30 mins • Free • Google Meet</p>
                </div>
                <button className="text-sm text-blue-400 hover:underline">Edit</button>
              </div>
              <div className="p-4 bg-neutral-950 border border-neutral-800 rounded-lg flex justify-between items-center">
                <div>
                  <h4 className="font-medium text-white">Private Coaching</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">60 mins • RM 800 • Google Meet</p>
                </div>
                <button className="text-sm text-blue-400 hover:underline">Edit</button>
              </div>
              <button className="w-full p-4 border border-dashed border-neutral-800 rounded-lg text-sm font-medium text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors">
                + Add Service Type
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
