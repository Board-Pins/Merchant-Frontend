import React, { useEffect } from 'react';

import goagle from '../../../assets/icons/goagle.png';

function CustomGoagleBtn({ nameBtn }) {
  

  const handleGoogleAuth = () => {
    window.location.href = 'https://api.boardpins.com/users-service/auth/google/init/';
  };

  return (
    <div
      className="bg-[#F5F5F5] justify-center items-center rounded-xl text-dark w-full py-3 text-xl flex gap-3 items-center"
      onClick={handleGoogleAuth}
      style={{ cursor: 'pointer' }}
    >
      <img src={goagle} className="w-[25px]" alt="Google" />
      {nameBtn || "Google"}
    </div>
  );
}

export default CustomGoagleBtn;