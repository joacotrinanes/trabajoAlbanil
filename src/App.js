import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar/NavBar.js';
import MainContent from './components/mainContent/MainContent';
import { FloatingWhatsApp } from 'react-floating-whatsapp'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MainContent/>
      <FloatingWhatsApp phoneNumber='+59899591708' accountName='Joaco Triñanes' />
    </div>
  );
}

export default App;
