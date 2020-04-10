import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import FoodItem from '../../components/FoodItem';
import CtaItem from '../../components/CtaItem';

import { Container, FoodList } from './styles';
import { foods } from '../../assets/data';

export default function Foods() {
  function renderList(item) {
    return item.category !== 'cta' ? (
      <FoodItem data={item} />
    ) : (
      <CtaItem data={item} />
    );
  }

  return (
    <Container>
      <Header />
      <Menu />

      <FoodList
        showsVerticalScrollIndicator={false}
        onEndReached={() => {}}
        onEndReachedThreshold={0.2}
        data={foods}
        renderItem={({ item: food }) => renderList(food)}
        keyExtractor={(food) => food.name}
      />
    </Container>
  );
}
