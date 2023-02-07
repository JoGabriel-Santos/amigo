import React, { FunctionComponent } from "react";

interface UserListInterface {
    name: String,
    email: String,
    cpf: String,
    address: String,
    phone: String,
    status: String,
    getUserDataHandler: Function
}

const VisitRequestsList: FunctionComponent<UserListInterface> = ({ name, email, cpf, address, phone, status, getUserDataHandler }) => {

    return (
        <figure className={"user user-visit"} onClick={() => getUserDataHandler(name, cpf, address, phone, status)}>
            <img className="user-image" src={require("../util/images/avatar.png")} alt=""/>

            <span className="users-text padding-left-0"><b>{name}</b> <br/></span>

            <blockquote className="users-text">
                {email} <br/>
                {cpf} <br/>
                {address} <br/>
                {phone} <br/>
            </blockquote>

            <p className="user-status">&mdash; {status}</p>
        </figure>
    );
};

export default React.memo(VisitRequestsList);