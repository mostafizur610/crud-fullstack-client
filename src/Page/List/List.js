import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';

const List = () => {
    const employeeDetails = useLoaderData();
    const navigate = useNavigate();
    console.log(employeeDetails);

    const [formValue, setFormValue] = useState({
        id: employeeDetails.data.data._id,
        firstName: employeeDetails.data.data.firstName,
        lastName: employeeDetails.data.data.lastName,
        email: employeeDetails.data.data.email,
        phoneNumber: employeeDetails.data.data.phoneNumber
    });

    const formValueChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    }

    const formSubmit = async (e) => {
        e.preventDefault();

        const employeeUpdate = await axios.put('https://crud-server-opal.vercel.app/update', formValue);
        console.log(employeeUpdate.status);
        if (employeeUpdate.status === 201) {
            navigate("/userlist");
        }
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <form className="card-body" onSubmit={formSubmit}>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input type="text" name='firstName' value={formValue.firstName} onInput={formValueChange} placeholder="your first name" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input type="text" name='lastName' value={formValue.lastName} onInput={formValueChange} placeholder="your last name" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' value={formValue.email} onInput={formValueChange} placeholder="email" className="input input-bordered" disabled />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="text" name='phoneNumber' value={formValue.phoneNumber} onInput={formValueChange} placeholder="phone" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-3">
                        <button className='btn btn-outline' type='submit'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default List;