
import AuthBg from '../Components/SharedComponents/AuthBg';
import React, { useEffect, useRef } from 'react';
import { Image, Animated, StyleSheet } from 'react-native';
const splashScreenImg = require('../../assets/splashscreenImage.jpeg')
const LogoImg = require('../../assets/Logo.png')

const SplashScreen = () => {

    const fadeAnim = useRef(new Animated.Value(1)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }).start();
      };

      const fadeOut = () => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true,
        }).start();
      };
    
      useEffect(()=>{
        fadeOut() 
    }, [])

  return (
 
    <AuthBg>
            <Animated.View style={{...styles['logoContainer'],opacity: fadeAnim }}>
                <Image source={LogoImg} style={styles.logoImage} resizeMode="cover" />
            </Animated.View>
    </AuthBg>
  );
};

const styles = StyleSheet.create({
          logoContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
          logoImage: {
            width: 400, 
            height: 400,
          },
    });

export default SplashScreen;
