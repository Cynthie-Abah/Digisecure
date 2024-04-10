
import React, {useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/Screens/SplashScreen';
import Onboarding from './src/Screens/Onboarding';
import Login from './src/Components/Authentication/Login';
import Signup from './src/Components/Authentication/Signup';
import PasswordRecovery from './src/Components/Authentication/PasswordRecovery';
import PasswordReset from './src/Components/Authentication/PasswordReset';

const Stack = createStackNavigator();

const App = () => {
  const [isShowSplashscreen, setIsShowSplashscreen] = useState(true);
  useEffect(() => {
        setTimeout(() => {
          setIsShowSplashscreen(false)
        }, 3500); 
      }, []);
  return (
    <NavigationContainer>

    <Stack.Navigator screenOptions={{headerShown: false}} >
        {/* {
          isShowSplashscreen ? 
          ( <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />) : 
          (  <Stack.Screen 
            name="Onboarding screen" 
            component={Onboarding}
            options={{ headerShown: false }} 
            />)
        } */}
        <Stack.Screen 
            name="OnboardingScreen" 
            component={Onboarding}
            />

        <Stack.Screen 
            name="Login" 
            component={Login}
            />

        <Stack.Screen 
            name="Signup" 
            component={Signup}
            />

        <Stack.Screen 
            name="PasswordRecovery" 
            component={PasswordRecovery}
            />

        <Stack.Screen 
            name="PasswordReset" 
            component={PasswordReset}
            />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;







// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'pink',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
