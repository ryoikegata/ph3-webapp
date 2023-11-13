import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register( BarElement, CategoryScale, LinearScale, Tooltip, Legend );






function BarChart({ MonthData }) {
  // 今月の月をグラフのラベルに出力
  function getCorrectMonth(year, month) {
    // 月は0から11の数値で表されるため、monthに1を加える
    const date = new Date(year, month + 1, 0);
    const lastDay = date.getDate();

    // 月の日付を格納する配列を作成
    const CorrectMonth = [];
    for (let day = 1; day <= lastDay; day++) {
      CorrectMonth.push(day % 2 === 0 ? day : ''); // 偶数日の場合は日付を追加、奇数日の場合は空文字列を追加
    }

    return CorrectMonth;
  }

  // 現在の年と月を取得
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  // 現在の年と月に対する日付の配列を取得
  const labels = getCorrectMonth(currentYear, currentMonth);


  const dataHours = Array(labels.length).fill(null);

  MonthData.forEach(data => {
    const createdAt = new Date(data.created_at);
    const day = createdAt.getDate();
    const hours = data.hours;
    if (!isNaN(day) && day >= 1 && day <= labels.length) {
          // 日にちが正しい範囲にある場合
    if (dataHours[day - 1] === null) {
      // 日にちの学習時間が未設定の場合、そのままセット
      dataHours[day - 1] = hours;
    } else {
      // 日にちの学習時間がすでに設定されている場合、足してセット
      dataHours[day - 1] += hours;
    }
    }
  })

  const data = {
    labels: labels,
    datasets: [
      {
        label:'学習時間',
        data: dataHours,
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
    <div className='bg-white w-auto p-1 sm:p-3 m-5 rounded-xl md:h-2/3'>
      {/* グラフコンポーネントの呼び出し */}
      <Bar data={data} options={options} className='w-auto' />
    </div>
  );
}


export default BarChart;



