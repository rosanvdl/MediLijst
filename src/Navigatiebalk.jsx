import './App.css'
import React from 'react'

export default class Navigatiebalk extends React.Component {
    render() {
        return (
            <div className="navbar">
                <button onClick={this.naarHome.bind(this)}>Home</button>
                <button onClick={this.naarOverzicht.bind(this)}>Overzicht</button>
                <button onClick={this.naarAlarm.bind(this)}>Alarm</button>
                <button onClick={this.naarGeschiedenis.bind(this)}>Geschiedenis</button>
                <div className="navbar-right">
                    <button onClick={this.naarConsult.bind(this)}>Consult</button>
                    <button onClick={this.naarUitloggen.bind(this)}>Uitloggen</button>
                </div>
            </div>

        )
    }

    naarHome = () => {
        const app = this.props.app;
        app.setState({huidigScherm: "Home"})
    }
    naarOverzicht = () => {
        const app = this.props.app;
        app.setState({huidigScherm: "Overzicht"})
    }
    naarAlarm = () => {
        const app = this.props.app;
        app.setState({huidigScherm: "Alarm"})
    }
    naarGeschiedenis = () => {
        const app = this.props.app;
        app.setState({huidigScherm: "Geschiedenis"})
    }
    naarConsult = () => {
        const app = this.props.app;
        app.setState({huidigScherm: "Consult"})
    }
    naarUitloggen = () => {
        const app = this.props.app;
        app.setState({huidigScherm: "Uitloggen"})
    }

}