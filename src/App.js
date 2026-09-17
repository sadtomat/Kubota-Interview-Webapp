import logo from './logo.svg';
import MessageButton from './components/MessageButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MessageButton />
        <img
          src="https://testwebappblobstorage.blob.core.windows.net/images/testimage.JPG"
          alt="new"
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
