import React from "react";
import "../main.css";
import { BrowserRouter, Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header-element">
                    <h2>Network chat</h2>
                </div>
                <BrowserRouter>
                    <Link to="/">
                        <div className="header-element">Домой</div>
                    </Link>
                    <Link to="/profile">
                        <div className="header-element">Профиль</div>
                    </Link>
                </BrowserRouter>
            </div>
        </>
    );
}

export default Header;
