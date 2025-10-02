import React from 'react';
import { useLoaderData } from 'react-router';

const GallaryDetail = () => {

    const details = useLoaderData()

    const {userId, title} = details;

    return (
        <div>
            <h2>This is Gallary Details</h2>
            <p>{userId}</p>
            <h3>{title}</h3>
        </div>
    );
};

export default GallaryDetail;