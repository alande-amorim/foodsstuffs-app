import styled from 'styled-components/native';
import { Dimensions, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import shadow from '../../assets/food-shadow.png';

export const Container = styled.TouchableOpacity`
  background: #fff;
  box-shadow: 0px 2px 4px rgba(25, 38, 73, 0.08);
  border-radius: 26px;
  padding: 20px;
  width: ${Dimensions.get('window').width / 2 - 30}px;
  margin-bottom: 20px;
  position: relative;
  min-height: 100px;
`;

export const FoodCategory = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 8px;
  line-height: 10px;
  text-transform: uppercase;
  color: #a9aee5;
`;

export const FoodShadow = styled(ImageBackground)`
  /* flex: 1; */
  /* justify-content: center; */
`;

export const FoodImage = styled.Image`
  margin-top: 10px;
  margin-bottom: 30px;
  width: 100%;
`;

export const FoodText = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 30px;
  color: #1a1f96;
`;

export const FoodDescription = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 9px;
  line-height: 14px;
  color: rgba(26, 31, 150, 0.6);
  margin-bottom: 14px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const FoodPrice = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #1a1f96;
`;
export const FoodAddIcon = styled(Icon)``;
