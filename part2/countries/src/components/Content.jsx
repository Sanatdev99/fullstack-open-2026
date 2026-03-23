import CountryDetail from './CountryDetail'

const Content = ({ results, setQuery }) => {
  if (results.length > 10) {
    return <div className="p-4 bg-amber-50 text-amber-700 rounded-xl border border-amber-200 italic">Too many matches, specify another filter</div>
  }

  if (results.length > 1) {
    return (
      <ul className="space-y-3">
        {results.map(c => (
          <li key={c.name.common} className="flex justify-between items-center p-4 bg-white border border-neutral-100 rounded-xl shadow-sm">
            <span className="font-bold">{c.name.common}</span>
            <button
              onClick={() => setQuery(c.name.common)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700"
            >
              Show
            </button>
          </li>
        ))}
      </ul>
    )
  }

  if (results.length === 1) {
    return <CountryDetail country={results[0]} />
  }

  return null
}

export default Content