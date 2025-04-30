import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface DepartmentCardProps {
  name: string;
  icon: LucideIcon;
  roles: string[];
}

export default function DepartmentCard({ name, icon: Icon, roles }: DepartmentCardProps) {
  return (
    <div className="bg-white/5 rounded-xl p-4 border border-white/10
                    hover:bg-white/10 transition-colors">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-5 h-5 text-[#FF4D8D]" />
        <h3 className="text-white font-semibold text-sm">{name}</h3>
      </div>
      <ul className="space-y-2">
        {roles.map((role) => (
          <li key={role} className="text-text-body text-xs">
            • {role}
          </li>
        ))}
      </ul>
    </div>
  );
}