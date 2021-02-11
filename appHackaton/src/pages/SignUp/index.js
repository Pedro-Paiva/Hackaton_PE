import React, { useState, useContext } from 'react';
import {  Platform } from 'react-native';

import { AuthContext } from "../../contexts/auth";

import { Background, Container, Logo, AreaInput ,Input,
SubmitButton, SubmitText } from "../SignIn/styles";

export default function SignUp() {
    const navigation = useNavigation();

  const [ nome, setNome] = useState('');
  const [ cpf, setCpf ] = useState('');
  const [ nasc, setNasc ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const { signUp } = useContext(AuthContext);

  function handleSignUp(){
    signUp(email, password, nome, cpf, nasc);
  }

 return (
   <Background>
      
      <Container
        behaivor={ Platform.OS === 'ios' ? 'padding' : '' }
        enabled
      >

        <AreaInput>
        
        <Input
        
        placeholder = " Nome "
        autoCorrect = { false }
        autocapitalize = " none "
        value= {nome}
        onChangeText = {(text) => setNome(text) }

        />
        
        </AreaInput>
        
        <AreaInput>
        
        <Input
        
        placeholder = " Cpf "
        autoCorrect = { false }
        autocapitalize = " none "
        value= {cpf}
        onChangeText = {(text) => setCpf(text) }

        />
        
        </AreaInput>

        <AreaInput>
        
        <Input
        
        placeholder = " Data de Nasc. "
        autoCorrect = { false }
        autocapitalize = " none "
        value= {nasc}
        onChangeText = {(text) => setNasc(text) }

        />
        
        </AreaInput>

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

        <SubmitButton onPress = {handleSignUp} >

            <SubmitText> Cadastrar </SubmitText>

        </SubmitButton>

      </Container>

   </Background>
  );
}