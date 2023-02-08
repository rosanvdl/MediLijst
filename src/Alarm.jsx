import './App.css'
import React from 'react'

export default class Alarm extends React.Component {
    render() {
        if (this.props.app.state.huidigScherm === "Alarm") {
            return (
                <main>
                    <div className={"titel"}>
                        <h1>Welkom bij uw medicatie-alarmen</h1>
                        <p>Hier ziet u alle alarmen die u heeft ingesteld zodat u het innemen van de medicatie niet
                            vergeet</p>
                    </div>
                    <div className="alarm-tabel">
                        <table>
                            <tbody>
                            <tr id={"tabel-titel"}>
                                <th>Medicatienaam</th>
                                <th>Dosis</th>
                                <th>Tijdstip van inname</th>
                                <th>Bewerken</th>
                            </tr>
                            <tr id={"tabel-rij"}>
                                <td>Aldactazide</td>
                                <td>1 tablet elke dag</td>
                                <td>09:00</td>
                                <td>
                                    <button className={"BewerkMed"}>Bewerken</button>
                                </td>
                            </tr>
                            <tr id={"tabel-rij"}>
                                <td>Allopurinol</td>
                                <td>1 tablet elke dag</td>
                                <td>09:00</td>
                                <td>
                                    <button className={"BewerkMed"}>Bewerken</button>
                                </td>
                            </tr>
                            <tr id={"tabel-rij"}>
                                <td>Lisinopril</td>
                                <td>3 tabletten elke dag</td>
                                <td>09:00, 15:00, 21:00</td>
                                <td>
                                    <button className={"BewerkMed"}>Bewerken</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                    <h1>Alarm toevoegen</h1>
                    <button className={"VoegToeMed"}>Voeg toe</button>
                    <div className="form-table" id="myForm">
                        <table>
                            <tbody>
                            <tr>
                                <th>Naam</th>
                                <th>Dosis</th>
                                <th>Tijdstip</th>
                            </tr>
                            <tr>
                                <td><input type={"text"} placeholder={"naam medicatie"} name="mednaam" required/></td>
                                <td><input type={"text"} placeholder={"dosering"} name="meddosis" required/></td>
                                <td><input type={"text"} placeholder={"gewenste tijdstip van inname"} name="medtijd" required/></td>
                            </tr>

                            </tbody>
                        </table>
                    </div>

                </main>
            )
        } else {
        }
    }
}