import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './Button';
import { Logo } from './Logo';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProductDropdownOpen(false);
  }, [location]);
  
  const headerClass = isScrolled 
    ? "bg-[var(--glass-bg)] backdrop-blur-2xl border-b border-[var(--glass-border)] shadow-lg" 
    : "bg-transparent";
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <Logo size="sm" />
            <span className="text-[var(--text-primary)] font-semibold text-lg hidden sm:inline">Every Last Mile</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="relative">
              <button
                onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                className="flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                onBlur={() => setTimeout(() => setIsProductDropdownOpen(false), 150)}
              >
                Product <ChevronDown size={16} />
              </button>
              {isProductDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-[var(--surface-card)] border border-[var(--border-subtle)] rounded-2xl shadow-xl min-w-[200px] py-2">
                  <Link to="/how-it-works" className="block px-4 py-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-card-2)]">
                    How it works
                  </Link>
                  <Link to="/features" className="block px-4 py-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-card-2)]">
                    Features
                  </Link>
                </div>
              )}
            </div>
            <Link to="/pricing" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Pricing
            </Link>
            <Link to="/support" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Support
            </Link>
          </div>
          
          {/* CTA Button - Always visible */}
          <div className="flex items-center gap-4">
            <Button variant="primary" size="md" className="hidden sm:inline-flex">
              Download
            </Button>
            <Button variant="primary" size="sm" className="sm:hidden">
              Download
            </Button>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-[var(--text-primary)] p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[var(--surface-card)] border-t border-[var(--border-subtle)]">
          <div className="max-w-[1280px] mx-auto px-6 py-6 flex flex-col gap-4">
            <Link to="/how-it-works" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-2">
              How it works
            </Link>
            <Link to="/features" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-2">
              Features
            </Link>
            <Link to="/pricing" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-2">
              Pricing
            </Link>
            <Link to="/support" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-2">
              Support
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}