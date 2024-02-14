import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';


const renderAsterisk = (text) => {
  return text.length === 0 ? '*' : '';
};

const SmartProfile = ({ navigation }) => {
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const handleNavigateToStarbucks = () => {
    navigation.navigate('Starbucks', { fullName });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('OTP')} style={styles.backButton}>
        <Image source={require('../imagenes/back_arrow.png')} style={styles.backIcon} />
      </TouchableOpacity>

      <Text style={styles.headerText}>Please fill in a few details below</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>
          Full name
          <Text style={{ color: 'red' }}>{renderAsterisk(fullName)}</Text>
        </Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            placeholderTextColor="gray"
            value={fullName}
            onChangeText={(text) => setFullName(text)}
          />
          {fullName.length > 0 && (
            <TouchableOpacity onPress={() => setFullName('')}>
              <Image source={require('../imagenes/cancel_icon.png')} style={styles.closeIcon} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>
          Email
          <Text style={{ color: 'red' }}>{renderAsterisk(email)}</Text>
        </Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="e.g name@email.com"
            placeholderTextColor="gray"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          {email.length > 0 && (
            <TouchableOpacity onPress={() => setEmail('')}>
              <Image source={require('../imagenes/cancel_icon.png')} style={styles.closeIcon} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>
          Phone number
          <Text style={{ color: 'red' }}>{renderAsterisk(phoneNumber)}</Text>
        </Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="+504"
            placeholderTextColor="gray"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
            keyboardType="numeric"  
          />
          {phoneNumber.length > 0 && (
            <TouchableOpacity onPress={() => setPhoneNumber('')}>
              <Image source={require('../imagenes/cancel_icon.png')} style={styles.closeIcon} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Starbucks', { fullName: fullName })}>
        <View style={styles.arrowButton}>
          <Image source={require('../imagenes/FlechaT3.png')} style={styles.buttonImage} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  headerText: {
    color: '#036635',
    fontSize: 18,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  labelText: {
    fontSize: 16,
    color: '#036635',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#036635',
    marginTop: 10,
    width: '80%',  
  },
  input: {
    flex: 1,  
    height: 40,
    color: 'black',
    marginLeft: 10,
    fontSize: 16,
  },
  closeIcon: {
    width: 20,
    height: 20,
    tintColor: '#036635',
    marginLeft: 10,
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
  arrowButton: {
    backgroundColor: '#036635',
    padding: 18,
    borderRadius: 50,
    marginTop: 50, 
    marginLeft: 250,
  },
  buttonImage: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
});

export default SmartProfile;

