"use client";

export default function AcademySettings() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-admin-text">Academy Settings</h1>
          <p className="text-admin-muted text-sm mt-1">Manage academy settings.</p>
        </div>
      </div>
      
      <div className="bg-admin-surface border border-admin-border rounded-xl p-8 text-center text-admin-muted">
        This module is currently under construction.
      </div>
    </div>
  );
}
