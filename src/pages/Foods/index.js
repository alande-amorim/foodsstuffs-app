import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import FoodItem from '../../components/FoodItem';

import { Container, FoodList } from './styles';

import data from '../../assets/data.json';

export default function Foods() {
  return (
    <Container>
      <Header />
      <Menu />

      <FoodList
        data={data}
        keyExtractor={(food) => food.name}
        renderItem={() => <FoodItem data={data} />}
      />
    </Container>
  );
}
