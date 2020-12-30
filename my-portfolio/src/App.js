import { Switch, Route } from 'react-router-dom';
import Home from './Main';
import About from './Main/About';
import Projects from './Main/Projects';
import Contact from './Main/Contact';
import './App.css';

const App = () => {
  return (
    <Switch>
      <Route exact path='/about' component={About} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/' component={Home} />
    </Switch>
  );
};

export default App;
