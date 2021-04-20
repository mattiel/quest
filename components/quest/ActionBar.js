import React, { useState } from 'react';
import { createQuest } from '../../lib/db'
import { useAuth } from '../../lib/useAuth'

import Modal from '../Modal'

const ActionBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newQuest, setNewQuest] = useState({
    questName: '',
    description: '',
    taskName: '',
    taskEndDate: '',
  });
  const { loading, user } = useAuth()

  const handleModal = (state) => {
    setIsModalOpen(state);
  }

  const handleCreateQuest = (title) => {
    
  }

  const onCreateQuestSubmit = async e => {
    e.preventDefault()
    try {
      createQuest(user.uid, newQuest)
    } catch (error) {
      console.error(error);
    }

    handleModal(false)
  }

  const {questName, description, taskName, taskEndDate} = newQuest


  const onCreateQuestInputChange = (text) => event => {
    setNewQuest({...newQuest, [text]: event.target.value})
  }

  return (
    <nav className="border-b border-gray-200 p-2">
      {
        <Modal 
          onClose={() => setIsModalOpen(false)}
          isVisible={isModalOpen}
        >
          <form 
            className="flex flex-col"
            onSubmit={onCreateQuestSubmit}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-gray-900">Create Quest</span>
              <a 
                className="text-gray-500"
                onClick={() => handleModal(false)}
              >
                <svg 
                  className="w-5 h-5" 
                  fill="currentColor"
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="flex flex-col mb-2">
              <label className="text-sm text-gray-500 mb-1">Quest Name</label>
              <input 
                name="questName"
                className="border border-gray-200 rounded-sm h-8 px-2" type="text"
                onChange={onCreateQuestInputChange("questName")}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-sm text-gray-500 mb-1">Description</label>
              <input 
                name="description"
                className="border border-gray-200 rounded-sm h-8 px-2" type="text"
                onChange={onCreateQuestInputChange("description")}
              />
            </div>
            <div className="flex mb-4">
              <div className="flex flex-col">
                <span className="font-bold text-gray-700 text-sm mb-1">Tasks</span>
                <p className="text-sm text-gray-500 mb-2">Add lists of tasks to finish for this quest.</p>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <div className="flex flex-col w-64 mr-2">
                      <label className="text-sm text-gray-500 mb-1">Task Name</label>
                      <input 
                        name="taskName"
                        className="border border-gray-200 rounded-sm h-8 px-2 mb-2" 
                        type="text"
                        onChange={onCreateQuestInputChange("taskName")}
                      />
                    </div>
                    <div className="flex flex-col w-40">
                      <label className="text-sm text-gray-500 mb-1">End Date</label>
                      <input 
                        name="taskEndDate"
                        className="border border-gray-200 rounded-sm h-8 px-2 mb-2" 
                        type="date"
                        onChange={onCreateQuestInputChange("taskEndDate")}
                      />
                    </div>
                  </div>
                </div>
                
                <a className="text-gray-400 p-2 flex justify-center items-center bg-gray-100 text-sm rounded-md hover:text-gray-700 hover:bg-gray-200">
                  Add Task
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" /></svg>
                </a>
              </div>
              
            </div>
            <button 
              className="w-full h-10 rounded-md bg-blue-600 text-white flex justify-center items-center font-medium hover:bg-blue-700"
            >
              Create
            </button>
          </form>
        </Modal>
      }
      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          <a 
            onClick={() => handleModal(true)}
            className="text-gray-600 flex items-center p-1 pr-2 text-medium rounded bg-gray-100 text-sm hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" /></svg>
            Create Quest
          </a>

          

          <a className="text-gray-600 flex items-center p-1 pr-2 text-medium rounded bg-gray-100 text-sm hover:text-gray-900">
            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" /></svg>
            Edit
          </a>
        </div>
      </div>
    </nav>
  );
};

export default ActionBar;