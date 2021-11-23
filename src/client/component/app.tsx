import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Demo } from "../component/demo/demo";
import { Demo2 } from "../component/demo/demo2";

export function App(props: any) {
  useEffect(() => {
    
  }, []);

    return (
      <Switch>
          <Route exact path='/' component={Demo} />
          <Route path='/hola' component={Demo2} />
      </Switch>
    );
}