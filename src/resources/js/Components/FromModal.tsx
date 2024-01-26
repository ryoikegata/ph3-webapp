import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import useSWR from "swr";
import { usePage } from "@inertiajs/inertia-react";


const FromModal = ({Modal}) => {
  const { contents } = usePage().props;
  console.log(contents);
  return (
    <div className=" flex justify-center sm:items-center">
    <div className="absolute w-full h-5/6 bg-white sm:bottom-10 bottom-0 rounded-t-3xl sm:w-5/6 sm:rounded-3xl ">
    <div className="absolute right-5 top-5">
    <button><FontAwesomeIcon icon={faCircleXmark} onClick={Modal} className="w-8 h-8" /></button>
    </div>
    <div>
      <div>
        <p>学習日</p>
        <input type="date"></input>
      </div>
      <div>
        <p>学習コンテンツ</p>
        <div className="">
          {contents?.map((content :any) => (
        <label htmlFor="" className="" key={content.id}>
          <input type="checkbox" className="hidden" />
          <span className="bg-gray-100 p-1 rounded-3xl">
          <FontAwesomeIcon icon={faCircleCheck} className="text-gray-300 w-6 h-6" />
          <span className="text-sm">{content.content}</span>
          </span>
        </label>
          ))}
        </div>
      </div>
      <div>
        <p>学習言語</p>
      </div>
    </div>
    <div></div>
    </div>
    </div>
  );
};
export default FromModal;
