import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { View, Text, ActivityIndicator, Button } from 'react-native'
import { Container, HeaderContainer, Background, BtnContainer, ContainerActivity, TextError, Icon } from './styles'
import { Searcher, DrinkList, ArrowBack } from '../../components/'

import Colors from '../../constant/Color'


import * as drinksActions from '../../store/actions/drinks'
import Color from '../../constant/Color'

const ListDrinkScreen = props => {
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [drinkName, setDrinkName] = useState('')

    const dispatch = useDispatch();

    let drinklist = useSelector(state => state.drinks.drinks)

    const setDrinks = async () => {
        setError('')
        if (drinkName.length >= 3) {
            setIsLoading(true);
            try {
                await dispatch(drinksActions.fetchDrinks(drinkName))
            } catch (err) {
                setError(err.message)
                dispatch(drinksActions.clearDrinks())
            }
            setIsLoading(false)
        }

        if (drinkName.length === 2) {
            console.log('entre')
            dispatch(drinksActions.clearDrinks())
        }
    }

    const onCancelhandler = () => {
        setDrinkName('')
        dispatch(drinksActions.clearDrinks())
    }

    const onChangeHandler = text => {
        setDrinkName(text)
    }

    const goBack =  ()=>{
        props.navigation.goBack()
    }


    useEffect(() => {
        setDrinks()
    }, [drinkName])

    return (
        <Background colors={[Colors.Primary, Colors.Accent]}>
            <Container>
                <HeaderContainer>
                    <ArrowBack onPress={goBack}/>
                    <Searcher funChangeText={onChangeHandler} inputValue={drinkName}  focus = {true} />
                    <BtnContainer>
                        <Button title="Cancel" color={Colors.Primary} onPress={onCancelhandler} />
                    </BtnContainer>
                </HeaderContainer>
                {error ? <ContainerActivity><TextError>{error}</TextError></ContainerActivity> : null}
                {isLoading ? <ContainerActivity>
                    <ActivityIndicator size="large" color="white" />
                </ContainerActivity> :
                    <DrinkList
                        data={drinklist}
                    />}
            </Container>
        </Background>
    )
}





export default ListDrinkScreen