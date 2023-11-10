import './App.css';
import { Navbar } from './components/navigation-components/Navbar.js';
import { Introduction } from './components/about-components/Description.js';

function App() {
  return (
    <div className='container'>
      <header className='clearfix'>
        <Navbar/>
      </header>
      <Introduction/>
    </div>
  );
}

export default App;
