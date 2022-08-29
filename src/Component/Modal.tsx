import React from 'react'
import '../Css/Modal.css'
import FromUsers from './FromUsers'
import TenUser from './TenUser'
import {useState} from 'react'
import Data10User from '.././Data10User.json';

let Array10User = Data10User;

interface ModalProp {
    closeModal: React.Dispatch<React.SetStateAction<boolean>>
}

function Modal({closeModal}:ModalProp,{modalToApp}:any) {

    //Data from Form
    const [data, setData] = useState();
    const childToParent = (childData:any) => {
        setData(childData)
    }
    console.log("Đây là Data bên Modal: ",data)

    return (
        <div className='modalBackGround'>
            <div className="modalContainer container ">
                {/* <div className="titleCloseBtn">
                    <button className='btn btn-danger mt-3' onClick={()=> closeModal(false)}> X </button>
                </div> */}
                <div className="title">
                    <h1> Form Input</h1>
                </div>
                <div className="body container">
                    {data}
                    <FromUsers childToParent={childToParent}/>
                    
                </div>
                <div className="footer">
                    <button className='btn btn-danger m-2' onClick={()=> closeModal(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
