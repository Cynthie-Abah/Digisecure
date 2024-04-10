import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo vector icons


const AuthInputField = ({
    placeholder = "Enter your text here", 
    borderColor = 'transparent',
    height = 50,
    color = 'rgba(160, 162, 162, 1)',
    placeholderTextColor = 'rgba(159, 161, 161, 1)',
    backgroundColor = 'rgba(235, 238, 236, 1)',
    fontSize = 18,
    iconColor = 'rgba(52, 77, 60, 1)',
    password = true,
    


}) => {

    // styles
    const inputViewStyle = {
        borderColor,
        height,
        width: '90%', 
        borderColor,
        backgroundColor,
        borderWidth: 1,
        borderRadius: 18,
        paddingHorizontal: 15,
        alignSelf: 'center',
        color,
        margin: 6,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
    const inputStyle = {
        fontSize,
        borderColor: 'red'
    }
    const iconContainer = {
        justifyContent: 'center', 
        paddingHorizontal: 10,
    }

    const [inputValue, setInputValue] = useState('');
    const [isPasswordVisible, setPasswordVisible] = useState(false);
  
    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
      setPasswordVisible(!isPasswordVisible);
    };

  return (  
    <View style={{...inputViewStyle}}>
      <TextInput
        style={{...inputStyle}}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
        value={inputValue}
        onChangeText={setInputValue} // Update the input value when it changes
      />

      { password && 

        <TouchableOpacity
        style={{...iconContainer}}
        onPress={togglePasswordVisibility} // Call togglePasswordVisibility onPress
      >
        <Ionicons
          name={isPasswordVisible ? 'eye-off' : 'eye'}
          size={24}
          color={iconColor}
        />
      </TouchableOpacity>
     }
      
    </View>
  );
};


export default AuthInputField;
