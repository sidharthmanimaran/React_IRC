import Home from "./components/Home";
import './assets/css/Home.css';
import { Routes,Route } from "react-router-dom";
import Login_SignUp from "./components/Login_SignUp";
import Nav from "./components/Nav";
function App() {
    return (
        <>
        <Nav/>
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login_SignUp />}/>
        
        </Routes>
        </>
    )
}
export default App