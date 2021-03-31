import React from 'react';

const card=({name, email, id})=>{
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow ba bw2 shadow-5">
           <img alt="robots" src={`https://robohash.org/${id}test`} width="200px" height="200px"></img>
           <div>
           <h2>{name}</h2>
           <p>{email}</p>
           </div>
        </div>
    );
}

export default card;