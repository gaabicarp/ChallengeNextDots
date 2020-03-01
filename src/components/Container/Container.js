import React, {Component} from 'react';
import {_Container} from './Styles';
import PropTypes from 'prop-types';

export default class Container extends Component {
  static PropTypes = {
    children: PropTypes.element,
    style: PropTypes.object,
  };

  render() {
    return (
      <_Container style={this.props.style}>{this.props.children}</_Container>
    );
  }
}
