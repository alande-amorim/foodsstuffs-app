import React, { useState } from 'react';

import { Container, TabsContainer, TabItem, TabText } from './styles';

export default function Menu() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('All');

  const menuItems = ['All', 'Fruits', 'Vegetables', 'Greens', 'Bakery'];

  return (
    <Container>
      <TabsContainer>
        {menuItems.map((item) => (
          <TabItem key={item} selected={item === selectedMenuItem}>
            <TabText selected={item === selectedMenuItem}>{item}</TabText>
          </TabItem>
        ))}
      </TabsContainer>
    </Container>
  );
}
