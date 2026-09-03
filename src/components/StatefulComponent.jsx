import React, { useState } from 'react';
import StatelessComponent from './StatelessComponent';

const StatefulComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <div className="h-full flex flex-col bg-slate-800/80 backdrop-blur-md border border-slate-700/50 hover:border-sky-400/80 rounded-2xl p-6 shadow-xl hover:shadow-sky-400/20 hover:-translate-y-1 transition-all duration-300">
      <h2 className="text-2xl font-semibold text-sky-400 mb-2">Функціональний Компонент</h2>
      <p className="text-slate-400 text-sm mb-6 flex-grow">
        Керує станом за допомогою хука <code className="bg-slate-700/50 px-1.5 py-0.5 rounded text-sky-300">useState</code>.
      </p>
      
      <div className="flex gap-4 mb-6">
        <button 
          onClick={decrement}
          className="flex-1 bg-slate-900 border border-slate-700 hover:bg-slate-700 hover:border-slate-500 text-slate-200 py-3 rounded-xl font-medium transition-all active:scale-95"
        >
          Зменшити
        </button>
        <button 
          onClick={increment}
          className="flex-1 bg-slate-900 border border-slate-700 hover:bg-slate-700 hover:border-slate-500 text-slate-200 py-3 rounded-xl font-medium transition-all active:scale-95"
        >
          Збільшити
        </button>
      </div>

      <StatelessComponent title="Stateless відображення (Функціональне)" count={count} />
    </div>
  );
};

export default StatefulComponent;
