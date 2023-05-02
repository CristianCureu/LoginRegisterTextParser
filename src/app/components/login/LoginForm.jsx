import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomInput from '../CustomInput';
import CustomCheckBox from '../CustomCheckBox';
import { assets } from '../../../assets/assets';
import { checkEmail, checkPassword } from '../../constants/validations';

const LoginForm = ({
  userInfo,
  setUserInfo,
  toggleCheckBox,
  setToggleCheckBox,
  navigation,
}) => {
  const [hidden, setHidden] = useState(true);
  const [isTouched, setIsTouched] = useState({ user: false, password: false });
  const [error, setError] = useState({ user: '', password: '' });

  useEffect(() => {
    if (isTouched.user) {
      const validEmail = checkEmail(userInfo.user);
      if (!validEmail) {
        setError({ ...error, user: 'Câmpul UTILIZATOR este invalid!' });
      } else {
        setError({ ...error, user: '' });
      }
    }
  }, [isTouched.user, userInfo.user]);

  useEffect(() => {
    if (isTouched.password) {
      const validPassword = checkPassword(userInfo.password);
      if (!validPassword) {
        setError({ ...error, password: 'Câmpul PAROLĂ este invalid!' });
      } else {
        setError({ ...error, password: '' });
      }
    }
  }, [isTouched.password, userInfo.password]);

  return (
    <View style={styles.container}>
      {userInfo.loginType === 1 ? (
        <CustomInput
          placeholder="Utilizator"
          value={userInfo.user}
          onChangeText={user => setUserInfo({ ...userInfo, user })}
          leftImage={assets.emailIcon}
          onBlur={() => setIsTouched({ ...isTouched, user: true })}
          errorMessage={error.user}
        />
      ) : (
        <View>
          {userInfo.loginType === 2 ? (
            <CustomInput
              placeholder="CNP"
              keyboardType="numeric"
              value={userInfo.user}
              onChangeText={user => setUserInfo({ ...userInfo, user })}
              leftImage={assets.hashtagIcon}
            />
          ) : (
            <CustomInput
              placeholder="CUI"
              keyboardType="numeric"
              value={userInfo.user}
              onChangeText={user => setUserInfo({ ...userInfo, user })}
              leftImage={assets.hashtagIcon}
            />
          )}
        </View>
      )}
      <CustomInput
        placeholder={
          userInfo.loginType === 1 ? 'Parolă' : 'Parolă (nu este obligatorie)'
        }
        value={userInfo.password}
        onChangeText={password => setUserInfo({ ...userInfo, password })}
        leftImage={assets.passwordIcon}
        rightImage={assets.visibilityIcon}
        secureTextEntry={hidden}
        onPressRight={() => setHidden(!hidden)}
        onBlur={() => setIsTouched({ ...isTouched, password: true })}
        errorMessage={error.password}
      />
      <CustomCheckBox
        toggleCheckBox={toggleCheckBox}
        setToggleCheckBox={setToggleCheckBox}
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '85%',
    alignItems: 'center',
  },
});

export default LoginForm;
