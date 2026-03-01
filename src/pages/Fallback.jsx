import React from 'react'

const Fallback = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center 
                    bg-gradient-to-b from-black via-[#7f1d1d] to-black 
                    text-white text-2xl z-50">
    Loading....
    </div>
  );
};

export default Fallback
