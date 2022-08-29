import React from 'react'
import '../Css/Tenuser.css'
import Data10User from '.././Data10User.json';
import { useState } from 'react'
import ModalTenUsers from './ModalTenUsers';
import ModalForEdit from './ModalForEdit';

let mang10User = Data10User;


function TenUser() {
    // DeleteUsers 
    const [items, setItems] = useState(mang10User);
     const deleteItem = (index: number) => () =>
        setItems((items) => items.filter((_, i) => i !== index));


    //Modal for EDIT
    const[modalEdit, setModalEdit] = useState<boolean>(false)

    //Edit User
    const [edit,setEdit] = useState()
    const editItem = () => {

    }


    const renderUserForm = () => {
        return items.map((users, index) => {
            return (
                <tbody key={index}>
                    <tr>
                        <th scope="row">{users.id}</th>
                        <td>{users.FirstName}</td>
                        <td>{users.LastName}</td>
                        <td>{users.Gender}</td>
                        <td>{users.BirthDay}</td>
                        <td>
                            <div className="dropdown">
                                <button onClick={() => {
                                    alert(`
                                    *****Thông tin địa chỉ người dùng*****
                                    Province: ${users.province}
                                    City: ${users.city}
                                    Address: ${users.address}
                                    `)
                                }} className="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                    Address
                                </button>
                            </div>
                        </td>
                        <td>{users.Phone}</td>
                        <td>{users.Email}</td>
                        <td>{users.Active}</td>
                        {/* <td>{users.created_at}</td> */}
                        <td>
                            <div className='FixUsers'>
                                <button className='openModalBtn btn btn-info mb-3'>
                                    Sửa
                                </button>
                            </div>
                        </td>
                        <td>
                            <div className='DeleteUsers'>
                                <button className="btn btn-danger" type="button" onClick={deleteItem(index)}>
                                    Xóa
                                </button>
                            </div>
                        </td>
                    </tr>

                </tbody>
            )

        })
    }

    return (
        <div className='container mt-3'>
            <table className="table" id=' table-tenUser'>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Gender</th>
                        <th scope="col">BirthDay</th>
                        <th scope="col">Adress</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Active</th>
                        {/* <th scope="col">Created</th> */}
                        <th scope="col">Updated</th>
                        <th scope="col">Deleted</th>
                    </tr>
                </thead>
                {renderUserForm()}
            </table>
            {modalEdit && <ModalForEdit  />}
            {/* closeModalEdit = {setModalEdit} */}
        </div>
    )
}

export default TenUser