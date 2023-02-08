import './App.css'
import React from 'react'
import {elementen} from "./Constanten.jsx";
import Elementen from "./Elementen.jsx";
import overzichtRow from "./OverzichtRow.jsx";

export default class Overzicht extends React.Component {
    render() {
        if (this.props.app.state.huidigScherm === "Overzicht") {
            return (
                <main>
                    <div className={"titel"}>
                        <h1>Welkom bij uw medicatie-overzicht</h1>
                        <p>Hier ziet u alle medicatie die u op dit moment inneemt</p>
                    </div>


                    <div className={"objecten"}>
                        {Object.entries(this.props.app.state.overzichtTabel).map((item) => {
                            return <OverzichtRow naam={item[0]} reden={item[1]} dosis={item[2]} app={this.props.app} id={item[0]}/>
                        })
                        }
                    </div>






                    <div className="overzicht-tabel">
                        <table>
                            <tbody>
                            <tr id={"tabel-titel"}>
                                <th>Naam</th>
                                <th>Reden</th>
                                <th>Dosis</th>
                                <td>Bewerken</td>
                            </tr>
                            <tr id={"tabel-rij"}>
                                <td className={"Nummer-text"}>1</td>
                                <td>Aldactazide</td>
                                <td>Hart</td>
                                <td>1 tablet elke dag</td>
                                <td>
                                    <button className={"BewerkMed"}>Bewerken</button>
                                </td>
                            </tr>
                            <tr id={"tabel-rij"}>
                                <td className={"Nummer-text"}>2</td>
                                <td>Allopurinol</td>
                                <td>Nieren</td>
                                <td>1 tablet elke dag</td>
                                <td>
                                    <button className={"BewerkMed"}>Bewerken</button>
                                </td>
                            </tr>
                            <tr id={"tabel-rij"}>
                                <td className={"Nummer-text"}>3</td>
                                <td>Lisinopril</td>
                                <td>Hart</td>
                                <td>3 tabletten elke dag</td>
                                <td>
                                    <button className={"BewerkMed"}>Bewerken</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <button className={"VoegToeMed"}>Voeg toe</button>
                    </div>

                </main>
            )
        }
        else {}
    }

}