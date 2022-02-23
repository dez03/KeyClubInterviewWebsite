import logo from './githubprofileCROPPED.svg';
import menu from './hamburgermenu.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="Header-title">
          Display Of My Projects.
        </h1>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={menu} className="menu" alt="Menu" />
        </a>
      </header>
    </div>
  );
}

export default App;
