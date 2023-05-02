import { FlatList, StyleSheet, Text, View } from 'react-native';
import HomeCard from '../components/HomeCard';
import { useContext } from 'react';
import ConfigContext from '../context/ConfigContext';

const HomeScreen = ({ navigation }) => {
  const { categories } = useContext(ConfigContext);

  return (
    <View style={styles.container}>
      {!categories.length ? (
        <Text>Nu există categorii</Text>
      ) : (
        <FlatList
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-evenly',
          }}
          data={categories}
          renderItem={({ item }) => (
            <HomeCard
              icon={item.imagine}
              text={item.denumire}
              navigation={navigation}
              authOptions={item.optiuni_autentificare}
            />
          )}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

export default HomeScreen;
