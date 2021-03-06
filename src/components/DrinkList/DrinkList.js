import React, {Component} from 'react';
import Drink from '../Drink';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';

export default class DrinkList extends Component {
  static PropTypes = {
    data: PropTypes.array,
  };

  render() {
    const {data} = this.props;
    return (
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Drink name={item.name} imageUrl={item.imageUrl} />
        )}
      />
    );
  }
}
