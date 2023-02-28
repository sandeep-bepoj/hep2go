
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreteExercise, ExerciesImg, FavImg, FollowingImg, ProfileDef, ProfileImg, RoutinesImg } from '../../Assets';
import './sidebar.css'
function Sidebar() {
  const [activePage, setActivePage] = useState('');
  const navigate = useNavigate();

  const handlePageClick = (page) => {
    setActivePage(page);
    navigate(`/my-stuff/${page}`);
  };

  return (
    <div className="sidebar">
      <div>
        <img src={ProfileDef} alt="ProfileDef" />
        <div className={activePage === 'profile' ? 'active d-flex align-items-center   sidebarelm' : 'd-flex align-items-center   sidebarelm'} onCd-flex align-items-center onClick={() => handlePageClick('profile')}><img src={ProfileImg} alt="FavImg"/> Profile</div>
        <div className={activePage === 'my-exercises' ? 'active  d-flex align-items-center  sidebarelm' : 'd-flex align-items-center  sidebarelm'} onClick={() => handlePageClick('my-exercises')}><img src={ExerciesImg} alt=""/>	My Exercises</div>
        <div className={activePage === 'my-favorites' ? 'active  d-flex align-items-center  sidebarelm' : 'd-flex align-items-center  sidebarelm'} onClick={() => handlePageClick('my-favorites')}><img src={FavImg} alt="FavImg"/>	My Favorites</div>
        <div className={activePage === 'my-routines' ? 'active  d-flex align-items-cente  sidebarelmr' : 'd-flex align-items-center  sidebarelm'} onClick={() => handlePageClick('my-routines')}><img src={RoutinesImg} alt=""/>	My Routines</div>
        <div className={activePage === 'following' ? 'active  d-flex align-items-center  sidebarelm' : 'd-flex align-items-center  sidebarelm'} onClick={() => handlePageClick('following')}><img src={FollowingImg} alt=""/>Following</div>
        <div className={activePage === 'create-exercise' ? 'active  d-flex align-items-center  sidebarelm' : 'd-flex align-items-center  sidebarelm'} onClick={() => handlePageClick('create-exercise')}><img src={CreteExercise} alt=""/>Create Exercise</div>
      </div>
    </div>
  );
}

export default Sidebar



