import './App.css'
import React from 'react'

export default class Geschiedenis extends React.Component {
    render() {
        if (this.props.app.state.huidigScherm === "Geschiedenis") {
            return (
                <main>
                    <div className={"titel"}>
                        <h1>Welkom bij uw medicatiegeschiedenis</h1>
                        <p>Hier ziet u alle medicatie waar u mee gestopt bent</p>
                    </div>
                    <div className="geschiedenis-tabel">
                        <table>
                            <tbody>
                            <tr id={"tabel-titel"}>
                                <th>Medicatienaam</th>
                                <th>Dosis</th>
                            </tr>
                            <tr id={"tabel-rij"}>
                                <td>Antibiotica</td>
                                <td>3 tabletten per dag</td>
                            </tr>
                            <tr id={"tabel-rij"}>
                                <td>Paracetamol</td>
                                <td>Bij klachten, maximaal 4 tabletten per dag</td>
                            </tr>
                            <tr id={"tabel-rij"}>
                                <td>Warfarine</td>
                                <td>1 tablet per dag</td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                    <h1>Oude medicatie toevoegen</h1>
                    <button className={"VoegToeMed"}>Voeg toe</button>
                    <div className="form-table" id="myForm">
                        <table>
                            <tbody>
                            <tr>
                                <th>Naam</th>
                                <th>Dosis</th>
                            </tr>
                            <tr>
                                <td><input type={"text"} placeholder={"naam medicatie"} name="mednaam" required/></td>
                                <td><input type={"text"} placeholder={"dosering"} name="meddosis" required/></td>
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