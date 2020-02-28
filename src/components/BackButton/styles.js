import styled from 'styled-components';
import icon from 'react-native-vector-icons/MaterialIcons'

export const Icon = styled(icon)(p=>({
    color: p.color,
    fontSize: p.size
}))
