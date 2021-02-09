import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

export default function App() {

  return (

    <Container>

        <Text> app Hackaton </Text>

    </Container>

  );

}

const Container = styled.View `

    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #FF0000;

`;