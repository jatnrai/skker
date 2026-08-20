import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="glass-panel border-t border-white/10 relative z-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img src="/assets/logos/logo-stacked-dark.jpg" alt="SKKER Logo" className="w-32 h-auto object-contain rounded-xl opacity-90 hover:opacity-100 transition-opacity" />
            <p className="mt-4 text-sm text-muted max-w-sm leading-relaxed">
              Premium strategic consultant website covering systems architecture, product leadership, AI strategy, and executive advisory.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-text mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><Link href="/user" className="text-sm text-muted hover:text-accent hover:underline transition-colors">Academy</Link></li>
              <li><Link href="/user/blog" className="text-sm text-muted hover:text-accent hover:underline transition-colors">Insights</Link></li>
              <li><Link href="/user/case-studies" className="text-sm text-muted hover:text-accent hover:underline transition-colors">Case Studies</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-text mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/user/privacy-policy" className="text-sm text-muted hover:text-accent hover:underline transition-colors">Privacy Policy</Link></li>
              <li><Link href="/user/terms-of-use" className="text-sm text-muted hover:text-accent hover:underline transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted">&copy; {new Date().getFullYear()} SKKER. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <a href="#" className="text-sm text-muted hover:text-accent hover:underline">LinkedIn</a>
            <a href="#" className="text-sm text-muted hover:text-accent hover:underline">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
