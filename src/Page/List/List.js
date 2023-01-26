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
                        <td>Mostafizur</td>
                        <td>Rahman</td>
                        <td>mostafizr.cse@gmail.com</td>
                        <td>01752663049</td>
                    </tr>
                
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default List;