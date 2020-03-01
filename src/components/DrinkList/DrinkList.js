import React, {Component} from 'react';
import {Drink} from '../';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';

export default class DrinkList extends Component {
  static PropTypes = {
    data: PropTypes.array,
  };

  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={itemData => (
          <Drink name={itemData.item.name} imageUrl={itemData.item.imageUrl} />
        )}
      />
    );
  }
}
