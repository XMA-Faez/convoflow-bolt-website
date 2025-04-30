import React from 'react';
import { Phone, Mail } from 'lucide-react';

const CONTACT_INFO = [
  {
    icon: Phone,
    text: '055 496 0783',
    href: 'tel:+971554960783'
  },
  {
    icon: Mail,
    text: 'ron@convoflow.in',
    href: 'mailto:ron@convoflow.in'
  }
];

export default function ContactInfo() {
  return (
    <div className="bg-white/5 rounded-xl border border-white/10 p-6">
      <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
      <div className="space-y-4">
        {CONTACT_INFO.map((item) => (
          <a
            key={item.text}
            href={item.href}
            className="flex items-center group hover:bg-white/5 p-2 rounded-lg transition-colors"
          >
            <item.icon className="w-5 h-5 text-[#FF4D8D] mr-3" />
            <span className="text-white group-hover:text-[#FF4D8D] transition-colors">{item.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
}