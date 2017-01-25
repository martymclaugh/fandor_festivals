import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJson } from '../actions';
import NavBar from '../components/NavBar';

class Festivals extends Component {
  componentWillMount(){
    this.props.fetchJson();
  }
  render(){
    return(
      <div>
        <pre>
          <NavBar />
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
