import { View, Text, StyleSheet, Image, Modal } from 'react-native';
import AuthBg from '../SharedComponents/AuthBg';
import { LButton } from '../SharedComponents/Button';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthInputField from '../SharedComponents/AuthInputField';
import { useState } from 'react';

const LogoImg = require('../../../assets/Logo.png')

const PasswordReset = ({navigation}) => {

  const onClick = ()=>{
      navigation.navigate('Login')
    
  }

  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
   <AuthBg>
        <View style={styles.Container}>
            <Image source={LogoImg} style={styles.logoImage} resizeMode="cover" />
             <Text style={styles.text}>Reset your Password</Text>

            <View>
                <Text>New Password</Text>
                <AuthInputField
                placeholder='New Password'
                />
            </View>

            <View>
                <Text>Confirm Password</Text>
                <AuthInputField 
                placeholder='Confirm Password'
                />
            </View>

            <LButton onClick={()=> setIsModalVisible(true)}> 
                Reset Password
            </LButton>



             <View style={styles.footer}> 
                <Text style={styles.footerText}>Powered by DigiSecure</Text>
             </View>
             
            {/* PASSWOPASSWORD SUCCESSFUL SCREENRD RESET SCREEN*/}
             <Modal 
             visible={isModalVisible} 
             onRequestClose={()=> setIsModalVisible(false)}
             animationType='fade'
             presentationStyle='pageSheet'
             >
                <View style={styles.modalView}>
                    <Text>Modal poooo</Text>
                    <LButton onClick={()=> setIsModalVisible(false)}> Close </LButton>
                </View>
             </Modal>
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
      height: '35%',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      
    },
    footerText: {
      color: '#C2CBC5',
      fontSize: 15,
      
    },
    modalView: {
        flex: 1,
        padding:60,
        backgroundColor: 'white'
    }
});


export default PasswordReset;
