import React, { use } from 'react';

const User = ({fetchPrimise}) => {

    const PromiseData = use(fetchPrimise)
    

    return (
        <div>
            <h2>Users section: {PromiseData.length} </h2>
        </div>
    );
};

export default User;