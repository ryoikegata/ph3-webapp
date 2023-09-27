import React from 'react';
import Header from '@/Components/Header';
import BarChart from '@/Components/BarChart';
import  Hours  from "@/Components/Hours";
import Footer from '@/Components/Footer';
import ContentChart from '@/Components/ContentChart';
import LanguageChart from '@/Components/LanguageChart';
import Dropdown from '@/Components/Dropdown';
import { usePage } from '@inertiajs/react';

export default function Index ({ studies, user }) {


  const Studies = studies;
  console.log(Studies);
  let MonthHours = 0;
  let DateHours = 0;
  let AllHours = 0;
  Studies.forEach(study => {
    const today = new Date();
    const createdAt = new Date(study['created_at']);
    if (today.getMonth() === createdAt.getMonth()) {
      MonthHours += study['hours'];
      if(today.getDate() === createdAt.getDate()) {
        DateHours += study['hours'];
      }
    }
    AllHours += study['hours'];
  });



  const User = user;
  return (
    <div>
                                   <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
      <div className='bg-gray-200 w-screen h-screen'>
      <Header></Header>
      <div className='md:flex justify-around w-full'>
        <div>
      <Hours AllHours={AllHours} MonthHours={MonthHours} DateHours={DateHours}></Hours>
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

