import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import img from '../../image/e.jpg'

const Home = () => {
    const navigate = useNavigate();

    const [formValue, setFormValue] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    });

    const formValueChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    }

    const formSubmit = async (e) => {
        e.preventDefault();

        const employeeUpdate = await axios.post('http://localhost:5000/create', formValue);
        console.log(employeeUpdate.status);
        if (employeeUpdate.status === 201) {
            navigate("/userlist");
        }
    }
    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row gap-20">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-8">
                    <h1 className="text-5xl text-center font-bold">Employer</h1>
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
                            <input type="email" name='email' value={formValue.email} onInput={formValueChange} placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="text" name='phoneNumber' value={formValue.phoneNumber} onInput={formValueChange} placeholder="phone" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-3">
                            <button className='btn btn-outline' type='submit'>Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;