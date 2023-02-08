import './App.css'
import React from 'react'
import Hoofdscherm from './Hoofdscherm.jsx'
import Navigatiebalk from "./Navigatiebalk.jsx";
import Overzicht from "./Overzicht.jsx";
import Alarm from "./Alarm.jsx";
import Geschiedenis from "./Geschiedenis.jsx";
import Consult from "./Consult.jsx"
import Uitloggen from "./Uitloggen"
import VoegToeOverzicht from "./VoegToeOverzicht.jsx";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                huidigScherm: "Home",
                overzichtTabel: []
        }
    }
    render() {

        return (
            <main>
                <Navigatiebalk app={this}/>
                <Hoofdscherm app={this}/>
                <Overzicht app={this}/>
                <Alarm app={this}/>
                <Geschiedenis app={this}/>
                <Consult app={this}/>
                <Uitloggen app={this}/>
                <VoegToeOverzicht app={this}/>
            </main>
        )
    }
}
