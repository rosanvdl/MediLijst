import './App.css'
import React from 'react'
import Elementen from './Elementen.jsx';
import {elementen} from "./Constanten.jsx";
export default class Hoofdscherm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: {
                huidigScherm: "hoofdscherm"
            }
        }
    }

    render() {
        if (this.state.status.huidigScherm === "hoofdscherm") {
            return (
                <div>
                    <div className={"hoofdscherm-titel"}>
                        <h1>Welkom bij MediLijst</h1>
                        <h3>Uw online medicatieoverzicht</h3>
                        <p>Kies hieronder waar u naar toe wilt</p>
                    </div>


                    {Object.entries(elementen).map((item) => {
                        return <Elementen key={item[0]} element={item[1]} hoofdscherm={this} id={item[0]}/>
                    })
                    }

                </div>
            )
        }
        else {}
    }
}