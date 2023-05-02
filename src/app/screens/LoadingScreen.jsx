import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useContext, useEffect } from 'react';
import ConfigContext from '../context/ConfigContext';
import { getConfigData } from '../api/requests';

const LoadingScreen = ({ navigation }) => {
  const { setConfigData, setCategories } = useContext(ConfigContext);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getConfigData();
        const parsedData = JSON.parse(response.categorii);
        setConfigData(response);
        setCategories(parsedData);
        navigation.navigate('HomeScreen');
      } catch (error) {
        console.log('LoadingScreen::getData::', error);
      }
    };
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Se aduc datele...</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: '2%',
  },
});
export default LoadingScreen;
