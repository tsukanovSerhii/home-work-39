import React, { Component } from 'react';
import StatelessComponent from './StatelessComponent';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  decrement() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }

  render() {
    return (
      <div className="h-full flex flex-col bg-slate-800/80 backdrop-blur-md border border-slate-700/50 hover:border-emerald-400/80 rounded-2xl p-6 shadow-xl hover:shadow-emerald-400/20 hover:-translate-y-1 transition-all duration-300">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-2">Класовий Компонент</h2>
        <p className="text-slate-400 text-sm mb-6 flex-grow">
          Керує станом за допомогою <code className="bg-slate-700/50 px-1.5 py-0.5 rounded text-emerald-300">this.state</code> та <code className="bg-slate-700/50 px-1.5 py-0.5 rounded text-emerald-300">this.setState</code>.
        </p>
        
        <div className="flex gap-4 mb-6">
          <button 
            onClick={this.decrement}
            className="flex-1 bg-slate-900 border border-slate-700 hover:bg-slate-700 hover:border-slate-500 text-slate-200 py-3 rounded-xl font-medium transition-all active:scale-95"
          >
            Зменшити
          </button>
          <button 
            onClick={this.increment}
            className="flex-1 bg-slate-900 border border-slate-700 hover:bg-slate-700 hover:border-slate-500 text-slate-200 py-3 rounded-xl font-medium transition-all active:scale-95"
          >
            Збільшити
          </button>
        </div>

        <StatelessComponent title="Stateless відображення (Класове)" count={this.state.count} />
      </div>
    );
  }
}

export default ClassComponent;
