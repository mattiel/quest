import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { useQuest } from '../../lib/questContext'
import Head from 'next/head'

const Layout = ({
  children,
  title = "user.name + 's Quests",
  description = "A collection of Quests"
}) => {
  const { quest } = useQuest()

  return(
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <section className="flex h-full w-full">
        <Sidebar/>
        <main className="flex flex-col h-full flex-grow">
          <Navbar/>
          { children }
        </main>
      </section>
    </>
  )
}

export default Layout
