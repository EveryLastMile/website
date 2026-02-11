import React from 'react';
import { Target, Users, Shield, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';

export function OurStory() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[var(--brand-teal)] via-[#0a3d51] to-[var(--bg-primary)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="lime" className="mb-6">Our Story</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6">
              Why we built Every Last Mile
            </h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
              Every Last Mile was created by people who've spent years building mileage tracking workflows. 
              We saw what worked, what didn't, and where drivers and teams still lose time. So we built a 
              privacy-first experience that helps you capture every trip, classify fast, and export compliant 
              reports you can trust.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-12 text-center">
              What drives us
            </h2>
            
            <div className="space-y-8">
              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--surface-card-2)] border border-[var(--border-subtle)] flex items-center justify-center">
                    <Target size={24} className="text-[var(--brand-lime)]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Our Mission</h3>
                    <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                      To make mileage tracking automatic, accurate, and audit-ready for everyone—from individual 
                      drivers to enterprise teams. We believe compliance shouldn't require spreadsheets, manual 
                      logging, or guesswork.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--surface-card-2)] border border-[var(--border-subtle)] flex items-center justify-center">
                    <Shield size={24} className="text-[var(--brand-lime)]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Privacy First, Always</h3>
                    <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                      We built Every Last Mile with privacy at the core. Your location data is yours—used only to 
                      generate your mileage logs, never sold or analyzed for other purposes. This isn't a marketing 
                      promise; it's how the product is designed.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--surface-card-2)] border border-[var(--border-subtle)] flex items-center justify-center">
                    <Users size={24} className="text-[var(--brand-lime)]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Built by Experience</h3>
                    <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                      Our team has years of experience building mileage tracking workflows at scale. We've seen 
                      what drivers need, what admins struggle with, and what accountants require for audit defense. 
                      Every Last Mile is designed to solve real problems, not add new ones.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* What We Believe */}
      <section className="py-20 md:py-32 bg-[var(--bg-secondary)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-12 text-center">
              What we believe
            </h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                  Compliance shouldn't be complicated
                </h3>
                <p className="text-[var(--text-secondary)]">
                  Creating an audit-ready mileage log shouldn't require tax expertise or hours of manual work. 
                  The right tools make compliance automatic.
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                  Privacy is a right, not a feature
                </h3>
                <p className="text-[var(--text-secondary)]">
                  Location data is personal. We only collect what's necessary and give you full control over 
                  how it's used. No hidden data brokers, no opaque terms.
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                  Time-saving should be measurable
                </h3>
                <p className="text-[var(--text-secondary)]">
                  We don't just say we save you time—we design every interaction to reduce friction. Swipe to 
                  classify, tap to export, set rules once and automate forever.
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                  Support matters
                </h3>
                <p className="text-[var(--text-secondary)]">
                  When you have questions or need help, you deserve clear answers and real assistance—not 
                  automated responses or endless FAQs.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* What We're Building */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 text-center">
              What we're building
            </h2>
            <p className="text-xl text-[var(--text-secondary)] text-center mb-12">
              Every Last Mile today is just the beginning. We're working on features that make mileage tracking 
              even smarter, more accurate, and more integrated with the workflows you already use.
            </p>
            
            <div className="bg-[var(--surface-card)] rounded-3xl border border-[var(--border-subtle)] p-8">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Coming soon</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--brand-lime)] bg-opacity-20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--brand-lime)]"></div>
                  </div>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Direct accounting integrations:</strong> Export 
                    directly to QuickBooks, Xero, and other platforms
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--brand-lime)] bg-opacity-20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--brand-lime)]"></div>
                  </div>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Enhanced detection algorithms:</strong> Even more 
                    accurate trip boundaries and fewer false positives
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--brand-lime)] bg-opacity-20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--brand-lime)]"></div>
                  </div>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Multi-platform support:</strong> Web and desktop 
                    apps for viewing and managing logs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--brand-lime)] bg-opacity-20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--brand-lime)]"></div>
                  </div>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Advanced team analytics:</strong> Insights for 
                    organizations tracking fleet and workforce mileage
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 md:py-32 bg-[var(--bg-secondary)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
            Join us on the journey
          </h2>
          <p className="text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            We're building Every Last Mile for people who value accuracy, privacy, and time. If that's you, 
            we'd love to have you on board.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Download on the App Store
            </Button>
            <Button variant="secondary" size="lg" href="/teams">
              Explore Teams <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
