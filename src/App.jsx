import React from 'react';
import { Helmet } from 'react-helmet';
import AfricanMap from './AfricanMap';
import './styles.css';

const App = () => {
    return (
        <div className="app-container">
            <Helmet>
                <title>African Countries Interactive Map</title>
                <meta
                    name="description"
                    content="Explore an interactive map of African countries with flags, capitals and currencies."
                />
                <meta
                    name="keywords"
                    content="Africa, map, countries, capitals, currencies, flags"
                />
            </Helmet>
            <p className="description">Click on any country to learn more about it</p>
            <AfricanMap />
        </div>
    );
};

export default App;