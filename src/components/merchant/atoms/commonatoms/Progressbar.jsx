import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ progress, bgColor ,height}) => {
  return (
    <div className="relative w-full sm:w-full">
     
      <div className={`overflow-hidden h-2 text-xs flex rounded bg-gray-200`}>
        <div
          style={{ width: `${progress}%`, backgroundColor: bgColor }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
        />
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default ProgressBar;