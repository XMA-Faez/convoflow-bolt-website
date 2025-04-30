import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import FormButton from '../ui/FormButton';
import Logo from '../Logo/Logo';
import { useNavigation } from './useNavigation';
import { useMobileMenu } from './useMobileMenu';
import { NAV_ITEMS } from './constants';

export default function Header() {
  const { handleLogoClick, isActive } = useNavigation();
  const { isMenuOpen, toggleMenu } = useMobileMenu();

  return (
    <header className="bg-[#0B0B10] sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" onClick={handleLogoClick}>
              <Logo />
            </Link>
          </div>
          
          <DesktopNav isActive={isActive} />
          <MobileMenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>

        <MobileMenu isOpen={isMenuOpen} isActive={isActive} />
      </nav>
    </header>
  );
}

function DesktopNav({ isActive }: { isActive: (path: string) => boolean }) {
  return (
    <>
      <div className="hidden md:flex items-center justify-center flex-1">
        <div className="flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              href={item.path}
              isActive={isActive(item.path)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
      
      <div className="hidden md:flex items-center">
        <FormButton>Get Started</FormButton>
      </div>
    </>
  );
}

function MobileMenuButton({ 
  isOpen, 
  onClick 
}: { 
  isOpen: boolean; 
  onClick: () => void;
}) {
  return (
    <div className="md:hidden">
      <button
        onClick={onClick}
        className="text-white p-2"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );
}

function MobileMenu({ 
  isOpen, 
  isActive 
}: { 
  isOpen: boolean;
  isActive: (path: string) => boolean;
}) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.label}
            href={item.path}
            className="block"
            isActive={isActive(item.path)}
          >
            {item.label}
          </NavLink>
        ))}
        <FormButton className="w-full mt-4">Get Started</FormButton>
      </div>
    </div>
  );
}