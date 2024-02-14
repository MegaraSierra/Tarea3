import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Starbucks = ({ route }) => {
  const fullName = route.params?.fullName || 'Default Name';

  return (
    <View style={styles.container}>
      {/* Pantalla de arriba */}
      <ScrollView style={styles.upperContainer}>
        <View style={styles.header}>
          <Image source={require('../imagenes/notificaciones.png')} style={styles.notificationIcon} />
          <Text style={styles.starbucksText}>STARBUCKS</Text>
          <Image source={require('../imagenes/drawer.png')} style={styles.drawerIcon} />
        </View>

        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Good Morning,</Text>
          <Text style={styles.userName}>{fullName}</Text>
        </View>

        <View style={styles.profileImageContainer}>
          <Image source={require('../imagenes/MegaraSie.jpg')} style={styles.profileImage} />
        </View>

        {/* Agrega la imagen de coffee */}
        <Image source={require('../imagenes/Cofee.png')} style={styles.cofeeImage} />
      </ScrollView>

      {/* Pantalla de abajo */}
      <View style={styles.bottomContainer}>
        {/* Agrega la imagen centrada */}
        <Image source={require('../imagenes/Linea.png')} style={[styles.bottomImage, { tintColor: 'gray' }]} />

        {/* Cuadros de Información */}
        <View style={styles.infoContainer}>
          <View style={styles.cardBalanceContainer}>
            <Text style={styles.cardBalanceText}>Card Balance</Text>
          </View>
          <View style={styles.amountContainer}>
            <Text style={styles.amountText}>L. 530.00</Text>
          </View>
        </View>

        {/* Imágenes un poco más grandes */}
        <View style={styles.smallImagesContainer}>
          <Image source={require('../imagenes/Agregar.png')} style={[styles.smallImage, { tintColor: '#D8A11C' }]} />
          <Image source={require('../imagenes/Dragon.png')} style={styles.smallImage} />
          <Image source={require('../imagenes/svday.png')} style={styles.smallImage} />
        </View>

        <View style={styles.circleImagesContainer}>
  <View style={styles.circle}>
    <Image source={require('../imagenes/TopUp.png')} style={styles.circleImage} />
    <Text style={styles.circleLabel}>Top-Up</Text>
  </View>
  <View style={styles.circle}>
    <Image source={require('../imagenes/Pay.png')} style={styles.circleImage} />
    <Text style={styles.circleLabel}>Pay</Text>
  </View>
  <View style={styles.circle}>
    <Image source={require('../imagenes/History.png')} style={styles.circleImage} />
    <Text style={styles.circleLabel}>History</Text>
  </View>
  <View style={styles.circle}>
    <Image source={require('../imagenes/TopUp.png')} style={styles.circleImage} />
    <Text style={styles.circleLabel}>Report Lost</Text>
  </View>
</View>

<View style={styles.additionalImagesContainer}>
  <Image source={require('../imagenes/Cafe1.jpg')} style={styles.additionalImage} />
  <Image source={require('../imagenes/Cafe2.jpg')} style={styles.additionalImage} />
  <Image source={require('../imagenes/Cafe3.jpg')} style={styles.additionalImage} />
</View>

<View style={styles.overlayRectangle}>
  <View style={styles.horizontalIconContainer}>
    <View style={styles.iconColumn}>
      <Image source={require('../imagenes/Order.png')} style={[styles.icon, { tintColor: '#036635' }]} />
      <Text style={styles.iconLabel}>ORDER</Text>
    </View>
    <View style={styles.iconColumn}>
      <Image source={require('../imagenes/Activity.png')} style={[styles.icon, { tintColor: '#036635' }]} />
      <Text style={styles.iconLabel}>ACTIVITY</Text>
    </View>
    <View style={styles.iconColumn}>
      <Image source={require('../imagenes/store.png')} style={[styles.icon, { tintColor: '#036635' }]} />
      <Text style={styles.iconLabel}>STORE</Text>
    </View>
    <View style={styles.iconColumn}>
      <Image source={require('../imagenes/ecode.png')} style={[styles.icon, { tintColor: '#036635' }]} />
      <Text style={styles.iconLabel}>E-CODE</Text>
    </View>
  </View>
</View>

        </View>
      </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#036635',
  },
  upperContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  notificationIcon: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },
  starbucksText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  drawerIcon: {
    width: 24,
    height: 24,
    tintColor: 'white',
  },
  greetingContainer: {
    flexDirection: 'column',
    marginBottom: 20,
  },
  greetingText: {
    color: 'white',
    fontSize: 24,
    marginBottom: 5,
  },
  userName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileImageContainer: {
    position: 'absolute',
    top: 70,
    right: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  cofeeImage: {
    width: '100%',  // Mostrar la imagen completa
    height: 200,
    borderRadius: 45,
  },
  bottomContainer: {
    flex: 1.2,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 10,
    alignItems: 'center',  // Centra la imagen horizontalmente
  },
  bottomText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomImage: {
    width: '100%',
    height: 60,  // Ajusta la altura según sea necesario
    resizeMode: 'contain',  // Ajusta el modo de redimensionamiento según sea necesario
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: -5,
  },
  cardBalanceContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#D8A11C',  // Cambiado a color dorado (#D8A11C)
    padding: 10,
    borderRadius: 10,  // Con bordes redondeados
  },
  amountContainer: {
    flex: 0.8,
    backgroundColor: 'green',
    borderRadius: 10,
    padding: 10,
    marginLeft: 10,
  },
  cardBalanceText: {
    color: 'black',
    fontWeight: 'bold',
  },
  amountText: {
    color: 'white',
    fontWeight: 'bold',
  },
  smallImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  smallImage: {
    width: 115,  // Aumento del ancho
    height: 80,  // Aumento de la altura
    resizeMode: 'contain',
    borderRadius: 10,  // Con bordes redondeados
  },
  circleImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  circle: {
    alignItems: 'center',
  },
  circleImage: {
    width: 80,  // Ajusta el tamaño de la imagen
    height: 80,  // Ajusta el tamaño de la imagen
    borderRadius: 40,  // Aumenta el radio
    overflow: 'hidden',
    resizeMode: 'contain',
  },
  circleLabel: {
    color: 'gray',
    fontSize: 14,  // Aumenta el tamaño del texto
    marginTop: 5,  // Espacio entre la imagen y el texto
    textAlign: 'center',  // Alinea el texto en el centro
  },
  additionalImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  additionalImage: {
    width: 110,  // Ajusta el ancho según sea necesario
    height: 110,  // Ajusta la altura según sea necesario
    borderRadius: 10,  // Con bordes redondeados
    resizeMode: 'cover',  // Ajusta el modo de redimensionamiento según sea necesario
  },
  additionalImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
    position: 'relative',  // Agrega esta línea
  },
  
  overlayRectangle: {
    position: 'absolute',
    bottom: 25,
    left: 45,
    right: 45,
    marginTop: 50,
    height: 80,  // Ajusta la altura según lo necesario
    backgroundColor: '#FFFFFF',
    opacity: 0.9,  // Puedes ajustar la opacidad según lo necesites
    borderRadius: 30,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginTop: 10,
  },
  iconLabel: {
    color: 'gray',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  horizontalIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconColumn: {
    alignItems: 'center',
  },
});

export default Starbucks;
