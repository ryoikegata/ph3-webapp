import React from 'react';
import Header from '@/Components/Header';
import BarChart from '@/Components/BarChart';
import  Hours  from "@/Components/Hours";
import Footer from '@/Components/Footer';
import ContentChart from '@/Components/ContentChart';
import LanguageChart from '@/Components/LanguageChart';
import { usePage } from '@inertiajs/react';

export default function Index ({ studies }) {
  console.log('studies:', studies);

  const chartData = [5,6,1,8,5,9,3,2,10,5,7,5];
  return (
    <div>
      <div className='bg-gray-200 w-screen h-screen'>
      <Header></Header>
      <div className='md:flex justify-around w-full'>
        <div>
      <Hours></Hours>
      <BarChart />
      </div>
      <div className='flex justify-around'>
    <ContentChart></ContentChart>
      <LanguageChart></LanguageChart>
    </div>
    </div>
    <Footer></Footer>
      </div>
    </div>
  );
}

