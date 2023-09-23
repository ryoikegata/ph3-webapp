import React from "react";

export default function Header () {
  return (
    <div className="flex justify-between bg-white items-center h-20 px-5">
      <div>
        <p className="text-lg font-bold">2023/9</p>
      </div>
      <div>
        <button className="bg-blue-400 px-16 py-2 rounded-3xl text-white">記録</button>
      </div>
    </div>
  );
}