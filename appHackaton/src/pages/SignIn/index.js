import React, { useState, useContext } from 'react';
import { Platform } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from '../../contexts/auth';

import { Background, Container, Logo, AreaInput ,Input,
SubmitButton, SubmitText, Link, LinkText } from "./styles";

export default function SignIn() {

  const navigation = useNavigation();

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const { sigIn } = useContext(AuthContext);

  function handleLogin(){
    sigIn(email, password);
  }

 return (
   <Background>
      
      <Container
      behaivor={ Platform.OS === 'ios' ? 'padding' : '' }
      enabled
      >

        <Logo source = {require('../../assets/Logo.png')}/>

        <AreaInput>
        
        <Input
        
        placeholder = " Email "
        autoCorrect = { false }
        autocapitalize = " none "
        value= {email}
        onChangeText = {(text) => setEmail(text) }

        />
        
        </AreaInput>
       
        <AreaInput>
        
        <Input
        
        placeholder = " Senha "
        autoCorrect = { false }
        autocapitalize = " none "
        value= {password}
        onChangeText = {(text) => setPassword(text) }

        />
        
        </AreaInput>

        <SubmitButton onPress = {handleLogin}>

            <SubmitText> Acessar </SubmitText>

        </SubmitButton>

        <Link onPress = {() => navigation.navigate('SignUp')}>
        
          L<LinkText> Criar uma conta! </LinkText>
        
        </Link>

      </Container>

   </Background>
  );
}