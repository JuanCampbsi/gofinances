import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  background-color: ${({ theme }) => theme.colors.shape};  
  border-radius: 5px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 18px 16px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(20)}px;
`;

export const Category = styled.Text`
  color: ${({ theme }) => theme.colors.text_dark};

  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;