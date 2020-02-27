import React from 'react';
import CoinTable from './components/CoinTable/CoinTable';
import { Profile } from './components/Profile/Profile';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

let App = () => {

  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path = '/' exact component = {CoinTable} />
        <Route path = '/profile' component = {Profile} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
