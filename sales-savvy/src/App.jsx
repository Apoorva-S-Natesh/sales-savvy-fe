import { useState } from "react";

function App() {

	const [username, setUsername] = useState('')
	
	function handleChange(e){
		setUsername(e.target.value)
	}

	async function handleSubmit(e) {
		e.preventDefault() //for avoiding automatic submission
		const resp = await fetch('http://localhost:8080/data',
			{
				method: 'POST',
				body: JSON.stringify({'username': username})
			});
		const msg = await resp.text(
		alert(msg)
		)
	}
   return (
    <>
      <h4>Welcome to Sales Savvy!</h4>
	  <form onSubmit={handleSubmit}>
		<label>Enter username: </label>
		<input type = "text" name = "username" value = {usrname} 
		onChange={handleChange}></input>
		<button type="submit">SEND</button>
	  </form>
    </>
  )
}

export default App