import React from 'react';
import { View ,StyleSheet,SafeAreaView, Image, Text} from 'react-native';
import BackIc from './../images/back_ic.svg'
import CustomeInput from '../component/Inputs/Register_Input/CustomeInput'
import RegisterButton  from '../component/buttons/Register_/Register';

export default function SignUp(){
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top_bar}>
                <Image source={BackIc}/>
            </View>
            <View>
                <Text style={{
                    color:'black',
                    fontSize:24,
                    marginTop:16,
                }}>Sign Up </Text> 
                <Text style={{
                    color:'gray',
                    fontSize:14,
                    marginTop:4,
                }}>Ceincloud is secure place for your data</Text>
            </View>
            <View style={styles.register_section}>
                <Text style={{color:"#212121"}}>Name</Text>
                <CustomeInput placeholder={"Your name"}/>
                <Text style={{color:"#212121",marginTop:20}}>Username</Text>
                <CustomeInput placeholder={"Your username"} contentType="password"/>
                <Text style={{color:"#212121",marginTop:20}}>Password</Text>
                <CustomeInput placeholder={"Your password"} contentType="password"/>
                <RegisterButton text={"Sign Up"} color={'white'} background={'#303F9F'}/>
                <Text style={{marginTop:48,alignSelf:'center',color:'gray'}}>Do you have account? Sign in</Text>
                <Text style={{
                    color:'blue',
                    alignSelf:'center',
                    

                }}>Learn about terms and Data policy</Text>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: { 
      flex: 1,
      backgroundColor: '#fff',
      paddingLeft:10,
      paddingRight:10,
    },
    top_bar :{
        width:'100%',
        height:40,
        backgroundColor:'black',
        marginTop:40,
        opacity:0.8
    },
    register_section:{
      width:'100%',
      marginTop:24,
    },
    Or_Width:
    {
      width:'100%',
      marginTop:24,
    }
  });