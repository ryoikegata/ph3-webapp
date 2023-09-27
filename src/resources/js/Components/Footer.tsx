import React from "react";

export default function Footer () {
  return (
    <div className="flex justify-center gap-5 text-center items-center">
      <div>
        <button className="text-blue-500 font-bold text-xl">＜</button>
      </div>
      <div>
        <p className="font-bold">2023年 10月</p>
      </div>
      <div>
        <button className="text-blue-500 font-bold text-xl">＞</button>
      </div>
    </div>
  )
}