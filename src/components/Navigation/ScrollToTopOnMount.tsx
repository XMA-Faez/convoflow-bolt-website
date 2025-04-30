import { useEffect } from 'react';
import { scrollToTop } from '../../utils/scroll';

export default function ScrollToTopOnMount() {
  useEffect(() => {
    scrollToTop({ behavior: 'instant' });
  }, []);

  return null;
}