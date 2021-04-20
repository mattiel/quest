import Layout from '../../components/quest/Layout'
import { useState } from 'react'
import { QuestContext } from '../../lib/questContext'
import { useAuth } from '../../lib/useAuth'
import { Router } from 'next/router'
import useSWR from 'swr'

const Index = () => {
  const [quest, setQuest] = useState('')
  const { user, loading } = useAuth();

  if(!loading && !user ) {
    Router.push('/')
  }
  
  return(
    <QuestContext.Provider value={{ quest, setQuest }}>
      <Layout>
      </Layout>
    </QuestContext.Provider>
  )
}

export default Index;