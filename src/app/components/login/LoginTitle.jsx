import { View, Text, StyleSheet, Image } from 'react-native';

const LoginTitle = ({ icon, text, navigateFromPopover }) => {
  if (navigateFromPopover) {
    return (
      <View>
        <Text style={styles.title}>Autentificare</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {icon ? <Image style={styles.image} source={{ uri: icon }} /> : null}
      <Text style={styles.title}>PLATA ELECTRONICĂ - {text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '85%',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LoginTitle;
