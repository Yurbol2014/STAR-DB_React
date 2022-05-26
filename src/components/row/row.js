import React from 'react';

import './row.css';

const Row = ({ left, right }) => {
  return (
    <div className="row  ">
      <div className="col-md-6 items">
        {left}
      </div>
      <div className="col-md-6   ">
        {right}
      </div>
    </div>
  );
};

export default Row;