import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const pickImage = async type => {
  let result;
  if (type === 'camera') {
    result = await launchCamera({
      mediaType: 'photo',
      includeBase64: true,
    });
  } else {
    result = await launchImageLibrary({
      mediaType: 'photo',
      includeBase64: true,
    });
  }
  if (!result.didCancel) {
    return result;
  }
};

export default pickImage;
