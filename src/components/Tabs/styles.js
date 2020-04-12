import styled from 'styled-components';

export const Container = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #fff;
  border-style: solid;
  border-top-color: #cacbd8;
  border-top-width: 1px;
`;

export const TabsContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const TabItem = styled.TouchableOpacity`
  padding: 25px 20px;
`;

export const Spacer = styled.View`
  width: 100px;
  height: 70px;
`;
