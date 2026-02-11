import React from 'react';
import { Link } from 'react-router';
import { Home } from 'lucide-react';
import { Button } from '../components/Button';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-9xl font-bold text-[var(--brand-lime)] mb-6">404</div>
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
          Page not found
        </h1>
        <p className="text-xl text-[var(--text-secondary)] mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button variant="primary" size="lg" href="/">
          <Home size={20} className="mr-2" />
          Back to home
        </Button>
      </div>
    </div>
  );
}
