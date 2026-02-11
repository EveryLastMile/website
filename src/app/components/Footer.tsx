import React from 'react';
import { Link } from 'react-router';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] py-16">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo size="sm" />
              <span className="text-[var(--text-primary)] font-semibold">Every Last Mile</span>
            </div>
            <p className="text-[var(--text-tertiary)] text-sm mb-4">
              Privacy-first, audit-ready mileage tracking.
            </p>
          </div>
          
          {/* Product Column */}
          <div>
            <h4 className="text-[var(--text-primary)] font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><Link to="/how-it-works" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm">How it works</Link></li>
              <li><Link to="/features" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm">Features</Link></li>
              <li><Link to="/pricing" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm">Pricing</Link></li>
            </ul>
          </div>
          
          {/* Resources Column */}
          <div>
            <h4 className="text-[var(--text-primary)] font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/support" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm">Support</Link></li>
              <li><Link to="/blog" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm">Blog</Link></li>
              <li><Link to="/our-story" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm">Our Story</Link></li>
            </ul>
          </div>
          
          {/* Legal Column */}
          <div>
            <h4 className="text-[var(--text-primary)] font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm">Privacy & Security</Link></li>
              <li><Link to="/legal/terms" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm">Terms of Service</Link></li>
              <li><Link to="/legal/privacy" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--text-tertiary)] text-sm">
            © 2026 Every Last Mile. All rights reserved.
          </p>
          <p className="text-[var(--text-tertiary)] text-sm">
            Privacy-first, audit-ready exports.
          </p>
        </div>
      </div>
    </footer>
  );
}