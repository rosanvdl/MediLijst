import './App.css'
import React from 'react'

export default class Overzicht extends React.Component {
    render() {
        if (this.props.app.state.huidigScherm === "Overzicht") {
            return (
                <main>
                    <div className={"overzicht-titel"}>
                        <h1>Welkom bij uw medicatie-overzicht</h1>
                        <p>Hier ziet u alle medicatie die u op dit moment inneemt</p>
                    </div>
                    <div className="overzicht-tabel">
                        <table>
                            <tr id={"tabel-titel"}>
                                <th className={"Nummer"}>Nummer</th>
                                <th>Naam</th>
                                <th>Reden</th>
                                <th>Dosis</th>
                                <th className={"Bewerken"}>Bewerken</th>
                            </tr>
                            <tr id={"tabel-rij"}>
                                <td className={"Nummer-text"}>1</td>
                                <td>Aldactazide</td>
                                <td>Hart</td>
                                <td>1 tablet elke dag</td>
                                <button className={"BewerkMed"}>Bewerken</button>
                            </tr>
                            <tr id={"tabel-rij"}>
                                <td className={"Nummer-text"}>2</td>
                                <td>Allopurinol</td>
                                <td>Nieren</td>
                                <td>1 tablet elke dag</td>
                                <button className={"BewerkMed"}>Bewerken</button>
                            </tr>
                            <tr id={"tabel-rij"}>
                                <td className={"Nummer-text"}>3</td>
                                <td>Lisinopril</td>
                                <td>Hart</td>
                                <td>3 tabletten elke dag</td>
                                <button className={"BewerkMed"}>Bewerken</button>
                            </tr>
                        </table>
                        <button className={"VoegToeMed"}>Voeg toe</button>
                    </div>

                </main>
            )
        }
        else {}
    }
}