import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Signup from './components/Signup';
import Login from './components/Login';
import NotesState from './context/Notes/NotesState';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React ,{ useContext } from 'react';
import Mynotes from './components/Mynotes';
import Developer from './components/Developer';
import Error from './components/Error';
function App() {
  return (
    <>
      <Router>
    <NotesState>
        <div className="container-fluid m-0 p-0 sticky-top">
        <Navbar/>
        <Alert />
        </div>
        <div className="container-fluid" style={{padding:"0px"}}>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/notes" element={<Mynotes/>}/>
            <Route exact path="/login" element={<Login />}/>
            <Route exact path="/signup" element={<Signup/>}/> 
            <Route exact path="/about" element={<Developer/>}/>
            <Route exact path="/error" element={<Error/>}/> 
            
          </Routes>
        </div>
    </NotesState>
      </Router>
    </>
  );
}

export default App;
