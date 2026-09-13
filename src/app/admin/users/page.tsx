"use client";

import { useState, useEffect } from 'react';
import { Users, Shield, MoreVertical, Plus, UserPlus, Lock, Mail } from 'lucide-react';
import { API_BASE_URL } from '../../environment/env';

export default function UsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  // Tabs
  const [activeTab, setActiveTab] = useState<'users' | 'roles'>('users');

  // Roles State
  const [roles, setRoles] = useState<any[]>([]);
  const [isRolesLoading, setIsRolesLoading] = useState(false);
  const [rolesErrorMsg, setRolesErrorMsg] = useState('');
  
  // Invite Modal State
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteName, setInviteName] = useState('');
  const [inviteRole, setInviteRole] = useState('User');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const getAuthToken = () => {
    const match = document.cookie.match(new RegExp('(^| )skker_admin_auth=([^;]+)'));
    return match ? match[2] : null;
  };

  const fetchUsers = () => {
    const token = getAuthToken();
    fetch(`${API_BASE_URL}/users`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
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
  };
  const fetchRoles = async () => {
    setIsRolesLoading(true);
    try {
      const token = getAuthToken();
      const res = await fetch(`${API_BASE_URL}/roles`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      setRoles(data.roles || []);
    } catch (err) {
      setRolesErrorMsg("Failed to load roles");
    } finally {
      setIsRolesLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'users') fetchUsers();
    else if (activeTab === 'roles') fetchRoles();
  }, [activeTab]);

  const handleUpdateRolePermissions = async (roleId: string, name: string, permissions: any) => {
    const token = getAuthToken();
    try {
      const res = await fetch(`${API_BASE_URL}/roles/${roleId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ name, permissions })
      });
      if (res.ok) fetchRoles();
      else alert((await res.json()).error);
    } catch (e) {
      alert("Failed to update role permissions");
    }
  };

  const filteredUsers = users.filter(u => 
    (u.name || '').toLowerCase().includes(searchTerm.toLowerCase()) || 
    (u.email || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    const token = getAuthToken();
    try {
      const res = await fetch(`${API_BASE_URL}/users/${id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) fetchUsers();
      else alert((await res.json()).error);
    } catch (e) {
      alert("Failed to update status");
    }
  };

  const handleUpdateRole = async (id: string, newRole: string) => {
    const token = getAuthToken();
    try {
      const res = await fetch(`${API_BASE_URL}/users/${id}/role`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ role: newRole })
      });
      if (res.ok) fetchUsers();
      else alert((await res.json()).error);
    } catch (e) {
      alert("Failed to update role");
    }
  };

  const handleDeleteUser = async (id: string) => {
    if (!confirm("Are you sure you want to completely delete this user?")) return;
    const token = getAuthToken();
    try {
      const res = await fetch(`${API_BASE_URL}/users/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) fetchUsers();
      else alert((await res.json()).error);
    } catch (e) {
      alert("Failed to delete user");
    }
  };

  const handleInviteUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const token = getAuthToken();
      const res = await fetch(`${API_BASE_URL}/users/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        // using the register payload
        body: JSON.stringify({ 
          email: inviteEmail, 
          firstName: inviteName.split(' ')[0], 
          lastName: inviteName.split(' ').slice(1).join(' '),
          password: Math.random().toString(36).slice(-8), // random default password
          isInstructor: inviteRole === 'Instructor'
        })
      });
      if (res.ok) {
        // We'll update the role immediately if not User
        const data = await res.json();
        if (inviteRole !== 'User' && inviteRole !== 'Instructor') {
           await fetch(`${API_BASE_URL}/users/${data.user.id}/role`, {
             method: 'PUT',
             headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
             body: JSON.stringify({ role: inviteRole })
           });
        }
        setIsInviteModalOpen(false);
        fetchUsers();
      } else {
        alert((await res.json()).error);
      }
    } catch (e) {
      alert("Failed to invite user");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-admin-text">Users & Roles</h1>
          <p className="text-admin-muted text-sm mt-1">Manage team access and permissions.</p>
        </div>
        {activeTab === 'users' && (
          <button onClick={() => setIsInviteModalOpen(true)} className="whitespace-nowrap px-4 py-2 bg-admin-primary hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
            <UserPlus size={16} /> Invite User
          </button>
        )}
      </div>

      <div className="flex border-b border-admin-border">
        <button
          onClick={() => setActiveTab('users')}
          className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
            activeTab === 'users' 
              ? 'border-admin-primary text-admin-primary' 
              : 'border-transparent text-admin-muted hover:text-admin-text hover:border-admin-border'
          }`}
        >
          Users
        </button>
        <button
          onClick={() => setActiveTab('roles')}
          className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
            activeTab === 'roles' 
              ? 'border-admin-primary text-admin-primary' 
              : 'border-transparent text-admin-muted hover:text-admin-text hover:border-admin-border'
          }`}
        >
          Permission Matrix
        </button>
      </div>

      {isInviteModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-admin-bg border border-admin-border rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="p-4 border-b border-admin-border flex items-center justify-between">
              <h3 className="font-semibold">Invite New User</h3>
              <button onClick={() => setIsInviteModalOpen(false)} className="text-admin-muted hover:text-admin-text">
                &times;
              </button>
            </div>
            <form onSubmit={handleInviteUser} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-admin-muted mb-1">Full Name</label>
                <input required type="text" value={inviteName} onChange={e => setInviteName(e.target.value)} className="w-full bg-admin-surface border border-admin-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-admin-primary" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-xs font-medium text-admin-muted mb-1">Email Address</label>
                <input required type="email" value={inviteEmail} onChange={e => setInviteEmail(e.target.value)} className="w-full bg-admin-surface border border-admin-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-admin-primary" placeholder="jane@skker.com" />
              </div>
              <div>
                <label className="block text-xs font-medium text-admin-muted mb-1">Role</label>
                <select value={inviteRole} onChange={e => setInviteRole(e.target.value)} className="w-full bg-admin-surface border border-admin-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-admin-primary appearance-none">
                  <option value="User">User</option>
                  <option value="Editor">Editor</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              <div className="pt-4 flex justify-end gap-3">
                <button type="button" onClick={() => setIsInviteModalOpen(false)} className="px-4 py-2 text-sm text-admin-muted hover:text-admin-text transition-colors">Cancel</button>
                <button type="submit" disabled={isSubmitting} className="px-4 py-2 bg-admin-primary hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50">
                  {isSubmitting ? 'Inviting...' : 'Send Invite'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {activeTab === 'users' ? (
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
                        <div className="relative group inline-block text-left">
                          <button className="text-admin-muted hover:text-admin-text p-1.5 rounded transition-colors focus:outline-none">
                            <MoreVertical size={16} />
                          </button>
                          <div className="absolute right-0 w-48 mt-1 origin-top-right bg-admin-surface border border-admin-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 text-left">
                            <div className="py-1">
                              {user.status === 'Active' ? (
                                <button onClick={() => handleUpdateStatus(user.id, 'Suspended')} className="block w-full text-left px-4 py-2 text-sm text-yellow-500 hover:bg-admin-bg">Suspend User</button>
                              ) : (
                                <button onClick={() => handleUpdateStatus(user.id, 'Active')} className="block w-full text-left px-4 py-2 text-sm text-emerald-400 hover:bg-admin-bg">Reactivate User</button>
                              )}
                              <button onClick={() => handleUpdateRole(user.id, user.role === 'Admin' ? 'User' : 'Admin')} className="block w-full text-left px-4 py-2 text-sm text-blue-400 hover:bg-admin-bg">
                                Make {user.role === 'Admin' ? 'User' : 'Admin'}
                              </button>
                              <button onClick={() => handleDeleteUser(user.id)} className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-admin-bg">Delete</button>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-admin-surface border border-admin-border rounded-xl p-6">
          <p className="text-sm text-admin-muted mb-6">Manage what each role can access and do across the administration panel.</p>
          {isRolesLoading ? (
            <div className="text-center text-admin-muted py-8">Loading roles...</div>
          ) : rolesErrorMsg ? (
            <div className="text-center text-red-400 py-8">{rolesErrorMsg}</div>
          ) : (
            <div className="space-y-6">
              {roles.map(role => (
                <div key={role.id} className="border border-admin-border rounded-lg overflow-hidden bg-admin-bg">
                  <div className="px-4 py-3 border-b border-admin-border bg-admin-surface flex items-center justify-between">
                    <h3 className="font-semibold text-admin-text">{role.name}</h3>
                    {role.name !== 'Super Admin' && (
                      <span className="text-xs text-admin-muted">Changes save instantly</span>
                    )}
                  </div>
                  <div className="p-4">
                    {role.name === 'Super Admin' ? (
                      <div className="text-sm text-admin-muted py-2 flex items-center gap-2">
                        <Shield size={16} className="text-purple-400" />
                        The Super Admin role has unrestricted access to all modules and settings. Permissions cannot be modified.
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['users', 'content', 'courses', 'leads'].map(moduleName => {
                          const hasModule = !!role.permissions?.[moduleName];
                          return (
                            <div key={moduleName} className="space-y-2">
                              <h4 className="text-xs font-semibold uppercase text-admin-muted">{moduleName}</h4>
                              {['view', 'edit', 'create', 'delete', 'publish'].map(action => {
                                const isChecked = role.permissions?.[moduleName]?.includes(action);
                                return (
                                  <label key={action} className="flex items-center gap-2 text-sm text-admin-text cursor-pointer">
                                    <input 
                                      type="checkbox" 
                                      className="rounded bg-admin-surface border-admin-border text-admin-primary focus:ring-admin-primary focus:ring-offset-admin-bg"
                                      checked={isChecked}
                                      onChange={(e) => {
                                        const newPerms = { ...role.permissions };
                                        if (!newPerms[moduleName]) newPerms[moduleName] = [];
                                        
                                        if (e.target.checked) {
                                          newPerms[moduleName] = [...newPerms[moduleName], action];
                                        } else {
                                          newPerms[moduleName] = newPerms[moduleName].filter((a: string) => a !== action);
                                        }
                                        
                                        // Optmistic update
                                        setRoles(roles.map(r => r.id === role.id ? { ...r, permissions: newPerms } : r));
                                        
                                        // Save to DB
                                        handleUpdateRolePermissions(role.id, role.name, newPerms);
                                      }}
                                    />
                                    <span className="capitalize">{action}</span>
                                  </label>
                                );
                              })}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
