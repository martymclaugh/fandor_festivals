import React from 'react';

export default (props) => {
  console.log(props, 'props')
  return (
    <div className="main-banner-container col-md-12">
      <div className="banner-content fandor-width">
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
