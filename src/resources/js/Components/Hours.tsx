import React from "react";

export default function Hours ({AllHours, MonthHours, DateHours}) {
  return (
    <div className="flex justify-around my-5 md:h-1/4 items-center">
      <div className="bg-white py-1 px-5 md:py-3 text-center rounded-xl w-[calc((100%-20%)/3)] lg:w-[calc((100%-25%)/3)]">
        <p className="text-blue-500 font-bold text-xl">Today</p>
        <p className="text-2xl sm:text-3xl font-bold">{DateHours}</p>
        <p className="text-gray-500 text-lg">hour</p>
      </div>
      <div className="bg-white py-1 px-5 md:py-3 text-center rounded-xl w-[calc((100%-20%)/3)] lg:w-[calc((100%-25%)/3)]">
        <p className="text-blue-500 font-bold text-xl">Month</p>
        <p className="text-2xl sm:text-3xl font-bold">{MonthHours}</p>
        <p className="text-gray-500 text-lg">hour</p>
      </div>
      <div className="bg-white py-1 px-5 md:py-3 text-center rounded-xl w-[calc((100%-20%)/3)] lg:w-[calc((100%-25%)/3)]">
        <p className="text-blue-500 font-bold text-xl">Total</p>
        <p className="text-2xl sm:text-3xl font-bold">{AllHours}</p>
        <p className="text-gray-500 text-lg">hour</p>
      </div>
    </div>
  )
}