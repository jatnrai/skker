"use client";

import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:w-[400px] bg-card border border-border shadow-2xl rounded-2xl p-5 z-[9999] flex flex-col gap-4 animate-in slide-in-from-bottom-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3 text-text">
          <Cookie className="text-accent shrink-0" size={24} />
          <h3 className="font-bold text-sm">Cookie Preferences</h3>
        </div>
        <button onClick={handleDecline} className="text-muted hover:text-text" aria-label="Close">
          <X size={16} />
        </button>
      </div>
      
      <p className="text-xs text-muted leading-relaxed">
        We use essential cookies to make our site work. With your consent, we may also use non-essential cookies to improve user experience and analyze website traffic.
      </p>

      <div className="flex items-center gap-3 mt-1">
        <button 
          onClick={handleAccept}
          className="flex-1 bg-accent hover:bg-accent/90 text-page py-2 rounded-lg text-xs font-bold transition-colors"
        >
          Accept All
        </button>
        <button 
          onClick={handleDecline}
          className="flex-1 bg-surface border border-border hover:bg-surface/80 text-text py-2 rounded-lg text-xs font-bold transition-colors"
        >
          Decline Optional
        </button>
      </div>
    </div>
  );
}
