import React from "react";

function Footer() {

    return (
        <footer className="footer">
            <div className="container grid grid--footer grid--5-cols">
                <div className="logo-column">
                    <a className="footer-logo" href="#">
                        <img className="logo" src={require("../util/images/logo.png")} alt=""/>
                    </a>

                    <ul className="social-links">
                        <li>
                            <a className="footer-link" href="#">
                                <i className="bi bi-instagram social-icon"></i>
                            </a>
                        </li>

                        <li>
                            <a className="footer-link" href="#">
                                <i className="bi bi-facebook social-icon"></i>
                            </a>
                        </li>

                        <li>
                            <a className="footer-link" href="#">
                                <i className="bi bi-twitter social-icon"></i>
                            </a>
                        </li>
                    </ul>

                    <p className="copyright">Copyright &copy; 2023 by Amigo, Inc. <br/> All rights reserved</p>
                </div>

                <div className="address-column">
                    <p className="footer-heading">Contate-nos</p>

                    <address className="contacts">
                        <p className="contacts-add">
                            623 Harrison St., 2nd Floor, San Francisco, CA 94107
                        </p>

                        <p className="contacts-tel-email">
                            <a className="footer-link" href="#">123-4567-8902</a><br/>
                            <a className="footer-link" href="#">hello@amigo.com</a>
                        </p>
                    </address>
                </div>

                <nav className="nav-column">
                    <p className="footer-heading">Conta</p>

                    <ul className="footer-navigation">
                        <li><a className="footer-link" href="#">Criar conta</a></li>
                        <li><a className="footer-link" href="#">Fazer login</a></li>
                        <li><a className="footer-link" href="#">iOS app</a></li>
                        <li><a className="footer-link" href="#">Android app</a></li>
                    </ul>
                </nav>

                <nav className="nav-column">
                    <p className="footer-heading">Sobre nós</p>

                    <ul className="footer-navigation">
                        <li><a className="footer-link" href="#">Sobre Amigo</a></li>
                        <li><a className="footer-link" href="#">Dúvidas frequentes</a></li>
                        <li><a className="footer-link" href="#">Nossos parceiros</a></li>
                    </ul>
                </nav>

                <nav className="nav-column">
                    <p className="footer-heading">Recursos</p>

                    <ul className="footer-navigation">
                        <li><a className="footer-link" href="#">Centro de ajuda</a></li>
                        <li><a className="footer-link" href="#">Privacidade e termos</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
