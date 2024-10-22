import React, { useState } from 'react';
import data from '../../../public/data.json'

const fatchData = data.Marketing

const Marketing = () => {
    const [data, setData] = useState(fatchData);

    return (
      <div>
        <h1> لیست کارمندان بخش بازاریابی </h1>
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

export default Marketing;