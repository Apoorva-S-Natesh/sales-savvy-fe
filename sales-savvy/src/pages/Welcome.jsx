import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Welcome() {
  return (
	<>
	  <h4>Welcome Page</h4>
	  <NavLink to="/Sign_up">Sign Up</NavLink>
	  <br></br><br></br>
	  <NavLink to="/Sign_in">Sign In</NavLink>
	</>
  )
}
