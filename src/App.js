
import './App.css';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import CardDetails from './pages/CardDetails';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
     <Route exact path='/' element={<Home></Home>}></Route>
     <Route exact  path='/carddetails' element={<CardDetails></CardDetails>}></Route>
     <Route path='/about' element={<About></About>}></Route>
     <Route path='/contact' element={<Contact></Contact>}></Route>
     
     </Routes>
    </div>
  );
}

export default App;
