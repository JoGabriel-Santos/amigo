import React from "react";
import { useHistory } from "react-router-dom";

import Adoption from "./Adoption";

function Home() {
    // @ts-ignore
    const user = JSON.parse(localStorage.getItem("profile"));
    const history = useHistory();

    return (
        <React.Fragment>
            {
                user ? (
                    <>
                        <section className="section-hero">
                            <div className="hero">
                                <div className="hero-text-box">
                                    <h1 className="heading-primary">
                                        Adote um bichinho agora mesmo!
                                    </h1>

                                    <p className="hero-description">
                                        Adotar um pet é um ato de amor aos animais.
                                        Afinal, com a adoção de cães, você tira um bichinho da rua, dando um lar para ele,
                                        além de oferecer espaço a outro peludo em ONGs.
                                    </p>

                                    <a className="button button--full margin-right-sm" href="/collaborators">Nossos colaboradores</a>
                                </div>

                                <div className="hero-image-box">
                                    <img className="hero-image" src={require("../util/images/home-img.jpg")} alt=""/>
                                </div>
                            </div>

                            <div className="arrow-down">
                                <a href="#">
                                    <i className="bi bi-caret-down-fill"></i>
                                </a>
                            </div>
                        </section>

                        <Adoption/>
                    </>

                ) : history.push("/signin")
            }

        </React.Fragment>
    );
}

export default Home;
