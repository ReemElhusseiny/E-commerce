import logo from './logo.svg';
import './App.css';
import {Sale} from "./Components/Sale";
import { Menu } from "./Components/Menu";
import {MyNav} from "./Components/MyNav";
function App() {
  return (
    <div className="App">
   <Sale></Sale>
   <Menu/> 
   <MyNav></MyNav>
    </div>
  );
}

export default App;
