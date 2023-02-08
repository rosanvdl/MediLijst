import './App.css'
import React from 'react'


export default class Overzicht extends React.Component {
    render() {
        if (this.props.app.state.huidigScherm === "Overzicht") {
            return (
                <main>
                    <div className={"titel"}>
                        <h1>Welkom bij uw medicatie-overzicht</h1>
                        <p>Hier ziet u alle medicatie die u op dit moment gebruikt</p>
                    </div>

                    <div className="overzicht-tabel">
                        <table>
                            <tbody>
                            <tr id={"tabel-titel"}>
                                <th>Naam</th>
                                <th>Reden</th>
                                <th>Dosis</th>
                                <td>Bewerken</td>
                                <td>Oude medicatie</td>
                            </tr>
                            <tr id={"tabel-rij"}>
                                <td>Aldactazide</td>
                                <td>Hart</td>
                                <td>1 tablet elke dag</td>
                                <td>
                                    <button className={"BewerkMed"}>Bewerken</button>
                                </td>
                                <td>
                                    <button onClick={this.naarGeschiedenis.bind(this)}>Gebruik ik niet meer</button>
                                </td>
                            </tr>
                            <tr id={"tabel-rij"}>
                                <td>Allopurinol</td>
                                <td>Nieren</td>
                                <td>1 tablet elke dag</td>
                                <td>
                                    <button className={"BewerkMed"}>Bewerken</button>
                                </td>
                                <td>
                                    <button onClick={this.naarGeschiedenis.bind(this)}>Gebruik ik niet meer</button>
                                </td>
                            </tr>
                            <tr id={"tabel-rij"}>
                                <td>Lisinopril</td>
                                <td>Hart</td>
                                <td>3 tabletten elke dag</td>
                                <td>
                                    <button className={"BewerkMed"}>Bewerken</button>
                                </td>
                                <td>
                                    <button onClick={this.naarGeschiedenis.bind(this)}>Gebruik ik niet meer</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>


                        <h1>Medicatie toevoegen</h1>
                        <button className="VoegToeMed">Voeg toe</button>
                        <div className="form-table" id="myForm">
                            <table>
                                <tbody>
                                <tr>
                                    <th>Naam</th>
                                    <th>Reden</th>
                                    <th>Dosis</th>
                                </tr>
                                <tr>
                                    <td><input type={"text"} placeholder={"naam medicatie"} name="mednaam" required/></td>
                                    <td><input type={"text"} placeholder={"reden van inname"} name="medreden" required/></td>
                                    <td><input type={"text"} placeholder={"dosering"} name="meddosis" required/></td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>


                </main>
            )

        } else {}

    }
    naarGeschiedenis = () => {
        const app = this.props.app;
        app.setState({huidigScherm: "Geschiedenis"})
    }
}