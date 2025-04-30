import React from 'react';
import FormButton from '../ui/FormButton';

export default function DemoButton() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <FormButton size="lg" />
    </div>
  );
}