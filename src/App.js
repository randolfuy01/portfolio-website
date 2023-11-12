import './App.css';
import { Navbar } from './components/navigation-components/Navbar.js';
import { Typewriting } from './components/about-components/Typewriter.js';
import { Description } from './components/about-components/Description.js';
import { Logo } from './components/about-components/Logo.js';
function App() {
  return (
    <div className='container'>
      <header>
        <Navbar/>
      </header>
      <div class="break"></div>
      <Typewriting/>
      <div class="break"></div>
      <Logo/>
      <Description/> 
    </div>
  );
}

export default App;
