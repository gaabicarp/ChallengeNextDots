import React, {Component} from 'react';
import {ViewContainer} from './Styles';
import PropTypes from 'prop-types';

export default class Container extends Component {
  static PropTypes = {
    children: PropTypes.element,
    style: PropTypes.object,
  };

  render() {
    const {style, children} = this.props;
    return <ViewContainer style={style}>{children}</ViewContainer>;
  }
}
