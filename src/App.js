import './App.css';

import {Routes, Route} from 'react-router-dom'

import Career from './pages/Career';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Resume from './pages/Resume';

function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/resume" element={<Resume/>}></Route>
      <Route path="/career" element={<Career/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
  </>);
}

export default App;
