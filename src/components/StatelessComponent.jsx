import React from 'react';

const StatelessComponent = ({ title, count }) => {
  return (
    <div className="stateless-box">
      <h3 className="stateless-title">{title}</h3>
      <div className="counter-value">{count}</div>
    </div>
  );
};

export default StatelessComponent;
