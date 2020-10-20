/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


function UserMenu({ currentUser, onSignIn, onSignOut }:any) {
  if (!currentUser) {
    // show sign in link
    return (
      <form className="form-inline">
        <button className="btn btn-sm btn-primary" type="button" onClick={onSignIn}>Sign In</button>
      </form>
    );
  }
  // show user menu
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{currentUser.fullName}</a>
      <div className="dropdown-menu" aria-labelledby="dropdown01">
        <button className="btn btn-sm btn-link" type="button" onClick={onSignOut}>Sign Out</button>
      </div>
    </li>
  );
}

export default UserMenu;