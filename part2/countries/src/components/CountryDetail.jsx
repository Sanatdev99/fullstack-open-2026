import Weather from './Weather'

const CountryDetail = ({ country }) => {
  const capitalCity = country.capital?.[0]

  return (
    <div className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-5xl font-black mb-6 text-neutral-900">{country.name.common}</h2>
      
      {/* Capital and Area Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="p-4 bg-neutral-50 rounded-2xl">
          <p className="text-sm text-neutral-500 uppercase font-bold tracking-wider">Capital</p>
          <p className="text-xl font-semibold">{capitalCity || 'N/A'}</p>
        </div>
        <div className="p-4 bg-neutral-50 rounded-2xl">
          <p className="text-sm text-neutral-500 uppercase font-bold tracking-wider">Area</p>
          <p className="text-xl font-semibold">{country.area.toLocaleString()} km²</p>
        </div>
      </div>

      {/* Languages */}
      <h3 className="text-xl font-bold mb-4">Languages:</h3>
      <div className="flex flex-wrap gap-2 mb-8">
        {Object.values(country.languages || {}).map(lang => (
          <span key={lang} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
            {lang}
          </span>
        ))}
      </div>

      {/* Flag */}
      <img
        src={country.flags.png}
        alt={country.name.common}
        className="w-full max-w-xs rounded-2xl shadow-lg mb-8"
      />
      {capitalCity ? (
        <Weather city={capitalCity} />
      ) : (
        <p className="text-neutral-400 italic">No capital city found for weather data.</p>
      )}
      
    </div> 
  )
}

export default CountryDetail