import { useEffect, useState } from 'react';
import { View, StyleSheet, Alert, Keyboard } from 'react-native';
import LoginButtons from '../components/login/LoginButtons';
import LoginForm from '../components/login/LoginForm';
import SelectBar from '../components/SelectBar';
import LoginTitle from '../components/login/LoginTitle';
import { login } from '../api/requests';

const LoginScreen = ({ navigation, route }) => {
  const { icon, text, authOptions, navigateFromPopover } = route.params;
  const [userInfo, setUserInfo] = useState({
    loginType: 1,
    user: '',
  });
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [keyboardActive, setKeyboardActive] = useState(false);

  const handleLogin = async () => {
    if (!userInfo.user.length) {
      Alert.alert(
        'Avertisment',
        'Vă rugăm să completați câmpurile obligatorii!',
        [{ text: 'OK' }],
      );
    } else if (!toggleCheckBox) {
      Alert.alert(
        'Avertisment',
        'Vă rugăm să acceptați termenii și condițiile!',
        [{ text: 'OK' }],
      );
    } else {
      try {
        const response = await login(userInfo);
        console.log(response);
        if (response.status === 0) {
          Alert.alert('Success', '', [{ text: 'OK' }]);
        } else {
          Alert.alert('Eroare', response.mesaj, [{ text: 'OK' }]);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardActive(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardActive(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <View
      style={
        authOptions === 1
          ? [styles.container, styles.spaceBetween]
          : [styles.container, styles.spaceAround]
      }>
      {authOptions === 1 ? (
        <SelectBar
          itemList={['Utilizator', 'CNP', 'CUI']}
          onChange={loginType => setUserInfo({ ...userInfo, loginType })}
        />
      ) : null}
      {!keyboardActive ? (
        <LoginTitle
          icon={icon}
          text={text}
          navigateFromPopover={navigateFromPopover}
        />
      ) : null}
      <LoginForm
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        toggleCheckBox={toggleCheckBox}
        setToggleCheckBox={setToggleCheckBox}
        navigation={navigation}
      />
      <LoginButtons handleLogin={handleLogin} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
});

export default LoginScreen;
