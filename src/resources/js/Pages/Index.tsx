import React, { useEffect, useState } from 'react';
import Header from '@/Components/Header';
import BarChart from '@/Components/BarChart';
import  Hours  from "@/Components/Hours";
import Footer from '@/Components/Footer';
import ContentChart from '@/Components/ContentChart';
import LanguageChart from '@/Components/LanguageChart';
import FromModal from '@/Components/FromModal';
import Dropdown from '@/Components/Dropdown';
import { usePage } from '@inertiajs/react';

export default function Index ({ studies }) {

  const [ToggleModal, setToggleModal] = useState(false);


  //modalを表示・非表示の処理
  const toggleModal =  () => {
    setToggleModal(!ToggleModal);
    const body = document.querySelector('.body');
    body.classList.toggle('hidden');
  };



  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const [showDate, setShowDate] = useState(currentYear + '/' + currentMonth);
  const [showMonth, setShowMonth] = useState(currentMonth);
  const [showYear, setShowYear] = useState(currentYear);

  const monthClick = (action) => {
    if(action === 'next') {
      setShowMonth(showMonth + 1);
      if(showMonth === 11) {
        setShowYear(showYear + 1);
        setShowMonth(0);
      }
    } else if(action === 'previous') {
      setShowMonth(showMonth - 1);
      if (showMonth === 0) {
        setShowYear(showYear - 1);
        setShowMonth(11);
      }
    }
  }
  useEffect (() => {
    setShowDate(showYear + '/' + showMonth);
  },[showYear, showMonth]);
  console.log(showDate);
  //月々のdataを取得
  const Studies = studies;
  //Hoursコンポーネントに対してそれぞれの学習時間を渡す
  let MonthHours = 0;
  let DateHours = 0;
  let AllHours = 0;
  let MonthData = [];
  Studies.forEach(study => {
    const createdAt = new Date(study['created_at']);
    if (showYear === createdAt.getFullYear() && showMonth === createdAt.getMonth()) {
      MonthHours += study['hours'];
      MonthData.push(study);
      if(currentDate.getDate() === createdAt.getDate()) {
        DateHours += study['hours'];
      }
    }
    AllHours += study['hours'];



  });
  return (
    <>
    <div className='w-screen h-screen absolute top-0 body opacity-70 bg-gray-600 hidden'> </div>
      <div className='bg-gray-200 w-screen h-screen'>
      <Header Modal={toggleModal}></Header>
      <div className='md:flex justify-around w-full md:h-5/6'>
      <div className='md:w-1/2 lg:w-1/2'>
      <Hours AllHours={AllHours} MonthHours={MonthHours} DateHours={DateHours}></Hours>
      <BarChart MonthData={MonthData}/>
      </div>
      <div className='flex justify-around md:w-1/2'>
    <ContentChart MonthData={MonthData}></ContentChart>
    <LanguageChart MonthData={MonthData}></LanguageChart>
    </div>
    </div>
    <Footer MonthClick={monthClick} year={showYear} month={showMonth}></Footer>
    {ToggleModal && <FromModal Modal={toggleModal}></FromModal>}
      </div>
    </>
  );
}

