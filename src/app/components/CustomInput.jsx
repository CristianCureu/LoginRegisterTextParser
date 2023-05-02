import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Input } from '@rneui/themed';

const CustomInput = ({
  keyboardType,
  placeholder,
  value,
  onChangeText,
  label,
  leftImage,
  rightImage,
  secureTextEntry,
  onPressRight,
  defaultValue,
  onPress,
  onFocus,
  onBlur,
  errorMessage,
  required,
  disabled,
}) => {
  return (
    <Input
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      defaultValue={defaultValue}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      autoCapitalize="none"
      autoCorrect={false}
      label={label}
      labelStyle={styles.inputLabel}
      inputStyle={styles.input}
      containerStyle={styles.containerStyle}
      inputContainerStyle={styles.inputContainer}
      leftIcon={<Image source={leftImage} style={styles.icon} />}
      rightIcon={
        rightImage ? (
          <TouchableOpacity onPress={onPressRight}>
            <Image source={rightImage} />
          </TouchableOpacity>
        ) : required ? (
          <Text style={styles.requiredStar}> * </Text>
        ) : null
      }
      onPress={onPress}
      onFocus={onFocus}
      onBlur={onBlur}
      errorMessage={errorMessage}
      disabled={disabled}
    />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: '#A6B4BC',
    backgroundColor: 'transparent',
    marginTop: '4%',
    paddingHorizontal: '3%',
    width: '100%',
  },
  input: {
    fontSize: 14,
    color: '#273238',
    marginHorizontal: '2%',
  },
  requiredStar: {
    color: 'red',
  },
});

export default CustomInput;
