import './App.css';
import About from './About.js';
import Channel from './Channel.js';
import Links from './Links.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Welcome!</h1>
      <p>It is {new Date().toLocaleTimeString()}.</p>
      </header>

      <main>
        <h2> Welcome to the Guac Pac main page <br></br>
        hosted by Aphrodite Jewel</h2>
        
        <About></About>
        <Channel></Channel>
        <Links></Links>
        
      </main>

    </div>
  );
}

export default App;
