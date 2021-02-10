import React, { useState, useContext } from 'react';
import { Platform } from 'react-native';
import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText } from '../SignIn/styles';
import { AuthContext } from '../../contexts/auth';


export default function SignIn() {

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [data, setData] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rep, setRep] = useState('');
  const { user } = useContext(AuthContext);

  console.log(user.nome);

 return (
   <Background>
      <Container
        behavior = { Platform.OS === 'ios' ? 'padding' :'' }
        enabled
      >

        <AreaInput>
          <Input 
            placeholder = "Nome"
            autoCorrect = {false}
            autoCapitalize = "none"
            value = {nome}
            onChanfeText ={ (text) => setNome(text)}
          />
        </AreaInput>

        
        <AreaInput>
          <Input 
            placeholder = "CPF"
            autoCorrect = {false}
            autoCapitalize = "none"
            value = {cpf}
            onChanfeText ={ (text) => setCpf(text)}
          />
        </AreaInput>

        
        <AreaInput>
          <Input 
            placeholder = "data Nasc."
            autoCorrect = {false}
            autoCapitalize = "none"
            value = {data}
            onChanfeText ={ (text) => setData(text)}
          />
        </AreaInput>
       
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

        <AreaInput>
          <Input 
            placeholder = "Repetir a Senha"
            autoCorrect = {false}
            autoCapitalize = "none"
            alue = {rep}
            onChanfeText ={ (text) => setRep(text)}
          />
        </AreaInput>

        <SubmitButton>
            <SubmitText> Cadastrar! </SubmitText>
        </SubmitButton>
      
      </Container>
   </Background>
  );
}