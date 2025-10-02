import React from 'react';
import { useLoaderData } from 'react-router';
import Album from '../Albums/Album';

const Gallary = () => {

    let data = useLoaderData()
    return (
        <div>
            <h2>This Is Gallary Section:{data.length} </h2>
            {
                data.map(info => <Album key={info.id} info={info}/>)
            }
        </div>
    );
};

export default Gallary;