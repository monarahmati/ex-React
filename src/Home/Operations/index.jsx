import React, { useState } from "react";
import Data from "../../../public/data.json";

const Operations = () => {
  const fatchData = Data.Operations;

  const [data, setData] = useState(fatchData);
  console.log(data);
  

  return (
    <div>
      <h1> لیست کارمندان بخش عملیاتی  </h1>
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

export default Operations;
