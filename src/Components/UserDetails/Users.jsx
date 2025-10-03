import React, { Suspense, useState } from 'react';
import UserDetails from './UserDetails';


const userStyle = {
    border: '1px solid blue',
    margin: '15px',
    borderRadius: '20px'
}

const Users = ({data}) => {

    const {name , email , username, id} = data;

    const fetchPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());

    const [showInfo , setShowInfo] = useState(false)

    return (
        <div style={userStyle}>
            <h1>{name}</h1>
            <h2>{username}</h2>
            <h3>{email}</h3>
            <button onClick={()=> setShowInfo(!showInfo)}>{showInfo ? "Hide" : "Show"} Info</button>

            {
               showInfo && <Suspense fallback={<h2>Loading...</h2>}>
                <UserDetails fetchPromise={fetchPromise}/>
               </Suspense> 
            }
        </div>
    );
};

export default Users;