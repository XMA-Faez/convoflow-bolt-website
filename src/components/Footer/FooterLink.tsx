import React from 'react';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <a href={href} className="hover:text-white transition-colors">
      {children}
    </a>
  );
}