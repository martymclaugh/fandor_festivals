import React from 'react';
import FestivalsPreview from './FestivalsPreview';
import FestivalsList from './FestivalsList';

export default (props) => {
  console.log(props)
  const { all, data, display, upcoming, title } = props
  return (
    <div className="festivals-wrapper">
      <h3 className="festivals-title">{title}</h3>
      <div className="festivals-content">
        <FestivalsPreview
          display={display}
          data={data}/>
        <FestivalsList />
      </div>
    </div>
  )
}
