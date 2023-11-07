
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Home from './components/Home/Home';
import {Routes, Route} from 'react-router-dom';
import Detail from './components/Detail/Detail';
function App() {


  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
