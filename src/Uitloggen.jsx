import './App.css'
import React from 'react'

export default class Uitloggen extends React.Component {
    render() {
        if (this.props.app.state.huidigScherm === "Uitloggen") {
            return (
                <main>
                    <div className={"titel"}>
                        <h1>U bent uitgelogd</h1>
                        <p>Fout gemaakt? Toch weer inloggen?</p>
                        <button onClick={this.naarHome}> Klik hier</button>
                    </div>


                </main>
            )
        }
        else {}
    }
    naarHome = () => {
        const app = this.props.app;
        app.setState({huidigScherm: "Home"})
    }
}