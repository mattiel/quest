import Checkbox from '../Checkbox'
import { useState } from 'react'
import firebase from '../../lib/firebase'

const QuestTask = (props) => {
  const [isComplete, setIsComplete] = useState(props.isComplete);

  const handleCheckbox = (isChecked) => {
    setIsComplete(isChecked)
    props.onComplete && props.onComplete(isChecked || null);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    firebase.firestore()
      .collection('blog')
      .add({
        title: "test",
        content: "content",
      });
    setTimeout(() => {
      setNotification('')
    }, 2000)
  }

  return (
    <div className={`
      flex items-center w-full border-l-4 border-gray-200 overflow-hidden pl-1 
      ${isComplete && 'border-green-500'}
    `}>
      {/* <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg> */}
      <Checkbox checked={props.isComplete} onChange={handleCheckbox} isQuestItem/>
      <div className="flex flex-col w-full ml-1">
        <div className="flex w-full justify-between">
          <span className="inline-flex items-center font-medium text-gray-600 ml-2">
            { props.title }
          </span>
          <span className="flex space-x-1 text-gray-400">
            {/* 
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /></svg>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
            */}
            <span className={`
              inline-flex items-center text-gray-500 rounded-md text-xs leading-none py-1 px-2
              ${isComplete && 'bg-green-100 text-green-900' }
            `}>
              {isComplete && 'COMPLETED '}
              { props.date }
            </span>
          </span>
        </div>
        
        <span className="inline-flex items-center text-sm text-gray-400 ml-2">
          { props.description }
        </span>
      </div>
    </div>
  )
}

export default QuestTask