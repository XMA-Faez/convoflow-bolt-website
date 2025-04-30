import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToTop } from '../utils/scroll';

export function useScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);
}