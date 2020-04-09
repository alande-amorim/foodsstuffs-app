import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px 30px;
`;

export const Button = styled.TouchableOpacity`
  box-shadow: 0px 2px 4px rgba(25, 38, 73, 0.08); /*, -2px -2px 4px #ffffff, inset 1px 1px 5px rgba(24, 38, 72, 0.13), inset -2px -2px 5px #ffffff; */
  border-radius: 8px;
  background: #fff;
  padding: 8px;
`;
