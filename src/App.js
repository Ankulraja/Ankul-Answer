import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Dash from './Pages/Dash';

function App() {
  return (
    <div className='bg-slate-200'>
      <Routes>
        <Route path='/' element={<Dash></Dash>}>
         
        </Route>
      </Routes>

    </div>
  );
}

export default App;
