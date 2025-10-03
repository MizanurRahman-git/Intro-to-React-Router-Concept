import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const GallaryDetail = () => {

    const details = useLoaderData()

    const navigate = useNavigate()

    const {title,id} = details;

    return (
        <div>
            <h2>This is Gallary Details</h2>
            <p>{id}</p>
            <h3>{title}</h3>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default GallaryDetail;