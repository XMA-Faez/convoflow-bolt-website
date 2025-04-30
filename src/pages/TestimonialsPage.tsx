import React from 'react';
import TestimonialsHero from '../components/Testimonials/TestimonialsHero';
import Testimonials from '../components/Testimonials/Testimonials';
import TestimonialStats from '../components/Testimonials/TestimonialStats';
import CallToAction from '../components/Sales/CallToAction';

export default function TestimonialsPage() {
  return (
    <div className="bg-background-primary min-h-screen">
      <TestimonialsHero />
      <TestimonialStats />
      <Testimonials variant="full" />
      <CallToAction />
    </div>
  );
}