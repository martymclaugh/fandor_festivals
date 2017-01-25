import React from 'react';
import { DropdownButton, MenuItem, Nav } from 'react-bootstrap'

export default (props) => {
  return (
    <div className="nav-container">
      <div className="container navbar-container fandor-width">
        <img className="fandor_logo" src={require('../images/fandor_logo.png')} alt=""/>
        <DropdownButton id="Films" title="Films">
          <div className="hover-display">
            <p>New Releases</p>
            <p>Genres</p>
            <p>International</p>
            <p>Popular</p>
            <p>Festivals</p>
          </div>
        </DropdownButton>
        <DropdownButton id="Featured" title="Featured">
          <div className="hover-display">
            <p>Spotlights</p>
            <p>Coming Soon</p>
            <p>Keyframe</p>
            <p>Video Essays</p>
          </div>
        </DropdownButton>
        <DropdownButton id="Community" title="Community">
          <div className="hover-display">
            <p>Top Movie Reviews</p>
            <p>Movie Lists</p>
            <p>FIX Filmmakers</p>
          </div>
        </DropdownButton>
        <button type="submit" className="btn btn-default pull-right subscribe-btn">Subscribe Now</button>
        <a href="#" className="login-link pull-right">Log in</a>
      </div>
    </div>
  )
}
