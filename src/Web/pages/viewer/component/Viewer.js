import React, { Component } from 'react';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';

class Viewer extends Component {
  componentDidMount() {
    if (this.props.isNew) {
      navigate('/get-started');
      window.location.reload();
    }
  }
  render() {
    return <div> Start Here </div>;
  }
}

const mapState = (state) => ({
  isNew: state.viewer.isNew,
});

const AuthContainer = connect(mapState)(Viewer);

export default React.memo(AuthContainer);
