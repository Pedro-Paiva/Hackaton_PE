import React, { useState, useContext } from 'react';
import { Platform } from 'react-native';
import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText } from '../SignIn/styles';
import { AuthContext } from "../../contexts/auth";

export default function SignIn() {

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [data, setData] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rep, setRep] = useState('');
  const { signUp } = useContext(AuthContext);
 
  function handleSignUp(){
    signUp(email, password, nome ,data, rep, cpf);
  }

 return (
   <Background>
      <Container
        behavior = { Platform.OS === 'ios' ? 'padding' :'' }
        enabled
      >
        <AreaInput>
          <Input 
            placeholder = " Nome "
            autoCorrect = {false}
            autoCapitalize = "none"
            Value = {nome}
            onChangeText ={ (text) => setNome(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input 
            placeholder = " CPF "
            autoCorrect = {false}
            autoCapitalize = "none"
            Value = {cpf}
            onChangeText ={ (text) => setCpf(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input 
            placeholder = " Data de Nasc "
            autoCorrect = {false}
            autoCapitalize = "none"
            Value = {data}
            onChangeText ={ (text) => setData(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input 
            placeholder = " Email "
            autoCorrect = {false}
            autoCapitalize = "none"
            Value = {email}
            onChangeText ={ (text) => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input 
            placeholder = "Senha"
            autoCorrect = {false}
            autoCapitalize = "none"
            Value = {password}
            onChangeText ={ (text) => setPassword(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input 
            placeholder = "Repetir a Senha"
            autoCorrect = {false}
            autoCapitalize = "none"
            Value = {rep}
            onChangeText ={ (text) => setRep(text)}
          />
        </AreaInput>

        <SubmitButton onPress = { handleSignUp }>
            <SubmitText> Cadastrar! </SubmitText>
        </SubmitButton>
      
      </Container>
   </Background>
  );
}