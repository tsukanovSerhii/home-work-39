import React from 'react';
import StatefulComponent from './components/StatefulComponent';
import ClassComponent from './components/ClassComponent';

function App() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-10 font-sans">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent pb-2">
        Stateful vs Stateless
      </h1>
      
      <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center w-full">
        <div className="flex-1 min-w-[300px]">
          <StatefulComponent />
        </div>
        <div className="flex-1 min-w-[300px]">
          <ClassComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
