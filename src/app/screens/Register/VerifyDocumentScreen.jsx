import { useState, useContext, useEffect } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { assets } from '../../../assets/assets';
import { verifyDocument } from '../../api/requests';
import ConfigContext from '../../context/ConfigContext';
import CustomInput from '../../components/CustomInput';
import SelectBar from '../../components/SelectBar';
import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown';
import DateInput from '../../components/DateInput';
import RegisterContext from '../../context/RegisterContext';

const VerifyDocumentScreen = ({ navigation }) => {
  const { configData } = useContext(ConfigContext);
  const { parsedIdentityData } = useContext(RegisterContext);
  const [dropdownData, setDropdownData] = useState([]);
  const [documentData, setDocumentData] = useState({
    uniqueNumber: '',
    entityType: 1,
    documentType: '',
    documentNumber: '',
    documentDate: '',
  });

  const handleSubmit = async () => {
    try {
      const response = await verifyDocument(documentData);
      if (response.status === 0) {
        navigation.navigate('RegisterScreen');
      } else {
        Alert.alert('Eroare', response.mesaj, [{ text: 'OK' }]);
      }
    } catch (error) {
      console.log('VerifyDocumentScreen::handleSubmit::', error);
    }
  };

  useEffect(() => {
    const parsedConfigData = JSON.parse(configData.tip_document);
    setDropdownData(parsedConfigData);
  }, []);

  return (
    <View style={styles.container}>
      <SelectBar
        itemList={['Persoană fizică', 'Persoană juridică']}
        onChange={entityType =>
          setDocumentData({ ...documentData, entityType })
        }
      />
      <View style={styles.inputs}>
        <Dropdown
          data={dropdownData}
          icon={assets.documentIcon}
          onChange={documentType =>
            setDocumentData({ ...documentData, documentType })
          }
        />
        <CustomInput
          placeholder={documentData.entityType === 1 ? 'CNP' : 'CUI'}
          leftImage={assets.hashtagIcon}
          keyboardType="phone-pad"
          defaultValue={
            documentData.entityType === 1 ? parsedIdentityData.uniqueNumber : ''
          }
          onChangeText={uniqueNumber =>
            setDocumentData({ ...documentData, uniqueNumber })
          }
        />
        <CustomInput
          placeholder="Număr"
          leftImage={assets.hashtagIcon}
          keyboardType="phone-pad"
          value={documentData.documentNumber}
          onChangeText={documentNumber =>
            setDocumentData({ ...documentData, documentNumber })
          }
        />
        <DateInput
          onChange={documentDate =>
            setDocumentData({ ...documentData, documentDate })
          }
        />
      </View>
      <View style={styles.buttons}>
        <Button
          text="Verifică document"
          color={styles.loginButton}
          onPress={handleSubmit}
        />
        <Button
          text="Înapoi"
          icon={assets.backIcon}
          color={styles.backButton}
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputs: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '85%',
  },
  buttons: {
    width: '80%',
    height: '25%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#0177BF',
  },
  backButton: {
    backgroundColor: '#313C43',
  },
});

export default VerifyDocumentScreen;
