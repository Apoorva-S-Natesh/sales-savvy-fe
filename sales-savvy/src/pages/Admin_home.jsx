import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Admin_home() {
  return (
	<>
		<div className="admin-links">
			<h3>Welcome to Admin home</h3>
		</div>
		<NavLink to="/pm" className="admin-card">Product Management</NavLink>
		<NavLink to="/um" className="admin-card">User Management</NavLink>
	</>
  )
}