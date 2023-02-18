import React from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';

import { TodosContainer } from 'containers/todos';
import { CreateContainer } from 'containers/todos/create';
import { NotFound } from 'containers/Handlers/NotFound'

interface IRoutesProps {}

export const Routes: React.FC<IRoutesProps> = () => (
  <Switch>
    <Redirect exact={true}  from="/" to="/list-tasks"  />
    <Route path="/list-tasks" exact={true} component={TodosContainer} />
    <Route path="/create" exact={true} component={CreateContainer} />
    <Route component={NotFound}></Route>
  </Switch>
);
