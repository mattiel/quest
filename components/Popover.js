import { useEffect, useRef } from 'react'

const Popover = (props) => {
  const popoverRef = useRef(null)

  useEffect(() => {
    setTimeout(popoverRef.current.style.opacity = 1, 100);
  })

  return (
    <div 
      className="bg-gray-900 bg-opacity-80 py-1 px-1.5 fixed z-10 opacity-0 transition-all rounded-md inline-flex items-center border-0 mt-3"
      style={{
        left: `${props.x}px`,
        top: `${props.y}px`
      }}
      ref={popoverRef}
    >
      {props.children}
    </div>
  )
}

export default Popover;