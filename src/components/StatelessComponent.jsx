import React from 'react';

const StatelessComponent = ({ title, count }) => {
  return (
    <div className="bg-slate-900/50 rounded-xl p-6 border border-dashed border-slate-600 flex flex-col items-center justify-center">
      <h3 className="text-sm font-medium text-slate-400 mb-3 text-center">{title}</h3>
      <div className="text-5xl font-black text-white drop-shadow-md tracking-tighter">
        {count}
      </div>
    </div>
  );
};

export default StatelessComponent;
