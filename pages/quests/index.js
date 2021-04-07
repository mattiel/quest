import Layout from '../../components/quest/Layout'
import { useState } from 'react'
import { QuestContext } from '../../lib/questContext'

const Index = () => {
  const [quest, setQuest] = useState('')
  
  return(
    <QuestContext.Provider value={{ quest, setQuest }}>
      <Layout>
      </Layout>
    </QuestContext.Provider>
  )
}

export default Index;