import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {data, promoENUM} from '../data';
import SuperPromo from '../components/promo-cards/super-promo/SuperPromo';
import Promo from '../components/promo-cards/promo/Promo';
import styled from 'styled-components/native';

const Wrapper = styled.ScrollView`
  flex: 1;
  background-color: #ffdc2c;
`;

const Home = () => {
  const superPromo = data.find(item => item.type === promoENUM.SUPERPROMO);
  const promo = data.filter(item => item.type === promoENUM.PROMO);
  const brazil = data.filter(item => item.type === promoENUM.BRAZIL);
  const world = data.filter(item => item.type === promoENUM.WORLD);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Wrapper>
        <SuperPromo data={superPromo} />
        <Promo data={promo} title={'🤑🤑 Promoções para você'} />
        <Promo data={brazil} title={'Melhores destinos no Brasil 😍'} />
        <Promo data={world} title={'Viaje pelo mundo 🌎'} />
      </Wrapper>
    </SafeAreaView>
  );
};

export default Home;
