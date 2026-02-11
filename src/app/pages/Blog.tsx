import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Badge } from '../components/Badge';
import { Card } from '../components/Card';

export function Blog() {
  const blogPosts = [
    {
      title: 'What Makes a Mileage Log IRS-Compliant?',
      excerpt: 'Learn the essential elements of an audit-ready mileage log and what the IRS expects to see when reviewing your deductions.',
      category: 'Tax & Compliance',
      date: 'February 8, 2026',
      image: 'https://images.unsplash.com/photo-1762151662378-f40e20901824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2NvdW50aW5nJTIwdGF4JTIwZG9jdW1lbnRzfGVufDF8fHx8MTc3MDc4NTYyMXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Business vs Personal Mileage: How to Draw the Line',
      excerpt: 'Understand what qualifies as business mileage and how to avoid common classification mistakes that could flag an audit.',
      category: 'Best Practices',
      date: 'February 5, 2026',
      image: 'https://images.unsplash.com/photo-1761519609659-d46aa9747111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwcm9hZCUyMHRyaXAlMjBqb3VybmV5fGVufDF8fHx8MTc3MDc4NTYyMHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Mileage Reimbursement for Employees: A Complete Guide',
      excerpt: 'Everything you need to know about employee mileage reimbursement, including current IRS rates and employer best practices.',
      category: 'For Employees',
      date: 'February 1, 2026',
      image: 'https://images.unsplash.com/photo-1541560052-5e137f229371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdvcmtpbmclMjBsYXB0b3B8ZW58MXx8fHwxNzcwNzMxNjM1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'The Audit-Ready Mileage Log Checklist',
      excerpt: 'A step-by-step checklist to ensure your mileage log will hold up under IRS scrutiny—from daily tracking to year-end review.',
      category: 'Tax & Compliance',
      date: 'January 28, 2026',
      image: 'https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkYXNoYm9hcmQlMjBkYXJrJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MDc4NTYyMHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Best Mileage Tracking for Gig Workers and Delivery Drivers',
      excerpt: 'Maximize your deductions with smart tracking strategies designed for high-volume drivers in the gig economy.',
      category: 'For Gig Workers',
      date: 'January 24, 2026',
      image: 'https://images.unsplash.com/photo-1761519609659-d46aa9747111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwcm9hZCUyMHRyaXAlMjBqb3VybmV5fGVufDF8fHx8MTc3MDc4NTYyMHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'How to Switch from Manual to Automatic Mileage Tracking',
      excerpt: 'Make the transition from paper logs or spreadsheets to automatic tracking without losing your historical data.',
      category: 'Best Practices',
      date: 'January 20, 2026',
      image: 'https://images.unsplash.com/photo-1541560052-5e137f229371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdvcmtpbmclMjBsYXB0b3B8ZW58MXx8fHwxNzcwNzMxNjM1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[var(--brand-teal)] via-[#0a3d51] to-[var(--bg-primary)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 text-center">
          <Badge variant="lime" className="mb-6">Blog & Guides</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6">
            Mileage tracking insights
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Tips, guides, and best practices for compliant mileage tracking, tax deductions, and 
            getting the most out of Every Last Mile.
          </p>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="flex flex-col overflow-hidden cursor-pointer hover:border-[var(--brand-lime)] transition-colors">
                <div className="aspect-video overflow-hidden rounded-2xl mb-4">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <Badge variant="neutral" className="self-start mb-3">
                  {post.category}
                </Badge>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-[var(--text-secondary)] mb-4 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[var(--border-subtle)]">
                  <div className="flex items-center gap-2 text-sm text-[var(--text-tertiary)]">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <a href="#" className="text-[var(--brand-lime)] hover:text-[var(--brand-lime-2)] font-medium text-sm inline-flex items-center gap-1">
                    Read more <ArrowRight size={14} />
                  </a>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            <button className="px-4 py-2 rounded-lg bg-[var(--brand-lime)] text-[var(--text-on-lime)] font-semibold">
              1
            </button>
            <button className="px-4 py-2 rounded-lg bg-[var(--surface-card)] text-[var(--text-secondary)] hover:bg-[var(--surface-card-2)]">
              2
            </button>
            <button className="px-4 py-2 rounded-lg bg-[var(--surface-card)] text-[var(--text-secondary)] hover:bg-[var(--surface-card-2)]">
              3
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
