import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base/lib/typescript/core';
import { TEMAS } from './src/estilos/tema';
import Login from './src/login';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]}/>
         <Login />
    </ NativeBaseProvider>
  );
}

