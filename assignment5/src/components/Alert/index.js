import React from 'react';
import PropTypes from 'prop-types';
import styles, {alertTitle, alertText} from './alert.css';

// Stateless component that receives props from parent (App.js)
// We set the classname to always be the alert, as well as the type parsed to the component
// We access the type css by refering style (the whole css document) and searching for our type in there.
const Alert = props => {
  return <div className={`${alert} ${styles[props.type]}`}>{props.children}</div>;
};

Alert.Title = props => <div className={alertTitle}>{props.children}</div>;
Alert.Text = props => <div className={alertText}>{props.children}</div>;

// PropTypes is used to define the properties this component is to use.
Alert.propTypes = {
  // The type should be one of the following text brought in as props
  type: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
  // This is what is referenced between the opening jsx tag and closing
  children: PropTypes.node,
};

export default Alert;
