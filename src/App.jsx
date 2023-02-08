import './App.css'
import React from 'react'
import Hoofdscherm from './Hoofdscherm.jsx'
import Navigatiebalk from "./Navigatiebalk.jsx";
import Overzicht from "./Overzicht.jsx";
import Alarm from "./Alarm.jsx";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                huidigScherm: "Home"
        }
    }
    render() {

        return (
            <main>
                <Navigatiebalk/>
                <Hoofdscherm app={this}/>
                <Overzicht app={this}/>
                <Alarm app={this}/>
            </main>
        )
    }
}
