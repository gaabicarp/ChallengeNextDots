import React, { Component } from 'react'
import { Text } from 'react-native'
import { Card, ImgContainer, TextContainer, DrinkImg } from './styles'
import PropTypes from 'prop-types'

export default class Drink extends Component {
    static PropTypes = {
        imageUrl: PropTypes.string,
        name: PropTypes.string
    }
    render() {
        return (
            <Card>
                <ImgContainer>
                    <DrinkImg source={{ uri: this.props.imageUrl }} />
                </ImgContainer>
                <TextContainer>
                    <Text>{this.props.name}</Text>
                </TextContainer>
            </Card>)
    }
}
