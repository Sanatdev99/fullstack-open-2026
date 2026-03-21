import { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification' 

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [infoMessage, setInfoMessage] = useState(null)
  const [messageType, setMessageType] = useState('success')
  
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  // Helper function to handle notifications easily
  const notify = (message, type = 'success') => {
    setInfoMessage(message)
    setMessageType(type)
    setTimeout(() => {
      setInfoMessage(null)
    }, 5000)
  }

  const addName = (event) => {
    event.preventDefault()
    
    const existingPerson = persons.find(p => 
      p.name.toLowerCase() === newName.toLowerCase()
    )

    if (existingPerson) {
      const ok = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      )

      if (ok) {
        const changedPerson = { ...existingPerson, number: newNumber }

        personService
          .update(existingPerson.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(p => p.id !== existingPerson.id ? p : returnedPerson))
            setNewName('')
            setNewNumber('')
            notify(`Updated ${returnedPerson.name}'s number`) // Success Notification
          })
          .catch(() => {
            notify(`Information of ${newName} has already been removed from server`, 'error') // Error Notification
            setPersons(persons.filter(p => p.id !== existingPerson.id))
          })
      }
      return 
    }

    const nameObject = { name: newName, number: newNumber }

    personService
      .create(nameObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        notify(`Added ${returnedPerson.name}`) // Success Notification
      })
  }

  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id)
    
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
          notify(`Deleted ${person.name}`) // Success Notification
        })
        .catch(() => {
          notify(`Information of ${person.name} was already removed from server`, 'error')
          setPersons(persons.filter(p => p.id !== id))
        })
    }
  }

  const personsToShow = filter === ''
    ? persons
    : persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))

  return (
  <div className="min-h-screen bg-neutral-50 p-6 md:p-10 font-sans text-neutral-900">
    {/* Notification Area */}
    <Notification message={infoMessage} type={messageType} />

    {/* Main Container */}
    <div className="max-w-7xl mx-auto space-y-12">
      {/* Header & Filter Card */}
      <header className="bg-white p-8 rounded-3xl shadow-lg border border-neutral-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-5xl font-extrabold tracking-tighter text-blue-950">
              Phonebook
            </h1>
            <p className="text-neutral-600 max-w-lg">
              Easily manage and access your contact directory. Filter, add, and update with a modern interface.
            </p>
          </div>
          <Filter value={filter} onChange={(e) => setFilter(e.target.value)} />
        </div>
      </header>

      {/* Content Grid */}
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Left Column: Form Card */}
        <aside className="lg:col-span-1 bg-white p-8 rounded-3xl shadow-lg border border-neutral-100 space-y-8 sticky top-10">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-blue-100 text-blue-700">
              {/* User Plus SVG Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.11" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-neutral-950">
              Add a New Contact
            </h3>
          </div>
          <PersonForm 
            addName={addName}
            newName={newName}
            handleNameChange={(e) => setNewName(e.target.value)}
            newNumber={newNumber}
            handleNumberChange={(e) => setNewNumber(e.target.value)}
          />
        </aside>

        {/* Right Column: Numbers List */}
        <section className="lg:col-span-2 space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-green-100 text-green-700">
              {/* Users SVG Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.94-.313a3 3 0 0 0-1.406-1.557m1.128-.302A9.102 9.102 0 0 1 21 17.25m-3 0v.008m-4.5 10.511a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.94-.313a3 3 0 0 0-1.406-1.557m1.128-.302A9.102 9.102 0 0 1 21 17.25m-3 0v.008M9.75 19.11h0a3.375 3.375 0 0 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.11" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-neutral-950">
              Registered Contacts ({personsToShow.length})
            </h3>
          </div>
          <Persons personsToShow={personsToShow} deletePerson={deletePerson} />
        </section>
      </main>
    </div>
  </div>
)
}

export default App