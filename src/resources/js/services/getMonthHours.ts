import React, { FC, useEffect, useState } from "react";

type Props = {
  studies: Study[];
  showYear: number;
  showMonth: number;
};

export const getMonthHours: FC<Props> = ({studies, showYear, showMonth}) => {

  const [monthHours, setMonthHours] = useState(0);
  useEffect (() => {
    //月々のdataを取得
  const Studies = studies;
  //Hoursコンポーネントに対してそれぞれの学習時間を渡す
  Studies.map(study => {
  const createdAt = new Date(study['created_at']);
  const hour :number = study['hours'];
  if (showYear === createdAt.getFullYear() && showMonth === createdAt.getMonth()) {
    setMonthHours((prev) => prev + hour);
  }
  });
  },[]);

  return monthHours;
}