import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Product_management() {
  return (
	<>
		<h3>Manage your product here:</h3>
		<NavLink to = "/addProd">Add new Product</NavLink>
		<br></br>
		<NavLink to = "/updateProd">Update existing Product</NavLink>
		<br></br>
		<NavLink to = "/searchProd">Search Product</NavLink>
		<br></br>
		<NavLink to = "/deleteProd">Delete Product</NavLink>
	</>
  )
}
