import "../index.css"
import React from 'react'
import jwt_decode from "jwt-decode";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import "../components/css/nav.css"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const Navigation = (props) => {

  const handleMenu = (event) => {
    // setAnchorEl(event.currentTarget);
  };
  let tokens = localStorage.getItem("user-info");
  let decoded;
if (tokens) {
  decoded = jwt_decode(tokens);
  console.log(decoded);
}
  
const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  localStorage.removeItem("user-info");
  return (window.location = "/login");
};


  const UserName = decoded != null && decoded.userName
  console.log(UserName)
  const adminLogin = decoded != null && decoded.loginType
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      {/* <div className='container'> */}
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
        </button>
        {/* <a class="navbar-brand" href="#">
    <img src={ZfWlogo} width="30" height="30" class="d-inline-block align-top" alt=""/>
    Bootstrap
  </a> */}
        <div className="nav-logo">
        <a className='navbar-brand page-scroll' href='#page-top'>
        {/* <img src={ZfWlogo} width="50px" height="50px" class="d-inline-block align-top" alt=""/> */}
          ZFW
        </a>{' '}
        </div>
    
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#header' className='page-scroll'>
              Home
              </a>
            </li>
            <li>
              <a href='#intro' className='page-scroll'>
                Intro
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
            Solutions
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
             Statistics
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact Us
              </a>
          </li>
          {
            UserName != null && UserName ? (<li className="username">
              <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
              >
               <span style={{paddingRight:"5px"}}>{UserName}</span><span style={{fontSize:"20px"}}><AccountCircle/></span>
      </Button></li>):<button className="btn btn-primary login" onClick={() => { return (window.location = "/login") }}>Login</button> }
          
   
        </ul>
      </div>
      
      <div>
  
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem> */}
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
    </nav>
  )
}
export default Navigation