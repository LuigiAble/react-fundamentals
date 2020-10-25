// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [myInputValue, setMyInputValue] = React.useState()

  // Using events
  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(myInputValue)
  }

  const handleChange = event => {
    const {value} = event.target
    setMyInputValue(value.toLowerCase())
  }

  // Using ref
  // const inputRef = useRef(null)
  // const handleSubmit = event => {
  //   event.preventDefault()
  //   const username = inputRef.current.value
  //   onSubmitUsername(username)
  // }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          type="text"
          id="usernameInput"
          value={myInputValue}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
