import React from 'react';
import './Players.css'

const Players = (props) => {
    console.log(props.players);
    const {id,description,Time,age,img
    }=props.players;
 

    return (
        <div className='players-container'>
            <img className='img' src={img} alt=''></img>
           <div className='details'>
           <p><span className='id'>id:</span>{id}</p>
            <p><span className='desc'>Description:</span>{description}</p>
            <p><span className='age'>Age:</span>{age}</p>
            <p><span className='time'>Time:</span>{Time}</p>
           </div>
           <div>
            <button className='btn btn-primary'>Add to Cart</button>
           </div>

            
        </div>
    );
};

export default Players;