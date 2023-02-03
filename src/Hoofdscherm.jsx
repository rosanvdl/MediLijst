import './App.css'
import React from 'react'
export default class Hoofdscherm extends React.Component {
    render() {
        return (
            <main>
                <div className={"hoofdscherm-titel"}>
                    <h1>Welkom bij MediLijst</h1>
                    <h3>Uw online medicatieoverzicht</h3>
                    <p>Kies hieronder waar u naar toe wilt</p>
                </div>
                <div className="grid-container">
                    <div className="grid-item">
                        <div className="card">
                            <div className="card-body">
                                <img id="foto-overzicht" src={"./overzicht.png"} alt="Pillendoos"></img>
                                <h3 className="card-title">Overzicht</h3>
                                <p className="card-text">Zie een overzicht van al uw medicatie.</p>
                                <a href="overzicht.html" className="card-link">Naar uw overzicht→</a>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Alarm</h3>
                                <p className="card-text">Zet hier een alarm voor het innemen <br></br> van uw medicatie.
                                </p>
                                <a href="alarm.html" className="card-link">Naar uw medicatie reminders→</a>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Geschiedenis</h3>
                                <p className="card-text">Zie hier een overzicht van alle <br></br>medicatie die u nu
                                    niet meer gebruikt.</p>
                                <a href="geschiedenis.html" className="card-link">Naar uw overzicht→</a>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item"></div>
                    <div className="grid-item">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Consult</h3>
                                <p className="card-text">Weet wat u moet doen als voorbereiding op het
                                    consult. <br></br>Download, print uit en neem uw overzicht mee naar het consult.</p>
                                <a href="consult.html" className="card-link">Naar het consult→</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}