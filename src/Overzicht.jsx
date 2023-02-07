import './App.css'
import React from 'react'

class Overzicht extends React.Component {
    render() {
        if (this.state.status.huidigScherm === "Overzicht") {
            return (
                <main>
                    <div className="overzicht-tabel">
                        <table>
                            <tr>
                                <th>Nummer</th>
                                <th>Foto</th>
                                <th>Naam</th>
                                <th>Reden</th>
                                <th>Dosis</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <img>""</img>
                                <td>Aldactazide</td>
                                <td>Hart</td>
                                <td>1 tablet elke dag</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <img>""</img>
                                <td>Allopurinol</td>
                                <td>Nieren</td>
                                <td>1 tablet elke dag</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <img>""</img>
                                <td>Lisinopril</td>
                                <td>Hart</td>
                                <td>3 tabletten elke dag</td>
                            </tr>
                        </table>
                    </div>
                </main>
            )
        }
        else {}
    }
}