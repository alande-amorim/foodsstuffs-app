import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #f2f7fd;
`;

export const FoodList = styled.FlatList.attrs({
  columnWrapperStyle: {
    flex: 1,
    justifyContent: 'space-around',
  },
  numColumns: 2,
  contentContainerStyle: {
    minHeight: 100,
    // justifyContent: 'center',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // flex: 1,
  },
})`
  width: 100%;
  padding: 21px 10px;
`;
