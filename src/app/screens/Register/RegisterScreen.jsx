import { useState, useContext } from 'react';
import { StyleSheet, ScrollView, View, Alert } from 'react-native';
import { assets } from '../../../assets/assets';
import CustomInput from '../../components/CustomInput';
import CustomCheckBox from '../../components/CustomCheckBox';
import RegisterContext from '../../context/RegisterContext';
import Button from '../../components/Button';
import SelectBar from '../../components/SelectBar';
import { register } from '../../api/requests';

const RegisterScreen = ({ navigation }) => {
  const { parsedIdentityData, registerData, setRegisterData } =
    useContext(RegisterContext);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const handleRegister = async () => {
    if (!toggleCheckBox) {
      Alert.alert(
        'Avertisment',
        'Vă rugăm să acceptați termenii și condițiile!',
        [{ text: 'OK' }],
      );
    } else {
      try {
        const response = await register(registerData);
        console.log('handleRegister', response);
        if (response.status === 0) {
          Alert.alert('Success', response.message, [{ text: 'OK' }]);
        } else {
          Alert.alert('Eroare', response.message, [{ text: 'OK' }]);
        }
      } catch (error) {
        console.log('RegisterScreen::handleRegister::', error);
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SelectBar
        itemList={['Persoană fizică', 'Persoană juridică']}
        onChange={entityType =>
          setDocumentData({ ...documentData, entityType })
        }
      />
      <View style={styles.inputs}>
        <CustomInput
          placeholder="Email"
          leftImage={assets.emailIcon}
          onChangeText={email => setRegisterData({ ...registerData, email })}
        />
        <CustomInput
          placeholder="Prenume"
          leftImage={assets.userIcon}
          defaultValue={
            parsedIdentityData.middleName
              ? `${parsedIdentityData.firstName} - ${parsedIdentityData.middleName}`
              : parsedIdentityData.firstName
          }
          onChangeText={firstName =>
            setRegisterData({ ...registerData, firstName })
          }
        />
        <CustomInput
          placeholder="Nume"
          leftImage={assets.userIcon}
          defaultValue={parsedIdentityData.lastName}
          onChangeText={lastName =>
            setRegisterData({ ...registerData, lastName })
          }
        />
        <CustomInput
          placeholder="CNP"
          leftImage={assets.hashtagIcon}
          keyboardType="phone-pad"
          defaultValue={parsedIdentityData.uniqueNumber}
          onChangeText={uniqueNumber =>
            setRegisterData({ ...registerData, uniqueNumber })
          }
        />
        <View>
          <CustomInput
            placeholder="Serie"
            leftImage={assets.hashtagIcon}
            defaultValue={parsedIdentityData.cardSeries}
            onChangeText={cardSeries =>
              setRegisterData({ ...registerData, cardSeries })
            }
          />
          <CustomInput
            placeholder="Număr"
            leftImage={assets.hashtagIcon}
            keyboardType="phone-pad"
            defaultValue={parsedIdentityData.cardNo}
            onChangeText={cardNo =>
              setRegisterData({ ...registerData, cardNo })
            }
          />
        </View>
        <CustomInput
          placeholder="Eliberat de"
          leftImage={assets.institutionIcon}
          onChangeText={issuedBy =>
            setRegisterData({ ...registerData, issuedBy })
          }
        />
        <CustomInput
          placeholder="Telefon"
          leftImage={assets.phoneIcon}
          keyboardType="phone-pad"
          onChangeText={phone => setRegisterData({ ...registerData, phone })}
        />
        <CustomInput
          placeholder="Județ"
          leftImage={assets.locationIcon}
          onChangeText={county => setRegisterData({ ...registerData, county })}
        />
        <CustomInput
          placeholder="Localitate"
          leftImage={assets.locationIcon}
          onChangeText={city => setRegisterData({ ...registerData, city })}
        />
        <CustomInput
          placeholder="Stradă"
          leftImage={assets.locationIcon}
          onChangeText={streetName =>
            setRegisterData({ ...registerData, streetName })
          }
        />
        <View>
          <CustomInput
            placeholder="Cod poștal"
            leftImage={assets.hashtagIcon}
            onChangeText={postCode =>
              setRegisterData({ ...registerData, postCode })
            }
          />
          <CustomInput
            placeholder="Număr stradă"
            leftImage={assets.hashtagIcon}
            onChangeText={streetNo =>
              setRegisterData({ ...registerData, streetNo })
            }
          />
        </View>
        <CustomInput
          placeholder="Bloc, scară, apartament"
          leftImage={assets.hashtagIcon}
          onChangeText={building =>
            setRegisterData({ ...registerData, building })
          }
        />
        <CustomInput
          placeholder="Scară"
          leftImage={assets.hashtagIcon}
          onChangeText={entrance =>
            setRegisterData({ ...registerData, entrance })
          }
        />
        <CustomInput
          placeholder="Apartament"
          leftImage={assets.hashtagIcon}
          onChangeText={flat => setRegisterData({ ...registerData, flat })}
        />
        <CustomCheckBox
          toggleCheckBox={toggleCheckBox}
          setToggleCheckBox={setToggleCheckBox}
        />
      </View>
      <View style={styles.buttons}>
        <Button
          text="Continuă"
          color={styles.loginButton}
          onPress={() => handleRegister()}
        />
        <Button
          text="Înapoi"
          icon={assets.backIcon}
          color={styles.backButton}
          onPress={() => navigation.goBack()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  inputs: {
    alignItems: 'center',
    width: '85%',
  },
  buttons: {
    width: '80%',
    marginTop: '6%',
  },
  loginButton: {
    backgroundColor: '#0177BF',
    marginVertical: '4%',
  },
  backButton: {
    backgroundColor: '#313C43',
    marginVertical: '4%',
  },
});

export default RegisterScreen;
