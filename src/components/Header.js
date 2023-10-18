import React, {useState} from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className='header'>
      <div className='header_left'>
        <MenuIcon />
        <Link to="/">
          <img className='header_logo' src='images/youtube-logo.svg' alt='Logo' />
        </Link>
      </div>
      
      <div className='header_input'>
        <input 
          onChange={e => setInputSearch(e.target.value)} 
          value={inputSearch} 
          placeholder='Search' 
          type='text' 
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className='header_inputButton' />
        </Link>
      </div>

      <div className="header_icons">  
        <VideoCallIcon className='header_icon' />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </div>
    </div>
  )
}

export default Header
