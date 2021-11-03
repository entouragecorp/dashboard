import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import '../styles/Main.scss';
import Home from '../pages/Home';

function Routes() {
  return (
<Router basename={process.env.PUBLIC_URL}> 
  <Switch>
    <Route path='/' exact strict component={Home} />
  </Switch>
</Router>
  );
}

export default Routes;
