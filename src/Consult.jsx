import './App.css'
import React from 'react'


export default class Consult extends React.Component {
    render() {
        if (this.props.app.state.huidigScherm === "Consult") {
            return (
                <main>
                <div className={"titel"}>
                    <h1>Download uw medicatieoverzicht</h1>
                    <p>Neem dit overzicht mee naar uw volgende consult</p>
                    <button>Download</button>
                </div>

        </main>
        )
        } else {
        }
    }
}