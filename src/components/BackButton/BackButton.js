import React, { Component } from 'react';
import { TouchableOpacity, View, Platform, TouchableNativeFeedback } from 'react-native';
import {Icon} from './styles'
import propTypes from 'prop-types'

export default class ArrowBack extends Component {

    static defaultProps ={
        onPress: ()=>{}
    }

    static propTypes = {
        onPress: propTypes.func,
    }

    render() {

        let TouchableComp = TouchableOpacity;
        if(Platform.OS==='android' && Platform.Version >= 21){
            TouchableComp = TouchableNativeFeedback
        }
        return (
            <TouchableComp onPress={this.props.onPress}>
                <View>
                    <Icon name="arrow-back" size={20} color="black" />
                </View>
            </TouchableComp>
        )
    }
}


