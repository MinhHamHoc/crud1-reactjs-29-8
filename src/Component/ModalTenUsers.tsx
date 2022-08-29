import React from 'react'

interface Modal10User {
    closeModal10User: React.Dispatch<React.SetStateAction<boolean>>
}


function ModalTenUsers({closeModal10User}:Modal10User) {
    return (
        <div>
            <h1> Form Input </h1>
            <div className="container text-left p-4 mt-3" style={{ border: '1px solid black' }}>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>FirstName</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                            <label>LastName</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div id='Gender' className='d-flex mt-3'>
                        <p>Gender</p>
                        <div className="ml-2">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">Nam</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" defaultValue="option2" />
                                <label className="form-check-label" htmlFor="inlineCheckbox2">Nữ</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" defaultValue="option3" disabled />
                                <label className="form-check-label" htmlFor="inlineCheckbox3">LGBT (disabled)</label>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex align-items-center mt-3">
                        <p className="mb-0">Birthday</p>
                        <div className='ml-2'>
                            <input style={{ width: '100px' }} className="ml-3" type="text" placeholder='Day' />
                            <input style={{ width: '100px' }} className="ml-3" type="text" placeholder='Month' />
                            <input style={{ width: '100px' }} className="ml-3" type="text" placeholder='Year' />
                        </div>
                    </div>

                    <div className='mt-3' id='address'>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputCity">Province</label>
                                <input type="text" className="form-control" id="inputCity" />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputState">City</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>Hà Nội</option>
                                    <option>Hồ Chí Minh</option>
                                </select>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="inputZip">Adress</label>
                                <input type="text" className="form-control" id="inputZip" />
                            </div>
                        </div>
                    </div>

                    <div id='PhoEmActive' className="mt-3">
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label>Phone</label>
                                <input type="text" className="form-control" id="inputEmail4" />
                            </div>
                            <div className="form-group col-md-4">
                                <label>Email</label>
                                <input type="text" className="form-control" id="inputPassword4" />
                            </div>
                            <div className="form-group col-md-4">
                                <label>Active</label>
                                <input type="text" className="form-control" id="inputPassword4" />
                            </div>
                        </div>
                    </div>

                    <button id='addUsers' type="submit" className="btn btn-primary">Add User</button>
                </form>

            </div>
            <div className="footer">
                    <button className='btn btn-danger m-2' onClick={()=> closeModal10User(false)}>Cancel</button>
                    <button className='btn btn-secondary m-2'>Update</button>
                </div>
        </div>
    )
}

export default ModalTenUsers