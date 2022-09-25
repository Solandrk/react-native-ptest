import React from 'react';
import { View, Text } from 'react-native';

const RegisterButton = ({text,color,background,borderWidth}) => (
    <View style={{
        width:'100%',
        height:48,
        backgroundColor:`${background}`,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        marginTop:24,
        borderColor:'gray',
        borderWidth:{borderWidth}
    }}>
       <Text style={{color:`${color}`}}>{text}</Text>
    </View>
);

export default RegisterButton;
