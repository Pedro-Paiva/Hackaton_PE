import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';

import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';

import { Background, Container, Nome, Saldo, Title} from './styles';

export default function Home() {

  const { user } = useContext(AuthContext);

 return (
    <Background>
      
      <Header/>

      <Container>

        <Nome></Nome> 

      </Container>

    </Background>
  );
}