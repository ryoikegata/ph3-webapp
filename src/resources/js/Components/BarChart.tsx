import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register( BarElement, CategoryScale, LinearScale, Tooltip, Legend );


function BarChart() {
  const data = {
    labels: ['','2','','4','','6','','8','','10','','12','','14','','16','','18','','20','','22','','24','','26','','28','','30',''],
    datasets: [
      {
        label:'学習時間',
        data: [3,4,7,2,7,4,8,4,5,8,5,1,],
        backgroundColor: 'blue',
        barThickness: 4,
        barPercentage: 1,
      }
    ]
  }

  const options = {
    maintainAspectRatio: false,
    scales : {
      x: {
        ticks: {
          font: {
            size: 8, // フォントサイズを変更
          },
          maxRotation: 0, // ラベルの回転を無効化
          minRotation: 0, // ラベルの回転を無効化
          autoSkip: true, // ラベルの自動スキップを有効化
        },
        grid: {
          display: false
        },
        categoryPercentage: 0.1,
      },
      y: {
        grid: {
          display: false
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false, // ラベルを非表示にする
      },
    },
    responsive: true,
    }
  return (
    <div className='bg-white w-auto p-1 sm:p-3 m-5 rounded-xl'>
      {/* グラフコンポーネントの呼び出し */}
      <Bar data={data} options={options} className='w-auto' />
    </div>
  );
}

export default BarChart;



