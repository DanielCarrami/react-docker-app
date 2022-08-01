import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola! Ya funciona tu entorno!
        </p>
	<p>
	  Este es un cambio sencillo
	</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React de una buena vez
        </a>
      </header>
    </div>
  );
}

export default App;
