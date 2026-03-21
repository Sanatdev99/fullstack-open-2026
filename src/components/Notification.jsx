const Notification = ({ message, type }) => {
  if (message === null) return null

  const isSuccess = type === 'success'

  return (
    <div className={`
      fixed top-5 right-5 p-4 rounded-xl border-2 shadow-2xl transition-all duration-500
      ${isSuccess 
        ? 'bg-emerald-50 border-emerald-500 text-emerald-700' 
        : 'bg-rose-50 border-rose-500 text-rose-700'}
    `}>
      <div className="flex items-center gap-2">
        <span className="font-bold uppercase tracking-wider text-xs">
          {isSuccess ? '✓ Success' : '✕ Error'}
        </span>
      </div>
      <p className="mt-1 text-sm font-medium">{message}</p>
    </div>
  )
}
export default Notification