import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from "native-base"
import { TouchableOpacity } from "react-native/Libraries/Components/Touchable/TouchableOpacity";
import Logo from "./assets/Logo.svg"
import { Titulo } from "./componentes/Titulo";

export default function Login() {
  return (
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">
      <Image source={Logo} alt="Logo" />
      <Titulo> Faça login em sua conta </Titulo>
      <Box>
        <FormControl mt={3}>
          <FormControl.Label>Email</FormControl.Label>
          <Input placeholder="Insira seu email" size="lg" w="100%" borderRadius="lg" bgColor="gray.100" shadow={3}/>
        </FormControl>
      </Box>
      <Button w="100%" bg="blue.800" mt={10} borderRadius="lg">
        Entrar
      </Button>
      <Link href="" mt={2}>
        Esqueceu sua senha
      </Link>
      <Box flexDirection="row" justifyContent="center" w="100%" mt={8}>
        <Text>Ainda não tem cadastro</Text>
        <TouchableOpacity>
          <Text color="blue.500">
            Faça seu cadastro
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
