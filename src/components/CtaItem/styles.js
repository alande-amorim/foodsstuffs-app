import styled from 'styled-components/native';
import { Dimensions, ImageBackground } from 'react-native';

export const Container = styled.TouchableOpacity`
  padding: 0;
  min-height: 100px;
`;

export const CtaImage = styled.Image`
  border-radius: 26px;
  width: ${Dimensions.get('window').width / 2 - 30}px;
  height: ${((Dimensions.get('window').width / 2 - 30) * 56) / 51}px;
  margin-bottom: 20px;
`;
