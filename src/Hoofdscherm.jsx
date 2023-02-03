import './App.css'
import React from 'react'
export default class Hoofdscherm extends React.Component {
    render() {
        return (
            <div>
                <div className={"hoofdscherm-titel"}>
                    <h1>Welkom bij MediLijst</h1>
                    <h3>Uw online medicatieoverzicht</h3>
                    <p>Kies hieronder waar u naar toe wilt</p>
                </div>
                 {/*element aanmaken met property elementen*/}
            </div>
        )
    }
}