import React from "react";
import {Outlet,Link} from 'react-router-dom';


function Races (){
   
        return(
        <div>
		    <nav id="nav-page">
      <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      
      <ul id="nav-page">
        <li><Link to="/" id="nav-a">Home</Link></li>
        <li><Link to="/Story" id="nav-a">Story</Link></li>
        <li><Link to="/Races" id="nav-a">Races</Link></li>
        <li><Link to="/Roadmap" id="nav-a">Roadmap</Link></li>
        <li><Link to="/Utilities" id="nav-a">Utilities</Link></li>
        <li><Link to="/Team" id="nav-a">Team</Link></li>
        <li><Link to="/Faq" id="nav-a">Faq</Link></li>
		<Outlet />
      </ul>
            </nav>
            
            <div class="race-container">
        <div class="race">
            <h1>MELIAN</h1>
            <Link to="/">Info</Link><br /><br /><br />
            <Link to="/Melian" id="race-action">Minting</Link>
        </div>
        <div class="race">
            <h1>SABRIAN</h1>
            <Link to="/">Info</Link><br /><br /><br />
            <Link to="/" id="race-action">Coming Soon</Link>
        </div>
        <div class="race">
            <h1>RANGARK</h1>
            <Link to="/">Info</Link><br /><br /><br />
            <Link to="/" id="race-action">Coming Soon</Link>
        </div>
    </div>

        </div>
        )
    }
export default Races;