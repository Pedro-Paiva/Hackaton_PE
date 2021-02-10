import React, { useState, useContext }   from 'react';
import { View, Text } from "react-native";
import { Platform } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link , LinkText } from './styles';
import { AuthContext } from "../../contexts/auth";

export default function SignIn() {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(){
  
  }

 return (
   <Background>

      <Container
        behavior = { Platform.OS === 'ios' ? 'padding' :'' }
        enabled
      >
        <Logo source = {require('../../assets/Logo.png')}/>

        <AreaInput>
          <Input 
            placeholder = "Email"
            autoCorrect = {false}
            autoCapitalize = "none"
            value = {email}
            onChanfeText ={ (text) => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input 
            placeholder = "Senha"
            autoCorrect = {false}
            autoCapitalize = "none"
            alue = {password}
            onChanfeText ={ (text) => setPassword(text)}
          />
        </AreaInput>

        <SubmitButton onPress = { handleLogin }>
            <SubmitText> Acessar! </SubmitText>
        </SubmitButton>

        <Link onPress = { () => navigation.navigate('SignUp') }>
          <LinkText> Criar uma conta! </LinkText>
        </Link>

      </Container>

   </Background>
  );
}