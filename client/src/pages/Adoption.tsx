import React, { useEffect, useState } from "react";

import AdoptionList from "../components/AdoptionList";

import axios from "axios";

function Adoption() {

    const [randomDogArr, setRandomDogArr] = useState<string[]>([]);
    const [randomDogUrl, setRandomDogUrl] = useState<string[]>([]);

    useEffect(() => {
        getImagesRandomDog();
    });

    async function getImagesRandomDog() {
        try {
            const { data } = await axios.get("https://random.dog/doggos");

            setRandomDogArr(
                data
                    .filter((url: string) => {
                        return !url.includes(".gif");
                    })
                    .filter((url: string) => {
                        return !url.includes(".mp4");
                    })
                    .filter((url: string) => {
                        return !url.includes(".webm");
                    })
            );

        } catch (error) {
            console.log(error);
        }
    }

    function handleGetAnotherImages() {
        let arrayUrl: string[] = [];

        Array.from({ length: 6 }, (_, key) => (
            arrayUrl.push(`https://random.dog/${randomDogArr[Math.floor(Math.random() * (randomDogArr.length - 1))]}`)
        ));

        setRandomDogUrl(arrayUrl);
    }

    return (
        <section className="section-adoption" id="adoption">
            <div className="container center-text">
                <span className="subheading"> Quero adotar </span>

                <h2 className="heading-secondary">
                    Animais esperando por um lar...
                </h2>
            </div>

            <div className="container grid grid--3-cols margin-bottom-md">
                {
                    randomDogUrl.map((dogImage, key) => (

                        <div key={key}>
                            <AdoptionList dogImage={dogImage}/>
                        </div>
                    ))
                }
            </div>

            <div className="container all-dogs">
                <a className="link" onClick={() => handleGetAnotherImages()} href="#adoption">Ver outros cachorros</a>
            </div>
        </section>
    );
}

export default Adoption;