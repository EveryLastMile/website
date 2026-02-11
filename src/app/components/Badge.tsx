import React from 'react';

interface BadgeProps {
  variant?: 'lime' | 'neutral';
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = 'lime', children, className = '' }: BadgeProps) {
  const variants = {
    lime: "bg-[rgba(147,186,56,0.18)] text-[var(--brand-lime)]",
    neutral: "bg-[rgba(255,255,255,0.08)] text-[var(--text-secondary)]"
  };
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
