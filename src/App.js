import './App.css';
import sexOnTheBeach from './Pictures/Sex_on_the_Beach.jpg';
import longIsland from './Pictures/Long_Island.jpg';

function App() {
  return (
    <div className="App">
        <header className="App-header">
        <img src = {sexOnTheBeach} className="App-sexOnTheBeach" alt = "Sex on the Beach"/>
           <img src = {longIsland} className="App-longIsland" alt = "Long Island Ice Tea"/>
        </header>
    </div>
  )
}

export default App;

{/*<header className="App-header">*/}
{/*  <img src={logo} className="App-logo" alt="logo" />*/}
{/*  <p>*/}
{/*    Edit <code>src/App.js</code> and save to reload.*/}
{/*  </p>*/}
{/*  <a*/}
{/*    className="App-link"*/}
{/*    href="https://reactjs.org"*/}
{/*    target="_blank"*/}
{/*    rel="noopener noreferrer"*/}
{/*  >*/}
{/*    Learn React*/}
{/*  </a>*/}
{/*</header>*/}
