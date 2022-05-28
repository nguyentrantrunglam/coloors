import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import Palettes from './Component/Palettes';
import { Colors } from './Context';
import dataColor from './data/colors.json'



function App() {
  return (
    <Colors.Provider value={dataColor} >
      <div className="App">
        <Header />
        <Palettes />
      </div>
    </Colors.Provider>
  );
}

export default App;
