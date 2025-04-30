import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LucideIcon, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import { scrollToTop } from '../../utils/scroll';

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  path: string;
}

export default function IndustryCard({ icon: Icon, title, description, benefits, path }: IndustryCardProps) {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToTop({ behavior: 'smooth' });
    navigate(path);
  };

  return (
    <div className={cn(
      "group p-8 bg-white/5 rounded-xl border border-white/10",
      "transition-all duration-300 hover:scale-[1.02] hover:bg-white/10",
      "hover:shadow-[0_0_30px_rgba(255,77,141,0.2)]"
    )}>
      <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-[#FF4D8D] to-[#E7447F] p-3 
                    shadow-[0_0_15px_rgba(255,77,141,0.3)] group-hover:shadow-[0_0_25px_rgba(255,77,141,0.4)]
                    transition-shadow duration-300">
        <Icon className="h-full w-full text-white" />
      </div>
      
      <h3 className="mt-6 mb-3 text-xl font-bold text-white">
        {title}
      </h3>
      
      <p className="text-text-body text-sm leading-relaxed mb-6">
        {description}
      </p>
      
      <ul className="space-y-3 mb-8">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex items-start text-sm text-text-body">
            <span className="h-5 w-5 rounded-full bg-[#FF4D8D]/20 flex-shrink-0 flex items-center justify-center mr-3">
              <span className="text-[#FF4D8D]">✓</span>
            </span>
            {benefit}
          </li>
        ))}
      </ul>
      
      <a 
        href={path}
        onClick={handleClick}
        className="inline-flex items-center text-[#FF4D8D] text-sm font-semibold group-hover:text-white transition-colors"
        role="button"
        aria-label={`Learn more about ${title} solutions`}
      >
        Learn More
        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
}