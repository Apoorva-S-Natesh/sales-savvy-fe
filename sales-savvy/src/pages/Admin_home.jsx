import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Admin_home() {
  return (
	<>
		<div>
			<h3>Welcome to Admin_home</h3>
		</div>
		<NavLink to="/pm" className="admin-card">Product Management</NavLink>
		<br></br><br></br>
		<NavLink to="/um" className="admin-card">User Management</NavLink>
	</>
  )
}