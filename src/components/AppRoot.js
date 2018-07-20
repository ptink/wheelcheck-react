import React from 'react';
import PropTypes from 'prop-types'

import config from '../../config/app';

import HIDConnect from './HIDConnect'

/*
 * @class AppRoot
 * @extends React.Component
 */
class AppRoot extends React.Component {

  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    return <div className="appRoot">
      <h1>{config.title}</h1>
      <HIDConnect label="Pair Device"></HIDConnect>
    </div>;
  }
}

// Prop types validation
AppRoot.propTypes = {
  state: PropTypes.object.isRequired,
};

export default AppRoot;
