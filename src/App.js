import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Home from './Home';
import Menu from './Menu';
import Registro from './Registro';
import Loguin from './Loguin';
import Detalle from './Detalle';
import NotFoundPage from './NotFoundPage';


function App() {
  return (
    <Router>
      <Menu/>
      <Switch>
        <Router path="/registro" exact>
          <Registro />
        </Router>
        <Router path="/loguin" exact>
          <Loguin />
        </Router>
        <Router path="/detalle" exact>
          <Detalle />
        </Router>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Redirect from="/home" to="/" exact />
        <Route path="*">
          <NotFoundPage/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
