import React from 'react';
import {Button, Card} from "react-bootstrap";

export default function Projecten() {
    return(
        <div className={"container"}>
            <h1 className={"mt-2"}>Projecten</h1>
            <div className="row mt-3">
                <div className="col-lg-4 col-sm-12">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="projectimg_3.png" />
                        <Card.Body>
                            <Card.Title>Watchlist app (wip)</Card.Title>
                            <Card.Text>
                                Een watchlist app waar je je lievelingsprogramma's kan volgen en info opzoeken.
                            </Card.Text>
                            <Button className={"btn-light"} href={"https://github.com/nasaracino/project_webapplicaties"}>Code bekijken</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className={"col-lg-4 col-sm-12"}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="projectimg_1.png" />
                        <Card.Body>
                            <Card.Title>Registratieformulier</Card.Title>
                            <Card.Text>
                                Een registratieformulier met validatie geschreven met Javascript.
                            </Card.Text>
                            <Button className={"btn-light"} href={"https://github.com/nasaracino/r0638689_Saracino_Nick_JS-PE"}>Code bekijken</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className={"col-lg-4 col-sm-12"}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="projectimg_2.png" />
                        <Card.Body>
                            <Card.Title>Cursusshop</Card.Title>
                            <Card.Text>
                                Een nagemaakt cursusshop waar men voor cursussen kan inschrijven.
                            </Card.Text>
                            <Button className={"btn-light"} href={"https://github.com/nasaracino/SaracinoNick_TTI_DM_Project"}>Code bekijken</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}