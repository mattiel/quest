import ProgressBar from '../ProgressBar'
import Checkbox from '../Checkbox'
import QuestTask from './QuestTask'
import { useState } from 'react'

const manifest = [
  {
    title: "Test 1",
    date: "02-27",
    isComplete: true,
    description: "Lorem ipsum"
  },{
    title: "Test 2",
    date: "02-28",
    isComplete: false,
    description: "Lorem ipsum"
  }
]

const QuestItem = (props) => {
  const [progress, setProgress] = useState(0);
  const handleOnComplete = (isComplete) => {
    isComplete ? setProgress(progress++) : setProgress(progress--);
    console.log("help", progress)
  }

  const calcProgress = (fraction) => {
    return fraction / manifest.length * 100;
  }

  return (
    <li className="w-full border border-gray-100 rounded-xl shadow">
      <div className="p-4">
        <ProgressBar progress={calcProgress(progress)}/>

        <div className="flex justify-between items-center w-full">
          <h3 className="font-bold text-xl text-gray-900">{props.title}</h3>
          <Checkbox/>
        </div>
        <div className="flex py-2">
          
        </div>
        <div className="flex flex-col">
          {/* <div className="flex w-full justify-between items-center">
            <span className="font-medium text-gray-700">
              Create React App With Name
              <span className="p-2 bg-green-100 font-bold text-green-800 rounded">
                <span className="inline-flex items-center bg-gray-200 text-gray-700 p-1 font-light text-xs rounded mr-2">
                  <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.649 3.084A1 1 0 015.163 4.4 13.95 13.95 0 004 10c0 1.993.416 3.886 1.164 5.6a1 1 0 01-1.832.8A15.95 15.95 0 012 10c0-2.274.475-4.44 1.332-6.4a1 1 0 011.317-.516zM12.96 7a3 3 0 00-2.342 1.126l-.328.41-.111-.279A2 2 0 008.323 7H8a1 1 0 000 2h.323l.532 1.33-1.035 1.295a1 1 0 01-.781.375H7a1 1 0 100 2h.039a3 3 0 002.342-1.126l.328-.41.111.279A2 2 0 0011.677 14H12a1 1 0 100-2h-.323l-.532-1.33 1.035-1.295A1 1 0 0112.961 9H13a1 1 0 100-2h-.039zm1.874-2.6a1 1 0 011.833-.8A15.95 15.95 0 0118 10c0 2.274-.475 4.44-1.332 6.4a1 1 0 11-1.832-.8A13.949 13.949 0 0016 10c0-1.993-.416-3.886-1.165-5.6z" clipRule="evenodd" /></svg>
                  variable:
                </span>
                Simple Todo
              </span>
            </span>
          </div> */}
          <div className="flex flex-col space-y-2">
            {manifest.map((item, idx) => {
              return (
                <QuestTask 
                  title={item.title} 
                  date={item.date} 
                  description={item.description}
                  isComplete={item.isComplete}
                  onComplete={() => handleOnComplete}
                  key={idx}
                />
              )
            })}
            <div className="flex w-full justify-between items-center">
              
            </div>


          </div>
        </div>
      </div>
    </li>
  )
}

export default QuestItem