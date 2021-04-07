import { useState, useEffect } from 'react'
import Popover from './Popover'

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = ev => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

const ProgressBar = (props) => {
  const [isPopoverActive ,setIsPopoverActive] = useState(false);
  const { x, y } = useMousePosition();

  return (
    <div
      className="bg-gray-50 border border-gray-100 w-full h-2 self-start rounded-2xl my-2 overflow-hidden"
      onMouseEnter ={() => setIsPopoverActive(true)}
      onMouseLeave ={() => setIsPopoverActive(false)}
    > 
    {isPopoverActive && 
      <Popover x={x} y={y}>
        <span className="text-white text-[.6125rem] font-semibold leading-none">{props.progress}% COMPLETE</span>
      </Popover>
    }
      <div
        className="bg-green-500 h-full transition-all"
        style={{
          width: `${props.progress ? `${props.progress}%` : '1px'}`
        }}
      >
      </div> 
      {/* <div className="bg-green-500 h-full" Style={"width: " + progressWidth}></div> */}
    </div>
  )
}

export default ProgressBar