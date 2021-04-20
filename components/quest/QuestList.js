import Checkbox from '../Checkbox'
import { useState } from 'react'

const QuestItemSimple = ({quests}) => {
  const [progress, setProgress] = useState(0);

  return (
    <ul className="p-2 bg-gray-100 flex-1 space-y-2 overflow-y-auto">
      {
        quests
          ? quests.map((quest, idx) => {
              return (
                <li key={idx} className="w-full border border-gray-100 rounded-xl shadow bg-white">
                  <div className="p-4">
                    <div className="flex justify-between items-center w-full">
                      <h3 className="font-bold text-xl text-gray-900">{quest.name}</h3>
                      <Checkbox/>
                    </div>
                    <div className="flex py-2 text-gray-500">
                      { quest.description }
                    </div>
                  </div>
                </li>
              )
            })
          : <li className="w-full h-full flex items-center justify-center text-center text-gray-700">
              No Quests Available
            </li>
      }
      
    </ul>
    
  )
}

export default QuestItemSimple