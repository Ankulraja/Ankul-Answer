import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Dash from './Pages/Dash';
import Instruction from './Pages/Instruction';

function App() {
  return (
    <div className='bg-slate-200'>
      <Routes>
        <Route path='/' element={<Dash></Dash>}> </Route>
        <Route path='/instruction' element={<Instruction></Instruction>}> </Route>
      </Routes>

    </div>
  );
}

export default App;
