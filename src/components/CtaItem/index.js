import React from 'react';
import { Image } from 'react-native';

import { Container, CtaImage } from './styles';

export default function CtaItem({ data }) {
  return (
    <Container>
      <CtaImage source={data.image} />
    </Container>
  );
}
