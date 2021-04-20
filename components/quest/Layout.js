import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Cover from './Cover'
import ActionBar from './ActionBar'
import QuestList from './QuestList'

import Head from 'next/head'
import { useAuth } from '../../lib/useAuth'
import { fetchUserQuests } from '../../lib/db'
import { AuthProvider } from '../../lib/useAuth'
import { useState, useEffect } from 'react'


const Layout = ({
  children,
  title,
  description = "A collection of Quests"
}) => {
  const { loading, user } = useAuth();
  const [quests, setQuests] = useState(null);

  const fetchQuests = async () => {
    user &&
      fetchUserQuests(user.uid).then((data) => {
        setQuests(data)
      })
  }

  useEffect(() => {
    fetchQuests()
    console.log('Layout fetched data ==>> ', quests)
  }, [user])


  return(
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <AuthProvider>
        <section className="flex h-full w-full">
          <Sidebar/>
          <main className="flex flex-col h-full flex-grow">
            <Navbar/>
            <Cover/>
            <ActionBar />
            <QuestList quests={quests} />
            { children }
          </main>
        </section>
      </AuthProvider>
    </>
  )
}

export default Layout
