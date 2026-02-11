import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '../components/FAQAccordion';

export function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  
  const pricing = {
    monthly: { premium: '$6.99', premiumAnnual: '' },
    annual: { premium: '$5.00', premiumAnnual: '$59.99 billed annually (save 29%)' }
  };
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[var(--brand-teal)] via-[#0a3d51] to-[var(--bg-primary)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 text-center">
          <Badge variant="lime" className="mb-6">Simple pricing</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6">
            Choose the plan that fits your needs
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed mb-8">
            Start with the free version to try it out. Upgrade to Premium for unlimited tracking and exports.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 bg-[var(--surface-card)] rounded-full p-1 border border-[var(--border-subtle)]">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-full transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-[var(--brand-lime)] text-[var(--text-on-lime)] font-semibold'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-6 py-2 rounded-full transition-all ${
                billingPeriod === 'annual'
                  ? 'bg-[var(--brand-lime)] text-[var(--text-on-lime)] font-semibold'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Annual <span className="text-xs ml-1">(Save 29%)</span>
            </button>
          </div>
        </div>
      </section>
      
      {/* Pricing Cards */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <Card className="flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Free</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-[var(--text-primary)]">$0</span>
                </div>
                <p className="text-[var(--text-tertiary)]">Perfect to try it out</p>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-[var(--brand-lime)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--text-secondary)]">Up to 30 drives per month</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-[var(--brand-lime)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--text-secondary)]">Manual drive adding</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-[var(--brand-lime)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--text-secondary)]">Manual classification</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-[var(--brand-lime)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--text-secondary)]">On-device storage</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-[var(--brand-lime)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--text-secondary)]">iCloud backups</span>
                </li>
                <li className="flex items-start gap-3 text-[var(--text-tertiary)]">
                  <span className="text-[var(--text-tertiary)]">✕</span>
                  <span>No drive report exports</span>
                </li>
              </ul>
              
              <Button variant="secondary" size="md" className="w-full">
                Get started free
              </Button>
            </Card>
            
            {/* Premium Plan */}
            <Card className="flex flex-col border-2 border-[var(--brand-lime)] relative">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <Badge variant="lime">Popular</Badge>
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Premium</h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-[var(--text-primary)]">
                    {billingPeriod === 'monthly' ? pricing.monthly.premium : pricing.annual.premium}
                  </span>
                  <span className="text-[var(--text-tertiary)]">/month</span>
                </div>
                {billingPeriod === 'annual' && (
                  <p className="text-sm text-[var(--brand-lime)]">{pricing.annual.premiumAnnual}</p>
                )}
                <p className="text-[var(--text-tertiary)] mt-2">For serious tracking</p>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-[var(--brand-lime)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--text-secondary)]"><strong>Unlimited</strong> automatic tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-[var(--brand-lime)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--text-secondary)]"><strong>Unlimited</strong> drive report exports</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-[var(--brand-lime)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--text-secondary)]">Advanced analytics</span>
                </li>
              </ul>
              
              <Button variant="primary" size="md" className="w-full">
                Start 14-day free trial
              </Button>
              <p className="text-center text-sm text-[var(--text-tertiary)] mt-3">
                No credit card required
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Feature Comparison Table */}
      <section className="py-20 md:py-32 bg-[var(--bg-secondary)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-12 text-center">
            Compare plans
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border-subtle)]">
                  <th className="text-left py-4 px-4 text-[var(--text-primary)] font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 text-[var(--text-primary)] font-semibold">Free</th>
                  <th className="text-center py-4 px-4 text-[var(--text-primary)] font-semibold">Premium</th>
                </tr>
              </thead>
              <tbody className="text-[var(--text-secondary)]">
                <tr className="border-b border-[var(--border-subtle)]">
                  <td className="py-4 px-4">Automatic drive tracking</td>
                  <td className="text-center py-4 px-4">30 drives per month</td>
                  <td className="text-center py-4 px-4">Unlimited</td>
                </tr>
                <tr className="border-b border-[var(--border-subtle)]">
                  <td className="py-4 px-4">Manually tracked drives</td>
                  <td className="text-center py-4 px-4">Unlimited</td>
                  <td className="text-center py-4 px-4">Unlimited</td>
                </tr>
                <tr className="border-b border-[var(--border-subtle)]">
                  <td className="py-4 px-4">Drive report exporting (PDF/CSV)</td>
                  <td className="text-center py-4 px-4">—</td>
                  <td className="text-center py-4 px-4"><Check className="inline text-[var(--brand-lime)]" size={20} /></td>
                </tr>
                <tr className="border-b border-[var(--border-subtle)]">
                  <td className="py-4 px-4">Classification rules</td>
                  <td className="text-center py-4 px-4">—</td>
                  <td className="text-center py-4 px-4"><Check className="inline text-[var(--brand-lime)]" size={20} /></td>
                </tr>
                <tr className="border-b border-[var(--border-subtle)]">
                  <td className="py-4 px-4">iCloud Backup</td>
                  <td className="text-center py-4 px-4">—</td>
                  <td className="text-center py-4 px-4"><Check className="inline text-[var(--brand-lime)]" size={20} /></td>
                </tr>
                <tr className="border-b border-[var(--border-subtle)]">
                  <td className="py-4 px-4">Support</td>
                  <td className="text-center py-4 px-4">Email</td>
                  <td className="text-center py-4 px-4">Priority email</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* Billing FAQ */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-12 text-center">
            Billing questions
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Can I try Premium for free?</AccordionTrigger>
                <AccordionContent>
                  Yes! Premium comes with a 14-day free trial. No credit card required to start. You can explore all \
                  Premium features and decide if it's right for you before committing to a paid plan.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I cancel anytime?</AccordionTrigger>
                <AccordionContent>
                  Absolutely. You can cancel your Premium subscription anytime from the app settings. If you cancel, \
                  you'll continue to have Premium access until the end of your current billing period, then you'll \
                  automatically be moved to the Free plan.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                <AccordionContent>
                  We accept all major credit cards (Visa, Mastercard, American Express, Discover) and Apple Pay \
                  through the App Store.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>What happens to my data if I downgrade?</AccordionTrigger>
                <AccordionContent>
                  Your historical trip data is never deleted. If you downgrade from Premium to Free, you'll keep all \
                  your past records but will be limited to 30 new trips per month and no exports. \
                  You can always upgrade again to regain full access.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
                <AccordionContent>
                  We offer a 30-day money-back guarantee on annual Premium subscriptions. If you're not satisfied \
                  within the first 30 days, contact support for a full refund. Monthly subscriptions are non-refundable \
                  but can be canceled anytime.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 md:py-32 bg-[var(--bg-secondary)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-[var(--text-secondary)] mb-8">
            Download the app and start tracking today—no credit card needed.
          </p>
          <Button variant="primary" size="lg">
            Download on the App Store
          </Button>
        </div>
      </section>
    </div>
  );
}