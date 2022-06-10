import React from 'react';
import { faStar, faStarHalf, faPeopleGroup, faComment, faListCheck, faClockFour, faDatabase, faNetworkWired, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindows, faJsSquare, faPhp  } from "@fortawesome/free-brands-svg-icons";

export default function Cv() {
    return (
        <div>
            <div className={"container"}>
                <h1 className={"mt-2"}>Skills</h1>
                <div className={"row"}>
                    <div className={"col-lg-6"}>
                        <h2 className={"mt-3"}>Vaardigheden</h2>
                            <ul>
                                <li><div className={"row"}><div className={"col-5"}><FontAwesomeIcon className={"icons"} icon={faWindows} fixedWidth/>.NET (C#, .NET Core)</div><div className={"col-7"}><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/></div></div></li>
                                <li><div className={"row"}><div className={"col-5"}><FontAwesomeIcon className={"icons"} icon={faJsSquare} fixedWidth/>Javascript (React, Angular)</div><div className={"col-7"}><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/></div></div></li>
                                <li><div className={"row"}><div className={"col-5"}><FontAwesomeIcon className={"icons"} icon={faPhp} fixedWidth/>PHP (CodeIgniter)</div><div className={"col-7"}><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/><FontAwesomeIcon className={"sterren"} icon={faStarHalf} fixedWidth/></div></div></li>
                                <li><div className={"row"}><div className={"col-5"}><FontAwesomeIcon className={"icons"} icon={faDatabase} fixedWidth/>SQL</div><div className={"col-7"}><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/><FontAwesomeIcon className={"sterren"} icon={faStarHalf} fixedWidth/></div></div></li>
                                <li><div className={"row"}><div className={"col-5"}><FontAwesomeIcon className={"icons"} icon={faWindows} fixedWidth/>Office 365</div><div className={"col-7"}><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/><FontAwesomeIcon className={"sterren"} icon={faStarHalf} fixedWidth/></div></div></li>
                                <li><div className={"row"}><div className={"col-5"}><FontAwesomeIcon className={"icons"} icon={faNetworkWired} fixedWidth/>Netwerkbeheer (Cisco)</div><div className={"col-7"}><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/></div></div></li>
                            </ul>
                    </div>
                    <div className={"col-lg-6"}>
                        <h2 className={"mt-3"}>Competenties</h2>
                            <ul>
                                <li><FontAwesomeIcon className={"icons"} icon={faPeopleGroup} fixedWidth/>Teamwerk</li>
                                <li><FontAwesomeIcon className={"icons"} icon={faComment} fixedWidth/>Communicatief sterk</li>
                                <li><FontAwesomeIcon className={"icons"} icon={faListCheck} fixedWidth/>Juiste prioriteiten stellen</li>
                                <li><FontAwesomeIcon className={"icons"} icon={faClockFour} fixedWidth/>Tijdsbeheer</li>
                            </ul>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-6"}>
                        <h2 className={"mt-3"}>Ervaringen</h2>
                            <ul>
                                <li><div className={"row"}><div className={"col-5"}><FontAwesomeIcon className={"icons"} icon={faCheck} fixedWidth/>Stagiair Webdeveloper</div><div className={"col-7"}>Business Masters Wiekevorst</div></div></li>
                                <li><div className={"row"}><div className={"col-5"}><FontAwesomeIcon className={"icons"} icon={faCheck} fixedWidth/>Stagiair ICT-Coordinator</div><div className={"col-7"}>Heilig Graf Turnhout</div></div></li>
                                <li><div className={"row"}><div className={"col-5"}><FontAwesomeIcon className={"icons"} icon={faCheck} fixedWidth/>Magazijnier/Orderpicker</div><div className={"col-7"}>Soudal Turnhout</div></div></li>
                            </ul>
                    </div>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <h2 className={"mt-3"}>Talen</h2>
                            <ul>
                                <li><div className={"row"}><div className={"col-5"}>Nederlands</div><div className={"col-7"}><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/></div></div></li>
                                <li><div className={"row"}><div className={"col-5"}>Engels</div><div className={"col-7"}><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/></div></div></li>
                                <li><div className={"row"}><div className={"col-5"}>Filipijns</div><div className={"col-7"}><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/></div></div></li>
                                <li><div className={"row"}><div className={"col-5"}>Frans</div><div className={"col-7"}><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/><FontAwesomeIcon className={"sterren"} icon={faStar} fixedWidth/></div></div></li>
                            </ul>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <h2 className={"mt-3"}>Documenten</h2>
                            <ul>
                                <li><a href={"https://drive.google.com/file/d/1dRvqtp_hsC1Plu77FQGSLmEobo1larAM/view?usp=sharing"} target={"_blank"}>CV</a></li>
                                <li><a href={"https://drive.google.com/file/d/1p9APTvgUP-M1SZOUMbzygUqRVPYljPNi/view?usp=sharing"} target={"_blank"}>Eindrapport Stage Business Masters</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}