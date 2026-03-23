const Filter = ({ query, handleSearch }) => (
  <div className="mb-8">
    <input
      className="w-full p-4 rounded-2xl border-2 border-neutral-200 bg-white shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-lg"
      placeholder="Search for a country...(Uzbekistan)"
      value={query}
      onChange={handleSearch}
    />
  </div>
)

export default Filter