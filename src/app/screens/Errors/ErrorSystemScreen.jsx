import { StyleSheet, Text, View, Image } from 'react-native';
import { errorScreenStyle } from '../../constants/styles';
import { images } from '../../../assets/assets';

const ErrorSystemScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={images.systemUnavailableImage} />
      <Text style={styles.fontRed}>
        Ne pare rău, sistemul este momentan indisponibil!
      </Text>
      <Text style={styles.fontLight}>
        Lucrăm pentru a rezolva cât mai repede problemele tehnice apărute. Vă
        rugăm să reveniți mai târziu.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create(errorScreenStyle);

export default ErrorSystemScreen;
