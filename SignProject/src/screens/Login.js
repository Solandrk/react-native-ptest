import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,SafeAreaView, View,Image } from 'react-native';
import CustomeInput from '../component/Inputs/Register_Input/CustomeInput'
import RegisterButton  from '../component/buttons/Register_/Register';
import BackIc from './../images/back_ic.svg'
export default function Login() {
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
        }}>Welcome Back </Text> 
        <Text style={{
          color:'gray',
          fontSize:14,
          marginTop:4,
        }}>Ceincloud security like Queen gards for your data</Text>
      </View>
      <View style={styles.register_section}>
        <Text style={{color:"#212121"}}>Username</Text>
         <CustomeInput placeholder={"Username"}/>
         <Text style={{color:"#212121",marginTop:20}}>Password</Text>
        <CustomeInput placeholder={"Password"} contentType="password"/>
        <Text style={{marginTop:16,fontSize:12,color:'blue'}}>Forgot Password ?</Text>
        <RegisterButton text={"Login"} color={'white'} background={'#303F9F'}/>
        <Text style={{marginTop:48,alignSelf:'center',color:'gray'}}>Don't have an account? Sing Up</Text>
      </View>
      <View style={{position:'relative'}}>
        <View style={{
          width:'100%',
          height:0.5,
          backgroundColor:'black',
          marginTop:48
        }}>
        </View>
        <Text style={
          {
            alignSelf:'center', 
            color:'gray',
            marginTop:-10,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#ffff',
            zIndex:1
            }}>Or With</Text>
          </View>
      <View style={styles.Or_Width}>
        <RegisterButton icon={'Google'} borderColor='red' borderWidth={0.5} text={"Sign in with Google"} color={'red'} background={'white'}/>
        <RegisterButton icon={'Apple'} borderColor='black' borderWidth={1}  text={"Sign in with Apple"} color={'black'} background={'white'}/>

      </View>
    </SafeAreaView>
  );
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
