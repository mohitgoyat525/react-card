
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/view/Home';
import SliderPage from './components/view/SliderPage';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/slider' element={<SliderPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
