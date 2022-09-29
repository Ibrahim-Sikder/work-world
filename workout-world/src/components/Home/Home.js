import React, { useEffect, useState } from 'react';
import Players from '../Players/Players'; 
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { FaAccessibleIcon } from "react-icons/fa";

import './Home.css';

const Home = () => {

  const displayToast = () =>{
    toast.success("Wow! You have completed your daily activity.");
  
  }




  const [players,setPlayers]=useState([]);
  useEffect(()=>{
   fetch(`products.json`)
   .then(res =>res.json())
   .then(data =>setPlayers(data))
  },[])

  
    return (
      <div>
        <div>
        <div className="fitnessClub">
        <small class="fitnessIcon"> <FaAccessibleIcon></FaAccessibleIcon> </small>
          <h1 className='head'>Fitness for life </h1>
        </div>
          <h6 className="selectToday">Select today’s exercise</h6>
          
        </div>
        
        <div className='home'>
          <div className='home-container'>
            {
              players.map(player => <Players key={player.id} players={player}></Players>)
            }
          </div>
          <div className='cart-container'>
          
            <div className="personInfo">
                <div className="name">Ibrahim Sikder</div>
                <div className="address">Cox's Bazar, Bangladesh</div>
            </div>
            <div className="measurement">
              <div className="weight">
                <div className="number">75 <small>kg</small> </div>
                <div>Weight</div>
              </div>
              <div className="height">
                <div className="number">75 <small>kg</small> </div>
                <div>Weight</div>
              </div>
              <div className="age">
                <div className="number">75 <small>kg</small> </div>
                <div>Weight</div>
              </div>
            </div>
            <h5 className="Break">Add a break </h5>
            <div className="btnGroup">
              <button>10s</button>
              <button>20s</button>
              <button className="active">30s</button>
              <button>40s</button>
              <button>50s</button>
            </div>

            <div className="excercise-details">
            <h5>Exercise Details</h5>
            <div className="excerciseTime">
              <h6>Exercise time </h6>
              <small>200 seconds </small>
            </div>
            <div className="excerciseTime">
              <h6>Break time </h6>
              <small>15 seconds </small>
            </div>
          </div>
          <button className="completBtn" onClick={displayToast}> Activity Complete </button>
          </div>
         
          <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover />

          
        </div>
      </div>
    );
};

export default Home;