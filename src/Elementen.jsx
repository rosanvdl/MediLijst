import React from 'react';
class Elementen extends React.Component {

    render() {
        const {titel, beschrijving, image, link} = this.props.element;

        return <div className="grid-item">
            <div className="card">
                <div className="card-body">
                    <img className="card-image" src={image} alt={"test"}></img>
                    <h3 className="card-title">{titel}</h3>
                    <p className="card-text">{beschrijving}</p>
                    <button className="card-button-link">Naar uw {link}→</button>
                </div>
            </div>
        </div>
    }
}
    export default Elementen;