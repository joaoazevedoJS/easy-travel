import { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Calendar } from '../pages/Calendar';

import { Cities } from '../pages/Cities';
import { Home } from '../pages/Home';
import { Hotels } from '../pages/Hotels';
import { Total } from '../pages/Total';

const Routes: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cities" exact component={Cities} />
      <Route path="/calendar" exact component={Calendar} />
      <Route path="/hotels" exact component={Hotels} />
      <Route path="/totals" exact component={Total} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
