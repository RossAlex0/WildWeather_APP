import { useState } from 'react';
import { Text, TextInput, Button, View } from 'react-native';
import React from "react";

import stylesApp from '../styles/styleApp';
import stylesOnBoarding from '../styles/styleOnBoarding';

export default function OnBoarding() {
    const[name,setName] = useState("")
    const[inputT,setInputT] = useState("")
    return(
    
        <View style={stylesOnBoarding.container}>
        {name &&
            <Text style={stylesApp.title}>{`Hi ${name} !`}</Text>
            }
      
            <Text style={stylesApp.txt}>Let's go WildWeather APP !!!</Text>
            <TextInput style={stylesApp.input} placeholder='Ecrit ici !' onChangeText={setInputT} />
            <Button title="Send" onPress={() => setName(inputT)}/>
        </View>
    
    )
}