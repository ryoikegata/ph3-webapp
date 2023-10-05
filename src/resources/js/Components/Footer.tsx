import React from "react";

export default function Footer ({ MonthClick, year, month }) {
  return (
    <div className="flex justify-center gap-5 text-center items-center sm:mt-6">
      <div>
        <button className="text-blue-500 font-bold text-xl" onClick={() => MonthClick('previous')}>＜</button>
      </div>
      <div>
        <p className="font-bold">{year}年 {month + 1}月</p>
      </div>
      <div>
        <button className="text-blue-500 font-bold text-xl" onClick={() => MonthClick('next')}>＞</button>
      </div>
    </div>
  )
}