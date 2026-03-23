import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Content from './components/Content'

const App = () => {
  const [query, setQuery] = useState('')
  const [allCountries, setAllCountries] = useState([])
  const [results, setResults] = useState([])

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => setAllCountries(response.data))
  }, [])

  const handleSearch = (event) => {
    const val = event.target.value
    setQuery(val)
    setResults(allCountries.filter(c => 
      c.name.common.toLowerCase().includes(val.toLowerCase())
    ))
  }

  const handleShow = (name) => {
    setQuery(name)
    setResults(allCountries.filter(c => c.name.common === name))
  }

  return (
    <div className="min-h-screen bg-neutral-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-black mb-8">Country <span className="text-blue-600">Finder</span></h1>
        <Filter query={query} handleSearch={handleSearch} />
        <Content results={results} setQuery={handleShow} />
      </div>
    </div>
  )
}

export default App