import React from 'react';
import { useState } from 'react'
import './App.css';
import TenUsers from './Component/TenUser';
import FromUsers from './Component/FromUsers';
import Modal from './Component/Modal';



function App() {
  const [openModal, setOpenModal] = useState<boolean>(false)

  return (
    <div className="App">


      <h1 className='mt-3'>Information Users</h1>
      <TenUsers/>

      <div id='ClickToShowModal'>
        <button className='openModalBtn btn btn-primary mb-3 mr-2' onClick={() => { setOpenModal(true) }}>Create</button>
        <button className='btn btn-secondary mb-3 ml-2'>Update</button>
        {openModal && <Modal  closeModal={setOpenModal} />}
      </div>

      {/* Pagination */}
      <div id='pagination' className='mt-5 d-flex justify-content-center'>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>


    </div>
  );
}

export default App;
