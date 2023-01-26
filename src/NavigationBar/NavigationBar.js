import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-4xl">Asif Inc.</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/list'>List</Link></li>
          </ul>
        </div>
      </div>
    );
};

export default NavigationBar;