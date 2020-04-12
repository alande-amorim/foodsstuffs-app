import React, { useState } from 'react';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import {
  Container,
  Image,
  Content,
  DetailTitle,
  QuantitySelector,
  PriceContainer,
  Price,
  DetailDescription,
  AddToCartContainer,
  AddToCartBtn,
} from './styles';

import image from '../../assets/pink-macaroon-large.png';

export default function Detail() {
  const price = 10.5;
  const [displayPrice, setDisplayPrice] = useState(10.5);
  const [quantity, setQuantity] = useState(1);

  function handleChange(num) {
    console.log(num);
    setQuantity(num);
    setDisplayPrice(num * price);
  }

  return (
    <Container>
      <Header />

      <Image source={image} />

      <Content>
        <DetailTitle>Pink Macaroon</DetailTitle>

        <PriceContainer>
          <QuantitySelector
            max={10}
            min={1}
            step={1}
            colorRight="transparent"
            colorLeft="transparent"
            colorPress="transparent"
            buttonPressTextColor="transparent"
            colorMin="#A9AEE5"
            colorMax="#A9AEE5"
            value={quantity}
            onChange={handleChange}
            rounded={false}
          />
          <Price>${displayPrice}</Price>
        </PriceContainer>

        <DetailDescription>
          A macaroon is a small cake or cookie, typically made from ground
          almonds, coconut or other nuts with sugar and sometimes flavorings,
          food coloring, glace cherries, jam or a chocolate coating – or a
          combination of these or other ingredients. A macaroon is a small cake
          or cookie, typically made from ground almonds, coconut or other nuts
          with sugar and sometimes flavorings, food coloring, glace cherries,
          jam or a chocolate coating – or a combination of these or other
          ingredients. A macaroon is a small cake or cookie, typically made from
          ground almonds, coconut or other nuts with sugar and sometimes
          flavorings, food coloring, glace cherries, jam or a chocolate coating
          – or a combination of these or other ingredients.
        </DetailDescription>
      </Content>
      <AddToCartContainer>
        <AddToCartBtn>
          <Icon name="plus" size={30} color="white" />
        </AddToCartBtn>
      </AddToCartContainer>

      <Tabs />
    </Container>
  );
}
