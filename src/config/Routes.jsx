import React from 'react';

import { Route, Switch } from 'react-router-dom';
import hom from '../pages/hom';
import Home from '../pages/Home';

import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';

const Routes = () => {
    return (
        <Switch>
          
            
    
            <Route path="/">
            <Home />
          </Route> 
          <Route path="/login">
            <hom/>
          </Route>
            
        </Switch>
    );
}

export default Routes;
