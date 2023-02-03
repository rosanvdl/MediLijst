import './App.css'
import React from 'react'
import Hoofdscherm from './Hoofdscherm.jsx'
import Navigatiebalk from "./Navigatiebalk.jsx";

export default class App extends React.Component {
    render() {
        return (
            <main>
                <Navigatiebalk/>
                <Hoofdscherm/>
            </main>
        )
    }
}
