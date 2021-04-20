import Checkbox from '../Checkbox'
import { useState } from 'react'

const QuestItemSimple = (props) => {
  const [progress, setProgress] = useState(0);
  const handleOnComplete = (isComplete) => {
    isComplete ? setProgress(progress++) : setProgress(progress--);
    console.log("help", progress)
  }

  return (
    <li className="w-full border border-gray-100 rounded-xl shadow">
      <div className="p-4">
        <div className="flex justify-between items-center w-full">
          <h3 className="font-bold text-xl text-gray-900">{props.title}</h3>
          <Checkbox/>
        </div>
        <div className="flex py-2">
          123
        </div>
      </div>
    </li>
  )
}

export default QuestItemSimple