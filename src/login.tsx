import { VStack, Image, Text, Box, Link } from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import { Botao } from './componentes/botao';
import { EntradaDeTexto } from './componentes/entradaDeTexto';
import { Titulo } from './componentes/Titulo';

export default function Login({navigation}) {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />

      <Titulo>
        Faça login em sua conta
      </Titulo>
      <Box>
        <EntradaDeTexto
          label="Email"
          placeholder="Insira seu endereço de e-mail"
        />
        <EntradaDeTexto
          label="Senha"
          placeholder="Insira sua senha"
        />
      </Box>
      <Botao onPress={() =>navigation.navigate('Tabs')}>Entrar</Botao>

      <Link href='https://www.alura.com.br' mt={2}>
        Esqueceu sua senha?
      </Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity onPress={() =>navigation.navigate('Cadastro')}>
          <Text color="blue.500">
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}