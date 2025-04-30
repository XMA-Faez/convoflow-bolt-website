import { useCallback } from 'react';
import { useLocation } from '../../hooks/useLocation';

export function useNavigation() {
  const currentPath = useLocation();

  const handleLogoClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (currentPath === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [currentPath]);

  const isActive = useCallback((path: string) => currentPath === path, [currentPath]);

  return {
    currentPath,
    handleLogoClick,
    isActive
  };
}