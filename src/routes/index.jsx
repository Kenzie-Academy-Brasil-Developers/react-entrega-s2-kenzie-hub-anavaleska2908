import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Signup } from '../pages/Signup';
import { Login } from '../pages/Login';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route>
        <Signup />
      </Route>
    </Switch>
  )
}