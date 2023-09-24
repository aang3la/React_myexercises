import './App.css';
import { ColorBox } from "./components/ColorBox"
import { ColorBoxGrid } from './components/ColorBoxGrid';

//colors array
const colors = ["red", "blue", "yellow", "brown", "purple", "pink", "orange", "green"];

function App() {
  return (
    <div className="App">
      <ColorBoxGrid colors={colors} />
    </div>
  );
}

export default App;
