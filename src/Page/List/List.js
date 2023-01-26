import React, {useEffect, useState} from 'react';
import axios from 'axios';

const List = () => {
    const [employee, setEmployee] = useState({});
    const fetchEmployee = async() => {
        const data = await axios.get('localhost:5000');
        console.log(data);
        setEmployee(data)
    }

    useEffect(()=>{
        fetchEmployee()
    }, []);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                    </tr>
                
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default List;