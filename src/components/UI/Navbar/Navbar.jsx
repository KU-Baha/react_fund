import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context";
import MyButton from "../button/MyButton";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    const login = () => {
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div className="navbar">
            {isAuth
                ?
                <MyButton onClick={logout}>
                    Выйти
                </MyButton>
                :
                <MyButton onClick={login}>
                    Войти
                </MyButton>
            }
            <div className="navbar__links">
                <Link to="/about/">About</Link>
                <Link to="/posts/">Posts</Link>
            </div>
        </div>
    );
};

export default Navbar;