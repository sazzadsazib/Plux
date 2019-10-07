import React from 'react';
import getStarted1 from './../assets/images/get_started_1.svg';
import { Spring } from 'react-spring/renderprops';

const GetStarted = ({ action, skip }) => {
  return (
    <Spring
      config={{ tension: 300, friction: 100, precision: 0.1 }}
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
    >
      {(props) => (
        <div style={props} className='tour-container'>
          <img
            className='tour-container__logo'
            src={getStarted1}
            alt={'get_started_1'}
          />
          <p className='tour-container__description'>
            Plus is a JSON Viewer. Yes You Might Ask what so Special About it?
            It allows user to store previously used JSON objects <br />
            Completely OpenSourced which works fine offline in case your office
            internet sucks! Feel free to contribute in <br />
            <a href={'https://github.com/sazzadsazib/plux'} target={'_blank'}>
              {' '}
              Github Repo.
            </a>{' '}
            Now Lets,
          </p>
          <button onClick={action} className={'tour-container__primary-button'}>
            Get Started
          </button>
          <br />
          <button onClick={skip} className={'tour-container__secondary-button'}>
            Skip
          </button>
        </div>
      )}
    </Spring>
  );
};
export default GetStarted;
