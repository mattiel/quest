import { useState, useRef } from 'react'

const Checkbox = (props) => {
  const [isChecked, setIsChecked] = useState(props.checked);
  const inputRef = useRef(null);
  const handleChange = (isChecked) => {
    setIsChecked(isChecked)
    if(props.onChange) props.onChange(isChecked);
  }

  return(
    <label 
      className={`inline-flex text-sm cursor-pointer items-center space-x-1.5 ${props.inversed && 'flex-row-reverse'}`}
    >
      <input 
        type="checkbox"
        className="w-0 h-0 absolute overflow-hidden whitespace-nowrap"
        style={{clip: 'rect(0 0 0 0)', clipPath: 'inset(50%)'}}
        ref={inputRef}
        onChange={(e) => handleChange(e.target.checked)}
      />

      { props.isQuestItem ? 
        <span className={`border border-gray-200 rounded-full w-6 h-6 grid place-items-center p-0.5 ${isChecked && 'border-transparent bg-green-500 text-white'}`}>
          { 
            <svg className={`transition-transform transform ${isChecked ? 'scale-100' : 'scale-0'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
          }
        </span>
        :
        <span className={`border border-gray-300 rounded w-4 h-4 grid place-items-center ${isChecked && 'border-transparent bg-green-500 text-white'}`}>
          { 
            <svg className={`transition-transform transform ${isChecked ? 'scale-100' : 'scale-0'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
          }
        </span> 

      }
      {/* <span className={`border border-gray-300 rounded w-4 h-4 grid place-items-center ${isChecked && 'border-transparent bg-green-500 text-white'}`}>
        { 
          <svg className={`transition-transform transform ${isChecked ? 'scale-100' : 'scale-0'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
        }
      </span> */}
      { props.label && <span className="pointer-events-none">Test</span> }
    </label>
  )
}

export default Checkbox