import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserList = () => {
    const navigate = useNavigate();
    const employeeList = useLoaderData();

    const deleteEmployee = async (id) => {
        await axios.delete(`https://crud-server-opal.vercel.app/delete/${id}`);
        navigate('/userlist');
    }

    const blockEmployee = async (id) => {
        await axios.put(`https://crud-server-opal.vercel.app/block`, { id: id });

        navigate('/userlist');
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Details</th>
                            <th>Block</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {employeeList.data.data && employeeList.data.data.map((employee, index) => (
                            <tr>
                                <th>{index + 1}</th>
                                <td>{employee.firstName} {employee.lastName}</td>
                                <td><Link to={`/details/${employee._id}`}><button className="btn btn-sm btn-outline btn-success">Details</button></Link></td>
                                <td>
                                    <button className="btn btn-sm btn-outline btn-success" onClick={() => blockEmployee(employee._id)}>
                                        {employee.isBlock ? 'Unblock' : 'Block'}
                                    </button></td>

                                <td>
                                    <button className="btn btn-circle btn-outline" onClick={() => deleteEmployee(employee._id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </td>
                            </tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserList;