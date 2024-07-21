import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/NewNote';
import Update from './views/Update';
function App() {
    return (
    <div className="App">
         <Routes>
             <Route element={<Main/>} path="/" />
             <Route element={<Detail/>} path="/notes/new"/> 
             <Route element={<Update/>} path="/notes/:id"/>
         </Routes>                         
    </div>
    );
}
export default App;
