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
import { Study } from '@/types/index';
import { all } from 'axios';
import { getAllHours  as getTotalHours }  from '@/services/getAllHours';
import { getMonthHours as getMonthHours } from '@/services/getMonthHours';

export default function Index ({ studies } :{studies: Study[]}) {

  const [ToggleModal, setToggleModal] = useState(false);


  //modalを表示・非表示の処理
  const toggleModal =  () => {
    setToggleModal(!ToggleModal);
    const body :any = document.querySelector('.body');
    body.classList.toggle('hidden');
  };



  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const [showDate, setShowDate] = useState(currentYear + '/' + currentMonth);
  const [showMonth, setShowMonth] = useState(currentMonth);
  const [showYear, setShowYear] = useState(currentYear);
  const [dateHours, setDateHours] = useState<number>(0);
  const [MonthData, setMonthData] = useState([]);
  const totalHours = getTotalHours({ studies });
  const monthHours = getMonthHours({ studies, showYear, showMonth });

  const monthClick = (action :string) => {
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
  },[showMonth, showYear]);


  return (
    <>
    <div className='w-screen h-screen absolute top-0 body opacity-70 bg-gray-600 hidden'> </div>
      <div className='bg-gray-200 w-screen h-screen'>
      <Header Modal={toggleModal}></Header>
      <div className='md:flex justify-around w-full md:h-5/6'>
      <div className='md:w-1/2 lg:w-1/2'>
      <Hours AllHours={totalHours} MonthHours={monthHours} DateHours={dateHours}></Hours>
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

