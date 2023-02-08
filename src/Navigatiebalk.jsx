import './App.css'
import React from 'react'

export default class Navigatiebalk extends React.Component {
    render() {
        return (
            <div className="navbar">
                <button onClick={this.naarHome()}>Home</button>
                <button>Overzicht</button>
                <button>Alarm</button>
                <button>Geschiedenis</button>
                <div className="navbar-right">
                    <button>Consult</button>
                    <button>Uitloggen</button>
                </div>
            </div>

        )
    }
    naarHome = () => {
        const app = this.props.app;
        app.setState({huidigScherm: "Home"})
    }

}