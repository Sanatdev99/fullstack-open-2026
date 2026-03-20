import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  // Fetch initial data from the server when the component mounts
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        // Update the state with data received from the server
        setPersons(response.data) 
      })
  }, []) // Empty array ensures this effect runs only once after the first render

  const addName = (event) => {
    event.preventDefault()
    
    // Check if the name already exists in the phonebook (case-insensitive)
    if (persons.some(p => p.name.toLowerCase() === newName.toLowerCase())) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    // Create a new person object
    const nameObject = { 
      name: newName, 
      number: newNumber 
    }
    
    // Send the new person to the server (POST request)
    axios
      .post('http://localhost:3001/persons', nameObject)
      .then(response => {
        // Add the person returned by the server (which includes a unique ID) to the state
        setPersons(persons.concat(response.data))
        // Reset input fields
        setNewName('')
        setNewNumber('')
      })
  }
  
  // Logic to determine which persons to display based on the search filter
  const personsToShow = filter === ''
    ? persons
    : persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      
      {/* Component for searching/filtering */}
      <Filter value={filter} onChange={(e) => setFilter(e.target.value)} />

      <h3>Add a new</h3>
      {/* Form component for adding new entries */}
      <PersonForm 
        addName={addName}
        newName={newName}
        handleNameChange={(e) => setNewName(e.target.value)}
        newNumber={newNumber}
        handleNumberChange={(e) => setNewNumber(e.target.value)}
      />

      <h3>Numbers</h3>
      {/* Component for displaying the filtered list of persons */}
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App