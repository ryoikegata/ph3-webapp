import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, DoughnutController, ArcElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register( DoughnutController, ArcElement, CategoryScale, LinearScale, Tooltip, Legend );

function ContentChart({MonthData}) {

  const [contentsData, setContentData] = useState(null);



    useEffect(() => {
      const newContentData = {};
  
      MonthData.forEach(data => {
        const contents = data['contents'];
        const content = contents['content'];
        const hours = data['hours'];

  
        if (newContentData.hasOwnProperty(content)) {
          // 既にキーが存在する場合、時間を加算
          newContentData[content] += hours;
        } else {
          // 新しいキーを作成
          newContentData[content] = hours;
        }
      });
      setContentData(newContentData);
    }, [MonthData]);

  
  const data = {
    labels: contentsData ? Object.keys(contentsData) : [],
    datasets: [
      {
        data: contentsData ? Object.values(contentsData) : [],
        backgroundColor: ['blue', 'aqua','gray'],
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
        },
      },
      datalabels: {
        font: {
          weight: 'bold', // ラベルのフォントの太さ
        },
      }
    },
  }
  return (
    <div className='bg-white w-[calc((100%-10%)/2)] my-3 py-2 lg:mt-10 rounded-xl'>
      <div className='flex justify-start p-2'>
        <p className='font-bold text-sm md:text-xl'>学習コンテンツ</p>
      </div>
      <div className='md:w-full px-5 md:h-4/5 lg:w-4/5 mx-auto '>
      <Doughnut data={data} options={options}  />
      </div>
    </div>
  );
}

export default ContentChart;
