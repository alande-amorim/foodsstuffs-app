import styled from 'styled-components/native';

export const Container = styled.View`
  height: 30px;
  margin-bottom: 21px;
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingLeft: 20, paddingRight: 20 },
})``;

export const TabText = styled.Text`
  font-size: 16px;
  line-height: 19px;
  color: blue;
  font-weight: ${(props) => (props.selected ? 600 : 500)};
  color: ${(props) => (props.selected ? '#FF7D64' : '#5b5fdd')};
  text-decoration: ${(props) =>
    props.selected ? 'underline #FF7D64' : 'none'};
`;

export const TabItem = styled.TouchableOpacity`
  margin-right: 30px;
  align-self: center;
`;
