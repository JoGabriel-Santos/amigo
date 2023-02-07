import React, { useState } from "react";

import { validStatusCodes, invalidStatusCodeImage } from "../util/data/ValidStatusCodes";

function CatImages() {

    const [statusCode, setStatusCode] = useState(invalidStatusCodeImage);

    function handleStatusCodeChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;

        if (validStatusCodes.includes(Number(value))) {
            setStatusCode(`https://http.cat/${value}`);

        } else {
            setStatusCode(invalidStatusCodeImage);
        }
    }

    return (
        <section className="section-adoption padding-top-lg" id="catImages">
            <div className="container center-text">
                <span className="subheading"> Imagens engraçadas </span>

                <h2 className="heading-secondary">
                    Veja imagens engraçadas de gatos...
                </h2>
            </div>

            <div className="container">
                <div className="cta">
                    <div className="cta-text-box">
                        <h2 className="heading-secondary">
                            HTTP Cats
                        </h2>

                        <p className="cta-text__cats">
                            Informe um status code para a imagem aparecer...
                        </p>

                        <form className="cta-form" action="#">
                            <div className="cta-form-name">
                                <label htmlFor="full-name">Status code</label>
                                <input id="full-name" type="text" placeholder="404" onChange={handleStatusCodeChange} required/>
                            </div>
                        </form>
                    </div>

                    <img className="cta-image-box__cats" src={statusCode} alt=""/>
                </div>
            </div>
        </section>
    );
}

export default React.memo(CatImages);