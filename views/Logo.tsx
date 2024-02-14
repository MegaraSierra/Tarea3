import React from "react";
import { SafeAreaView, View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const Logo = ({ navigation }) => {
  const handleLogoPress = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredContainer}>
        <TouchableOpacity onPress={handleLogoPress}>
          <Image
            source={require('../imagenes/Starbucks_Logo.svg.webp')}
            style={{ width: 200, height: 200 }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', 
  },
  centeredContainer: {
    alignItems: 'center',
    marginBottom: 100,
  },
});

export default Logo;
