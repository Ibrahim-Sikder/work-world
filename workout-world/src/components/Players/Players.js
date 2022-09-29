import React from 'react';
import './Players.css'

const Players = (props) => {
    console.log(props.players);
    const {name,id,description,Time,age,img
    }=props.players;
 

    return (
        <div className='players-container'>
            <img className='img' src={img} alt=''></img>
           <div className='details'>
            <h3> Name : {name} </h3>
           <p><span className='id'>id:</span>{id}</p>
            <p><span className='desc'>Description:</span>{description}</p>
            <p><span className='age'>Age:</span>{age}</p>
            <p><span className='time'>Time:</span>{Time}</p>
           </div>
           
            <button className='btn btn-primary mb-5'>Add to Cart</button>
          

            
        </div>
    );
};

export default Players;