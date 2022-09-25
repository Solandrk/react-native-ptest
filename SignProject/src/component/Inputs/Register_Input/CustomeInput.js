import React from 'react';
import { View ,TextInput,StyleSheet} from 'react-native';

const CustomeInput = ({placeholder,contentType}) => (
   <View style={styles.container}>
        <TextInput textContentType={`${contentType}`} placeholder={placeholder} style={styles.input}/>
   </View>
);

const styles = StyleSheet.create({ 

    container:{
        width:'100%',
        height:46,
        backgroundColor:'white',
        borderRadius:8,
        borderColor:'#BDBDBD',
        borderWidth:1.5,
        marginTop:10,
        padding:6
    },
    input:{
        width:'100%',
        height:'100%',
        color:'black',
    },
});

export default CustomeInput;
