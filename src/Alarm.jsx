import './App.css'
import React from 'react'

export default class Alarm extends React.Component {
    render() {
        if (this.props.app.state.huidigScherm === "Alarm") {
            return (
                <main>
                    <div className={"alarm-titel"}>
                        <h1>Welkom bij uw medicatie-alarmen</h1>
                        <p>Hier ziet u alle alarmen die u heeft ingesteld zodat u het innemen van de medicatie niet vergeet</p>
                    </div>

                </main>
            )
        }
        else {}
    }
}