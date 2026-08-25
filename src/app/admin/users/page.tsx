"use client";

import { useState } from 'react';
import { Users, Shield, MoreVertical, Plus, UserPlus, Lock, Mail } from 'lucide-react';

const DUMMY_USERS = [
  { id: '1', name: 'Soon Kiat Ker', email: 'admin@skker.com', role: 'Super Admin', status: 'Active', lastLogin: 'Just now' },
  { id: '2', name: 'Jane Doe', email: 'jane@skker.com', role: 'Sales Admin', status: 'Active', lastLogin: '2 hours ago' },
  { id: '3', name: 'John Smith', email: 'john@skker.com', role: 'Content Editor', status: 'Suspended', lastLogin: '5 days ago' },
  { id: '4', name: 'Marketing Temp', email: 'temp@skker.com', role: 'Viewer', status: 'Active', lastLogin: 'Yesterday' },
];

export default function UsersPage() {
  const [users] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Users & Roles</h1>
          <p className="text-neutral-400 text-sm mt-1">Manage team access and permissions.</p>
        </div>
        <button className="whitespace-nowrap px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
          <UserPlus size={16} /> Invite User
        </button>
      </div>

      <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
        <div className="p-4 border-b border-neutral-800 bg-neutral-950/50 flex items-center justify-between">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search users..." 
              className="bg-neutral-950 border border-neutral-800 text-white rounded-lg py-2 pl-9 pr-4 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-neutral-500 w-full sm:w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Users size={16} className="absolute left-3 top-2.5 text-neutral-500" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left whitespace-nowrap">
            <thead className="text-xs text-neutral-500 uppercase bg-neutral-950/50">
              <tr>
                <th className="px-6 py-4 font-medium">User</th>
                <th className="px-6 py-4 font-medium">Role</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Last Login</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-neutral-800/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold text-white shrink-0">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-white">{user.name}</span>
                        <span className="text-neutral-500 text-xs mt-0.5">{user.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-neutral-950 border border-neutral-800 text-neutral-300 text-xs">
                      {user.role === 'Super Admin' && <Shield size={12} className="text-purple-400" />}
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${
                      user.status === 'Active' 
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                        : 'bg-red-500/10 text-red-400 border-red-500/20'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-neutral-400 text-right text-xs">
                    {user.lastLogin}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-neutral-500 hover:text-white p-1.5 rounded transition-colors">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-neutral-500">
                    No users found matching "{searchTerm}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
