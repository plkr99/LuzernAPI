import dayjs from "dayjs";
import React, { useState } from "react";
require("dayjs/locale/de");

export const useDate = () => {
  dayjs.locale("de");
  const [today, setDate] = React.useState(dayjs());
  const [{ data, isLoading }, setBesucherzahlenData] = useState({
    isLoading: true,
  });

  React.useEffect(() => {
    const fetchData = async () => {
      setBesucherzahlenData({ isLoading: true });
      const res = await fetch("https://516160-3.web.fhgr.ch/endpoint.php");
      const data = await res.json();
      console.log("fetchedData ==>", data);
      setBesucherzahlenData({ data, isLoading: false });
    };
    // 10min = 10 minutes * 60 seconds * 1000 milliseconds
    const timer = setInterval(() => {
      fetchData();
      setDate(dayjs());
    }, 10 * 60 * 1000);
    fetchData();
    return () => {
      clearInterval(timer);
    };
  }, []);
  const date = today.format("dddd, DD.MM.YY");

  const time = today.format("HH:mm");

  return {
    date,
    time,
    data,
    isLoading,
  };
};
