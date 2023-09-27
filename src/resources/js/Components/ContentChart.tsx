import React from 'react';
import { Chart as ChartJS, DoughnutController, ArcElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register( DoughnutController, ArcElement, CategoryScale, LinearScale, Tooltip, Legend );

function ContentChart() {
  const data = {
    labels: ['POSSE課題', 'ドットインストール', 'N予備校'],
    datasets: [
      {
        data: [40, 20, 40],
        backgroundColor: ['blue', 'green', 'red'],
        
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom', // ラベルの位置を下に設定
        labels: {
          fontSize:5,
        }
      },
    },
  }
  return (
    <div className='bg-white w-[calc((100%-10%)/2)] my-3 py-2 h-full rounded-xl'>
      <div className='flex justify-start p-2'>
        <p className='font-bold text-sm'>学習コンテンツ</p>
      </div>
      <div className=''>
      <Doughnut data={data} options={options}  />
      </div>
    </div>
  );
}

export default ContentChart;
