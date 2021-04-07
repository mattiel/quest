export default function CoverProgress(props) {
  return(
    <div className="inline-flex flex-col bg-white rounded-xl right-4 bottom-4 p-3 text-sm w-48 shadow-md">
      <span className="text-gray-400 text-[.6125rem]">TOTAL PROGRESS</span>
      <span className="text-gray-600 font-medium">40% Complete</span>
      <ProgressBar className="mb-0" progress={40}/>
    </div>
  )
}