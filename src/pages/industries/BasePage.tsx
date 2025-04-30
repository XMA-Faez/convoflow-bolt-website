import React from 'react';
import ScrollToTopOnMount from '../../components/Navigation/ScrollToTopOnMount';

interface BasePageProps {
  children: React.ReactNode;
}

export default function BasePage({ children }: BasePageProps) {
  return (
    <div className="bg-background-primary min-h-screen">
      <ScrollToTopOnMount />
      {children}
    </div>
  );
}