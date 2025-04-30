import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../utils/cn';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
}

export default function NavLink({ href, children, className = '', isActive = false }: NavLinkProps) {
  const location = useLocation();
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <Link
      to={href}
      onClick={handleClick}
      className={cn(
        "px-3 py-2 text-sm font-light transition-colors text-white",
        href === '/' ? "hover:text-[#FF4D8D]" : "hover:text-[#FF4D8D]",
        isActive && href !== '/' && "text-[#FF4D8D]",
        className
      )}
    >
      {children}
    </Link>
  );
}