import React from 'react';
import { Link, useNavigate } from 'react-router';

const Album = ({info}) => {
    const {userId, title, id} = info;

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/gallary/${id}`)
    }

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

            <button onClick={handleNavigate}>Details of: {id} </button>
        </div>
    );
};

export default Album;