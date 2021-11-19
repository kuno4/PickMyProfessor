import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const containedStyle = {
  textDecoration: "none",
};

const textStyle = {
  textDecoration: "none",
  color: "#ffde6a",
};

const buttonStyle = {
  "&.MuiButton-root": {
    minWidth: "325px",
    flexGrow: 1,
  },
  "&.MuiButton-text": {
    color: "#ffde6a",
  },
  "&.MuiButton-contained": {
    backgroundColor: "#ffde6a",
  },
  "&.MuiButton-contained:hover": {
    bgcolor: "black",
  },
  "&.MuiButton-text:hover": {
    bgcolor: "inherit",
    color: "black",
  },
};

function Landing() {
  return (
    <div className='landing'>
      <div className='landing-top'></div>
      <div className='landing-content'>
        <div className='landing-logo'>
          <div className='landing-logo-sec'></div>
          <div className='landing-logo-sec'></div>
        </div>
        <div className='landing-slogan'>
          Stop choosing your classes like you are playing the lottery and let us
          help you pick the professor that's just right for you!
        </div>
        <div className='landing-links'>
          <Link to='/signup' style={containedStyle}>
            <Button variant='contained' sx={buttonStyle}>
              Sign Up
            </Button>
          </Link>
          <Link to='/login' style={textStyle} color='#ffde6a'>
            <Button variant='text' sx={buttonStyle}>
              Log In
            </Button>
          </Link>
          <div className='flex-div landing-links-flex'></div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
