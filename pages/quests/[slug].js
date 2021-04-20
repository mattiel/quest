import { useRouter } from 'next/router'
import Navbar from '../../components/quest/Navbar'
import Sidebar from '../../components/quest/Sidebar'
import Cover from '../../components/quest/Cover'
import ActionBar from '../../components/quest/ActionBar'
import Head from 'next/head'
import { useAuth } from '../../lib/useAuth'
import React from 'react';


const Space = ({ space }) => {
  const router = useRouter()

  // if(!router.isFallback && !quest?.slug) {
  //   return (
  //     <div className="w-full h-full">
  //       <p>ERROR!</p>
  //     </div>
  //   )
  // }

  return (
    <>
    <Head>
      <title></title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <section className="flex h-full w-full">
      <Sidebar href={router.pathname}/>
      <main className="flex flex-col h-full flex-grow">
        <Navbar/>
        <Cover/>
        <ActionBar />
      </main>
    </section>
  </>
  );
};

export default Space;