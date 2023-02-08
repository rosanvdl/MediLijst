import React from 'react';


export default class VoegToeOverzicht extends React.Component {

    render() {
        return <dialog>
            <dialogTitle>Toevoegen</dialogTitle>
            <dialogContent>
                <dialogContentText>Vul de informatie in over het medicijn dat u neemt</dialogContentText>
                <textField id ="medicijnNaam" label="Naam van het medicijn"></textField>
                <Button onClick={handleClose}>Annuleer</Button>
                <Button onClick={this.overzichtToevoegen.bind(this)}>Toevoegen</Button>
            </dialogContent>

        </dialog>
    }

    overzichtToevoegen = () => {
        const app = this.props.app
    }
}
