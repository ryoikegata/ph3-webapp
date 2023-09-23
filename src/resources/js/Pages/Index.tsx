import React from 'react';
import Header from '@/Components/Header';
import { usePage } from '@inertiajs/react';

export default function Index ({ studies }) {
  console.log('studies:', studies);
  return (
    <div>
      <div className='bg-gray-300 w-full h-screen'>
      <Header></Header>
      </div>
    </div>
  );
}

