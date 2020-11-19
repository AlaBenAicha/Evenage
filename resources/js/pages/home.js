import React from 'react';
import {useAuth} from '../context/auth';
import Menu from '../components/menu';
function Home () {
  let { currentUser } = useAuth();

  return (
    <Menu />
    // <div className="container p-2 mx-auto flex flex-col">

    //   <h1>Welcome back {currentUser.name}</h1>
    // </div>
  );
}

export default Home;
