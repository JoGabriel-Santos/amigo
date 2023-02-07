import React, { FunctionComponent } from "react";

interface UserListInterface {
    profilePhoto: string;
    name: string;
    email: string;
    username: string;
    age: string;
}

const UsersList: FunctionComponent<UserListInterface> = ({ profilePhoto, name, email, username, age }) => {

    return (
        <figure className="user">
            <img className="user-image" src={profilePhoto} alt=""/>

            <blockquote className="users-text">
                <b>{name}</b> <br/>
                {email} <br/>
                {username} <br/>
                {age} anos <br/>
            </blockquote>

            <p className="user-status">&mdash; {Math.random() < 0.5 ? "Online" : "Offline"}</p>
        </figure>
    );
};

export default UsersList;