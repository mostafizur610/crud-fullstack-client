import React from 'react';

const UserList = () => {
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
                <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td><button className="btn btn-sm btn-outline btn-success">Details</button></td>
                    <td><button className="btn btn-sm btn-outline btn-success">Block/unblock</button></td>

                    <td>
                        <button className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button></td>
                </tr>
               
                </tbody>

            </table>
        </div>
    </div>
    );
};

export default UserList;