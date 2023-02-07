import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getVisits, updateVisits, deleteVisits } from "../actions/visits";

import VisitRequestsList from "../components/VisitRequestsList";

function ConfirmVisit() {
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(getVisits());

    }, [dispatch]);

    // @ts-ignore
    const visitRequests = useSelector((state) => state.visits);

    const [userData, setUserData] =
        useState({ name: "", cpf: "", address: "", phone: "", status: "" });

    const getUserDataHandler = (name: string, cpf: string, address: string, phone: string, status: string) => {

        setUserData({ ...userData, name: name, cpf: cpf, address: address, phone: phone, status: status });
    };

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        if (userData.status === "Recusado") {
            // @ts-ignore
            dispatch(deleteVisits(userData));
        }

        // @ts-ignore
        dispatch(updateVisits(userData));
    };

    return (
        <>
            <section className="section-cta">
                <div className="container">
                    <div className="cta">
                        <div className="cta-text-box">
                            <h2 className="heading-secondary">
                                Solicitações de visita
                            </h2>

                            <p className="cta-text">
                                Confirme as solicitações de visita dos usuários <br/>
                                Clique no perfil para editar ou remover solicitações
                            </p>

                            <form className="cta-form" onSubmit={submitHandler}>
                                <div className="cta-form-cpf">
                                    <label htmlFor="cpf">Nome</label>
                                    <input
                                        id="name"
                                        type="text"
                                        value={userData.name}
                                        disabled/>
                                </div>

                                <div className="cta-form-cpf">
                                    <label htmlFor="cpf">CPF</label>
                                    <input
                                        id="cpf"
                                        type="text"
                                        value={userData.cpf}
                                        disabled/>
                                </div>

                                <div className="cta-form-address">
                                    <label htmlFor="address">Endereço</label>
                                    <input
                                        id="address"
                                        type="text"
                                        value={userData.address}
                                        onChange={(event) => setUserData({ ...userData, address: event.target.value })}
                                        required/>
                                </div>

                                <div className="cta-form-phone">
                                    <label htmlFor="phone">Telefone</label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        value={userData.phone}
                                        onChange={(event) => setUserData({ ...userData, phone: event.target.value })}
                                        required/>
                                </div>

                                <button
                                    className="button button--form bg-red"
                                    onClick={() => setUserData({ ...userData, status: "Recusado" })}
                                    type={"submit"}>

                                    Recusar visita
                                </button>

                                <button
                                    className="button button--form"
                                    onClick={() => setUserData({ ...userData, status: "Confirmado" })}
                                    type={"submit"}>

                                    Confirmar visita
                                </button>
                            </form>
                        </div>

                        <div className="cta-image-box--canil" role="img"></div>
                    </div>
                </div>
            </section>

            <section className="section-users padding-top-0">
                <div className="users-container">

                    <div className="users">
                        {
                            visitRequests.length > 0 ?
                                visitRequests.map(
                                    (
                                        user: { name: String; email: String; cpf: String; address: String; phone: String; status: String },
                                        key: React.Key | null | undefined) => (

                                        <div key={key}>
                                            {
                                                <VisitRequestsList
                                                    name={user.name}
                                                    email={user.email}
                                                    cpf={user.cpf}
                                                    address={user.address}
                                                    phone={user.phone}
                                                    status={user.status}
                                                    getUserDataHandler={getUserDataHandler}
                                                />
                                            }
                                        </div>

                                    )) : <span className="subheading-search"> Não há requisições no momento... </span>
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default ConfirmVisit;