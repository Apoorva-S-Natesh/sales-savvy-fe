import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Admin_home() {
  return (
	<>
		<h3>Welcome to Admin_home</h3>
		<NavLink to="/pm">Product Management</NavLink>
		<br></br><br></br>
		<NavLink to="/um">User Management</NavLink>
	</>
  )
}