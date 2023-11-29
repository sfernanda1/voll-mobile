
import { NativeBaseProvider, StatusBar } from 'native-base';
import { TEMAS } from './src/estilos/tema';
import Cadastro from './src/cadastro';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]}/>
         <Cadastro />
    </ NativeBaseProvider>
  );
}

