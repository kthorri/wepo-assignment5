import React from 'react';
import {sunset, movingSun} from './sunset.css';

// Receives degree (number 0-180) as props which determines the styles taken to the sun.
const Sunset = props => {
  // Calculating our X axis
  const transformDegreeX = (() => (props.degree === 0 ? 0 : props.degree / 180 * 100))();
  // Calculating our Y axis, returning top or bottom determined with if degree over 90 or not
  const transformDegreeY = (() => {
    if (props.degree > 90) {
      const convertedDegree = (props.degree - 90) / 90 * 100 - 5;
      return {top: `${convertedDegree}%`};
    }
    const convertedDegree = props.degree / 90 * 100 - 10;
    return {bottom: `${convertedDegree}%`};
  })();

  return (
    <div className={sunset}>
      <div
        className={movingSun}
        style={{
          left: `${transformDegreeX}%`,
          ...transformDegreeY,
        }}
      />
    </div>
  );
};

Sunset.propTypes = {
  // because proptypes does not have a range variable, we create our own definition.
  // degree should be between 0 and 180
  degree: (props, propName) => {
    if (props[propName] >= 0 && props[propName] <= 180) {
      return;
    }
    return new Error('Number must be between 0 and 180');
  },
};

export default Sunset;
