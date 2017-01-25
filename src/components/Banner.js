import React from 'react';

export default (props) => {
  return (
    <div className="main-banner-container col-md-12">
      <div className="banner-content">
        <div>
          <h1 className="banner-header">
            {props.header}
          </h1>
        </div>
        <div>
          <p className="banner-motto">
            {props.motto}
          </p>
        </div>
      </div>
    </div>
  )
}
