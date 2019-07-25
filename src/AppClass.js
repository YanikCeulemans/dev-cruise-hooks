import React from 'react';

import * as myHistory from './helpers/history';
import Router from './router/Router';

export default class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: myHistory.getCurrentLocation(),
    };
    this.onHistoryChange = this.onHistoryChange.bind(this);
    this.stopListening = () => {};
  }

  componentDidMount() {
    this.stopListening = myHistory.listen(this.onHistoryChange);
  }

  componentWillUnmount() {
    this.stopListening();
  }

  onHistoryChange(url) {
    this.setState({ url });
  }

  render() {
    const { url } = this.state;
    return (
      <div className="App">
        <Router url={url} />
      </div>
    );
  }
}
