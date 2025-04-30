import { useState, useCallback } from 'react';

export function useMobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);

  return {
    isMenuOpen,
    toggleMenu
  };
}