import React, { use } from 'react';

const UserDetails = ({fetchPromise}) => {
    const user2 = use(fetchPromise)
    console.log(user2)

    const {phone, website} = user2;

    return (
        <div>
            <h2>Phone: {phone} </h2>
            <h3>website: {website} </h3>
        </div>
    );
};

export default UserDetails;