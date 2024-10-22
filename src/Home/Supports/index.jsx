import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../../../public/data.json";

const fatchData = data.Supports;

const Supports = () => {
  const [data, setData] = useState(fatchData);

  return (
    <div>
      <h1> لیست کارمندان بخش پشتیبانی </h1>
      {data?.map((item) => (
        <div key={item.id}>
          <h2>
            {item.firstName} {item.lastName} __ {item.title}
          </h2>
        </div>
      ))}

      <div className="buttons">
        <Link to="/technicalSupport">
          <button type="button" className="button">
            پشتیبانی فنی
          </button>
        </Link>
        <Link to="/supportStaff">
          <button type="button" className="button">
            پشتیبانی مشتری
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Supports;
