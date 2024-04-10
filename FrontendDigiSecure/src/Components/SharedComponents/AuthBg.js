
import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, ImageBackground } from 'react-native';
const splashScreenImg = require('../../../assets/splashscreenImage.jpeg')

const AuthBg = ({children}) => {
    
  return (
 
    <Animated.View style={styles.container}>      
        <ImageBackground source={splashScreenImg} style={styles.bgImage}  resizeMode="cover" >
           
             {/* Dark overlay */}
        <View style={styles.overlay} />

                {/* render view here */}
                {children}
                
     
        </ImageBackground>  
    </Animated.View>
  );
};

const styles = StyleSheet.create({
      container: {
        flex: 1,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#344D3C',
        background: 'linear-gradient(180deg, rgba(95, 95, 95, 0.2) -4.58%, rgba(81, 81, 81, 0.2) 107.22%)',
      },
      bgImage: {
            flex: 1,
            width: '100%',
            height: '100%',
            resizeMode: 'fill', 
          },
      overlay: {
        ...StyleSheet.absoluteFillObject, 
        backgroundColor: 'linear-gradient(180deg, rgba(95, 95, 95, 0.3) -4.58%, rgba(81, 81, 81, 0.3) 107.22%)',
      }
       
    });

export default AuthBg;
