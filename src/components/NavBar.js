import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
const NavBar = () => {
  return (
    // <nav>
    //   <ul>
    //     <li>
    //       <Link to="/">ApplyLoan</Link>
    //     </li>
    //     <li>
    //       <Link to="/payloan">PayLoan</Link>
    //     </li>
    //     <li>
    //       <Link to="/myloans">MyLoans</Link>
    //     </li>
    //   </ul>
    // </nav>

    <header class="header">
		<div class="left">
			<a href="#">Bank Credit Facility</a>
		</div>
  <div class="mid">
		<ul class="navbar">
			 <li>
      <Link to="/">ApplyLoan</Link>
    </li>
    <li>
      <Link to="/payloan">PayLoan</Link>
    </li>
    <li>
      <Link to="/myloans">MyLoans</Link>
    </li>
		</ul>
   
  </div>
	<div class="right">
          <a href="#">Welcome User</a>
        </div>

    </header>
  
  );
};

export default NavBar;
