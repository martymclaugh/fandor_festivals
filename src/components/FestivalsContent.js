import React from 'react';
import FestivalsPreview from './FestivalsPreview';
import FestivalsList from './FestivalsList';

export default (props) => {
  return (
    <div className="festivals-wrapper">
      Festivals Content
      <div className="festivals-content">
        <FestivalsPreview />
        <FestivalsList />
      </div>
    </div>
  )
}
