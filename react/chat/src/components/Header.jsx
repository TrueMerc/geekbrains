import React from "react";
import "../main.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header-element">
                    <h2>Network chat</h2>
                </div>
                <Link to="/">
                    <div className="header-element">
                        <h4>Домой</h4>
                    </div>
                </Link>
                <Link to="/profile">
                    <div className="header-element">
                        <h4>Профиль</h4>
                    </div>
                </Link>
                <div className="header-element">
                    <h4>Подписаться</h4>
                </div>
            </div>
        </>
    );
}

export default Header;
