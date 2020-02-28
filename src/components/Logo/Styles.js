import {View, Text} from 'react-native'
import styled from 'styled-components'
import icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled(View)({
    justifyContent:'center',
    alignItems:'center',
    padding: 10
})

export const TextContainer = styled(View)(p=>({
    flexDirection:'row'
}));

export const TextBold = styled(Text)({
    fontFamily:'OpenSans-Bold',
    fontSize: 20,
    color: 'white'
})

export const NormalText = styled(Text)({  
    fontSize:20,
    color:'white'
})

export const Icon = styled(icon)(p=>({
    color: p.color,
    fontSize:p.size
}));