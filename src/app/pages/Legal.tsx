import React from 'react';
import { useLocation } from 'react-router';
import { Badge } from '../components/Badge';

export function Legal() {
  const location = useLocation();
  const isPrivacyPolicy = location.pathname === '/legal/privacy';
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[var(--brand-teal)] via-[#0a3d51] to-[var(--bg-primary)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 text-center">
          <Badge variant="lime" className="mb-6">Legal</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6">
            {isPrivacyPolicy ? 'Privacy Policy' : 'Terms of Service'}
          </h1>
          <p className="text-[var(--text-secondary)]">
            Last updated: February 11, 2026
          </p>
        </div>
      </section>
      
      {/* Legal Content */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="prose prose-invert max-w-none">
            {isPrivacyPolicy ? (
              // Privacy Policy Content
              <div className="space-y-8 text-[var(--text-secondary)]">
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Introduction</h2>
                  <p className="leading-relaxed">
                    Every Last Mile ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                    explains how we collect, use, disclose, and safeguard your information when you use our mobile 
                    application and services.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Information We Collect</h2>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">Location Data</h3>
                  <p className="leading-relaxed">
                    We collect precise location data (GPS coordinates and timestamps) to automatically detect and log 
                    your trips. This data is essential for providing mileage tracking services.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">Account Information</h3>
                  <p className="leading-relaxed">
                    When you create an account, we collect your email address, name, and payment information (processed 
                    securely through third-party payment providers).
                  </p>
                  
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">Trip Data</h3>
                  <p className="leading-relaxed">
                    We store trip classifications (business/personal), notes, tags, vehicle assignments, and other 
                    metadata you add to your trips.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">Device Information</h3>
                  <p className="leading-relaxed">
                    We collect device type, operating system version, and app version to improve functionality and 
                    troubleshoot issues.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">How We Use Your Information</h2>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>To provide mileage tracking and trip detection services</li>
                    <li>To generate mileage reports and exports</li>
                    <li>To process payments and manage subscriptions</li>
                    <li>To send service notifications and updates</li>
                    <li>To improve app functionality and user experience</li>
                    <li>To provide customer support</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Data Sharing and Disclosure</h2>
                  <p className="leading-relaxed mb-4">
                    <strong>We do NOT sell your location data.</strong> We only share your data in the following limited circumstances:
                  </p>
                  <ul className="space-y-2 list-disc pl-6">
                    <li><strong>With your consent:</strong> When you export and share your mileage reports</li>
                    <li><strong>For Teams users:</strong> With organization admins as part of the approval workflow</li>
                    <li><strong>Service providers:</strong> Third-party services that help us operate (cloud hosting, payment processing)</li>
                    <li><strong>Legal requirements:</strong> When required by law or to protect our rights</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Data Security</h2>
                  <p className="leading-relaxed">
                    We use industry-standard security measures to protect your data, including encryption in transit (TLS) 
                    and at rest (AES-256). We are SOC 2 Type II certified and undergo regular security audits.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Data Retention</h2>
                  <p className="leading-relaxed">
                    We retain your trip data as long as your account is active. Free plan users retain 1 year of history; 
                    Pro and Teams users have unlimited retention. When you delete your account, data is permanently 
                    deleted within 30 days, except where required for legal compliance.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Your Rights</h2>
                  <p className="leading-relaxed mb-4">You have the right to:</p>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Access and export your data</li>
                    <li>Correct inaccurate data</li>
                    <li>Delete your account and data</li>
                    <li>Opt out of marketing communications</li>
                    <li>Withdraw consent for data processing</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Contact Us</h2>
                  <p className="leading-relaxed">
                    If you have questions about this Privacy Policy or wish to exercise your rights, contact us at:<br />
                    Email: privacy@everylastmile.com<br />
                    Address: [Company Address]
                  </p>
                </div>
              </div>
            ) : (
              // Terms of Service Content
              <div className="space-y-8 text-[var(--text-secondary)]">
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Acceptance of Terms</h2>
                  <p className="leading-relaxed">
                    By accessing and using Every Last Mile ("the Service"), you accept and agree to be bound by these 
                    Terms of Service. If you do not agree, do not use the Service.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Description of Service</h2>
                  <p className="leading-relaxed">
                    Every Last Mile provides automatic mileage tracking, trip classification, and report generation 
                    services through a mobile application. We offer free and paid subscription tiers with varying features.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">User Responsibilities</h2>
                  <p className="leading-relaxed mb-4">You agree to:</p>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Provide accurate account information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Use the Service in compliance with applicable laws</li>
                    <li>Not attempt to reverse engineer or compromise the Service</li>
                    <li>Review and classify trips accurately for tax and reimbursement purposes</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Subscriptions and Billing</h2>
                  <p className="leading-relaxed">
                    Paid subscriptions (Pro and Teams) are billed monthly or annually. Subscriptions automatically renew 
                    unless canceled before the renewal date. You can cancel anytime from the app settings. Refunds are 
                    provided only as specified in our refund policy.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Accuracy Disclaimer</h2>
                  <p className="leading-relaxed">
                    While we strive for accuracy, we cannot guarantee that all trips will be detected or that detection 
                    will be perfectly precise. Users are responsible for reviewing and verifying their mileage logs before 
                    submitting for tax deductions or reimbursement.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Limitation of Liability</h2>
                  <p className="leading-relaxed">
                    To the maximum extent permitted by law, Every Last Mile is not liable for any indirect, incidental, 
                    or consequential damages arising from your use of the Service, including lost deductions, reimbursements, 
                    or audit penalties.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Termination</h2>
                  <p className="leading-relaxed">
                    We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent 
                    or abusive behavior. You may terminate your account at any time by deleting it from the app settings.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Changes to Terms</h2>
                  <p className="leading-relaxed">
                    We may update these Terms from time to time. Material changes will be communicated via email or 
                    in-app notification. Continued use of the Service after changes constitutes acceptance.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Governing Law</h2>
                  <p className="leading-relaxed">
                    These Terms are governed by the laws of [Jurisdiction], without regard to conflict of law principles.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Contact</h2>
                  <p className="leading-relaxed">
                    For questions about these Terms, contact us at:<br />
                    Email: legal@everylastmile.com<br />
                    Address: [Company Address]
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
