import React from 'react';
import { DropdownButton, MenuItem, Nav } from 'react-bootstrap'

export default (props) => {
  return (
    <div className="nav-container">
      <div className="container navbar-container">
        <img className="fandor_logo" src={require('../images/fandor_logo.png')} alt=""/>
        <DropdownButton id="Films" title="Films">
          <div className="hover-display">
            <p>1st</p>
            <p>2nd</p>
            <p>3rd</p>
            <p>4th</p>
            <p>5th</p>
          </div>
        </DropdownButton>
        <DropdownButton id="Featured" title="Featured">
          <MenuItem href="#books">Books</MenuItem>
          <MenuItem href="#podcasts">Podcasts</MenuItem>
          <MenuItem href="#">Tech I Like</MenuItem>
          <MenuItem href="#">About me</MenuItem>
          <MenuItem href="#addBlog">Add a Blog</MenuItem>
        </DropdownButton>
        <DropdownButton id="Community" title="Community">
          <MenuItem href="#books">Books</MenuItem>
          <MenuItem href="#podcasts">Podcasts</MenuItem>
          <MenuItem href="#">Tech I Like</MenuItem>
          <MenuItem href="#">About me</MenuItem>
          <MenuItem href="#addBlog">Add a Blog</MenuItem>
        </DropdownButton>
        <button type="submit" className="btn btn-default pull-right subscribe-btn">Subscribe Now</button>
        <a href="#" className="login-link pull-right">Log in</a>
      </div>
    </div>
  )
}
