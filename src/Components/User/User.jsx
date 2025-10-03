import React, { use } from 'react';
import Users from '../UserDetails/Users';

const User = ({fetchPrimise}) => {

    const PromiseData = use(fetchPrimise)
    

    return (
        <div>
            <h2>Users section: {PromiseData.length} </h2>
            {
                PromiseData.map(data => <Users key={data.id} data={data}/>)
            }
        </div>
    );
};

export default User;