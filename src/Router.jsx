import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Fallback from './Fallback';
import Form2 from './pages/form2';
import Form3 from './pages/form3';

const Home = React.lazy(() => import('./pages/Home'));
const Posts = React.lazy(() => import('./pages/Posts'));

const Router = () => (
  <React.Suspense fallback={<Fallback />}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/form2" component={Form2} />
        <Route exact path="/form3" component={Form3} />
        <Route exact path="/posts" component={Posts} />
      </Switch>
    </BrowserRouter>
  </React.Suspense>
);

export default Router;
