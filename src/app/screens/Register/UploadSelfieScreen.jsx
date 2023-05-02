import { useContext } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { assets, images } from '../../../assets/assets';
import { registerScreenStyle } from '../../constants/styles';
import RegisterContext from '../../context/RegisterContext';
import pickImage from '../../constants/pickImage';
import Button from '../../components/Button';

const UploadSelfieScreen = ({ navigation }) => {
  const { registerData, setRegisterData } = useContext(RegisterContext);

  const uploadImage = async type => {
    const result = await pickImage(type);
    if (result) {
      const photoBase64 = result.assets[0].base64;
      const photoCitizen = 'data:image/jpeg;base64,' + photoBase64;
      setRegisterData({ ...registerData, photoCitizen });
      navigation.navigate('VerifyDocumentScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={images.selfieImage} />
      <Text style={styles.text}>
        Pentru siguranța ta, avem nevoie de o imagine cu cartea ta de
        identitate.
      </Text>
      <View style={styles.buttons}>
        <Button
          text="Fă poză"
          color={styles.loginButton}
          onPress={() => uploadImage('camera')}
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

const styles = StyleSheet.create(registerScreenStyle);

export default UploadSelfieScreen;
