import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ConfigProvider } from './src/app/context/ConfigContext';
import { RegisterProvider } from './src/app/context/RegisterContext';
import Header from './src/app/components/Header';
import LoginScreen from './src/app/screens/LoginScreen';
import TermsConditions from './src/app/screens/TermsConditions';
import HomeScreen from './src/app/screens/HomeScreen';
import LoadingScreen from './src/app/screens/LoadingScreen';
import UploadDocumentScreen from './src/app/screens/Register/UploadDocumentScreen';
import VerifyDocumentScreen from './src/app/screens/Register/VerifyDocumentScreen';
import RegisterScreen from './src/app/screens/Register/RegisterScreen';
import UploadSelfieScreen from './src/app/screens/Register/UploadSelfieScreen';
import ErrorVerifyDocumentScreen from './src/app/screens/Errors/ErrorVerifyDocumentScreen';
import ErrorConnectionScreen from './src/app/screens/Errors/ErrorConnectionScreen';
import ErrorSystemScreen from './src/app/screens/Errors/ErrorSystemScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ConfigProvider>
      <RegisterProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="LoadingScreen"
              component={LoadingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={({ navigation }) => ({
                header: () => <Header navigation={navigation} />,
              })}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={({ navigation }) => ({
                header: () => <Header navigation={navigation} />,
              })}
            />
            <Stack.Screen
              name="TermsConditionsScreen"
              component={TermsConditions}
              options={{ headerTitle: 'Termeni și Condiții' }}
            />
            <Stack.Group>
              <Stack.Screen
                name="UploadDocumentScreen"
                component={UploadDocumentScreen}
                options={({ navigation }) => ({
                  header: () => <Header navigation={navigation} />,
                })}
              />
              <Stack.Screen
                name="UploadSelfieScreen"
                component={UploadSelfieScreen}
                options={({ navigation }) => ({
                  header: () => <Header navigation={navigation} />,
                })}
              />
              <Stack.Screen
                name="VerifyDocumentScreen"
                component={VerifyDocumentScreen}
                options={({ navigation }) => ({
                  header: () => <Header navigation={navigation} />,
                })}
              />
              <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
                options={({ navigation }) => ({
                  header: () => <Header navigation={navigation} />,
                })}
              />
            </Stack.Group>
            <Stack.Group>
              <Stack.Screen
                name="ErrorVerifyDocumentScreen"
                component={ErrorVerifyDocumentScreen}
                options={({ navigation }) => ({
                  header: () => <Header navigation={navigation} />,
                })}
              />
              <Stack.Screen
                name="ErrorConnectionScreen"
                component={ErrorConnectionScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ErrorSystemScreen"
                component={ErrorSystemScreen}
                options={{ headerShown: false }}
              />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </RegisterProvider>
    </ConfigProvider>
  );
};

export default App;
