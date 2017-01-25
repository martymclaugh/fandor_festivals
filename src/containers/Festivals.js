import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJson } from '../actions';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';

class Festivals extends Component {
  componentWillMount(){
    this.props.fetchJson();
  }
  render(){
    const motto = "If you're looking for the best films from the world's finest film festivals, you've come to the right place."
    return(
      <div>
        <pre>
          <NavBar />
          <Banner
            header="Film Festivals"
            motto={motto}/>
          {JSON.stringify(this.props, null, 2)}
        </pre>
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
