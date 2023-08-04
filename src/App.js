import background from "./images/tailwindlogo.png";
import Spline from '@splinetool/react-spline';
import { Tnavbar } from './components/Tnavbar';
import {Splineresume} from './components/Splineresume';
import './App.css';

function App() {
  return (
    <div>
      <Tnavbar></Tnavbar>
      <Splineresume></Splineresume>
    </div>
  );
}

export default App;
