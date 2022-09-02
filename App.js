import 'react-native-gesture-handler';
import { Tabs } from './app/config/router'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}