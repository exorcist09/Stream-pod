import Card  from "./components/Card";
import Header from "./components/Header";
import {Routes, Route} from "react-router-dom";

import "./Styles/App.css"
import AddItem from "./Pages/AddItem";
import Login from "./Pages/Login";
import { createContext, useState } from "react";
import SignUp from "./Pages/SignUp";

const Appstate =createContext();

function App() {
  const [login,setLogin]=useState(false);
  const [username,setUsername] =useState("");

  return (
    <Appstate.Provider value={{login,username,setLogin,setUsername}}>
    <Header/>
    <div className="App">
    <Routes>
    <Route path="/" element={<Card/>}/>
    <Route path="/add" element={<AddItem/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    </div>
    </Appstate.Provider>
  );
}

export default App;
export {Appstate};
