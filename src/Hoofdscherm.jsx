import './App.css'
import React from 'react'
import elementen from "./Elementen.jsx";
export default class Hoofdscherm extends React.Component {
    render() {
        return (
            <div>
                <div className={"hoofdscherm-titel"}>
                    <h1>Welkom bij MediLijst</h1>
                    <h3>Uw online medicatieoverzicht</h3>
                    <p>Kies hieronder waar u naar toe wilt</p>
                </div>
                {Object.entries(elementen).map((item) => {
                    return <Element key={item[0]} element={item[1]} canvas={this} id={item[0]}/>
                })
                }

            </div>
        )
    }
}