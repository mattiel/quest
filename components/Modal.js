import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { Transition } from '@headlessui/react'

const Modal = props => {
  const handleEscapeKeyDown = e => {
    (e.charCode || e.keyCode) === 27 && props.onClose()
  }

  useEffect(() => {
    document.body.addEventListener('keydown', handleEscapeKeyDown)
    return function cleanup() {
      document.body.removeEventListener('keydown', handleEscapeKeyDown)
    }
  }, [])


  return (
    <Transition
      show={props.isVisible}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div 
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex 
                  justify-center items-center z-50"
        onClick={props.onClose}
      >
        <div className="bg-white p-4 rounded-lg" onClick={e => e.stopPropagation()}>
          {props.children}
        </div>
      </div>
    </Transition>
  )
}

export default Modal