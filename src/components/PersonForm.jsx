const PersonForm = ({ addName, newName, handleNameChange, newNumber, handleNumberChange }) => {
  return (
    <form onSubmit={addName} className="space-y-5">
      {/* Name Input Group */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-neutral-600 ml-1">
          Full Name
        </label>
        <input
          value={newName}
          onChange={handleNameChange}
          placeholder="e.g. Sanat Abdalov"
          className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 
                     focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 
                     outline-none transition-all duration-200 placeholder:text-neutral-400"
          required
        />
      </div>

      {/* Number Input Group */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-neutral-600 ml-1">
          Phone Number
        </label>
        <input
          value={newNumber}
          onChange={handleNumberChange}
          placeholder="e.g. +998 90 123 45 67"
          className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 
                     focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 
                     outline-none transition-all duration-200 placeholder:text-neutral-400"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-4 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] 
                   text-white font-bold rounded-2xl shadow-lg shadow-blue-200 
                   transition-all duration-200 flex justify-center items-center gap-2 group"
      >
        <span>Add to Directory</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </form>
  )
}

export default PersonForm