import logo from './logo.svg';
import './App.css';
import Typical from 'react-typical';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h1>Hi, I'm Robert.</h1>
        <p>
          I'm a{' '}
          <Typical
            steps={[
              'photographer 📸.', 1000,
              'teacher 👨🏽.', 1000,
              'pro triathlete (wannabe).', 1000,
              "developer 💻.", 1000
            ]}
            loop={1}
            wrapper="b"
          />
        </p>
      </header>
    </div>
  );
}

export default App;
