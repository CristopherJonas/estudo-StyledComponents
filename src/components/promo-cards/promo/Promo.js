import React from 'react';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

const ListWrapper = styled.View``;

const TitleText = styled.Text`
  font-size: 25px;
  margin-top: 20px;
  text-align: center;
  font-weight: bold;
`;

const List = styled.FlatList`
  padding: 10px 0 10px 0;
`;

const ListItemWrapper = styled.TouchableOpacity`
  margin: 0 10px;
`;

const ListItemImage = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 20px;
  border-color: #fff;
  border-width: 2px;
`;

const ListItemCityWrapper = styled.View`
  position: absolute;
  width: 150px;
  height: 150px;
  justify-content: flex-end;
  align-items: center;
`;

const ListItemCityBackground = styled.View`
  background-color: rgba(0, 0, 0, 0.6);
  height: 50px;
  width: 145px;
  border-radius: 20px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin: 0 1px 2px 1px;
  padding: 15px;
  align-items: center;
`;

const ListItemCityName = styled.Text`
  color: #fff;
  font-weight: 700;
  font-size: 19px;
`;

export default function Promo({data, title}) {
  const navigation = useNavigation();
  return (
    <ListWrapper>
      <TitleText>{title}</TitleText>
      <List
        data={data}
        horizontal
        renderItem={(item, index) => (
          <ListItemWrapper
            key={index}
            onPress={() =>
              navigation.navigate('Detail', {
                id: item.item.id,
              })
            }>
            <ListItemImage source={item.item.image} />
            <ListItemCityWrapper>
              <ListItemCityBackground>
                <ListItemCityName>{item.item.city}</ListItemCityName>
              </ListItemCityBackground>
            </ListItemCityWrapper>
          </ListItemWrapper>
        )}
        keyExtractor={item => item.city}
      />
    </ListWrapper>
  );
}
