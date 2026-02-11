import React, { useState } from 'react';
import { Search, BookOpen, MessageCircle, FileText, HelpCircle, Settings, Zap } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '../components/FAQAccordion';

export function Support() {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className="min-h-screen">
      {/* Hero Section with Search */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[var(--brand-teal)] via-[#0a3d51] to-[var(--bg-primary)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 text-center">
          <Badge variant="lime" className="mb-6">Support</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6">
            How can we help?
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed mb-8">
            Search our help center, browse common questions, or contact our support team.
          </p>
          
          {/* Search Input */}
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-12 bg-[var(--surface-card)] border border-[var(--border-subtle)] rounded-full text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-lime)]"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]" size={20} />
          </div>
        </div>
      </section>
      
      {/* Category Tiles */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-12 text-center">
            Browse by category
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="feature" icon={Zap} title="Getting Started">
              <p className="text-[var(--text-secondary)] mb-3">
                Learn the basics: installation, setup, and your first drive.
              </p>
              <a href="#getting-started" className="text-[var(--brand-lime)] hover:text-[var(--brand-lime-2)] font-medium text-sm">
                View articles →
              </a>
            </Card>
            
            <Card variant="feature" icon={Settings} title="Trip Detection & Classification">
              <p className="text-[var(--text-secondary)] mb-3">
                How detection works, editing trips, and setting up rules.
              </p>
              <a href="#detection" className="text-[var(--brand-lime)] hover:text-[var(--brand-lime-2)] font-medium text-sm">
                View articles →
              </a>
            </Card>
            
            <Card variant="feature" icon={FileText} title="Exports & Reports">
              <p className="text-[var(--text-secondary)] mb-3">
                Generate compliant reports, understand formats, and share logs.
              </p>
              <a href="#exports" className="text-[var(--brand-lime)] hover:text-[var(--brand-lime-2)] font-medium text-sm">
                View articles →
              </a>
            </Card>
            
            <Card variant="feature" icon={HelpCircle} title="Privacy & Security">
              <p className="text-[var(--text-secondary)] mb-3">
                Data handling, permissions, and privacy controls.
              </p>
              <a href="#privacy" className="text-[var(--brand-lime)] hover:text-[var(--brand-lime-2)] font-medium text-sm">
                View articles →
              </a>
            </Card>
            
            <Card variant="feature" icon={BookOpen} title="Account & Billing">
              <p className="text-[var(--text-secondary)] mb-3">
                Manage your subscription, payment methods, and account settings.
              </p>
              <a href="#billing" className="text-[var(--brand-lime)] hover:text-[var(--brand-lime-2)] font-medium text-sm">
                View articles →
              </a>
            </Card>
            
            <Card variant="feature" icon={MessageCircle} title="Teams & Admin">
              <p className="text-[var(--text-secondary)] mb-3">
                Admin dashboard, approval workflows, and team management.
              </p>
              <a href="#teams" className="text-[var(--brand-lime)] hover:text-[var(--brand-lime-2)] font-medium text-sm">
                View articles →
              </a>
            </Card>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-[var(--bg-secondary)]" id="faq">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Frequently asked questions
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I get started with Every Last Mile?</AccordionTrigger>
                <AccordionContent>
                  Download the app from the App Store, create an account, and grant location permissions. 
                  The app will guide you through setup and start detecting trips automatically. You'll receive 
                  a notification after your first drive to classify it.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Why isn't the app detecting my drives?</AccordionTrigger>
                <AccordionContent>
                  Make sure location access is set to "Always" in your device settings. Also check that 
                  Background App Refresh is enabled for Every Last Mile. If you're still having issues, 
                  try restarting the app or your device, and contact support if the problem persists.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>How do I edit or split a trip?</AccordionTrigger>
                <AccordionContent>
                  Tap any trip in your log to view details. From there, you can edit start/end locations, 
                  adjust the distance, change the classification, or split the trip into multiple segments. 
                  Changes are saved automatically and reflected in your reports.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>How do I export a mileage report?</AccordionTrigger>
                <AccordionContent>
                  Go to the Reports tab, select your date range and filters (vehicle, classification, etc.), 
                  then tap "Export." Choose PDF for a formatted report or CSV for spreadsheet compatibility. 
                  Free users get 2 exports per month; Pro users get unlimited exports.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>What if I miss classifying a trip?</AccordionTrigger>
                <AccordionContent>
                  No problem! All trips remain in your log until you classify them. You'll receive reminders 
                  (if enabled) to classify untagged trips. You can also batch-classify multiple trips at once 
                  from the calendar view.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger>Can I use this app on multiple devices?</AccordionTrigger>
                <AccordionContent>
                  Pro and Teams users have cloud sync, so you can access your mileage logs from any device 
                  where you're signed in. However, trip detection only works on the device where the app is 
                  actively running with location permissions.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7">
                <AccordionTrigger>How do I cancel my Pro subscription?</AccordionTrigger>
                <AccordionContent>
                  Go to Settings → Subscription → Cancel Subscription. You'll keep Pro access until the end 
                  of your current billing period, then automatically move to the Free plan. Your trip history 
                  is preserved—you just won't be able to create new unlimited exports.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-8">
                <AccordionTrigger>Is my location data private?</AccordionTrigger>
                <AccordionContent>
                  Yes. We use your location only to detect and log trips. We don't sell your data, share it 
                  with advertisers, or use it for purposes unrelated to mileage tracking. Review our 
                  <a href="/privacy" className="text-[var(--brand-lime)] hover:text-[var(--brand-lime-2)]"> Privacy & Security page</a> for details.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-9">
                <AccordionTrigger>What if I accidentally delete a trip?</AccordionTrigger>
                <AccordionContent>
                  Deleted trips can be recovered from the trash folder within 30 days. Go to Settings → 
                  Trash to restore deleted trips. After 30 days, deletions are permanent and cannot be recovered.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-10">
                <AccordionTrigger>How do I contact support?</AccordionTrigger>
                <AccordionContent>
                  Email us at support@everylastmile.com or use the in-app support chat (tap Settings → Help & Support). 
                  Pro users get priority response within 24 hours. Teams users also have access to phone support.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* Contact Support */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="bg-[var(--surface-card)] rounded-3xl border border-[var(--border-subtle)] p-12 text-center">
            <MessageCircle size={48} className="text-[var(--brand-lime)] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Still need help?
            </h2>
            <p className="text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              Our support team is here to help you get the most out of Every Last Mile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Email support
              </Button>
              <Button variant="secondary" size="lg">
                Live chat
              </Button>
            </div>
            <p className="text-sm text-[var(--text-tertiary)] mt-6">
              Pro users: Priority response within 24 hours<br />
              Teams users: Phone support available
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
