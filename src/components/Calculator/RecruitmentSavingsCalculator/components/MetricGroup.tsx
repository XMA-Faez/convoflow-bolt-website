import React from 'react';

interface Metric {
  label: string;
  value: string;
}

interface MetricGroupProps {
  title: string;
  metrics: Metric[];
}

export default function MetricGroup({ title, metrics }: MetricGroupProps) {
  return (
    <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-6">
      <h4 className="text-white font-medium mb-4">{title}</h4>
      <div className="grid grid-cols-2 gap-6">
        {metrics.map((metric) => (
          <div key={metric.label} className="space-y-1">
            <div className="text-xl font-bold text-[#FF4D8D]">
              {metric.value}
            </div>
            <div className="text-text-body text-sm">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}