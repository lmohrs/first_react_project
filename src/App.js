import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cocktails from './pages/Cocktails'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cocktails" exact component={Cocktails} />
            {/*<Route path="/about" exact component={About} />*/}
            {/*<Route path="/contact" exact component={Contact} />*/}
          </Switch>
          {/*<Footer />*/}
        </Router>
      </div>
  );
}

export default App;
