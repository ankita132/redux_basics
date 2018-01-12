
import React , { Component } from 'react';
import Main from './components/Main';
import User from './components/User';
import { connect } from 'react-redux';
import { setName } from './actions/userActions';

class App extends Component {
  render() {
    return (
      <div className="container">
               <Main changeUsername={() => this.props.setName('Anna')}/>
               <User username={this.props.user.name}/>
           </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    math: state.mathReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
