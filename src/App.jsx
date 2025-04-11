import React from 'react';
import AfricanMap from './AfricanMap';
import './styles.css';

const App = () => {
    return (
        <div className="app-container">
{/*
            <h1>African Countries Interactive Map</h1>
*/}
            <p className="description">Click on any country to learn more about it</p>
            <AfricanMap />
        </div>
    );
};

export default App;