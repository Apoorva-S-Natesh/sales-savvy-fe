function App() {
	async function send() {
		const resp = await fetch('http://localhost:8080/data')
		const msg = await resp.text(
		alert(msg)
		)
	}
   return (
    <>
      <h4>Welcome to Sales Savvy!</h4>
	  <button onClick={send}>Click</button>
    </>
  )
}