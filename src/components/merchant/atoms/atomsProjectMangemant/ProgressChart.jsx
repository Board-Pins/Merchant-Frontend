import React from 'react';

function ProgressChart({ progressPrectage, widthcircle, heightcircle, textSize, title, colorCircle, ShadowCustom ,radiusCircle ,strokeWidthCircle }) {
  const progress = progressPrectage;
  const radius = radiusCircle;
  const strokeWidth = strokeWidthCircle; // Increased strokeWidth for thickness
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className={`bg-white relative w-[${widthcircle}px] h-[${heightcircle}px] p-2 mt-4 rounded-full ${ShadowCustom ? 'shadow-custom' : ""} flex justify-center items-center`}>
      <svg className='w-full h-full' viewBox='0 0 150 150'>
        <circle
          cx='75'
          cy='75'
          r={radius}
          stroke='lightgray'
          strokeWidth={strokeWidth}
          fill='none'
        />
        <circle
          cx='75'
          cy='75'
          r={radius}
          stroke={colorCircle}
          strokeWidth={strokeWidth}
          fill='none'
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap='round'
          transform='rotate(-90 75 75)'
        />
      </svg>
      <div className='absolute text-center'>
        <h3 className={`font-semibold text-[#6161FF]`} style={{ fontSize: textSize }}>{progress}%</h3>
        <p className='text-[10px] py-1 font-bold text-[#777777]'>{title}</p>
      </div>
    </div>
  );
}

export default ProgressChart;
