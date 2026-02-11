import React from 'react';
import { Shield, Lock, Eye, Database, FileCheck, Server } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';

export function PrivacySecurity() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[var(--brand-teal)] via-[#0a3d51] to-[var(--bg-primary)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 text-center">
          <Badge variant="lime" className="mb-6">Privacy & Security</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6">
            Your location data stays yours
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            We built Every Last Mile with privacy at the core. Your location is used only to generate 
            your mileage logs—never sold, never analyzed for other purposes, and always under your control.
          </p>
        </div>
      </section>
      
      {/* Principles */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Our privacy principles
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <Shield size={48} className="text-[var(--brand-lime)] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Privacy-first</h3>
              <p className="text-[var(--text-secondary)]">
                Location data is collected only for mileage tracking. We don't sell, share, or use your 
                data for advertising or analytics beyond what's necessary to provide the service.
              </p>
            </Card>
            
            <Card className="text-center">
              <Eye size={48} className="text-[var(--brand-lime)] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">User control</h3>
              <p className="text-[var(--text-secondary)]">
                You decide what data to keep, export, or delete. Review and manage your location permissions 
                anytime. Pause tracking whenever you want.
              </p>
            </Card>
            
            <Card className="text-center">
              <FileCheck size={48} className="text-[var(--brand-lime)] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Transparency</h3>
              <p className="text-[var(--text-secondary)]">
                Clear terms, no hidden clauses. We explain exactly what data we collect, why we need it, 
                and how long we keep it—in plain language.
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Data Handling Overview */}
      <section className="py-20 md:py-32 bg-[var(--bg-secondary)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
              How we handle your data
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="bg-[var(--surface-card)] rounded-3xl border border-[var(--border-subtle)] p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--surface-card-2)] border border-[var(--border-subtle)] flex items-center justify-center">
                  <Lock size={24} className="text-[var(--brand-lime)]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">What we collect</h3>
                  <p className="text-[var(--text-secondary)] mb-4">
                    We collect location data (coordinates, timestamps) to detect and log your trips. We also 
                    store trip classifications (business vs personal), notes, tags, and vehicle information you provide.
                  </p>
                  <p className="text-[var(--text-tertiary)]">
                    We do NOT collect browsing history, contacts, photos, messages, or any data unrelated to 
                    mileage tracking.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-[var(--surface-card)] rounded-3xl border border-[var(--border-subtle)] p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--surface-card-2)] border border-[var(--border-subtle)] flex items-center justify-center">
                  <Database size={24} className="text-[var(--brand-lime)]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Why we collect it</h3>
                  <p className="text-[var(--text-secondary)] mb-4">
                    Location data is necessary to automatically detect drives, calculate distances, and generate 
                    accurate mileage logs. Trip details and classifications are needed to create compliant reports.
                  </p>
                  <p className="text-[var(--text-tertiary)]">
                    We use anonymous, aggregated data to improve detection accuracy and fix bugs—but never in a 
                    way that identifies individual users.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-[var(--surface-card)] rounded-3xl border border-[var(--border-subtle)] p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--surface-card-2)] border border-[var(--border-subtle)] flex items-center justify-center">
                  <Server size={24} className="text-[var(--brand-lime)]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">How we store it</h3>
                  <p className="text-[var(--text-secondary)] mb-4">
                    Your data is encrypted in transit (TLS) and at rest (AES-256). We use industry-standard cloud 
                    infrastructure with regular security audits and compliance certifications (SOC 2 Type II).
                  </p>
                  <p className="text-[var(--text-tertiary)]">
                    Pro and Teams users benefit from cloud backup, but you can export and delete your data anytime.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-[var(--surface-card)] rounded-3xl border border-[var(--border-subtle)] p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--surface-card-2)] border border-[var(--border-subtle)] flex items-center justify-center">
                  <Shield size={24} className="text-[var(--brand-lime)]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Who we share it with</h3>
                  <p className="text-[var(--text-secondary)] mb-4">
                    We do NOT sell your location data. We do NOT share it with advertisers or data brokers. 
                    We only share data when you explicitly export it or when required by law.
                  </p>
                  <p className="text-[var(--text-tertiary)]">
                    For Teams users, admins can view team member logs as part of the approval workflow—but 
                    only within the organization's account.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Permissions Explanation */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Understanding permissions
            </h2>
            <p className="text-xl text-[var(--text-secondary)]">
              Every Last Mile requires certain permissions to function. Here's what they're for.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Location ("Always")</h3>
              <p className="text-[var(--text-secondary)] mb-2">
                <strong>Why:</strong> Required to detect trips automatically in the background while you drive.
              </p>
              <p className="text-[var(--text-tertiary)]">
                Without "Always" access, the app can only track when open, defeating the purpose of automatic detection.
              </p>
            </Card>
            
            <Card>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Motion & Fitness</h3>
              <p className="text-[var(--text-secondary)] mb-2">
                <strong>Why:</strong> Helps distinguish between driving and other activities (walking, cycling).
              </p>
              <p className="text-[var(--text-tertiary)]">
                Improves detection accuracy and reduces false positives from non-driving movement.
              </p>
            </Card>
            
            <Card>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Notifications</h3>
              <p className="text-[var(--text-secondary)] mb-2">
                <strong>Why:</strong> Sends reminders to classify untagged trips so your log stays current.
              </p>
              <p className="text-[var(--text-tertiary)]">
                Optional. You can disable notifications and manually review trips on your schedule.
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Export and Retention */}
      <section className="py-20 md:py-32 bg-[var(--bg-secondary)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-12 text-center">
              Your data, your control
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Export your data</h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  You can export all your trip data anytime in CSV or PDF format. This includes every trip, 
                  classification, note, and vehicle assignment.
                </p>
                <Button variant="secondary" size="sm">
                  Learn about exports
                </Button>
              </Card>
              
              <Card>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Delete your data</h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  You can delete individual trips or your entire account from the app settings. Deletion is 
                  immediate and permanent (except where required by law for tax/audit purposes).
                </p>
                <Button variant="secondary" size="sm" href="/support">
                  Get help
                </Button>
              </Card>
            </div>
            
            <Card className="mt-8">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Data retention</h3>
              <p className="text-[var(--text-secondary)]">
                Active accounts: Data is retained as long as your account is active. Free plan users keep 
                trip history for 1 year; Pro and Teams users have unlimited retention.
              </p>
              <p className="text-[var(--text-secondary)] mt-3">
                Deleted accounts: Data is permanently deleted within 30 days, except where required for legal 
                compliance (e.g., financial records for tax purposes, which may be retained for up to 7 years).
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
            Questions about privacy?
          </h2>
          <p className="text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Read our full Privacy Policy or contact our support team for clarification.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="/legal/privacy">
              Read Privacy Policy
            </Button>
            <Button variant="secondary" size="lg" href="/support">
              Contact support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
