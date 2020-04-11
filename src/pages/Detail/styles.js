import styled from 'styled-components';
import InputSpinner from 'react-native-input-spinner';

export const Container = styled.View`
  flex: 1;
  background: #f2f7fd;
  justify-content: flex-end;
`;

export const Content = styled.View`
  flex: 1;
  box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.2);
  background: #fff;
  padding: 30px;
  border-top-left-radius: 36px;
  border-top-right-radius: 36px;
  box-shadow: 0px 2px 4px rgba(25, 38, 73, 0.08); /*, -2px -2px 4px #FFFFFF, inset 1px 1px 5px rgba(24, 38, 72, 0.13), inset -2px -2px 5px #FFFFFF */

  border-style: solid;
  border-top-color: #e9e9ee;
  border-top-width: 2px;
`;

export const DetailTitle = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;
  color: #ff7c63;
  margin-bottom: 30px;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Price = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  text-align: right;
  color: #1a1f96;
`;

export const QuantitySelector = styled(InputSpinner)``;

export const DetailDescription = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 26px;
  color: rgba(26, 31, 150, 0.42);
`;
