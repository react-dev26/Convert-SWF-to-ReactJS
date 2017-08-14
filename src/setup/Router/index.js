import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import NotReadyPage from 'containers/NotReadyPage';


function Router() {
  return (
    <BrowserRouter>
     
        <Switch>
          <Redirect exact from="/" to="/bikes" />
          <Route path="/bikes" component={HomePage} />
          <Route path="*" component={NotReadyPage}/>
        </Switch>
      
    </BrowserRouter>
  );
}

export default Router;
