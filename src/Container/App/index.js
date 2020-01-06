import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import appRoutes from '../../routes/appRoutes';

function Main() {
  return (
      <Router>
        <Switch>
          {
            appRoutes.map((prop, key) => {
              return (
                <Route path={prop.path} component={prop.component} key={key} />
              )
            })
          }
        </Switch>
      </Router>
  );
}

export default Main;