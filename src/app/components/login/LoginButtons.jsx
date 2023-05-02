import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { assets } from '../../../assets/assets';
import Button from '../Button';

const LoginButtons = ({ handleLogin, navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        text="Conectare"
        color={styles.loginButton}
        onPress={handleLogin}
      />
      <Button
        text="Înapoi"
        icon={assets.backIcon}
        color={styles.backButton}
        onPress={() => navigation.goBack()}
      />
      <TouchableOpacity
        style={styles.blueBorder}
        onPress={() => navigation.navigate('UploadDocumentScreen')}>
        <Text style={styles.textBlue}>Solicitare date de acces</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: '30%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: '2%',
  },
  button: {
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loginButton: {
    backgroundColor: '#0177BF',
  },
  backButton: {
    backgroundColor: '#313C43',
  },
  textButton: {
    color: '#FFFFFF',
    fontSize: 16,
    textTransform: 'uppercase',
    marginHorizontal: '3%',
  },
  blueBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#0177BF',
  },
  textBlue: {
    color: '#0177BF',
  },
});

export default LoginButtons;
