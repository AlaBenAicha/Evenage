import React, { useState } from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/auth';
import { setIntendedUrl } from '../utils/auth';

function AuthNav () {
  let {setCurrentUser, setToken, currentUser} = useAuth();
  let history = useHistory();
  let [hideMobileNav, setHideMobileNav] = useState(true);

  const toggleMobileNav = () => setHideMobileNav(prevState => !prevState);
  const closeMobileNav = () => setHideMobileNav(true);

  const handleLogout = () => {
    setCurrentUser(null);
    setToken(null);
    history.push('/');
    setIntendedUrl(null);
  };

  return (
    <div className="auth-nav flex flex-row h-16 border-b border-grey-light">
      <div className="container flex-col lg:flex-row px-2 mx-auto flex items-center justify-between">
        <div className="left flex justify-between w-full lg:w-auto flex-1 lg:flex-initial">
          <ul className="list-reset flex items-center">
            <li>
              <NavLink
                to="/home"
                activeClassName="font-bold"
                className="text-gray-800 no-underline text-indigo"><img style={{ width: 100, height: 70 }} src="/images/icons/Evenage.png" />
              </NavLink>
            </li>
          </ul>

         
        </div>

         <div
          className={`right lg:flex pt-8 lg:pt-0 right fixed lg:relative bg-white w-full lg:w-auto h-screen lg:h-auto ${hideMobileNav ? 'mobile-hidden' : ''}`}>
          <ul className="mt-8 py-8 lg:py-0 lg:mt-0 list-reset flex items-center flex-col lg:flex-row">
            

            <li
              onClick={closeMobileNav}
              className="px-4 py-3 lg:py-0">
              <NavLink
                to={`/profile/${currentUser.id}`}
                className="text-2xl font-bold lg:text-sm lg:font-light capitalize text-sm text-gray-700 underline lg:no-underline">
                {currentUser.name}
              </NavLink>
            </li>
            <li
              onClick={handleLogout}
              className="px-4 py-3 lg:py-0">
              <Link
                to="/logout"
                className="capitalize text-2xl font-bold lg:text-sm lg:font-light text-gray-700 underline lg:no-underline">
                  Logout</Link>
            </li>
          </ul>
        </div> 
      </div>
    </div>
  );
}

export default AuthNav;
