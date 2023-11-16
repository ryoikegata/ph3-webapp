import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, DoughnutController, ArcElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register( DoughnutController, ArcElement, CategoryScale, LinearScale, Tooltip, Legend );

function LanguageChart({MonthData}) {

  const [languageData, setLanguageData] = useState(null);


  useEffect (() => {
    const newLanguageData = {}

    MonthData.forEach(data => {
      const languages = data['languages'];
      const language = languages['language'];
      const hours = data['hours'];


      if (newLanguageData.hasOwnProperty(language)) {
        newLanguageData[language] += hours;
      } else {
        newLanguageData[language] = hours;
      }
    });
    setLanguageData(newLanguageData);

  },[MonthData]);


  const data = {
    labels: languageData ? Object.keys(languageData) : [],
    datasets: [
      {
        data: languageData ? Object.values(languageData) : [],
        backgroundColor: ['blue', 'green', 'red','black','gray'],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom', // ラベルの位置を下に設定
      },
    },
  }
  return (
    <div className='bg-white w-[calc((100%-10%)/2)] my-3 py-2 lg:mt-10 rounded-xl'>
      <div className='flex justify-start p-2'>
        <p className='font-bold text-sm md:text-xl'>学習言語</p>
      </div>
      <div  className='md:w-full px-5 md:h-4/5 lg:w-4/5 mx-auto '>
      <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}

export default LanguageChart;