import { Image, StyleSheet, Text, View } from 'react-native';
import { registerScreenStyle } from '../../constants/styles';
import { assets, images } from '../../../assets/assets';
import Button from '../../components/Button';

const ErrorVerifyDocumentScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={images.errorImage} />
      <Text style={[styles.text, styles.fontRed]}>
        Verificarea documentului a întâmpinat o eroare.
      </Text>
      <Text style={styles.text}>
        Te rugăm să te asiguri că datele încărcate sunt corecte și să încerci
        din nou.
      </Text>
      <View style={styles.buttons}>
        <Button text="Încearcă din nou" color={styles.errorButton} />
        <Button
          text="Înapoi"
          icon={assets.backIcon}
          color={styles.backButton}
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create(registerScreenStyle);

export default ErrorVerifyDocumentScreen;
