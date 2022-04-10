//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Search from './components/SearchBar.js'
import {BrowserRouter as Router} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/search' exact component={Search} />
          </Switch>
           
        </header>
      </div>
    </Router>
  );
}

export default App;
