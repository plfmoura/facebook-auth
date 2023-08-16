import { StatusBar } from 'expo-status-bar';
import LoginContext from './src/contexts/LoginContext';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      <LoginContext>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </LoginContext>
    </>
  );
}

