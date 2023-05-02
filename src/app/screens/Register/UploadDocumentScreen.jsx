import { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import callGoogleVisionAsync from '../../api/googleRequests';
import Button from '../../components/Button';
import { assets, images } from '../../../assets/assets';
import parseIdentity from '../../constants/parser';
import RegisterContext from '../../context/RegisterContext';
import pickImage from '../../constants/pickImage';
import { registerScreenStyle } from '../../constants/styles';

const UploadDocumentScreen = ({ navigation }) => {
  const { setParsedIdentityData, registerData, setRegisterData } =
    useContext(RegisterContext);
  const [loading, setLoading] = useState(false);

  const uploadImage = async type => {
    const result = await pickImage(type);
    if (result) {
      try {
        const photoBase64 = result.assets[0].base64;
        const photoIdentityCard = 'data:image/jpeg;base64,' + photoBase64;
        setRegisterData({
          ...registerData,
          photoIdentityCard,
        });
        setLoading(true);
        const responseData = await callGoogleVisionAsync(photoBase64);
        const parsedText = parseIdentity(responseData?.text);
        setParsedIdentityData(parsedText);
        navigation.navigate('UploadSelfieScreen');
        setLoading(false);
      } catch (error) {
        console.log(
          'UploadDocumentScreen::pickImage::callGoogleVisionAsync::',
          error,
        );
      }
    }
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={images.ciImage} />
      <Text style={styles.text}>
        Pentru siguranța ta, avem nevoie de o imagine cu cartea ta de
        identitate.
      </Text>
      <View style={styles.buttons}>
        <Button
          text="Încarcă imagine"
          color={styles.loginButton}
          onPress={() =>
            Alert.alert(
              'Alege sursa',
              '',
              [
                {
                  text: 'Camera',
                  onPress: () => uploadImage('camera'),
                },
                {
                  text: 'Galerie',
                  onPress: () => uploadImage('gallery'),
                },
              ],
              {
                cancelable: true,
              },
            )
          }
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
  ...registerScreenStyle,
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UploadDocumentScreen;
