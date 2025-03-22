import React from "react";

export default function BoxDesign() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative w-[350px] h-[250px] bg-gray-300 border-2 border-black">
        
        {/* Small red boxes with black border - Positioned above using z-index */}
        <div className="absolute w-[100px] h-[80px] bg-red-500 border-2 border-black top-4 left-8 z-20"></div>
        <div className="absolute w-[100px] h-[80px] bg-red-500 border-2 border-black bottom-7 left-8 z-20"></div>

        {/* Center red box with black border - Lower z-index */}
        <div className="absolute w-[180px] h-[140px] bg-red-500 border-2 border-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

        {/* Small black boxes with black border */}
        <div className="absolute w-[70px] h-[60px] bg-black top-4 right-9 z-20"></div>
        <div className="absolute w-[70px] h-[60px] bg-black bottom-8 right-12 z-20"></div>

      </div>
    </div>
  );
}
