import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJson } from '../actions';
import Banner from '../components/Banner';
import Slider from '../components/Slider';
import FestivalsContent from '../components/FestivalsContent';

class Festivals extends Component {
  componentWillMount(){
    this.props.fetchJson();
  }
  render(){
    const { ffa_all, ffa_upcoming, marquee, slideshow } = this.props.festivals.festivals.festivalCollections
    const { festivals } = this.props.festivals.festivals
    const motto = "If you're looking for the best films from the world's finest film festivals, you've come to the right place.";
    if (!marquee){
      return <div> Loading... </div>
    }
    return(
      <div>
        <Banner
          header="Film Festivals"
          motto={motto}/>
        <Slider
          slideshow={slideshow}
          slideIds={marquee}
          festivals={festivals}/>
        <FestivalsContent
          display={marquee}
          upcoming={ffa_upcoming}
          all={ffa_all}
          data={festivals}
          title="Marquee Festivals"/>
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log(state, 'STATE')
  return {
    festivals: state
  }
}

export default connect(mapStateToProps, { fetchJson })(Festivals)
