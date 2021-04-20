import { useState, useEffect } from 'react'
import { fetchUserSpaces, createSpace } from '../../lib/db'
import { useAuth } from '../../lib/useAuth'
import SidebarList from './SidebarList'

const Sidebar = ({ href }) => {
  const { loading, user } = useAuth()

  const [spaces, setSpaces] = useState(null);
  const [isModeCreateSpace, setIsModeCreateSpace] = useState(false);
  const handleModeCreateSpace = () => {
    setIsModeCreateSpace(true)
  }

  const handleCreateSpace = e => {
    if(e.key === 'Enter' || e.keyCode === 13) {
      if(e.target.value !== '') {
        createSpace(user.uid, e.target.value)
        setIsModeCreateSpace(false)
        fetchSpaces()
      }
    }
  }

  const fetchSpaces = async () => {
    user &&
      fetchUserSpaces(user.uid).then((data) => {
        setSpaces(data)
      })
  }

  useEffect(() => {
    fetchSpaces()
  }, [user])

  return(
    <aside className="hidden md:flex flex-col leading-relaxed w-64 bg-gray-50 p-2 border-r border-gray-100">
      <div className="py-2 mb-2">
        <div className="flex">
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-2 py-1 border-r-0 rounded-r-none h-9"
            placeholder="Search..."
          />
          <span className="border border-l-0 border-gray-300 h-9 w-9 rounded-r bg-white grid place-items-center">
            <svg 
              className="w-5 h-5 text-gray-500" 
              fill="none" stroke="currentColor"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
        </div>

      </div>
      <span className="text-xs text-gray-500 mb-2">MY QUESTS</span>
      <ul className="leading-loose space-y-1 text-sm">
        { isModeCreateSpace &&
          <li className="rounded text-gra-600 bg-gray-100">
            <input 
              className="bg-transparent w-full px-1"
              type="text"
              onKeyUp={e => handleCreateSpace(e)}
              autoFocus
            />
          </li>
        }
        <SidebarList spaces={spaces} />
      </ul>
      <section className="mt-auto border-t border-gray-200 py-2 pt-2 text-sm">
        <a 
          className="flex items-center text-gray-500 p-2"
          onClick={() => handleModeCreateSpace()}
        >
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clipRule="evenodd" /></svg>
          Create Space
        </a>
        <a 
          className="flex items-center text-gray-500 p-2"
        >
          <div className="rounded-full h-6 w-6 bg-gray-200 border border-gray-300 mr-2"></div>
          { !loading && user.email }
        </a>
        
      </section>
    </aside>
  )
}

export default Sidebar