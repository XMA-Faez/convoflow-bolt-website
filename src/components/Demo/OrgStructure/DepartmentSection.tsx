import React from 'react';
import DepartmentCard from './DepartmentCard';
import { SALES_DEPARTMENTS } from './constants';
import { calculatePosition } from './utils';

export default function DepartmentSection() {
  return (
    <>
      {SALES_DEPARTMENTS.map((dept, index) => {
        const { x, y } = calculatePosition(index, SALES_DEPARTMENTS.length, 180);

        return (
          <div
            key={dept.name}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300
                     hover:scale-105 hover:z-10"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              maxWidth: '200px'
            }}
          >
            <DepartmentCard {...dept} />
          </div>
        );
      })}
    </>
  );
}