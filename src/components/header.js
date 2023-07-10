import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Howtowork from "./howtowork";
import Login from "./login";
function Header(){
   
    return(
        <div>
            <Router>
                <ul>
                    <li>
                        <Link to="/howtowork">How to work</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
                <Routes>
                    <Route exact path="/howtowork" element={<Howtowork/>}></Route>
                    <Route exact path="/login" element={<Login/>}></Route>
                </Routes>
            </Router>
        </div> 
    )
}

export default Header;
