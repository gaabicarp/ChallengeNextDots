import styled from 'styled-components';
import {Container as _Container} from '../../components/'
import LinearGradient from 'react-native-linear-gradient'

export const Background = styled(LinearGradient)({
        flex:1
})
export const Container = styled(_Container)({
    alignItems:'center',
    justifyContent:'center'
})
