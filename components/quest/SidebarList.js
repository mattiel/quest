import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

const SidebarList = ({spaces, href}) => {
  const router = useRouter()

  useEffect(() => {
    // console.log(router.pathname)
  })

  return (
    <>
      { spaces && spaces.map((space, idx) => {
          return (
            <li 
              className={`rounded ${router.pathname === space
                ? 'bg-gray-200 text-gray-900 font-bold'
                : 'text-gray-600 hover:bg-gray-100'}`}
              key={idx}
            >
              <Link href={space}>
                <a className="">
                  {/* <span className="mr-2">{ space.emoji }</span> */}
                  { space }
                </a>
              </Link>
            </li>
          )
        })
      }
    </>
  )
};

export default SidebarList;