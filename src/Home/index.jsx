import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h2> بخش مورد نظر خود را انتخاب کنید </h2>
      <div className="buttons">
        <Link to="/Marketing">
          <button type="button" className="button">
            بازاریابی
          </button>
        </Link>
        <Link to="/Operations">
          <button type="button" className="button">
            عملیاتی
          </button>
        </Link>
        <Link to="/Supports">
          <button type="button" className="button">
            پشتیبانی
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
