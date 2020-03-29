import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLessThan} from '@fortawesome/free-solid-svg-icons';
import {data} from '../data';

const Wrapper = styled.ScrollView`
  flex: 1;
  background-color: #ffdc2c;
`;

const CardImage = styled.Image`
  width: 100%;
  height: 250px;
`;

const NameText = styled.Text`
  font-size: 30px;
  text-align: center;
  padding: 10px 0 10px 0;
  font-weight: bold;
`;

const NameCity = styled.Text`
  font-size: 20px;
  text-align: center;
  padding: 10px 0 10px 0;
`;

const ReturnButtonWrapper = styled.TouchableOpacity`
  position: absolute;
  padding: 15px;
  flex-direction: row;
`;

const ReturnButtonText = styled.Text`
  margin-left: 10px;
  margin-top: -5px;
  color: #ffdc2c;
  font-size: 20px;
  font-weight: bold;
`;

const ContentText = styled.Text`
  font-size: 20px;
  padding: 20px;
`;

const BuyButtonWrapper = styled.TouchableOpacity`
  background-color: #263c70;
  padding: 10px 20px 10px 20px;
  margin: 10px 20px 10px 20px;
  border-radius: 25px;
  height: 60px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const BuyButtonText = styled.Text`
  color: #fff;
  font-size: 25px;
`;

const BuyButtonPrice = styled.Text`
  color: #ffdc2c;
  font-size: 30px;
  font-weight: bold;
`;

const Detail = ({route, navigation}) => {
  const {id} = route.params;
  const item = data.find(x => x.id === id);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Wrapper>
        <CardImage source={item.image} />

        <ReturnButtonWrapper onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faLessThan} color={'#ffdc2c'} />
          <ReturnButtonText>voltar</ReturnButtonText>
        </ReturnButtonWrapper>
        <NameText>{item.name}</NameText>
        <NameCity>{item.city}</NameCity>
        <ContentText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ContentText>

        <BuyButtonWrapper>
          <BuyButtonText>Comprar por </BuyButtonText>
          <BuyButtonPrice>{item.price}</BuyButtonPrice>
        </BuyButtonWrapper>
      </Wrapper>
    </SafeAreaView>
  );
};
export default Detail;
