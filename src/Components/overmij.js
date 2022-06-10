import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faGamepad, faFutbol, faCake, faHouseChimney, faEnvelope, faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";


export default function OverMij() {
    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-lg-8 col-sm-12"}>
                    <p id={"headline"}>Ik ben Nick Saracino. Ik ben een strevend back-end
                        developer die klaar is om mijn eerste stap
                        te zetten in de wereld van IT en software development. </p>
                    <p id={"subtext"}>Een pas afgestudeerde programmeur met grote ambities en een voorkeur heeft voor werk op lange termijn. Bij omgevingen zoals .NET en web development hoor ik thuis. </p>
                </div>
                <div className={"col-lg-4 col-sm-12"}>
                    <img id={"foto"} src={"foto.jpg"}/>
                </div>
            </div>
            <div className={"row"}>
                <div className={"col-lg-6 col-sm-12"}>
                    <h3>Hobby's & Interesses</h3>
                    <ul className={"lists"}>
                        <li><FontAwesomeIcon className={"icons"} icon={faBook} fixedWidth/>Lezen</li>
                        <li><FontAwesomeIcon className={"icons"} icon={faGamepad} fixedWidth/>Gamen</li>
                        <li><FontAwesomeIcon className={"icons"} icon={faFutbol} fixedWidth/>Voetbal</li>
                    </ul>
                </div>
                <div className={"col-lg-6 col-sm-12"}>
                    <div>
                    <h3>Info & Contact</h3>
                        <ul className={"lists"}>
                            <li><FontAwesomeIcon className={"icons"} icon={faCake} fixedWidth/>15/11/1994</li>
                            <li><FontAwesomeIcon className={"icons"} icon={faHouseChimney} fixedWidth/>2340 Beerse</li>
                            <li><FontAwesomeIcon className={"icons"} icon={faEnvelope} fixedWidth/><a href={"mailto:nicksaracino@hotmail.com"}>nicksaracino@hotmail.com</a></li>
                            <li><FontAwesomeIcon className={"icons"} icon={faMobileScreenButton} fixedWidth/>+32 491 11 43 65</li>
                            <li><FontAwesomeIcon className={"icons"} icon={faLinkedin} fixedWidth/><a href={"https://www.linkedin.com/in/nick-saracino-353472194/"}>LinkedIn profiel</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}