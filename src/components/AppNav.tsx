/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
//import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function AppNav({ title, userMenu }: any) {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <a className="navbar-brand" href="#">{title}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Demo">Demo</NavLink>
          </li>
        </ul>
        <ul className="navbar-nav justify-content-end">
          {userMenu}
        </ul>
      </div>
    </nav>
  );
}

export default AppNav;