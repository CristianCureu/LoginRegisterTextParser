import { StyleSheet, Image, Text, Pressable } from 'react-native';

const HomeCard = ({ navigation, icon, text = 'test', authOptions }) => {
  const handleAuthType = authOptions => {
    if (authOptions === 0) {
      console.log('Autentificare fara date');
    } else {
      navigation.navigate('LoginScreen', { icon, text, authOptions });
    }
  };

  return (
    <Pressable
      style={styles.container}
      onPress={() => handleAuthType(authOptions)}>
      {icon ? <Image style={styles.image} source={{ uri: icon }} /> : null}
      <Text>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginHorizontal: '12%',
    padding: '10%',
  },

  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
});

export default HomeCard;
