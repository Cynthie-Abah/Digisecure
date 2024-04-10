import { View, Text, StyleSheet, Pressable, Button } from "react-native"
import AuthInputField from "../SharedComponents/AuthInputField";
import AuthBg from "../SharedComponents/AuthBg";
import { LButton } from "../SharedComponents/Button";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function PasswordRecovery({navigation}) {

  return (
    <AuthBg>
    <View style={styles.Container}>
        <View style={styles.container}>

            <View>
                <Text style={styles.mainText}>Password Recovery</Text>
                <Text style={styles.shortText}>Enter the email address you used for registration.</Text>
            </View> 

            <View style={styles.inputContainer}> 
                <AuthInputField
                    placeholder={"Email Address"}
                    password = {false}
                />
            </View>
           
                <Text style={styles.forgotPassword}>Resend Code</Text>
            

            <LButton onClick={()=> navigation.navigate('PasswordReset')}> 
                Send Code
            </LButton>
            
            
        </View>
    </View>
    </AuthBg>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 150,
        alignSelf: 'center',
        width: '100%',
    },
    mainText: {
      color: '#E1E6E3',
      fontSize: 33,
      fontWeight: '500',
      paddingHorizontal: 20,
      padding: 10
    },
    shortText: {
      color: 'rgba(225, 230, 227, .9)',
      fontSize: 18,
      fontWeight: '400',
    paddingHorizontal: 20,
    },
    inputContainer: {
        paddingTop: 60,
        width: '100%'
    },
    forgotPassword: {
        color: 'rgba(225, 230, 227, 1)',
        fontSize: 18,
        alignSelf: 'flex-end',
        padding: 10,
        paddingHorizontal: 30,
    },
    signUpText: {
        color: ' rgba(195, 200, 213, 1)',
        fontWeight: 'bold'
      },
      Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      welcomeText: {
        color: '#E1E6E3',
        fontSize: 30,
        fontWeight: 800,
        textAlign: 'center',
        padding: 10,
      },
});

export default PasswordRecovery