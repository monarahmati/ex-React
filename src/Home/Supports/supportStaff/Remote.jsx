import React, { useState } from "react";
import data from "../../../../public/data.json";

const fetchData = data.remote;
const Remote = () => {
  const [data, setData] = useState(fetchData);

  return (
    <div>
      <h1> لیست کارمندان بخش پشتیبانی مشتری دورکار</h1>
      {data?.map((item) => (
        <div key={item.id}>
          <h2>
            {item.firstName} {item.lastName} __ {item.title}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Remote;
