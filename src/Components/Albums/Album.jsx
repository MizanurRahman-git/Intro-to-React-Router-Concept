import React from 'react';
import { Link } from 'react-router';

const Album = ({info}) => {
    const {userId, title, id} = info;

    const cartStyle ={
        border: '1px solid yellow',
        borderRadius : '20px',
        padding: '10px',
        margin: '10px'
    }

    return (
        <div style={cartStyle}>
            <h1> UserId: {userId}</h1>
            <h2> Title: {title}</h2>
            <Link to={`/gallary/${id}`}>Show More Details</Link>
        </div>
    );
};

export default Album;