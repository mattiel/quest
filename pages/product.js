import Container from '../components/Container'
import Layout from '../components/Layout'
import ProgressBar from '../components/ProgressBar'
import QuestItem from '../components/quest/QuestItem'
import {React, useState, useRef} from 'react'
// import firebase from '../../lib/firebase'

const Product = () => {
  const [list, setList] = useState(0);
  const questInput = useRef(null);

  return(
    <section className="flex flex-col h-full">
      <main className="flex w-full h-full">
        <aside className="hidden md:flex flex-col leading-relaxed w-80 bg-gray-50 p-2 border-r border-gray-100">
          <div className="py-2 mb-2">
            <div className="flex">
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-2 py-1 border-r-0 rounded-r-none h-9"
                placeholder="Search..."
              />
              <span className="border border-l-0 border-gray-300 h-9 w-9 rounded-r bg-white grid place-items-center">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </span>
            </div>

          </div>
          <span className="text-xs text-gray-500 mb-2">MY QUESTS</span>
          <ul className="leading-loose space-y-1 text-sm">
            <li className="rounded text-gray-900 font-bold bg-gray-200">
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
            </li>
          </ul>

          <section className="mt-auto border-t border-gray-200 px-2 pt-2">
            <div className="flex items-center">
              <div className="rounded-full h-8 w-8 bg-gray-200 border border-gray-300"></div>
            </div>
          
          </section>
        </aside>
        <section className="flex flex-col h-full w-full">
          {/* 
            Quest Header 
            @TODO: Componentize
          */}
          <header className="flex justify-between items-center h-10 bg-white w-full px-2">

            <div className="flex space-x-2 text-xs">
              <a className="hover:bg-gray-100 rounded-sm leading-tight pl-1 pr-2 py-1">
                <span className="mr-1">😀</span>
                Life Goals
              </a>
            </div>

            <div className="flex space-x-2 text-sm">
              <a className="hover:bg-gray-100">Share</a>
            </div>
            
          </header>
          {/* 
            Quest Header 
            @TODO: Componentize
          */}
          <section 
            className="h-72 w-full flex col items-end p-6 relative bg-no-repeat bg-cover bg-center" 
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                                url('https://source.unsplash.com/random')`
            }}
          >
            <div className="flex justify-between w-full items-end">
              <div className="text-3xl font-bold text-white">Life Goals</div>
              <div className="inline-flex flex-col bg-white rounded-xl right-4 bottom-4 p-3 text-sm w-48 shadow-md">
              
                <span className="text-gray-400 text-[.6125rem]">TOTAL PROGRESS</span>
                <span className="text-gray-600 font-medium">40% Complete</span>

                <ProgressBar className="mb-0" progress={40}/>
              </div>
            </div>
          </section>
          <section className="border-b border-gray-200 p-2">
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <a className="text-gray-600 flex items-center p-1 pr-2 text-medium rounded bg-gray-100 text-sm hover:text-gray-900">
                  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" /></svg>
                  Create Quest
                </a>

                <a className="text-gray-600 flex items-center p-1 pr-2 text-medium rounded bg-gray-100 text-sm hover:text-gray-900">
                  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" /></svg>
                  Edit
                </a>
              </div>
            </div>
          </section>
          <div className="p-2">
            <ul className="flex flex-col space-y-4 m-4">
              <QuestItem title={"Quest Item 1"} progress={90}/>
            </ul>
          </div>
        </section>

      </main>
      {/* <QuestList list={list}/> */}
    </section>
  )
}

export default Product
