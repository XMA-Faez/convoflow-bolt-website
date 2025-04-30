import type { ConnectionPoint } from './types';

export function calculatePosition(index: number, total: number, radius: number): ConnectionPoint {
  const angle = (index * 360) / total;
  const radian = (angle * Math.PI) / 180;
  const x = Math.cos(radian) * radius + 50;
  const y = Math.sin(radian) * radius + 50;

  return { x, y, angle };
}

export function getGradientId(name: string): string {
  return `gradient-${name.toLowerCase().replace(/\s+/g, '-')}`;
}