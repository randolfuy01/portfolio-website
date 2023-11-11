import './App.css';
import { Navbar } from './components/navigation-components/Navbar.js';
import { Typewriting } from './components/about-components/Typewriter.js';

function App() {
  return (
    <div className='container'>
      <header>
        <Navbar/>
      </header>
      <div class="break"></div>
      <Typewriting/>
    </div>
  );
}

export default App;
