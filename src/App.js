import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList';

class App extends Component {   
  
  componentDidMount() {
    this.props.fetchCats();
    // we have fetchCats through props because of mapDispatchetc
  }

  render() {
    return (
      <div>
        <h1>CatBook</h1>
        <CatList catPics={this.props.catPics}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      catPics: state.cats, 
      loading: state.loading
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchCats: () => dispatch(fetchCats())
//     // we have this in dispatch because we sent it through in catAction
//   }
// }

export default connect(mapStateToProps, { fetchCats })(App);

