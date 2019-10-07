import React from 'react';
import PluxLogo from '../assets/images/plug_logo_horizontal.svg';
import { Spring } from 'react-spring/renderprops';
import PropType from 'prop-types';

const TourCard = ({ action, title, subtitle, image, isFinished, skip }) => {
  return (
    <Spring
      config={{ tension: 300, friction: 100, precision: 0.1 }}
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
    >
      {(props) => (
        <div style={props} className='tour-container'>
          <img
            src={PluxLogo}
            alt={'logo'}
            className='tour-container__logo-sub'
          />
          <br />
          <div className='layout-container'>
            <div>
              <img src={image} alt={'tour card'} />
            </div>
            <div>
              <p className={'title'}>{title}</p>
              <p className={'subtitle'}>{subtitle}</p>
            </div>
          </div>
          <br />
          <button
            onClick={isFinished ? skip : action}
            className={'tour-container__primary-button'}
          >
            {isFinished ? 'Finish' : 'Next'}
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

TourCard.propTypes = {
  action: PropType.func,
  title: PropType.string,
  subtitle: PropType.string,
  image: PropType.string,
  isFinished: PropType.bool,
  skip: PropType.func,
};
export default TourCard;
