"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { Upload, FileText, Search, Trash2, Download, Copy, CheckCircle2, Loader2, Cloud, RefreshCw, AlertCircle, ExternalLink, Video, File } from 'lucide-react';
import { API_BASE_URL } from '@/app/environment/env';

export default function MediaPage() {
  const [media, setMedia] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [totalSize, setTotalSize] = useState(0);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const getToken = () => document.cookie.match(/skker_admin_auth=([^;]+)/)?.[1] || null;

  const showSuccess = (msg: string) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(null), 4000);
  };

  const showError = (msg: string) => {
    setErrorMsg(msg);
    setTimeout(() => setErrorMsg(null), 6000);
  };

  useEffect(() => { fetchMedia(); }, []);

  const fetchMedia = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/media`, {
        headers: { 'Authorization': `Bearer ${getToken()}` }
      });
      if (res.ok) {
        const data = await res.json();
        const files = data.media || [];
        setMedia(files);
        setTotalSize(files.reduce((acc: number, f: any) => acc + (f.size || 0), 0));
      } else {
        showError('Failed to load media. Check your connection.');
      }
    } catch (err) {
      showError('Could not reach server.');
    } finally {
      setIsLoading(false);
    }
  };

  const doUpload = async (file: File) => {
    const maxSizeMB = 50;
    if (file.size > maxSizeMB * 1024 * 1024) {
      showError(`File "${file.name}" exceeds ${maxSizeMB}MB limit.`);
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    setIsUploading(true);
    setUploadProgress(10);
    setErrorMsg(null);

    try {
      // Simulate progress
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => Math.min(prev + 15, 85));
      }, 300);

      const res = await fetch(`${API_BASE_URL}/media/upload`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${getToken()}` },
        body: formData,
      });

      clearInterval(progressInterval);
      setUploadProgress(100);

      if (res.ok) {
        const data = await res.json();
        showSuccess(`✓ "${file.name}" uploaded to Tencent COS successfully.`);
        fetchMedia();
      } else {
        const error = await res.json();
        showError(error.message || `Upload failed (${res.status})`);
      }
    } catch (err: any) {
      showError(`Upload error: ${err.message || 'Network error'}`);
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) await doUpload(file);
  };

  const handleDrop = useCallback(async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) await doUpload(file);
  }, []);

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Delete "${name}"? This will remove it from Tencent COS and any pages using it will show a broken image.`)) return;

    try {
      const res = await fetch(`${API_BASE_URL}/media/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${getToken()}` }
      });
      if (res.ok) {
        showSuccess(`"${name}" deleted from COS.`);
        fetchMedia();
      } else {
        const data = await res.json();
        showError(data.message || 'Delete failed');
      }
    } catch (err) {
      showError('Delete failed. Try again.');
    }
  };

  const handleCopyUrl = (url: string, id: string) => {
    // COS URLs are already full absolute URLs
    const fullUrl = url.startsWith('http') ? url : `${window.location.origin}${url}`;
    navigator.clipboard.writeText(fullUrl);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const formatSize = (bytes: number) => {
    if (!bytes || bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (mimetype: string) => {
    if (mimetype?.includes('image')) return null; // Use thumbnail
    if (mimetype?.includes('video')) return <Video size={40} className="text-blue-400" />;
    if (mimetype?.includes('pdf')) return <FileText size={40} className="text-red-400" />;
    return <File size={40} className="text-admin-muted" />;
  };

  const filteredMedia = media.filter(m => {
    const matchesSearch = (m.name || m.originalName || '').toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filter === 'All' ? true :
      filter === 'Images' ? m.mimetype?.includes('image') :
      filter === 'Videos' ? m.mimetype?.includes('video') :
      filter === 'Documents' ? (m.mimetype?.includes('pdf') || m.mimetype?.includes('word') || m.mimetype?.includes('presentation')) : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Toast Notifications */}
      {successMsg && (
        <div className="fixed top-4 right-4 z-[100] px-5 py-3 bg-emerald-700 rounded-xl shadow-2xl text-sm text-white flex items-center gap-2 max-w-sm">
          <CheckCircle2 size={16} className="shrink-0" /> {successMsg}
        </div>
      )}
      {errorMsg && (
        <div className="fixed top-4 right-4 z-[100] px-5 py-3 bg-red-700 rounded-xl shadow-2xl text-sm text-white flex items-center gap-2 max-w-sm">
          <AlertCircle size={16} className="shrink-0" /> {errorMsg}
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-semibold tracking-tight text-admin-text">Media Library</h1>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-wider">
              <Cloud size={10} /> Tencent COS
            </span>
          </div>
          <p className="text-admin-muted text-sm mt-1">
            {media.length} files · {formatSize(totalSize)} used · Singapore (ap-singapore)
          </p>
        </div>
        <button
          onClick={fetchMedia}
          className="flex items-center gap-2 px-4 py-2 bg-admin-surface border border-admin-border hover:bg-admin-bg text-admin-text rounded-lg text-sm transition-colors"
        >
          <RefreshCw size={14} /> Refresh
        </button>
      </div>

      {/* Upload Zone */}
      <div
        onClick={() => !isUploading && fileInputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        className={`border-2 border-dashed rounded-xl bg-admin-surface p-10 flex flex-col items-center justify-center text-center transition-all cursor-pointer group
          ${isDragging ? 'border-blue-500 bg-blue-500/5 scale-[1.01]' : isUploading ? 'border-admin-border opacity-70 cursor-wait' : 'border-admin-border hover:border-blue-500 hover:bg-blue-500/5'}`}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/jpeg,image/png,image/webp,image/gif,image/svg+xml,application/pdf,video/mp4,video/webm,.doc,.docx,.ppt,.pptx"
        />
        <div className={`w-16 h-16 rounded-full bg-admin-bg flex items-center justify-center transition-all mb-4 shadow-lg shadow-black/50
          ${isDragging ? 'text-blue-400 scale-110' : isUploading ? 'text-admin-muted' : 'text-admin-muted group-hover:text-blue-400 group-hover:scale-110'}`}>
          {isUploading ? <Loader2 size={28} className="animate-spin" /> : <Upload size={28} />}
        </div>
        <h3 className="font-semibold text-admin-text">
          {isDragging ? 'Drop to upload to Tencent COS' : isUploading ? 'Uploading to COS...' : 'Click or drag files to upload'}
        </h3>
        <p className="text-xs text-admin-muted mt-2 max-w-sm">
          Images (JPG, PNG, WEBP, GIF, SVG), PDF, Video (MP4, WebM), Word, PowerPoint · Max 50MB
        </p>

        {/* Upload Progress Bar */}
        {isUploading && (
          <div className="w-full max-w-xs mt-4 bg-admin-bg rounded-full h-1.5 overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-300 rounded-full"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search files..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-admin-bg border border-admin-border text-admin-text rounded-lg py-2 pl-9 pr-4 text-sm focus:outline-none focus:border-blue-500 w-full"
          />
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-muted" />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0">
          {['All', 'Images', 'Videos', 'Documents'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`whitespace-nowrap px-3 py-1.5 border rounded-lg text-sm font-medium transition-colors ${filter === f ? 'bg-admin-surface border-admin-border text-admin-text' : 'border-transparent text-admin-muted hover:text-admin-text'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {isLoading ? (
        <div className="py-20 text-center text-admin-muted flex flex-col items-center">
          <Loader2 size={32} className="animate-spin mb-4" />
          <p>Loading media from Tencent COS...</p>
        </div>
      ) : filteredMedia.length === 0 ? (
        <div className="py-20 text-center text-admin-muted">
          <Cloud size={48} className="mx-auto mb-3 opacity-30" />
          <p className="font-medium">{media.length === 0 ? 'No files uploaded yet.' : 'No files match your search.'}</p>
          {media.length === 0 && <p className="text-xs mt-1">Drag a file above to upload it to Tencent COS.</p>}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredMedia.map(file => {
            // COS URLs are full absolute https:// URLs
            const displayUrl = file.url;
            const isImage = file.mimetype?.includes('image');
            const icon = getFileIcon(file.mimetype);
            return (
              <div key={file.id} className="bg-admin-surface border border-admin-border rounded-xl overflow-hidden group hover:border-admin-primary transition-all hover:shadow-lg hover:shadow-black/20">
                <div className="aspect-square relative bg-admin-bg flex items-center justify-center border-b border-admin-border overflow-hidden">
                  {isImage ? (
                    <img
                      src={displayUrl}
                      alt={file.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      {icon}
                      <span className="text-[10px] font-bold text-admin-muted uppercase">
                        {(file.mimetype || '').split('/').pop()?.substring(0, 6) || 'FILE'}
                      </span>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-2">
                    <button
                      onClick={() => handleCopyUrl(displayUrl, file.id)}
                      className="p-2 bg-admin-surface border border-admin-border hover:bg-admin-bg text-white rounded-lg transition-colors"
                      title="Copy COS URL"
                    >
                      {copiedId === file.id ? <CheckCircle2 size={15} className="text-emerald-400" /> : <Copy size={15} />}
                    </button>
                    <a
                      href={displayUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-admin-surface border border-admin-border hover:bg-blue-600 text-white rounded-lg transition-colors"
                      title="Open in COS"
                    >
                      <ExternalLink size={15} />
                    </a>
                    <button
                      onClick={() => handleDelete(file.id, file.name)}
                      className="p-2 bg-admin-surface border border-admin-border hover:bg-red-600 text-white rounded-lg transition-colors"
                      title="Delete from COS"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-xs font-medium text-admin-text truncate" title={file.originalName || file.name}>
                    {file.originalName || file.name}
                  </p>
                  <div className="flex justify-between items-center mt-1 text-[10px] text-admin-muted">
                    <span className="uppercase font-semibold">{(file.mimetype || '').split('/').pop()?.substring(0, 6) || '?'}</span>
                    <span>{formatSize(file.size)}</span>
                  </div>
                  {file.cos_key && (
                    <p className="text-[9px] text-admin-muted/60 mt-1 font-mono truncate" title={file.cos_key}>
                      {file.cos_key}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
