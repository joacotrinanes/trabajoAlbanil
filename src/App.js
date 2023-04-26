import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar/NavBar.js';
import MainContent from './components/mainContent/MainContent';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MainContent/>
    </div>
  );
}

export default App;
