import Link from 'next/link'

const Header = () => {
  return (
    <header className="w-full fixed top-0">
      <div className="container flex h-16 px-3 items-center justify-between mx-auto">
        <h3 className="font-bold text-white">
          <Link href="/">
            <a>Quest</a>
          </Link>
        </h3>
        <ul className="flex space-x-3 text-gray-400 text-sm">
          <li className="font-medium">About</li>
          <li className="font-medium">
            <Link href="/product"><a>Product</a></Link>
          </li>
          <li className="font-medium">
            <a className="bg-blue-600 text-white p-2 rounded font-bold">Sign In</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header