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

// import image from '../../assets/green-grapes.png';
// import shadow from '../../assets/food-shadow.png';

export default function FoodItem({ data }) {
  return (
    <Container>
      <FoodCategory>{data.category}</FoodCategory>

      <FoodImage resizeMode="cover" source={data.image.thumb} />

      <FoodText>{data.name}</FoodText>
      <FoodDescription>{data.short_description}</FoodDescription>

      <Row>
        <FoodPrice>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(data.price)}
        </FoodPrice>
        <FoodAddIcon name="add" size={20} color="#F00" />
      </Row>
    </Container>
  );
}
