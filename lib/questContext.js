import { createContext, useContext } from 'react'

export const QuestContext = createContext(null)

export const useQuest = () => useContext(QuestContext)