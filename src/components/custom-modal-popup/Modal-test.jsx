import React, { useState } from 'react';
import './Modal'
import Modal from './Modal';
import './Modal.css'

export default function ModalTests() {
    const [showModal, setShowModal] = useState(false) 

    function handleShowModal() {
        setShowModal(!showModal)
    }

    function onClose(){
        setShowModal(false)
    }

  return (
    <div>
      <button onClick={handleShowModal} className='open-modal'>Click to open modal</button>
      {showModal && <Modal 
      onClose={onClose}
      header = {<h2>This is header</h2>}
      body = {<h2>Body Content here</h2>}
      footer = {<h2>This is footer</h2>}
      />
    }
     
      
    </div>
  )
}
