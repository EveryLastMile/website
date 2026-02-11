import React from 'react';
import { Play, Edit, FileCheck, Shield, Battery, MapPin } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';

export function HowItWorks() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[var(--brand-teal)] via-[#0a3d51] to-[var(--bg-primary)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="lime" className="mb-6">How it works</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6">
              Automatic tracking, manual control
            </h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed mb-8">
              Every Last Mile runs in the background, detects your drives automatically, and gives you 
              full control over classification and reporting. No manual start/stop buttons needed.
            </p>
            
            {/* Video Placeholder */}
            <div className="bg-[var(--surface-card)] rounded-3xl border border-[var(--border-subtle)] p-8 aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-[var(--brand-lime)] bg-opacity-20 flex items-center justify-center mx-auto mb-4">
                  <Play size={40} className="text-[var(--brand-lime)]" />
                </div>
                <p className="text-[var(--text-secondary)]">Watch how it works (2 min)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Step-by-step with Screenshots */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-16 text-center">
            From install to export in minutes
          </h2>
          
          <div className="space-y-24">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-[var(--brand-lime)] text-sm font-semibold mb-3">STEP 1</div>
                <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
                  Install and grant permissions
                </h3>
                <p className="text-lg text-[var(--text-secondary)] mb-6">
                  Download Every Last Mile from the App Store. During setup, you'll be asked to grant location 
                  access ("Always") so we can detect trips in the background. We'll also request motion activity 
                  permission to improve detection accuracy.
                </p>
                <p className="text-[var(--text-tertiary)]">
                  These permissions are required for automatic tracking. You can review and manage them anytime 
                  in your device settings or within the app.
                </p>
              </div>
              <div className="bg-[var(--surface-card)] rounded-3xl border border-[var(--border-subtle)] p-8 h-96 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkYXNoYm9hcmQlMjBkYXJrJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MDc4NTYyMHww&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="App setup screen" 
                  className="rounded-2xl w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="text-[var(--brand-lime)] text-sm font-semibold mb-3">STEP 2</div>
                <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
                  Drives appear automatically
                </h3>
                <p className="text-lg text-[var(--text-secondary)] mb-6">
                  Once you start driving, Every Last Mile detects the trip and logs it automatically. You don't 
                  need to open the app or press any buttons. Every trip appears in your feed with start/end 
                  locations, distance, and time.
                </p>
                <p className="text-[var(--text-tertiary)]">
                  The app runs efficiently in the background, using minimal battery while ensuring no trips are missed.
                </p>
              </div>
              <div className="lg:order-1 bg-[var(--surface-card)] rounded-3xl border border-[var(--border-subtle)] p-8 h-96 flex items-center justify-center">
                <MapPin size={80} className="text-[var(--brand-lime)]" />
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-[var(--brand-lime)] text-sm font-semibold mb-3">STEP 3</div>
                <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
                  Classify with a swipe
                </h3>
                <p className="text-lg text-[var(--text-secondary)] mb-6">
                  Open the app to see your recent trips. Swipe right to mark a trip as business, or swipe left 
                  for personal. You can also set up classification rules so recurring routes (like your commute 
                  to a client site) are automatically categorized.
                </p>
                <p className="text-[var(--text-tertiary)]">
                  Add notes, tags, or adjust details anytime. Split multi-purpose trips into separate business 
                  and personal segments if needed.
                </p>
              </div>
              <div className="bg-[var(--surface-card)] rounded-3xl border border-[var(--border-subtle)] p-8 h-96 flex items-center justify-center">
                <Edit size={80} className="text-[var(--brand-lime)]" />
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="text-[var(--brand-lime)] text-sm font-semibold mb-3">STEP 4</div>
                <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
                  Export compliant reports
                </h3>
                <p className="text-lg text-[var(--text-secondary)] mb-6">
                  When you need a mileage report—for tax filing, reimbursement, or an audit—tap "Export." 
                  Choose a date range, select PDF or CSV format, and generate a detailed, IRS-compliant report 
                  with all the required information.
                </p>
                <p className="text-[var(--text-tertiary)]">
                  Reports include dates, times, locations, mileage, business purpose, and totals. Perfect for 
                  handing to your accountant or submitting to your employer.
                </p>
              </div>
              <div className="lg:order-1 bg-[var(--surface-card)] rounded-3xl border border-[var(--border-subtle)] p-8 h-96 flex items-center justify-center">
                <FileCheck size={80} className="text-[var(--brand-lime)]" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* What you can do after a drive */}
      <section className="py-20 md:py-32 bg-[var(--bg-secondary)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Full control over your logs
            </h2>
            <p className="text-xl text-[var(--text-secondary)]">
              Every drive is editable, splittable, and taggable
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="feature" icon={MapPin} title="Adjust locations">
              <p className="text-[var(--text-secondary)]">Edit start or end points if auto-detection was imprecise</p>
            </Card>
            
            <Card variant="feature" icon={Edit} title="Add notes">
              <p className="text-[var(--text-secondary)]">Attach business purpose, client name, or other context</p>
            </Card>
            
            <Card variant="feature" icon={Play} title="Split trips">
              <p className="text-[var(--text-secondary)]">Separate business and personal segments from one drive</p>
            </Card>
            
            <Card variant="feature" icon={FileCheck} title="Set rules">
              <p className="text-[var(--text-secondary)]">Auto-classify future trips based on route or time</p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Privacy and Battery */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Designed for efficiency and privacy
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="text-center">
              <Battery size={48} className="text-[var(--brand-lime)] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Battery-friendly</h3>
              <p className="text-[var(--text-secondary)]">
                We use intelligent detection algorithms and efficient location services to minimize power consumption. 
                Most users see less than 5% additional battery drain per day.
              </p>
            </Card>
            
            <Card className="text-center">
              <Shield size={48} className="text-[var(--brand-lime)] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Privacy-first</h3>
              <p className="text-[var(--text-secondary)]">
                Your location data is used only to generate your mileage logs. We don't sell, share, or analyze 
                your location for any other purpose. You own your data.
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Band */}
      <section className="py-20 md:py-32 bg-[var(--bg-secondary)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
            Ready to simplify your mileage tracking?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Download on the App Store
            </Button>
            <Button variant="secondary" size="lg" href="/features">
              See all features
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
