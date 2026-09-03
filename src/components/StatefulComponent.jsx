import React, { useState } from 'react';
import StatelessComponent from './StatelessComponent';

const StatefulComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <div className="card functional">
      <h2 className="card-title">Функціональний Компонент</h2>
      <p className="card-description">
        Керує станом за допомогою хука <code>useState</code>.
      </p>
      
      <div className="buttons-group">
        <button onClick={decrement}>Зменшити</button>
        <button onClick={increment}>Збільшити</button>
      </div>

      <StatelessComponent title="Stateless відображення (Функціональне)" count={count} />
    </div>
  );
};

export default StatefulComponent;
