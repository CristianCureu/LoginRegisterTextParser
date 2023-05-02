import { View, Text, StyleSheet, Pressable } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const CustomCheckBox = ({ toggleCheckBox, setToggleCheckBox, navigation }) => {
  return (
    <View style={styles.container}>
      <CheckBox
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}
      />
      <Text style={styles.text}>Sunt de acord cu</Text>
      <Pressable
        style={styles.checkTerms}
        onPress={() => navigation.navigate('TermsConditions')}>
        <Text style={[styles.text, styles.textBlue]}>
          Politica de confidențialitate
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkTerms: {
    borderBottomWidth: 1,
    borderBottomColor: '#0177BF',
    marginLeft: 6,
  },
  text: {
    fontSize: 12,
  },
  textBlue: {
    color: '#0177BF',
  },
});

export default CustomCheckBox;
