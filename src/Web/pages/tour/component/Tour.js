import React, { Component } from 'react';
import './../assets/styles/tour.scss';
import GetStarted from './GetStarted';
import TourCard from './TourCard';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';
import step1Image from '../assets/images/tour1_img.svg';
import step2Image from '../assets/images/tour2_img.svg';
import step3Image from '../assets/images/tour3_img.svg';

class Tour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
    };
  }

  exitTour = () => {
    this.props.updateTour(false);
    navigate('/');
  };
  render() {
    const { step } = this.state;
    return step === 0 ? (
      <GetStarted
        skip={() => this.exitTour()}
        action={() => this.setState({ step: step + 1 })}
      />
    ) : step === 1 ? (
      <TourCard
        title={'See JSON Objects'}
        subtitle={'Plux allows you to see JSON Objects with ease'}
        skip={() => this.exitTour()}
        image={step1Image}
        isFinished={false}
        action={() => this.setState({ step: step + 1 })}
      />
    ) : step === 2 ? (
      <TourCard
        title={'USE Previous JSON'}
        subtitle={
          'Plux stores your Previously used JSON Objects  so that you don’t have to Open two window'
        }
        skip={() => this.exitTour()}
        image={step2Image}
        isFinished={false}
        action={() => this.setState({ step: step + 1 })}
      />
    ) : (
      <TourCard
        title={'Works Offline'}
        subtitle={
          'Your Internet sucks? Don’t worry You can still work  in offline'
        }
        skip={() => this.exitTour()}
        image={step3Image}
        isFinished={true}
        action={() => this.setState({ step: step + 1 })}
      />
    );
  }
}

const mapState = (state) => ({
  isNew: state.viewer.isNew,
});

const mapDispatch = (dispatch) => ({
  updateTour: (payload) => dispatch.viewer.updateTour(payload),
});

const TourContainer = connect(
  mapState,
  mapDispatch
)(Tour);

export default React.memo(TourContainer);
