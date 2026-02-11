import React from 'react';
import { Link } from 'react-router';
import { 
  MapPin, 
  Zap, 
  FileCheck, 
  Shield, 
  Battery, 
  Target,
  Play,
  Tag,
  Calendar,
  Car,
  Download,
  FileText,
  Cloud,
  Lock,
  Users,
  ArrowRight
} from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '../components/FAQAccordion';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Section A: Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-teal)] via-[#0a3d51] to-[var(--bg-primary)] opacity-30"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1758872014553-f0deb7b12d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXAlMjBuYXZpZ2F0aW9uJTIwZ3BzJTIwcm91dGV8ZW58MXx8fHwxNzcwNzg1NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center opacity-5"></div>
        
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight font-bold text-[var(--text-primary)]">
                Automatic mileage tracking that stays audit-ready.
              </h1>
              <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
                Every Last Mile detects drives in the background, makes business classification fast, 
                and exports compliant reports anytime, without selling your location data.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg">
                  Download on the App Store
                </Button>
                <Button variant="secondary" size="lg" href="/how-it-works">
                  See how it works
                </Button>
              </div>
              
              <Button variant="secondary" size="md" href="/teams" className="!inline-flex">
                For Teams <ArrowRight size={16} className="ml-2" />
              </Button>
              
              {/* Trust microcopy */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Shield size={16} className="text-[var(--brand-lime)]" />
                  <span className="text-sm text-[var(--text-tertiary)]">Privacy-first</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck size={16} className="text-[var(--brand-lime)]" />
                  <span className="text-sm text-[var(--text-tertiary)]">Audit-ready exports in minutes</span>
                </div>
              </div>
            </div>
            
            {/* Right: Device Collage */}
            <div className="relative hidden lg:block">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkYXNoYm9hcmQlMjBkYXJrJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MDc4NTYyMHww&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Every Last Mile App Dashboard" 
                  className="rounded-3xl shadow-2xl border border-[var(--border-subtle)] w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section B: Proof Strip */}
      <section className="py-12 bg-[var(--bg-secondary)] border-y border-[var(--border-subtle)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[var(--brand-lime)] mb-2">4.8★</div>
              <div className="text-[var(--text-tertiary)]">App Store Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--brand-lime)] mb-2">50,000+</div>
              <div className="text-[var(--text-tertiary)]">Active Drivers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--brand-lime)] mb-2">10M+</div>
              <div className="text-[var(--text-tertiary)]">Miles Tracked</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section C: 3 Value Props */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <Badge variant="lime" className="mb-4">Time-saving</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Built for accuracy, speed, and compliance
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="feature" icon={MapPin} title="Never miss a drive">
              <p className="text-[var(--text-secondary)]">
                Automatic detection captures every trip without manual input, so you always have complete records.
              </p>
            </Card>
            
            <Card variant="feature" icon={Zap} title="Classify business in seconds">
              <p className="text-[var(--text-secondary)]">
                Swipe to mark trips as business or personal. Set rules to automate future classifications.
              </p>
            </Card>
            
            <Card variant="feature" icon={FileCheck} title="Export reports that hold up">
              <p className="text-[var(--text-secondary)]">
                Generate IRS-compliant PDF and CSV reports anytime, with all the details you need for audits.
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Section D: How it Works */}
      <section className="py-20 md:py-32 bg-[var(--bg-secondary)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <Badge variant="lime" className="mb-4">Simple & Fast</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Three steps to audit-ready logs
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--surface-card)] border border-[var(--border-subtle)] flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[var(--brand-lime)]">1</span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">Install and allow permissions</h3>
              <p className="text-[var(--text-secondary)]">
                Download the app and grant location access. We handle the rest automatically.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--surface-card)] border border-[var(--border-subtle)] flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[var(--brand-lime)]">2</span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">Detect and classify with a swipe</h3>
              <p className="text-[var(--text-secondary)]">
                Every drive appears in your feed. Swipe to mark as business or personal in seconds.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--surface-card)] border border-[var(--border-subtle)] flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[var(--brand-lime)]">3</span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">Export reports anytime</h3>
              <p className="text-[var(--text-secondary)]">
                Generate compliant reports for your accountant, employer, or tax filing with one tap.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="secondary" size="lg" href="/how-it-works">
              Learn more <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Section E: Objection Crushers */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <Badge variant="lime" className="mb-4">Trustworthy</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Built to earn your trust
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="feature" icon={Target} title="Reliable detection">
              <p className="text-[var(--text-secondary)]">
                We've optimized our tracking engine to capture the miles you earned without missing trips.
              </p>
            </Card>
            
            <Card variant="feature" icon={Battery} title="Battery efficient">
              <p className="text-[var(--text-secondary)]">
                Designed to be lightweight and efficient, so tracking runs in the background without draining your battery.
              </p>
            </Card>
            
            <Card variant="feature" icon={Shield} title="Privacy first">
              <p className="text-[var(--text-secondary)]">
                Your location data stays yours, not sold. We only use it to generate your mileage logs.
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Section F: Why Every Last Mile (NEW) */}
      <section className="py-20 md:py-32 bg-[var(--bg-secondary)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Narrative */}
            <div>
              <Badge variant="lime" className="mb-4">Our Mission</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
                Why we built Every Last Mile
              </h2>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Every Last Mile was created by people who've spent years building mileage tracking workflows. 
                We saw what worked, what didn't, and where drivers and teams still lose time. So we built a 
                privacy-first experience that helps you capture every trip, classify fast, and export compliant 
                reports you can trust.
              </p>
            </div>
            
            {/* Right: Proof bullets and link */}
            <Card variant="story">
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--brand-lime)] bg-opacity-20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--brand-lime)]"></div>
                  </div>
                  <span className="text-[var(--text-secondary)]">
                    Built by a team with experience shipping mileage tracking at scale
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--brand-lime)] bg-opacity-20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--brand-lime)]"></div>
                  </div>
                  <span className="text-[var(--text-secondary)]">
                    Designed from day one for privacy-first, audit-ready reporting
                  </span>
                </li>
              </ul>
              <Link to="/our-story" className="inline-flex items-center gap-2 text-[var(--brand-lime)] hover:text-[var(--brand-lime-2)] font-medium">
                Read our story <ArrowRight size={16} />
              </Link>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Section G: Feature Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <Badge variant="lime" className="mb-4">Complete toolset</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Everything you need for mileage compliance
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="feature" icon={MapPin} title="Automatic trip detection">
              <p className="text-[var(--text-secondary)]">Runs in the background and captures every drive</p>
            </Card>
            
            <Card variant="feature" icon={Tag} title="Classification rules">
              <p className="text-[var(--text-secondary)]">Set up rules to auto-classify recurring routes</p>
            </Card>
            
            <Card variant="feature" icon={Play} title="Edit and split drives">
              <p className="text-[var(--text-secondary)]">Adjust start/end points or split multi-purpose trips</p>
            </Card>
            
            <Card variant="feature" icon={Car} title="Multiple vehicles">
              <p className="text-[var(--text-secondary)]">Track different cars and assign them to trips</p>
            </Card>
            
            <Card variant="feature" icon={FileText} title="Notes and tags">
              <p className="text-[var(--text-secondary)]">Add context to trips for better record-keeping</p>
            </Card>
            
            <Card variant="feature" icon={Download} title="Export: PDF/CSV">
              <p className="text-[var(--text-secondary)]">Generate audit-ready reports in seconds</p>
            </Card>
            
            <Card variant="feature" icon={Cloud} title="Cloud sync">
              <p className="text-[var(--text-secondary)]">Your data stays backed up and accessible</p>
            </Card>
            
            <Card variant="feature" icon={Lock} title="Privacy controls">
              <p className="text-[var(--text-secondary)]">You control your data and how it's used</p>
            </Card>
            
            <Card variant="feature" icon={Calendar} title="Historical imports">
              <p className="text-[var(--text-secondary)]">Import past trips from other apps or manually</p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Section H: Pricing Teaser */}
      <section className="py-20 md:py-32 bg-[var(--bg-secondary)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <Badge variant="lime" className="mb-4">Simple pricing</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Choose the plan that fits your needs
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <Card className="flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Free</h3>
                <div className="text-4xl font-bold text-[var(--text-primary)] mb-1">$0</div>
                <p className="text-[var(--text-tertiary)]">Perfect to try it out</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-2 text-[var(--text-secondary)]">
                  <span className="text-[var(--brand-lime)]">✓</span>
                  <span>Up to 30 drives per month</span>
                </li>
                <li className="flex items-start gap-2 text-[var(--text-secondary)]">
                  <span className="text-[var(--brand-lime)]">✓</span>
                  <span>Manual drive adding</span>
                </li>
                <li className="flex items-start gap-2 text-[var(--text-secondary)]">
                  <span className="text-[var(--brand-lime)]">✓</span>
                  <span>Manual classification</span>
                </li>
                <li className="flex items-start gap-2 text-[var(--text-secondary)]">
                  <span className="text-[var(--brand-lime)]">✓</span>
                  <span>On-device storage</span>
                </li>
                <li className="flex items-start gap-2 text-[var(--text-secondary)]">
                  <span className="text-[var(--brand-lime)]">✓</span>
                  <span>iCloud backups</span>
                </li>
              </ul>
              <Button variant="secondary" size="md" className="w-full">
                Get started
              </Button>
            </Card>
            
            {/* Premium Plan */}
            <Card className="flex flex-col border-2 border-[var(--brand-lime)] relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge variant="lime">Popular</Badge>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Premium</h3>
                <div className="text-4xl font-bold text-[var(--text-primary)] mb-1">$6.99</div>
                <p className="text-[var(--text-tertiary)]">per month</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-2 text-[var(--text-secondary)]">
                  <span className="text-[var(--brand-lime)]">✓</span>
                  <span>Unlimited automatic tracking</span>
                </li>
                <li className="flex items-start gap-2 text-[var(--text-secondary)]">
                  <span className="text-[var(--brand-lime)]">✓</span>
                  <span>Unlimited drive report exports</span>
                </li>
                <li className="flex items-start gap-2 text-[var(--text-secondary)]">
                  <span className="text-[var(--brand-lime)]">✓</span>
                  <span>Advanced analytics</span>
                </li>
              </ul>
              <Button variant="primary" size="md" className="w-full">
                Start free trial
              </Button>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/pricing" className="inline-flex items-center gap-2 text-[var(--brand-lime)] hover:text-[var(--brand-lime-2)] font-medium text-lg">
              See full pricing details <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Section I: Testimonials */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <Badge variant="lime" className="mb-4">Trusted by drivers</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
              What our users say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="testimonial" author="Sarah M." role="Real Estate Agent">
              "I've tried three different mileage apps and this is the only one that actually caught all my drives. 
              The classification is so fast, and the reports look professional enough to hand straight to my accountant."
            </Card>
            
            <Card variant="testimonial" author="Marcus T." role="Delivery Driver">
              "Battery life was my biggest concern, but this app barely makes a dent. 
              I can run it all day and still have juice left. Plus, the free version is actually useful."
            </Card>
            
            <Card variant="testimonial" author="Jennifer L." role="Small Business Owner">
              "Finally, a mileage app that respects my privacy. No data selling, clear terms, and I have full control. 
              The audit reports are exactly what my CPA needed."
            </Card>
          </div>
        </div>
      </section>
      
      {/* Section J: FAQ */}
      <section className="py-20 md:py-32 bg-[var(--bg-secondary)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <Badge variant="lime" className="mb-4">Got questions?</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Frequently asked questions
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>What makes a log compliant or audit-ready?</AccordionTrigger>
                <AccordionContent>
                  An audit-ready mileage log includes date, time, starting location, ending location, total miles, 
                  business purpose, and odometer readings. Every Last Mile captures all of this automatically and 
                  formats it according to IRS requirements for business expense deductions.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Does it track personal trips?</AccordionTrigger>
                <AccordionContent>
                  Yes, the app detects all trips automatically. You then classify each trip as business or personal. 
                  Only business trips are included in your mileage reports. Personal trips are kept in your log for 
                  completeness but are clearly marked and excluded from deduction calculations.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Does it drain battery?</AccordionTrigger>
                <AccordionContent>
                  No. We've optimized the tracking engine to minimize battery impact. The app uses efficient location 
                  services and intelligent detection algorithms that run in the background without significant power drain. 
                  Most users report less than 5% additional battery usage per day.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>What permissions are required?</AccordionTrigger>
                <AccordionContent>
                  The app requires location access ("Always") to detect trips automatically in the background. 
                  We also request motion activity permission to improve detection accuracy. All permissions are 
                  explained clearly during setup, and you can review them anytime in your device settings.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>Can I edit or split a drive?</AccordionTrigger>
                <AccordionContent>
                  Yes. You can edit the start and end points of any trip, adjust the mileage, and add notes. 
                  If you made multiple stops for different purposes (e.g., business meeting then personal errand), 
                  you can split one trip into multiple segments and classify each separately.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger>How do exports work?</AccordionTrigger>
                <AccordionContent>
                  You can export your mileage logs anytime as PDF or CSV files. Choose a date range, select which \
                  vehicle(s) to include, and generate a formatted report. PDF reports are designed for printing or \
                  sharing with accountants. CSV files work with Excel or other spreadsheet tools for further analysis.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7">
                <AccordionTrigger>Can I track multiple vehicles?</AccordionTrigger>
                <AccordionContent>
                  Yes. You can add multiple vehicles to your account and assign each trip to the appropriate vehicle. \
                  This is helpful if you use different cars for work or if you're tracking mileage for a fleet. \
                  Reports can be filtered by vehicle for easy reimbursement or deduction tracking.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/support" className="inline-flex items-center gap-2 text-[var(--brand-lime)] hover:text-[var(--brand-lime-2)] font-medium text-lg">
              View all support articles <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Section K: Final CTA */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="bg-gradient-to-br from-[var(--brand-teal)] to-[var(--bg-primary)] rounded-3xl p-12 md:p-16 text-center border border-[var(--border-subtle)]">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
              Start tracking your miles today
            </h2>
            <p className="text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              Join thousands of drivers who trust Every Last Mile to keep their mileage logs accurate, 
              compliant, and audit-ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Download on the App Store
              </Button>
              <Button variant="secondary" size="lg">
                View sample report
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}