/* Handle the App Template used on every page */
import React from 'react';
import MainMenu from './ui/MainMenu';
import PageTemplate from './ui/PageTemplate';
import { Switch, Route } from 'react-router-dom';
import Routes from './routes/Routes';
import RenderRoutes from './routes/RenderRoutes';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PageTemplate>
        <RenderRoutes routes={Routes} />
      </PageTemplate>
    );
  }
}

export default App;
