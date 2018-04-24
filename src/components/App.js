/* Handle the App Template used on every page */
import React from 'react';
import Routes from '../routes';
import Header from './common/Header';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      circles : [1, 2 , 3],
      faces: ['a', 'b', 'c']
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Routes {...this.state} />
      </div>
    );
  }
}

export default App;
