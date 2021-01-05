import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, HashRouter,
} from 'react-router-dom';
import Roulette from './views/Roulette';
import Questions from './views/Questions';
import Winner from './views/Winner';
import Loser from './views/Loser';
import './sass/index.scss';




const App = () => (
  <Router>
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Roulette} />
        <Route path="/questions" exact component={Questions} />
        <Route path="/winner" exact component={Winner} />
        <Route path="/loser" exact component={Loser} />
      </Switch>
    </HashRouter>
  </Router>
);

export default App;
