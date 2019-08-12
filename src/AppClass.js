import React from 'react';
import './App.css';
import './profile/Profile.css';

export default class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 1 };
    this.onIncrementClick = this.onIncrementClick.bind(this);
    this.onDecrementClick = this.onDecrementClick.bind(this);
  }

  onIncrementClick() {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  onDecrementClick() {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  }

  render() {
    return (
      <div className="App">
        <div className="counter">
          <button className="box with-hover" onClick={this.onIncrementClick}>
            +
          </button>
          <span>{this.state.counter}</span>
          <button className="box with-hover" onClick={this.onDecrementClick}>
            -
          </button>
        </div>
      </div>
    );
  }
}
