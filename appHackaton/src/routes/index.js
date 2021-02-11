import React, { useContext } from 'react';
import { View, ActivityIndicator } from "react-native";
import {  } from "../contexts/auth";

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { useContext } from 'react';

function Routes() {
    const { signed, loading } = useContext(AuthContext);

    if(loading){  
        return(
        <View style= {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size = 'large' color = '#131313' />
        </View>
        );
    }  
    
}

export default Routes;