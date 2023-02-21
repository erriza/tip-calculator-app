import logo from './logo.svg';
import Header from './components/Header';
import Container from './components/Container';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Container/>
      <footer className="footer">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://www.linkedin.com/in/erickrico/">Erick Rico</a>.
      </footer>
    </div>
  );
}

export default App;
