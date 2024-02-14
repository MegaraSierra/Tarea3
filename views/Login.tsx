import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Platform, Keyboard } from 'react-native';

const Login = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [bottomImageVisible, setBottomImageVisible] = useState(true);

  const handleSignIn = () => {
    navigation.navigate('OTP');
  };

  const keyboardDidShow = () => {
    if (Platform.OS === 'android') {
      setBottomImageVisible(false);
    }
  };

  const keyboardDidHide = () => {
    if (Platform.OS === 'android') {
      setBottomImageVisible(true);
    }
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../imagenes/Starbucks_Logo.svg.webp')}
          style={styles.logo}
        />
      </View>
      <Text style={[styles.starbucksText, { color: 'black' }]}>STARBUCKS</Text>

      <TouchableOpacity
        onPress={() => console.log('Log in with Email')}
        activeOpacity={0.8}
        style={styles.loginTextContainer}
      >
        <Text style={[styles.buttonText, styles.linkText, { color: 'green', fontSize: 16 }]}>Login With Email</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Email"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={!showPassword}
        style={styles.input}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          activeOpacity={0.8}
        >
          <Text style={[styles.buttonText, styles.linkText, { color: 'green', fontSize: 16 }]}>{showPassword ? 'Hide Password' : 'Show Password'}</Text>
        </TouchableOpacity>
        <View style={styles.forgotContainer}>
          <TouchableOpacity
            onPress={() => console.log('Forgot?')}
            activeOpacity={0.8}
          >
            <Text style={[styles.buttonText, styles.linkText, { color: 'green', fontSize: 16 }]}>Forgot?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={handleSignIn} activeOpacity={0.8} style={{ zIndex: 2 }}>
        <View style={[styles.signInButton, { backgroundColor: '#036635', width: 190, borderRadius: 15, alignItems: 'center', justifyContent: 'center', paddingVertical: 10 }]}>
          <Text style={[styles.buttonText, { color: 'white', textAlign: 'center' }]}>Sign In</Text>
        </View>
      </TouchableOpacity>

      {bottomImageVisible && (
        <Image
          source={require('../imagenes/StarbucksDecoracionScreen2.png')}
          style={[styles.bottomImage, { zIndex: 1 }]}
        />
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    backgroundColor: 'white',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  starbucksText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: 300,
  },
  forgotContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  signInButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    zIndex: 1, 
  },
  linkText: {
    textDecorationLine: 'underline',
    color: 'green',
  },
  loginTextContainer: {
    alignSelf: 'flex-start',
    marginLeft: 58,
    marginBottom: 10,
  },
  bottomImage: {
    position: 'absolute',
    bottom: -50,
    width: '100%',
    height: 525,
    resizeMode: 'cover',
  },
});

export default Login;