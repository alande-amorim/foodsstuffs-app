import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px 30px;
`;

export const Button = styled.TouchableOpacity`
  border-radius: 8px;
  padding: 8px;
  background: #fff;
  border-style: solid;
  border-top-color: #e9e9ee;
  border-top-width: 2px;
  border-left-color: #e9e9ee;
  border-left-width: 1px;
`;
