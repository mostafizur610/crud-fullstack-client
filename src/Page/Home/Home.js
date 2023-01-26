import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../image/e.jpg'

const Home = () => {
    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row gap-20">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-8">
                    <h1 className="text-5xl text-center font-bold">Employer</h1>
                    <form className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input type="text" name='first name' placeholder="your first name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input type="text" name='last name' placeholder="your last name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="text" name='phone' placeholder="phone" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <Link to='/userlist'><input className="btn btn-primary" type="submit" value="Create"/></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;