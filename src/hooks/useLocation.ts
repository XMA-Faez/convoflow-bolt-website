import { useLocation as useRouterLocation } from 'react-router-dom';

export function useLocation() {
  const location = useRouterLocation();
  return location.pathname;
}