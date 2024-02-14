import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';

const OTP = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(30);
  const inputRefs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef()]);

  const restartTimer = () => {
    setTimer(30);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);

  useEffect(() => {
    if (timer === 0) {
      // Aquí puedes manejar lo que deseas hacer cuando el temporizador llega a cero
    }
  }, [timer]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Reiniciar el temporizador cuando la pantalla obtiene el foco
      restartTimer();
    });

    return unsubscribe;
  }, [navigation]);

  const handleInputChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;

    if (text) {
      if (index < 3) {
        inputRefs.current[index + 1].focus();
      }
    } else {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
        newOtp[index - 1] = ''; // Borra el contenido del campo anterior
      }
    }

    setOtp(newOtp);
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.backButton}>
        <Image source={require('../imagenes/back_arrow.png')} style={styles.backIcon} />
      </TouchableOpacity>

      <Text style={styles.infoText}>
        You only have to enter an OTP code we sent via SMS to your registered phone number +6288803210321
      </Text>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: -230 }}>
        <Text style={styles.otpLabelText}>OTP</Text>
        <Text style={{ color: 'red', fontSize: 18, marginTop: 45 }}>{otp.join('').length === 0 ? '*' : ''}</Text>
      </View>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TouchableOpacity key={index} onPress={() => inputRefs.current[index].focus()}>
            <Text style={digit ? styles.otpNumber : styles.otpText}>{digit || '●'}</Text>
          </TouchableOpacity>
        ))}
        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>
            {`00:${timer < 10 ? `0${timer}` : timer}`}
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        {otp.map((_, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            style={styles.hiddenInput}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleInputChange(text, index)}
          />
        ))}
      </View>

      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('SmartProfile')}>
        <View style={styles.arrowButton}>
          <Image source={require('../imagenes/FlechaT3.png')} style={styles.buttonImage} />
        </View>
      </TouchableOpacity>

      <Image
        source={require('../imagenes/Starbucks_Logo.svg.webp')}
        style={styles.backgroundImage}
      />
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
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  infoText: {
    color: '#036635',
    fontSize: 16,
    textAlign: 'justify',
    marginHorizontal: 30,
    marginTop: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  otpText: {
    fontSize: 40,
    color: '#DFDFDF',
    marginHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  otpNumber: {
    fontSize: 30,
    color: 'black',
    marginHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: -8,
    marginLeft: 100,
  },
  timerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  arrowButton: {
    backgroundColor: '#036635', // Cambiado a verde para el fondo de la flecha
    padding: 15,
    borderRadius: 50,
    marginTop: 20,
  },
  buttonImage: {
    width: 30,
    height: 30,
    tintColor: 'white', // Cambiar el color de la flecha a blanco
  },
  hiddenInput: {
    width: 0,
    height: 0,
    opacity: 0,
  },
  otpLabel: {
    color: 'red',
    fontSize: 16,
  },
  otpLabelText: {
    color: '#036655',
    fontSize: 16,
    marginTop: 50,
  },
  backgroundImage: {
    position: 'absolute',
    bottom: 0,
    zIndex: -1,
    opacity: 0.2,
    width: '110%',
    height: '56.5%',
    left: -170,
    bottom: 80,
  },
  arrowButton: {
    backgroundColor: '#036635', // Cambiado a verde para el fondo de la flecha
    padding: 15,
    borderRadius: 50,
    marginTop: 100, // Ajusta esta propiedad según tus necesidades, puede ser un número negativo para moverla hacia abajo
    marginLeft: 250, // Ajusta esta propiedad según tus necesidades, puede ser un número positivo para moverla hacia la izquierda
  },
});

export default OTP;

