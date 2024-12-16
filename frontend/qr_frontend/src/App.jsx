
import React from 'react';
import Rating from './components/Rating';
import './index.css';

function App() {
    return (
        <div className="container">
            {/* Markanın Logosu */}
            <div className="logo-container">
                <img src="src/assets/logo.png" alt="Marka Logosu" className="logo" />
            </div>
            
            {/* Yıldız Değerlendirme */}
            <Rating />
        </div>
    );
}

export default App;
