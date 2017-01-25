import React from 'react';
import _ from 'lodash';

function renderPreviewBox(id, data) {
  let current = _.find(data, { id })
  if(current.description.length > 292){
    var description = current.description.substring(0, 292) + "..."
  } else {
    var description = current.description
  }
  return (
    <div key={id} className="preview-box">
      <img className="preview-box-image" src={`http://dmnj1e9obrjaa.cloudfront.net${current.banner_path}`} alt=""/>
      <div className="banner-div">
        <span className="film-count">{current.film_count} films</span>
      </div>
      <h3 className="preview-box-title">{current.name.split(' ')[0]}</h3>
      <p className="preview-box-description">{description}</p>
    </div>
  )
}
export default (props) => {
  const { data, display } = props
  return (
    <div className="festivals-preview">
      {display.map( (id) => {return renderPreviewBox(id, data)})}
    </div>
  )
}
