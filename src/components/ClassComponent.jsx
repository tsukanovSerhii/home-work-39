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
      <div className="card class">
        <h2 className="card-title">Класовий Компонент</h2>
        <p className="card-description">
          Керує станом за допомогою <code>this.state</code> та <code>this.setState</code>.
        </p>
        
        <div className="buttons-group">
          <button onClick={this.decrement}>Зменшити</button>
          <button onClick={this.increment}>Збільшити</button>
        </div>

        <StatelessComponent title="Stateless відображення (Класове)" count={this.state.count} />
      </div>
    );
  }
}

export default ClassComponent;
