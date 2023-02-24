import './App.css';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Test />} />
    </Routes>
  );
}


const Test = () => {
  return (
    <div>App</div>
  )
}


export default App;
