import React from "react";

export default function Header () {
  return (
    <div className="flex justify-center bg-white items-center h-16 px-5 sm:justify-between">
      <div className="flex justify-around w-full sm:w-auto gap-2 ">
        <img src="../../assets/img/logo.svg" alt="" />
        <p className="text-lg font-bold text-blue-300">1st week</p>
      </div>
        <div className="fixed bottom-4 sm:static">
        <button className="bg-gradient-to-l from-blue-400 to-blue-600 px-28 sm:px-16 py-2 rounded-3xl text-white">記録・投稿</button>
      </div>
    </div>
  );
}