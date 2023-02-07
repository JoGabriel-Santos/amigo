import React, { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { createVisits } from "../actions/visits";

function Visit() {
    // @ts-ignore
    const user = JSON.parse(localStorage.getItem('profile'));

    const dispatch = useDispatch();

    const [userData, setUserData] =
        useState({ name: user.result.name, email: user.result.email, password: user.result.password, cpf: "", address: "", phone: "", status: "Pending" });

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {

        // @ts-ignore
        dispatch(createVisits(userData));
    };

    return (
        <section className="section-cta">
            <div className="container">
                <div className="cta">
                    <div className="cta-text-box">
                        <h2 className="heading-secondary">
                            Visite nosso canil
                        </h2>

                        <p className="cta-text">
                            Faça uma visita e escolha seu novo amigo! <br/>
                            Informe seus dados abaixo...
                        </p>

                        <form className="cta-form" onSubmit={submitHandler}>
                            <div className="cta-form-cpf">
                                <label htmlFor="cpf">CPF</label>
                                <input
                                    id="cpf"
                                    type="text"
                                    placeholder="000.000.000-00"
                                    onChange={(event) => setUserData({ ...userData, cpf: event.target.value })}
                                    required
                                />
                            </div>

                            <div className="cta-form-address">
                                <label htmlFor="address">Endereço</label>
                                <input
                                    id="address"
                                    type="text"
                                    placeholder="77867 Joel Forks"
                                    onChange={(event) => setUserData({ ...userData, address: event.target.value })}
                                    required/>
                            </div>

                            <div className="cta-form-phone">
                                <label htmlFor="phone">Telefone</label>
                                <input
                                    id="phone"
                                    type="tel"
                                    placeholder="(00) 0 0000-0000"
                                    onChange={(event) => setUserData({ ...userData, phone: event.target.value })}
                                    required/>
                            </div>

                            <button className="button button--form" type={"submit"}>Solicitar visita</button>
                        </form>
                    </div>

                    <div className="cta-image-box--canil" role="img"></div>
                </div>
            </div>
        </section>
    );
}

export default Visit;
