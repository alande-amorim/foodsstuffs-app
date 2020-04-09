import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Button } from './styles';

export default function Header() {
  function handlePress() {
    console.log('pressed');
  }

  return (
    <Container>
      <Button onPress={handlePress}>
        <Icon name="menu" size={20} color="#E5E5E5" background="#FFF" />
      </Button>
      <Button>
        <Icon name="search" size={20} color="#E5E5E5" background="#FFF" />
      </Button>
    </Container>
  );
}
