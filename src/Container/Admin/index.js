import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import adminRoutes from '../../routes/adminRoutes';

function Main() {
  return (
    <Router>
      <Switch>
        {
          adminRoutes.map((prop, key) => {
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