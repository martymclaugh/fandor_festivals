import React from 'react';
import Carousel from 'nuka-carousel';
import _ from 'lodash';


function renderSlide(id, data){
  let current = _.find(data, { id })
  if (current !== undefined && current.banner_path !== null){
    let acronym = current.name.match(/\b(\w)/g).join('')
    return (
      <div key={id} className="slide-image">
        <div className="acronym"><p>{acronym}</p></div>
        <img src={`http://dmnj1e9obrjaa.cloudfront.net${current.banner_path}`} alt=""/>
      </div>
    )
  }
}

export default (props) => {
  const { slideIds, festivals, slideshow } = props
  const options = {
    autoplay: true,
    slidesToShow: 2,
    width: "1900px",
    slidewidth: 950,
    cellAlign: 'center',
    wrapAround: true,
    frameOverflow: "show",
    slideIndex: 3
  }
  return (
    <div className="relative-wrapper">
      <div className="slider-wrapper">
        <div className="shade-left"></div>
        <div className="shade-right"></div>
        <Carousel {...options}>
          {slideIds.map((id) => {return renderSlide(id, festivals)})}
          {renderSlide(slideshow, festivals)}
        </Carousel>
      </div>
    </div>
  )
}
