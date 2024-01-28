import { Study } from "@/types";
import { type } from "os";
import React, { FC, useEffect, useState  } from "react";

type Props = {
  studies: Study[];
};

export const getAllHours: FC<Props> = ({ studies }:Props ) => {
  const [allHours, setAllHours] = useState(0);

  const Studies = studies;
  useEffect(() => {
    Studies.map((study) => {
      setAllHours((prev) => prev + study.hours);
    });
  }, [studies]);
  return allHours;

}
