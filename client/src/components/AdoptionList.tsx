import React, { FunctionComponent } from "react";

interface AdoptionListInterface {
    dogImage: string;
}

const AdoptionList: FunctionComponent<AdoptionListInterface> = ({ dogImage }) => {

    const dogAttributes = ["Brincalhão", "Castrado", "Carente", "Calmo", "Dócil", "Vacinado", "Vermifugado"];
    const dogName = require('dog-names');

    let randomDogAttributes: any[] = [];

    function getRandomDotAttributes() {
        Array.from({ length: 6 }, (_, key) => (
            randomDogAttributes.push(dogAttributes[Math.floor(Math.random() * (6))])
        ));

        let unique = [];

        for (let index = 0; index < randomDogAttributes.length; index++) {
            if (unique.indexOf(randomDogAttributes[index]) === -1) {
                unique.push(randomDogAttributes[index]);
            }
        }

        if (unique.length > 3) {
            unique = unique.slice(0, 2);
        }

        return unique.sort();
    }

    return (
        <div className="adoption">
            <img className="adoption-image" src={dogImage} alt=""/>

            <div className="adoption-content">
                <p className="adoption-name">{dogName.maleRandom()}</p>

                <ul className="adoption-attributes">
                    {
                        getRandomDotAttributes().map((attribute, key) => (
                            <div key={key}>

                                <li className="adoption-attribute">
                                    <span>{attribute}</span>
                                </li>
                            </div>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default React.memo(AdoptionList);