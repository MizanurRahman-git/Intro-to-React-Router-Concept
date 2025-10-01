import React from 'react';
import { useLoaderData } from 'react-router';

const Gallary = () => {

    let data = useLoaderData()
    console.log(data)
    return (
        <div>
            <h2>This Is Gallary Section:{data.length} </h2>
        </div>
    );
};

export default Gallary;