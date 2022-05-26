import './App.css';
// import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav_bar from './Component/Navbar/Nav_bar';
import Banner from './Component/Banner/Banner';


function App() {
  return (
    <div className="App">
      <Nav_bar />
      <Banner />
    </div>
  );
}

export default App;
