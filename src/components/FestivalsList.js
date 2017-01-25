import React from 'react';
import _ from 'lodash';

function renderFestivalLink(id, data){
  let current = _.find(data, { id });
  return <p key={current.id} className="festival-link">{current.name}</p>
}

export default (props) => {
  const { upcoming, all, data } = props;
  return (
    <div className="festivals-list">
      <img src={"http://d3uc4wuqnt61m1.cloudfront.net/assets/ffa_logo_small-0288774f02c8a6974a13328aded62e8a.png"} alt=""/>
        <h3 className="festivals-list-title">{props.title}</h3>
        <p className="festivals-list-motto">{props.motto}</p>
        <h4 className="festivals-list-header">Upcoming Festivals</h4>
          {upcoming.map((id) => { return renderFestivalLink(id, data) })}
        <h4 className="festivals-list-header">All F|FA Festivals</h4>
          {all.map((id) => { return renderFestivalLink(id, data) })}
    </div>
  )
}
