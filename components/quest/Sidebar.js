import firebase from '../../lib/firebase'
import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'

const Sidebar = ({ href }) => {
  const [quests, setQuests] = useState([]);
  const router = useRouter()

  useEffect(() => {
    firebase.firestore()
      .collection('quests')
      .onSnapshot(snap => {
        const items = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setQuests(items);
      });
      console.log(quests);
  }, []);

  return(
    <aside className="hidden md:flex flex-col leading-relaxed w-80 bg-gray-50 p-2 border-r border-gray-100">
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
        {
          quests.map(quest => {
            return (
              <li 
                className={`rounded ${router.pathname === href
                  ? 'bg-gray-200 text-gray-900 font-bold'
                  : 'text-gray-600 hover:bg-gray-100'}`}
                key={quest.id}
              >
                <a className="">
                  <span className="mr-2">{ quest.emoji }</span>
                  { quest.title }
                </a>
              </li>
            )
            
          })
        }
        {/* <li className="rounded text-gray-900 font-bold bg-gray-200">
          <a className="">
            <span className="mr-2">😀</span>
            Life Goals
          </a>
        </li>
        <li className="rounded text-gray-600 hover:bg-gray-100">
          <a className="">
            <span className="mr-2">🎒</span>
            ArtCenter
          </a>
        </li>
        <li className="rounded text-gray-600 hover:bg-gray-100">
          <a className="">
            <span className="mr-2">✨</span>
            Startup
          </a>
        </li>
        <li className="rounded text-gray-600 hover:bg-gray-100">
          <a className="">
            <span className="mr-2">💉</span>
            COVID
          </a>
        </li> */}
      </ul>

      <section className="mt-auto border-t border-gray-200 px-2 pt-2">
        <div className="flex items-center">
          <div className="rounded-full h-8 w-8 bg-gray-200 border border-gray-300"></div>
        </div>
      
      </section>
    </aside>
  )
}

export default Sidebar