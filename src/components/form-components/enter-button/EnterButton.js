import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

// import { Container } from './styles';

export default function EnterButton({navigation}) {
  return (
    <TouchableOpacity
      style={{
        height: 60,
        marginVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#FFDC2C',
      }}
      onPress={() => navigation.navigate('Home')}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '500',
        }}>
        Entrar
      </Text>
    </TouchableOpacity>
  );
}
