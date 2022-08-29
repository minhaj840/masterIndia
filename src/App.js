import React, { useState } from "react"


function App() {
  const [users, setUsers] = useState([])

  const fetchData = e => {
    const query = e.target.value
    fetch(`https://jsonplaceholder.typicode.com/users?q=${query}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  return (
    <div >
    <h1> first write any word in Search box then it will list all data from api </h1>
      <input onChange={fetchData} label="Search User" />
      {users.length > 0 && (
        <ul >
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App;
