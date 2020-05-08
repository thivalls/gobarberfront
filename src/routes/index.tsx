import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Signin from '../pages/Signin';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signin" component={Signin} />
    </Switch>
  );
};

export default Routes;
