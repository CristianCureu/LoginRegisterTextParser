import { StyleSheet, Text, View, Image } from 'react-native';
import { errorScreenStyle, registerScreenStyle } from '../../constants/styles';
import { images } from '../../../assets/assets';

const ErrorConnectionScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={images.connectionErrorImage} />
      <Text style={styles.fontRed}>Nu există conexiune la internet!</Text>
      <Text style={styles.fontLight}>
        Aveți nevoie de internet pentru utilizarea aplicației. Vă rugăm să vă
        asigurați conexiunea iar apoi sa reveniți în aplicație.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create(errorScreenStyle);

export default ErrorConnectionScreen;
