import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NavBar from './components/NavBar/NavBar';
import Skills from './components/Skills/Skills';
import Title from './components/Title/Title';

function App() {
  return (
    <div className="App">
      <div className='title'>
        <NavBar />
        <Title />
      </div>
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
