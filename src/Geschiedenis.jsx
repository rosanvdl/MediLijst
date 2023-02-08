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
                                <th className={"Nummer"}>Nummer</th>
                                <th>Medicatienaam</th>
                                <th>Dosis</th>
                            </tr>
                            <tr id={"tabel-rij"}>
                                <td className={"Nummer-text"}>1</td>
                                <td>Antibiotica</td>
                                <td>3 tabletten per dag</td>
                            </tr>
                            <tr id={"tabel-rij"}>
                                <td className={"Nummer-text"}>2</td>
                                <td>Paracetamol</td>
                                <td>Bij klachten, maximaal 4 tabletten per dag</td>
                            </tr>
                            <tr id={"tabel-rij"}>
                                <td className={"Nummer-text"}>3</td>
                                <td>Warfarine</td>
                                <td>1 tablet per dag</td>
                            </tr>
                            </tbody>
                        </table>
                        <button className={"VoegToeMed"}>Voeg toe</button>
                    </div>

                </main>
            )
        } else {
        }
    }
}