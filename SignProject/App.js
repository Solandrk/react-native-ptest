import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,SafeAreaView, View,Image } from 'react-native';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SignUp/>
    </SafeAreaView>
  ); 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft:16,
    paddingRight:16,
    flexDirection:'row'
  },
});
