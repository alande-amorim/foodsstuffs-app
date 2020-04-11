import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container, TabsContainer, TabItem, Spacer } from './styles';

export default function Tabs() {
  return (
    <Container>
      <TabsContainer>
        <TabItem>
          <Icon name="grid" size={20} color="#A9AEE5" />
        </TabItem>
        <TabItem>
          <Icon name="tag" size={20} color="#A9AEE5" />
        </TabItem>

        <Spacer />

        <TabItem>
          <Icon name="shopping-cart" size={20} color="#A9AEE5" />
        </TabItem>
        <TabItem>
          <Icon name="settings" size={20} color="#A9AEE5" />
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
