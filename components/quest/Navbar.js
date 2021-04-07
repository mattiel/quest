

export default function Navbar() {
  return(
    <nav className="flex justify-between items-center h-10 bg-white w-full px-2">
      <div className="flex space-x-2 text-xs">
        <a className="hover:bg-gray-100 rounded-sm leading-tight pl-1 pr-2 py-1">
          <span className="mr-1">😀</span>
          Life Goals
        </a>
      </div>

      <div className="flex space-x-2 text-sm">
        <a className="hover:bg-gray-100">Share</a>
      </div>
    </nav>
  )
}