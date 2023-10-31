import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Apiram from './pages/apiram/apiram';
import Home from './pages/home';
import Login from './pages/form/formLogin';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='ram' element={<Apiram />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
