import { View, Text, StyleSheet, Image } from 'react-native';
import AuthBg from '../Components/SharedComponents/AuthBg';
import {LButton} from '../Components/SharedComponents/Button'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const LogoImg = require('../../assets/Logo.png')

const Onboarding = ({navigation}) => {

  const onClick = ()=>{
      navigation.navigate('Login')
    
  }
  return (
   <AuthBg>
        <View style={styles.Container}>
            <Image source={LogoImg} style={styles.logoImage} resizeMode="cover" />
             <Text style={styles.text}>Select your method of Sign in/Sign up</Text>
             <LButton onClick={onClick}>Personal Account </LButton>
             <LButton onClick={onClick}>Company Account </LButton>
             <View style={styles.footer}> 
                <Text style={styles.footerText}>Powered by DigiSecure</Text>
             </View>
             
        </View>
    </AuthBg>
  )
}

const styles = StyleSheet.create({
  logoImage: {
    width: 250, 
    height: 250,
  },
    Container: {
      width: '100%',
      height: '100%',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#E1E6E3',
      fontSize: 20,
      fontWeight: 'bold',
      padding: 20,
      
    },
    footer: {
      height: '45%',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      
    },
    footerText: {
      color: '#C2CBC5',
      fontSize: 15,
      
    },
});

export default Onboarding;
