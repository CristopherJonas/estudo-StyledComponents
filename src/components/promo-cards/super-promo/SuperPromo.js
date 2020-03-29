import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 25px;
  margin-top: 20px;
  text-align: center;
  font-weight: bold;
`;

const CardWrapper = styled.TouchableOpacity``;
const CardImage = styled.Image`
  width: 350px;
  height: 250px;
  border-radius: 25px;
  border-color: #fff;
  border-width: 2px;
`;

const TextWrapper = styled.View`
  width: 350px;
  height: 250px;
  position: absolute;
  justify-content: space-between;
`;

const PromoBannerBackground = styled.View`
  margin: 25px;
  background-color: #cc0e9e;
  padding: 5px 12px 5px 12px;
  border-radius: 15px;
`;

const PromoBannerText = styled.Text`
  text-align: center;
  color: #fff;
`;

const PromoInfoWrapper = styled.View`
  background-color: rgba(0, 0, 0, 0.6);
  height: 100px;
  border-radius: 25px;
  margin: 0 1px 2px 1px;
  padding: 15px;
`;

const PromoInfoPlace = styled.Text`
  color: #fff;
  font-weight: 700;
  font-size: 19px;
`;
const PromoInfoCity = styled.Text`
  color: #fff;
  font-weight: 600;
`;
const PromoInfoPrice = styled.Text`
  color: #ffdc2c;
  font-weight: 900;
  font-size: 25px;
  text-align: right;
`;

export default function SuperPromo({data}) {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <Title>Super Promoção</Title>
      <CardWrapper
        onPress={() =>
          navigation.navigate('Detail', {
            id: data.id,
          })
        }>
        <CardImage source={data.image} />
        <TextWrapper>
          <PromoBannerBackground>
            <PromoBannerText>Grátis para 2 Crianças!</PromoBannerText>
          </PromoBannerBackground>
          <PromoInfoWrapper>
            <PromoInfoPlace>{data.name}</PromoInfoPlace>
            <PromoInfoCity>{data.city}</PromoInfoCity>
            <PromoInfoPrice>{data.price}</PromoInfoPrice>
          </PromoInfoWrapper>
        </TextWrapper>
      </CardWrapper>
    </Wrapper>
  );
}
