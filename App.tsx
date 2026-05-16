import { StyleSheet } from 'react-native';
import HomeScreen from './src/screens/Home/HomeScreen';
import UserScreen from './src/screens/User/UserScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined
  User: { 
    username: String,
    age: String,
    gender: String,
    birthDate: String
  }
}

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="User" component={UserScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
