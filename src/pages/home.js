import React from "react";
import {Outlet,Link} from 'react-router-dom';



function Home (){
   
        return(
            <div>
		<nav>
      <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      
      <ul>
        <li><Link to="/" id="nav-a">Home</Link></li>
        <li><Link to="Story" id="nav-a">Story</Link></li>
        <li><Link to="Races" id="nav-a">Races</Link></li>
        <li><Link to="Roadmap" id="nav-a">Roadmap</Link></li>
        <li><Link to="Utilities" id="nav-a">Utilities</Link></li>
        <li><Link to="Team" id="nav-a">Team</Link></li>
        <li><Link to="Faq" id="nav-a">Faq</Link></li>
		<Outlet />
      </ul>
    </nav>
    <section id="header">
          <div class="header-content">
		  	<img src="assets/Valarok.png" id="header-logo" alt="background" />
              <p>Valarok is a vision<br />
                 A new world to build together<br />
                 An ancient history shaped into our future that is revolutionalizing our present.<br />
                 A unique opportunity in the Metaverse.<br />
                 A collection of nFT collections based on 3 different races that <br />
                 will grant you access to a variety of content and perks.<br />
                 A chance to attend rewarded events, challenges and games.<br />
                 A beginning of a reality that is here to remain.<br />
               </p>
               <h1>WELCOME TO VALAROK</h1>
          </div>
    </section>
    

	 
            </div>
        )
    }
export default Home;