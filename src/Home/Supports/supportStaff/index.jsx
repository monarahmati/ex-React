import React, { useState } from "react";
import data from "../../../../public/data.json";
import { Link } from "react-router-dom";

const fetchData = data.support_staff;

const supportStaff = () => {
  const [data, setData] = useState(fetchData);

  return (
    <div>
      <h1> لیست کارمندان بخش پشتیبانی مشتری</h1>
      {data?.map((item) => (
        <div key={item.id}>
          <h2>
            {item.firstName} {item.lastName} __ {item.title}
          </h2>
        </div>
      ))}

<div className="buttons">
        <Link to="/remote">
          <button type="button" className="button">
            بخش دورکار
          </button>
        </Link>
      </div>
    </div>
  );
};

export default supportStaff;
