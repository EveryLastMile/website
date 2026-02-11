import React from 'react';
import { 
  MapPin, 
  Tag, 
  Play, 
  Car, 
  FileText, 
  Download, 
  Cloud, 
  Lock,
  Users,
  Calendar,
  BarChart,
  Bell,
  DollarSign,
  Calculator
} from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';

export function Features() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[var(--brand-teal)] via-[#0a3d51] to-[var(--bg-primary)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 text-center">
          <Badge variant="lime" className="mb-6">Complete toolset</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6">
            Everything you need for compliant mileage tracking
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            From automatic detection to audit-ready exports, Every Last Mile gives you all the tools 
            to track, classify, and report business mileage with confidence.
          </p>
        </div>
      </section>
      
      {/* Core Features */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="mb-16">
            <Badge variant="lime" className="mb-4">Core Features</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
              Automated tracking, manual control
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card variant="feature" icon={MapPin} title="Automatic trip detection">
              <p className="text-[var(--text-secondary)]">
                Runs in the background and captures every drive automatically without manual start/stop. 
                No buttons to press, no trips to miss.
              </p>
            </Card>
            
            <Card variant="feature" icon={Tag} title="Smart classification">
              <p className="text-[var(--text-secondary)]">
                Swipe to classify trips as business or personal in seconds. Set up rules to auto-classify 
                recurring routes based on time, location, or pattern.
              </p>
            </Card>
            
            <Card variant="feature" icon={Play} title="Edit and split drives">
              <p className="text-[var(--text-secondary)]">
                Adjust start/end points, change distances, or split multi-purpose trips into separate business 
                and personal segments for accurate reporting.
              </p>
            </Card>
            
            <Card variant="feature" icon={Car} title="Multiple vehicles">
              <p className="text-[var(--text-secondary)]">
                Track mileage for multiple cars or vehicles. Assign each trip to the correct vehicle and 
                generate separate reports for each one.
              </p>
            </Card>
            
            <Card variant="feature" icon={FileText} title="Notes and tags">
              <p className="text-[var(--text-secondary)]">
                Add business purpose, client names, project codes, or other context to trips. Organize with 
                custom tags for easier searching and filtering.
              </p>
            </Card>
            
            <Card variant="feature" icon={Download} title="Export: PDF & CSV">
              <p className="text-[var(--text-secondary)]">
                Generate IRS-compliant mileage reports in PDF or CSV format. Choose date ranges, filter by 
                vehicle or tag, and export anytime.
              </p>
            </Card>
            
            <Card variant="feature" icon={Cloud} title="Cloud sync">
              <p className="text-[var(--text-secondary)]">
                Your mileage logs are automatically backed up to the cloud. Access your data from any device 
                and never worry about losing your records.
              </p>
            </Card>
            
            <Card variant="feature" icon={Lock} title="Privacy controls">
              <p className="text-[var(--text-secondary)]">
                You control your location data. We don't sell or share it with third parties. Review and 
                manage permissions anytime in app settings.
              </p>
            </Card>
            
            <Card variant="feature" icon={Calendar} title="Calendar view">
              <p className="text-[var(--text-secondary)]">
                See your trips organized by day, week, or month. Quickly spot patterns, review past drives, 
                and ensure nothing was missed.
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Advanced Features */}
      <section className="py-20 md:py-32 bg-[var(--bg-secondary)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="mb-16">
            <Badge variant="lime" className="mb-4">Advanced Features</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
              Built for power users
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card variant="feature" icon={BarChart} title="Detailed analytics">
              <p className="text-[var(--text-secondary)]">
                View summaries of your total mileage, business vs personal breakdown, and estimated deductions. 
                Track trends over time and optimize your record-keeping.
              </p>
            </Card>
            
            <Card variant="feature" icon={Bell} title="Classification reminders">
              <p className="text-[var(--text-secondary)]">
                Get reminders to classify untagged trips. Set your reminder frequency and stay on top of your 
                mileage log without falling behind.
              </p>
            </Card>
            
            <Card variant="feature" icon={Calculator} title="Deduction calculator">
              <p className="text-[var(--text-secondary)]">
                Estimate your potential tax deduction based on business miles tracked. Uses current IRS standard 
                mileage rate or custom rates for your situation.
              </p>
            </Card>
            
            <Card variant="feature" icon={DollarSign} title="Reimbursement tracking">
              <p className="text-[var(--text-secondary)]">
                Mark trips as reimbursed or pending. Generate reports filtered by reimbursement status for 
                easy expense submission to employers.
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Built For Modules */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Built for your workflow
            </h2>
          </div>
          
          <div className="space-y-16">
            {/* Self-Employed */}
            <div className="bg-[var(--surface-card)] rounded-3xl border border-[var(--border-subtle)] p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge variant="lime" className="mb-4">Self-Employed</Badge>
                  <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
                    Maximize your deductions
                  </h3>
                  <p className="text-lg text-[var(--text-secondary)] mb-6">
                    Whether you're a freelancer, gig worker, or business owner, Every Last Mile helps you capture 
                    every deductible mile. Track multiple vehicles, organize by project or client, and generate 
                    tax-ready reports that meet IRS requirements.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-[var(--text-secondary)]">
                      <span className="text-[var(--brand-lime)]">✓</span>
                      <span>Track mileage for multiple businesses or ventures</span>
                    </li>
                    <li className="flex items-start gap-2 text-[var(--text-secondary)]">
                      <span className="text-[var(--brand-lime)]">✓</span>
                      <span>Estimate annual tax deductions</span>
                    </li>
                    <li className="flex items-start gap-2 text-[var(--text-secondary)]">
                      <span className="text-[var(--brand-lime)]">✓</span>
                      <span>Export reports by vehicle, client, or project</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-[var(--bg-primary)] rounded-2xl p-8 h-64 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1541560052-5e137f229371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdvcmtpbmclMjBsYXB0b3B8ZW58MXx8fHwxNzcwNzMxNjM1fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                    alt="Self-employed professional" 
                    className="rounded-xl w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Employees */}
            <div className="bg-[var(--surface-card)] rounded-3xl border border-[var(--border-subtle)] p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="lg:order-2">
                  <Badge variant="lime" className="mb-4">Employees</Badge>
                  <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
                    Get reimbursed faster
                  </h3>
                  <p className="text-lg text-[var(--text-secondary)] mb-6">
                    Tracking mileage for reimbursement? Generate professional reports that your employer will accept. 
                    Mark trips as reimbursed to track what's been paid, and export monthly summaries for easy expense submission.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-[var(--text-secondary)]">
                      <span className="text-[var(--brand-lime)]">✓</span>
                      <span>Professional reports for HR or finance teams</span>
                    </li>
                    <li className="flex items-start gap-2 text-[var(--text-secondary)]">
                      <span className="text-[var(--brand-lime)]">✓</span>
                      <span>Track reimbursement status</span>
                    </li>
                    <li className="flex items-start gap-2 text-[var(--text-secondary)]">
                      <span className="text-[var(--brand-lime)]">✓</span>
                      <span>Export by pay period or month</span>
                    </li>
                  </ul>
                </div>
                <div className="lg:order-1 bg-[var(--bg-primary)] rounded-2xl p-8 h-64 flex items-center justify-center">
                  <DollarSign size={80} className="text-[var(--brand-lime)]" />
                </div>
              </div>
            </div>
            
            {/* Teams */}
            <div className="bg-[var(--surface-card)] rounded-3xl border border-[var(--border-subtle)] p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge variant="lime" className="mb-4">Teams</Badge>
                  <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
                    Manage team mileage at scale
                  </h3>
                  <p className="text-lg text-[var(--text-secondary)] mb-6">
                    Admins get a centralized dashboard to review, approve, and export mileage logs for the entire team. 
                    Set policies, enforce compliance, and eliminate spreadsheet chaos.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-[var(--text-secondary)]">
                      <span className="text-[var(--brand-lime)]">✓</span>
                      <span>Admin dashboard with approval workflow</span>
                    </li>
                    <li className="flex items-start gap-2 text-[var(--text-secondary)]">
                      <span className="text-[var(--brand-lime)]">✓</span>
                      <span>Policy controls and automated reminders</span>
                    </li>
                    <li className="flex items-start gap-2 text-[var(--text-secondary)]">
                      <span className="text-[var(--brand-lime)]">✓</span>
                      <span>Bulk export for entire organization</span>
                    </li>
                  </ul>
                  <Button variant="primary" size="md" href="/teams">
                    Learn about Teams
                  </Button>
                </div>
                <div className="bg-[var(--bg-primary)] rounded-2xl p-8 h-64 flex items-center justify-center">
                  <Users size={80} className="text-[var(--brand-lime)]" />
                </div>
              </div>
            </div>
            
            {/* Accountants */}
            <div className="bg-[var(--surface-card)] rounded-3xl border border-[var(--border-subtle)] p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="lg:order-2">
                  <Badge variant="lime" className="mb-4">Accountants</Badge>
                  <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
                    Logs your clients can trust
                  </h3>
                  <p className="text-lg text-[var(--text-secondary)] mb-6">
                    Recommend Every Last Mile to your clients for standardized, compliant mileage logs. Every report 
                    includes the detail you need for tax prep and audit defense, formatted consistently.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-[var(--text-secondary)]">
                      <span className="text-[var(--brand-lime)]">✓</span>
                      <span>IRS-compliant format with all required fields</span>
                    </li>
                    <li className="flex items-start gap-2 text-[var(--text-secondary)]">
                      <span className="text-[var(--brand-lime)]">✓</span>
                      <span>CSV export for easy import into tax software</span>
                    </li>
                    <li className="flex items-start gap-2 text-[var(--text-secondary)]">
                      <span className="text-[var(--brand-lime)]">✓</span>
                      <span>Sample reports available for review</span>
                    </li>
                  </ul>
                  <Button variant="secondary" size="md">
                    View sample report
                  </Button>
                </div>
                <div className="lg:order-1 bg-[var(--bg-primary)] rounded-2xl p-8 h-64 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1762151662378-f40e20901824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2NvdW50aW5nJTIwdGF4JTIwZG9jdW1lbnRzfGVufDF8fHx8MTc3MDc4NTYyMXww&ixlib=rb-4.1.0&q=80&w=1080" 
                    alt="Accounting documents" 
                    className="rounded-xl w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Band */}
      <section className="py-20 md:py-32 bg-[var(--bg-secondary)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
            Start tracking with confidence
          </h2>
          <p className="text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Join thousands who trust Every Last Mile for accurate, compliant mileage tracking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Download on the App Store
            </Button>
            <Button variant="secondary" size="lg" href="/pricing">
              See pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
