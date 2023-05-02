import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Button = ({ text, icon = null, onPress, color }) => {
  return (
    <TouchableOpacity style={[styles.button, color]} onPress={onPress}>
      {icon ? <Image source={icon} /> : null}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    textTransform: 'uppercase',
    marginHorizontal: '3%',
  },
});

export default Button;
