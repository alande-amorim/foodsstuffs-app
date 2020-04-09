import React from 'react';

import {
  Container,
  FoodCategory,
  FoodImage,
  FoodShadow,
  FoodText,
  FoodDescription,
  Row,
  FoodPrice,
  FoodAddIcon,
} from './styles';

import image from '../../assets/green-grapes.png';
import shadow from '../../assets/food-shadow.png';

export default function FoodItem({ data }) {
  return (
    <Container>
      <FoodCategory>Fruits</FoodCategory>

      <FoodImage source={image} />

      <FoodText>Raspberries</FoodText>
      <FoodDescription>Lorem ipsum</FoodDescription>

      <Row>
        <FoodPrice>$10.50</FoodPrice>
        <FoodAddIcon name="add" size={20} color="#F00" />
      </Row>
    </Container>
  );
}
