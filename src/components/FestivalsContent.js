import React from 'react';
import FestivalsPreview from './FestivalsPreview';
import FestivalsList from './FestivalsList';

export default (props) => {
  console.log(props)
  const { all, data, display, upcoming, title } = props
  const FestivalAlliance = "Fandor Festival Alliance"
  const motto = "We connect film festivals to their audiences through social buzz, multimedia promotion, great movies, and exciting offers. Go ahead! Check out our partners."
  return (
    <div className="festivals-wrapper">
      <div className="festivals-content">
        <div className="festivals-content-title">
          <h3 className="festivals-title">{title}</h3>
          <FestivalsPreview
          display={display}
          data={data}/>
        </div>
        <FestivalsList
          title={FestivalAlliance}
          motto={motto}
          upcoming={upcoming}
          all={all}
          data={data} />
      </div>
    </div>
  )
}
