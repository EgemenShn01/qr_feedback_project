// src/components/Rating.jsx

import React, { useState } from 'react';
import axios from 'axios';
import '../index.css';

// Yıldız simgeleri için değişkenler
const STAR_FILLED = "src/assets/star-filled.png";
const STAR_EMPTY = "src/assets/star-empty.png";

const Rating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = async (value) => {
        setRating(value);
        try {
            const response = await axios.post('http://localhost:5000/api/ratings', {
                rating: value,
            });
            console.log('Başarıyla gönderildi:', response.data);
        } catch (error) {
            console.error('Gönderim hatası:', error);
        }
    };

    return (
        <div className="rating-container">
            <h2>Hasan Usta Deneyiminiz nasıldı?</h2>
            <div className="stars">
                {[1, 2, 3, 4, 5].map((value) => (
                    <img
                        key={value}
                        src={value <= (hover || rating) ? STAR_FILLED : STAR_EMPTY}
                        className="star"
                        alt={`${value} Yıldız`}
                        onClick={() => handleClick(value)}
                        onMouseEnter={() => setHover(value)}
                        onMouseLeave={() => setHover(0)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Rating;
