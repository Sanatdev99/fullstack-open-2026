const Filter = ({ value, onChange }) => {
  return (
    <div className="relative w-full md:w-80 group">
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-blue-500 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </div>

      <input
        value={value}
        onChange={onChange}
        placeholder="Search contacts..."
        className="w-full pl-12 pr-4 py-3 bg-neutral-100 border-transparent border-2 rounded-2xl
                   focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 
                   outline-none transition-all duration-200 text-neutral-800 placeholder:text-neutral-500"
      />
      
      {/* Visual Badge */}
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
        <span className="hidden sm:block text-[10px] font-bold bg-white px-2 py-1 rounded-md border border-neutral-200 text-neutral-400 shadow-sm">
          ESC
        </span>
      </div>
    </div>
  )
}

export default Filter