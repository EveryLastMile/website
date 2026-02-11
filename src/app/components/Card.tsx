import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  variant?: 'default' | 'feature' | 'metric' | 'testimonial' | 'story';
  children: React.ReactNode;
  className?: string;
  icon?: LucideIcon;
  iconColor?: string;
  title?: string;
  description?: string;
  author?: string;
  role?: string;
  metric?: string;
  label?: string;
}

export function Card({ 
  variant = 'default', 
  children, 
  className = '',
  icon: Icon,
  iconColor = 'var(--brand-lime)',
  title,
  description,
  author,
  role,
  metric,
  label
}: CardProps) {
  const baseStyles = "bg-[var(--surface-card)] border border-[var(--border-subtle)] rounded-3xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-[rgba(255,255,255,0.12)]";
  
  if (variant === 'feature' && Icon) {
    return (
      <div className={`${baseStyles} ${className}`}>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--surface-card-2)] flex items-center justify-center border border-[var(--border-subtle)]">
            <Icon size={24} style={{ color: iconColor }} />
          </div>
          <div className="flex-1">
            {title && <h3 className="text-[var(--text-primary)] mb-2">{title}</h3>}
            {description && <p className="text-[var(--text-secondary)]">{description}</p>}
            {children}
          </div>
        </div>
      </div>
    );
  }
  
  if (variant === 'metric') {
    return (
      <div className={`${baseStyles} text-center ${className}`}>
        {metric && <div className="text-4xl font-bold text-[var(--brand-lime)] mb-2">{metric}</div>}
        {label && <div className="text-[var(--text-secondary)]">{label}</div>}
        {children}
      </div>
    );
  }
  
  if (variant === 'testimonial') {
    return (
      <div className={`${baseStyles} ${className}`}>
        <div className="text-[var(--text-primary)] mb-4 leading-relaxed">
          {children}
        </div>
        {author && (
          <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-subtle)]">
            <div className="w-10 h-10 rounded-full bg-[var(--surface-card-2)] flex items-center justify-center border border-[var(--border-subtle)]">
              <span className="text-[var(--brand-lime)] font-semibold">{author.charAt(0)}</span>
            </div>
            <div>
              <div className="text-[var(--text-primary)] font-semibold">{author}</div>
              {role && <div className="text-sm text-[var(--text-tertiary)]">{role}</div>}
            </div>
          </div>
        )}
      </div>
    );
  }
  
  if (variant === 'story') {
    return (
      <div className={`${baseStyles} ${className}`}>
        {title && <h3 className="text-[var(--text-primary)] mb-3">{title}</h3>}
        {children}
      </div>
    );
  }
  
  return (
    <div className={`${baseStyles} ${className}`}>
      {children}
    </div>
  );
}
