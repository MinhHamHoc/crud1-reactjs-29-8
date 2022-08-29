import React from 'react'
import Data10User from '.././Data10User.json';
import { useState } from 'react'

let Array10Users = Data10User;

function FromUsers({childToParent}:any) {
    //HandleChecked
    const [checked, setChecked] = useState<number>()

    //Add Users
    const initialFormData = Object.freeze({
        FirstName: "",
        LastName: "",
        Gender: "",
        BirthDay: "",
        province: "",
        city: "",
        address: "",
        phone: "",
        Email: "",
        Active: ""
    });

    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e:any) => {
        updateFormData({
            ...formData,

            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()
        // console.log(formData)
        childToParent(formData)
    }

    return (
        <div>
            <div>
                <div className="container text-left p-4 mt-3">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>FirstName</label>
                                <input id='FirstName' type="text" className="form-control" name='FirstName' onChange={handleChange}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label>LastName</label>
                                <input id='LastName' type="text" className="form-control" name='LastName' onChange={handleChange}/>
                            </div>
                        </div>
                        <div id='Gender' className='d-flex mt-3'>
                            <p>Gender</p>
                            <div className="ml-2">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="type" id="gender" name='Gender' onChange={handleChange}/>
                                </div>
                                
                            </div>
                        </div>

                        <div className="d-flex align-items-center mt-3">
                            <p className="mb-0">Birthday</p>
                            <div className='ml-1'>
                                <input id='Day' style={{ width: '200px' }}  type="text" placeholder='DD/MM/YYYY' name='BirthDay' onChange={handleChange}/>
                            </div>
                        </div>

                        <div className='mt-3' id='address'>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">Province</label>
                                    <input type="text" className="form-control" id="Province" name='province' onChange={handleChange}/>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputState">City</label>
                                    <input id='City' type="text" className="form-control" name='city' onChange={handleChange}/>
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="inputZip">Adress</label>
                                    <input type="text" className="form-control" id="Address" name='address' onChange={handleChange}/>
                                </div>
                            </div>
                        </div>

                        <div id='PhoEmActive' className="mt-3">
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label>Phone</label>
                                    <input type="text" className="form-control" id="Phone" name='phone' onChange={handleChange}/>
                                </div>
                                <div className="form-group col-md-4">
                                    <label>Email</label>
                                    <input type="text" className="form-control" id="Email" name='Email' onChange={handleChange}/>
                                </div>
                                <div className="form-group col-md-4">
                                    <label>Active</label>
                                    <input type="text" className="form-control" id="Password" name='Active' onChange={handleChange}/>
                                </div>
                            </div>
                        </div>

                        <button id='addUsers' type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                    </form>

                </div>
            </div>


        </div>
    )
}

export default FromUsers
