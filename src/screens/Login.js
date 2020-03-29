import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import EnterButton from '../components/form-components/enter-button/EnterButton';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
  background-color: #263c70;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const LogoWrapper = styled.View`
  padding: 15px 0 15px 0;
`;

const Logo = styled.Image`
  height: 200px;
  width: 450px;
`;

const InputField = styled.TextInput`
  height: 40px;
  margin: 15px 0 15px 0;
  padding: 0 15px 0 15px;
  width: 100%;
  border-color: gray;
  border-width: 1px;
  background-color: #fff;
`;

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <Wrapper>
        <LogoWrapper>
          <Logo source={require('../assets/cvc-logo.png')} />
        </LogoWrapper>

        <InputField
          placeholder={'email'}
          onChangeText={text => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />

        <InputField
          placeholder={'senha'}
          onChangeText={text => setSenha(text)}
          value={senha}
          secureTextEntry={true}
        />

        <EnterButton navigation={navigation} />
      </Wrapper>
    </SafeAreaView>
  );
};
export default Login;
