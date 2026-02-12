'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const services = [
  { href: '/services/sam-pro-implementation', label: 'SAM Pro Implementation', description: 'Full ServiceNow SAM deployment' },
  { href: '/services/sam-rescue', label: 'SAM Rescue & Optimization', description: 'Fix failed implementations' },
  { href: '/services/flexera-migration', label: 'Flexera Migration', description: '90-day migration playbook' },
  { href: '/services/ai-software-asset-management', label: 'AI Software Asset Management', description: 'Shadow AI discovery & governance' },
  { href: '/services/audit-defense', label: 'Audit Defense', description: 'License compliance & readiness' },
  { href: '/services/ai-license-optimization', label: 'AI License Optimization', description: 'Right-size AI software spend' },
];

const industries = [
  { href: '/industries/banking', label: 'Banking & Finance' },
  { href: '/industries/healthcare', label: 'Healthcare' },
  { href: '/industries/defense', label: 'Defense' },
  { href: '/industries/energy', label: 'Energy' },
  { href: '/industries/technology', label: 'Technology' },
  { href: '/industries/automotive', label: 'Automotive' },
  { href: '/industries/insurance', label: 'Insurance' },
  { href: '/industries/consumer-goods', label: 'Consumer Goods' },
  { href: '/industries/retail', label: 'Retail' },
  { href: '/industries/life-sciences', label: 'Life Sciences' },
  { href: '/industries/telco', label: 'Telecommunications' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  
  const servicesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
      if (industriesRef.current && !industriesRef.current.contains(event.target as Node)) {
        setIndustriesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/images/logo.svg" alt="Cadena" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Services Dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => { setServicesOpen(!servicesOpen); setIndustriesOpen(false); }}
                className="flex items-center px-4 py-2 text-gray-600 hover:text-[#004040] font-medium transition-colors"
              >
                Services
                <svg className={`w-4 h-4 ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-4 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-4 pb-3 mb-2 border-b border-gray-100">
                    <Link href="/services" className="text-sm font-semibold text-[#004040] hover:text-[#006666]" onClick={() => setServicesOpen(false)}>
                      View All Services →
                    </Link>
                  </div>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      <div className="font-medium text-[#004040]">{service.label}</div>
                      <div className="text-sm text-gray-500">{service.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div ref={industriesRef} className="relative">
              <button
                onClick={() => { setIndustriesOpen(!industriesOpen); setServicesOpen(false); }}
                className="flex items-center px-4 py-2 text-gray-600 hover:text-[#004040] font-medium transition-colors"
              >
                Industries
                <svg className={`w-4 h-4 ml-1 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {industriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-4 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="grid grid-cols-1 gap-1">
                    {industries.map((industry) => (
                      <Link
                        key={industry.href}
                        href={industry.href}
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-[#004040] transition-colors"
                        onClick={() => setIndustriesOpen(false)}
                      >
                        {industry.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="px-4 py-2 text-gray-600 hover:text-[#004040] font-medium transition-colors">
              About
            </Link>
            <Link href="/resources/guides" className="px-4 py-2 text-gray-600 hover:text-[#004040] font-medium transition-colors">
              Resources
            </Link>
            <Link
              href="/#contact"
              className="ml-4 bg-[#004040] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#006666] transition-colors"
            >
              Talk to an Expert
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-[#004040]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-2">
              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full py-3 text-gray-600 font-medium"
                >
                  Services
                  <svg className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 pb-2 space-y-2">
                    <Link href="/services" className="block py-2 text-sm font-semibold text-[#004040]" onClick={() => setMobileMenuOpen(false)}>
                      View All Services
                    </Link>
                    {services.map((service) => (
                      <Link key={service.href} href={service.href} className="block py-2 text-gray-600 text-sm" onClick={() => setMobileMenuOpen(false)}>
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Industries Accordion */}
              <div>
                <button
                  onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                  className="flex items-center justify-between w-full py-3 text-gray-600 font-medium"
                >
                  Industries
                  <svg className={`w-4 h-4 transition-transform ${mobileIndustriesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileIndustriesOpen && (
                  <div className="pl-4 pb-2 space-y-2">
                    {industries.map((industry) => (
                      <Link key={industry.href} href={industry.href} className="block py-2 text-gray-600 text-sm" onClick={() => setMobileMenuOpen(false)}>
                        {industry.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/about" className="py-3 text-gray-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/resources/guides" className="py-3 text-gray-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                Resources
              </Link>
              <Link
                href="/#contact"
                className="mt-4 bg-[#004040] text-white px-6 py-3 rounded-lg font-semibold text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
