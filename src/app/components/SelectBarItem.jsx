import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const SelectBarItem = ({ text, onPress, isActive }) => {
  return (
    <TouchableOpacity
      style={isActive ? [styles.item, styles.active] : styles.item}
      onPress={onPress}>
      <Text style={isActive ? [styles.text, styles.textActive] : styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
  },
  text: {
    fontSize: 14,
  },
  active: {
    borderBottomWidth: 4,
    borderBottomColor: '#313C43',
  },
  textActive: {
    fontSize: 18,
  },
});

export default SelectBarItem;
