"use client";

import { useState, useEffect } from 'react';
import { Users, Shield, MoreVertical, Plus, UserPlus, Lock, Mail } from 'lucide-react';
import { API_BASE_URL } from '../../environment/env';

export default function UsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
      fetch(`${API_BASE_URL}/users`)
        .then(async res => {
          if (!res.ok) {
            const text = await res.text();
            throw new Error(text || `HTTP Error ${res.status}`);
          }
          return res.json();
        })
        .then(data => {
          if (data.users) {
            setUsers(data.users);
          }
          if (data.error) {
            setErrorMsg(data.error);
          }
          setIsLoading(false);
        })
        .catch(err => {
          console.error("Failed to fetch users", err);
          setIsLoading(false);
        });
    }, []);

  const filteredUsers = users.filter(u => 
    (u.name || '').toLowerCase().includes(searchTerm.toLowerCase()) || 
    (u.email || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-admin-text">Users & Roles</h1>
          <p className="text-admin-muted text-sm mt-1">Manage team access and permissions.</p>
        </div>
        <button className="whitespace-nowrap px-4 py-2 bg-admin-primary hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
          <UserPlus size={16} /> Invite User
        </button>
      </div>

      <div className="bg-admin-surface border border-admin-border rounded-xl overflow-hidden">
        <div className="p-4 border-b border-admin-border bg-admin-bg flex items-center justify-between">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search users..." 
              className="bg-admin-surface border border-admin-border text-admin-text rounded-lg py-2 pl-9 pr-4 text-sm focus:outline-none focus:border-admin-primary focus:ring-1 focus:ring-admin-primary transition-all placeholder:text-admin-muted w-full sm:w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Users size={16} className="absolute left-3 top-2.5 text-admin-muted" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left whitespace-nowrap">
            <thead className="text-xs text-admin-muted uppercase bg-admin-bg border-b border-admin-border">
              <tr>
                <th className="px-6 py-4 font-medium">User</th>
                <th className="px-6 py-4 font-medium">Role</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Last Login</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-admin-border">
              {isLoading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-admin-muted">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 rounded-full border-2 border-admin-muted border-t-transparent animate-spin"></div>
                      Loading users...
                    </div>
                  </td>
                </tr>
              ) : errorMsg ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-red-400 font-medium">
                    {errorMsg}
                  </td>
                </tr>
              ) : filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-admin-muted">
                    No users found matching "{searchTerm}"
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-admin-bg transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-admin-border flex items-center justify-center text-xs font-bold text-admin-text shrink-0">
                          {user.name ? user.name.split(' ').map((n: string) => n[0]).join('') : '?'}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-medium text-admin-text">{user.name}</span>
                          <span className="text-admin-muted text-xs mt-0.5">{user.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-admin-surface border border-admin-border text-admin-text text-xs">
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
                    <td className="px-6 py-4 text-admin-muted text-right text-xs">
                      {user.lastLogin}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-admin-muted hover:text-admin-text p-1.5 rounded transition-colors">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
