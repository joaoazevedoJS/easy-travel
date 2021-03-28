import { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Cities } from '../pages/Cities';
import { Home } from '../pages/Home';
import { Hotels } from '../pages/Hotels';

const Routes: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cities" exact component={Cities} />
      <Route path="/hotels" exact component={Hotels} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
