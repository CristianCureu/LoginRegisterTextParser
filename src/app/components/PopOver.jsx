import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { assets } from '../../assets/assets';

const PopOver = ({ navigation, setIsOpen }) => {
  const navigate = screen => {
    navigation.navigate(screen, { navigateFromPopover: true });
    setIsOpen(false);
  };
  return (
    <View style={[styles.popover, styles.shadowProp, styles.elevation]}>
      <TouchableOpacity style={styles.popoverItem}>
        <Image source={assets.infoIcon} />
        <Text style={styles.popoverText}>Informații aplicație</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.popoverItem}
        onPress={() => navigate('HomeScreen')}>
        <Image source={assets.typeIcon} />
        <Text style={styles.popoverText}>Alege tip de plată</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.popoverItem}
        onPress={() => navigate('LoginScreen')}>
        <Image source={assets.loginIcon} />
        <Text style={styles.popoverText}>Logare</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  popover: {
    position: 'absolute',
    right: '5%',
    top: '100%',
    height: '180%',
    width: '50%',
    backgroundColor: 'white',
  },
  popoverItem: {
    height: '33%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '10%',
  },
  popoverText: {
    marginLeft: '8%',
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  elevation: {
    elevation: 14,
    shadowColor: '#000',
  },
});

export default PopOver;
