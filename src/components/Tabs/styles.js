import styled from 'styled-components';

export const Container = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const TabsContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const TabItem = styled.TouchableOpacity`
  padding: 20px;
`;

export const Spacer = styled.View`
  width: 40px;
  height: 40px;
`;
