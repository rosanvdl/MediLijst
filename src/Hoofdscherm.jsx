import './App.css'
import React from 'react'
import Elementen from './Elementen.jsx';
import {elementen} from "./Constanten.jsx";

export default class Hoofdscherm extends React.Component {


    render() {
        if (this.props.app.state.huidigScherm === "Home") {

            return (
                <div id={"Home"}>
                    <div className={"titel"}>
                        <h1>Welkom bij MediLijst</h1>
                        <h3>Uw online medicatieoverzicht</h3>
                        <p>Kies hieronder waar u naar toe wilt</p>
                    </div>

                    <div className={"objecten"}>
                        {Object.entries(elementen).map((item) => {
                            return <Elementen key={item[0]} element={item[1]} app={this.props.app} id={item[0]}/>
                        })
                        }
                    </div>
                </div>
            )

        } else {
        }
    }
}