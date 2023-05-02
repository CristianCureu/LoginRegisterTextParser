import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import { useContext, useState } from 'react';
import PopOver from './PopOver';
import ConfigContext from '../context/ConfigContext';
import { assets } from '../../assets/assets';

const Header = ({ navigation }) => {
  const { configData } = useContext(ConfigContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => setIsOpen(false)}>
      <View style={styles.container}>
        {configData.urlSigla ? (
          <Image
            style={styles.image}
            source={{
              uri: configData.urlSigla,
            }}
          />
        ) : null}
        <View style={styles.titleContainer}>
          <Text style={styles.fontLight}>{configData.denumireAplicatie}</Text>
          <Text style={styles.fontBold}>{configData.numeInstitutie}</Text>
        </View>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => setIsOpen(!isOpen)}>
          <Image
            style={{ resizeMode: 'contain' }}
            source={isOpen ? assets.closeIcon : assets.kebabIcon}
          />
        </TouchableOpacity>
        {isOpen ? (
          <PopOver
            navigation={navigation}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: 70,
  },
  image: {
    width: '15%',
    height: '70%',
    resizeMode: 'contain',
  },
  icon: {
    width: '10%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    height: '70%',
    width: '40%',
    justifyContent: 'space-around',
  },
  fontBold: {
    fontWeight: '500',
  },
  fontLight: {
    fontWeight: '300',
  },
});

export default Header;
