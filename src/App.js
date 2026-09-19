import MessageButton from './components/MessageButton';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <MessageButton />
        <img
          src="https://testwebappblobstorage.blob.core.windows.net/images/testimage.JPG"
          alt="new"
        />
      </header>
    </div>
  );
}

export default App;
