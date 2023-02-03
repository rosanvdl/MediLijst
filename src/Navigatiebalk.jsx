import './App.css'
import React from 'react'
export default class Navigatiebalk extends React.Component {
    render() {
        return (
            <main>
                <div className="navbar">
                    <button>Home</button>
                    <button>Overzicht</button>
                    <button>Alarm</button>
                    <button>Geschiedenis</button>
                    <div className="navbar-right">
                        <button>Overzicht downloaden</button>
                        <button>Uitloggen</button>
                    </div>
                </div>
            </main>
        )
    }
}