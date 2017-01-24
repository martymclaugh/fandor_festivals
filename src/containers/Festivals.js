import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJson } from '../actions';

class Festivals extends Component {
  componentWillMount(){
    this.props.fetchJson();
  }
  render(){
    return(
      <div>
        <pre>
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
