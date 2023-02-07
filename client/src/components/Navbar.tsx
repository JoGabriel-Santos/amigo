import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

function Navbar() {
    // @ts-ignore
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

    const admEmail = "desafiosharenergy@email.com";

    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: "LOGOUT" });

        history.push("/signin");
        setUser(null);
    };

    useEffect(() => {
        // @ts-ignore
        setUser(JSON.parse(localStorage.getItem("profile")));

    }, [location]);

    return (
        <header className="header">
            <a href="/">
                <img className="logo" src={require("../util/images/logo.png")} alt={"Logo"}/>
            </a>

            {
                user ?
                    <>
                        <nav className="main-navigation">
                            <ul className="main-navigation-list">
                                <li><a className="main-navigation-link" href="/">Adoção</a></li>

                                {
                                    user.result?.email !== admEmail ?
                                        <li><a className="main-navigation-link" href="/visit">Agendar visita</a></li>
                                        : null
                                }

                                {
                                    user.result?.email === admEmail ?
                                        <li><a className="main-navigation-link" href="/confirm">Confirmar visita</a></li>
                                        : null
                                }

                                <li><a className="main-navigation-link" href="/cats">Imagens engraçadas</a></li>

                                <li><a className="main-navigation-link navigation-cta" onClick={logout} href="#">Sair da conta</a></li>
                            </ul>
                        </nav>
                        <button className="button-navigation-mobile">
                            <i className="bi bi-list icon-navigation-mobile" id="menu-outline"></i>
                            <i className="bi bi-x-lg icon-navigation-mobile" id="close-outline"></i>
                        </button>
                    </>

                    :

                    (
                        location.pathname === "/signup" ?

                            <a className="main-navigation-link" href="/signin">Já possui uma conta?</a>
                            :
                            <a className="main-navigation-link" href="/signup">Ainda não possui uma conta?</a>
                    )
            }
        </header>
    );
}

export default Navbar;