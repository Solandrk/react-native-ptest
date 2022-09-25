import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,SafeAreaView, View,Image } from 'react-native';
import CustomeInput from './src/component/Inputs/Register_Input/CustomeInput'
import RegisterButton  from './src/component/buttons/Register_/Register';
import BackIc from './src/images/back_ic.svg'
export default function App() {
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
        }}>Ceincloud like queen gard for your information</Text>
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
      <Text style={{alignSelf:'center', marginTop:48,color:'gray'}}>------------------------------------- Or Width -------------------------------------</Text>
      <View style={styles.Or_Width}>
        <RegisterButton borderWidth={1} text={"Sign in with Google"} color={'red'} background={'white'}/>
        <RegisterButton borderWidth={1} text={"Sign in with Apple"} color={'black'} background={'white'}/>

      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft:16,
    paddingRight:16,
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
