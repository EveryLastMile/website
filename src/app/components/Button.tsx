import React from 'react';
import { Link } from 'react-router';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  href, 
  onClick,
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center transition-all duration-200 font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)]";
  
  const variants = {
    primary: "bg-[var(--brand-lime)] text-[var(--text-on-lime)] hover:bg-[var(--brand-lime-2)] focus:ring-[rgba(147,186,56,0.35)]",
    secondary: "bg-[var(--glass-bg)] text-[var(--text-primary)] border border-[var(--glass-border)] backdrop-blur-xl hover:border-[rgba(255,255,255,0.15)]",
    destructive: "bg-[var(--cta-coral)] text-white hover:bg-[#f0976f] focus:ring-[rgba(236,141,103,0.35)]"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (href) {
    if (href.startsWith('http')) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }
  
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
