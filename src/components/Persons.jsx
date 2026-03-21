const Persons = ({ personsToShow, deletePerson }) => {
  return (
    <div className="grid gap-4">
      {personsToShow.map(person => (
        <div 
          key={person.id} 
          className="flex items-center justify-between p-5 bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all group"
        >
          {/* Left Side: Avatar and Info */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg shadow-inner ring-2 ring-white">
              {person.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="font-bold text-neutral-900 tracking-tight leading-tight">
                {person.name}
              </p>
              <p className="text-sm text-neutral-500 font-medium">
                {person.number}
              </p>
            </div>
          </div>

          {/* Right Side: Delete Action */}
          <button 
            onClick={() => deletePerson(person.id)}
            className="p-3 text-neutral-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all active:scale-90 group-hover:opacity-100"
            title="Delete contact"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  )
}
export default Persons