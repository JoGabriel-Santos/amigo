import React, { useEffect, useState } from "react";

import UsersList from "../components/UsersList";

interface UserData {
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    },
    name: {
        title: string;
        first: string;
        last: string;
    },
    email: string;
    login: {
        username: string;
    }
    dob: {
        date: string;
        age: number;
    },
}

function Collaborators() {

    const [userData, setUserData] = useState<UserData[]>([]);
    const [search, setSearch] = useState<string>("");
    const [results, setResults] = useState<UserData[]>([]);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        async function fetchData() {

            setUserData([]);

            let apiUser = `https://randomuser.me/api/?page=${page}&results=10&nat&nat=br&seed=abc&exc=cell,gender,location,phone,registered`;

            try {
                const response = await fetch(apiUser);
                const data = await response.json();

                setUserData(prevUserData => [...prevUserData, ...data.results]);

            } catch (error) {

                console.log(error);
            }
        }

        fetchData();
    }, [page]);

    useEffect(() => {
        setResults(userData.filter(user =>
            user.name.first.toLowerCase().includes(search.toLowerCase()) ||
            user.name.last.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase()) ||
            user.login.username.toLowerCase().includes(search.toLowerCase())
        ));

    }, [search, userData]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const handleNextPage = () => {
        if (page < 5) {
            setPage(prevPage => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(prevPage => prevPage - 1);
        }
    };

    return (
        <section className="section-users">
            <div className="users-container">
                <span className="subheading">
                    Colaboradores
                </span>

                <h2 className="heading-secondary">
                    Conheça os nossos colaboradores
                </h2>

                <form className="cta-form margin-bottom-md" action="#">
                    <div className="cta-form-search">
                        <label htmlFor="full-name">Pesquisar usuários por nome, email ou username...</label>
                        <input onChange={handleSearch} type="text" placeholder="Lucineide Vieira" required/>
                    </div>
                </form>

                <div className="users">
                    {
                        results.length > 0 ?
                            results.map((user, key) => (
                                <div key={key}>
                                    {
                                        <UsersList
                                            profilePhoto={user.picture.large}
                                            name={user.name.first + " " + user.name.last}
                                            email={user.email}
                                            username={user.login.username}
                                            age={user.dob.age.toString()}
                                        />
                                    }
                                </div>

                            )) : <span className="subheading-search"> Usuário não encontrado... </span>
                    }
                </div>

                <div className="pagination">
                    <button onClick={handlePrevPage} className="prev" disabled={page == 1}>
                        <i className="bi bi-caret-left-fill"></i>
                    </button>

                    <span className="current-page">{page}</span>

                    <button onClick={handleNextPage} className="next" disabled={page == 5}>
                        <i className="bi bi-caret-right-fill"></i>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Collaborators;