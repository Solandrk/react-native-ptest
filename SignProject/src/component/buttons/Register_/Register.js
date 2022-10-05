import React from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';
import Apple from '../../../svg/Apple';
import GoogleIC from '../../../svg/GoogleIc';
const RegisterButton = ({text,color,background,borderWidth,borderColor,icon}) => (
    <View style={[
        styles(background).container, borderWidth ? {borderWidth:borderWidth ,borderColor:`${borderColor}`} :{}]}>
       {getIcon(icon)}
       <Text style={{color:`${color}`}}>{text}</Text>
    </View>
);

function getIcon(type) {
    var icon ; 
    if(type == null) 
        return;
    switch (type) {
        case 'Google':
            return(
                <GoogleIC/>
            )
        case 'Apple':
            return(
                <Apple />
                );
        default:
            break;
    }    
   
}

const styles = (background) => StyleSheet.create({
    container:{
        width:'100%',
        height:48,
        backgroundColor:`${background}`,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        marginTop:24,
        flexDirection:'row-reverse'
    },
});

export default RegisterButton;
